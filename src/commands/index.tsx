import React from "react"
import { Text } from "ink"
import { Spinner, StatusMessage } from "@inkjs/ui"
import zod from "zod"
import fs from "fs"
import { convertCodeToAST } from "../codeToAST.js"
import { convertASTtoCSS } from "../ASTtoCSS.js"
import { convertCSStoTailwind } from "../CSStoTailwind/converter.js"
import _ from "lodash"
import fg from "fast-glob"

export const args = zod.tuple([zod.string()])

type Props = {
  args: zod.infer<typeof args>
}

interface FileToConvert {
  processingTime: number
  componentsNumber: number
  fileName: string
  isConverting: boolean
  isProcessingFile: boolean
  error: string | null
}

export default function Index({ args }: Props) {
  const [filesToConvert, setFilesToConvert] = React.useState<Record<string, FileToConvert>>({})

  const filePattern = args[0]

  React.useEffect(() => {
    function stripDollarCurlyBraces(input: string) {
      return input.replace(/\$\{([^}]*)\}/g, "$1")
    }

    function normalizeString(input) {
      return input.replace(/;/g, "")
    }

    const allFiles = fg.sync(filePattern)

    for (const fileIndex in allFiles) {
      const file = allFiles[fileIndex]
      try {
        const timeStart = Date.now()

        let fileContent = fs.readFileSync(file, "utf-8")
        const testFileContent = stripDollarCurlyBraces(fileContent)

        _.delay(
          () =>
            setFilesToConvert((prev) => ({
              ...prev,
              [file]: { ...prev[file], isProcessingFile: false, fileName: file },
            })),
          1000
        )
        setFilesToConvert((prev) => ({ ...prev, [file]: { ...prev[file], isConverting: true } }))

        const ast = convertCodeToAST(testFileContent)
        const styledComponents = convertASTtoCSS(ast)
        const tailwind = convertCSStoTailwind(styledComponents)

        const tailwindOutput = []

        tailwind.forEach(({ tailwindTag }) => {
          tailwindTag.forEach(({ tag, usage }) => {
            tailwindOutput.push(tag)
            fileContent = fileContent.replace(
              normalizeString(usage),
              `\n<<<<<<< HEAD\n${usage}\n=======\n${tag}\n>>>>>>> Tailwind\n`
            )
          })
        })

        const timeEnd = Date.now()

        _.delay(
          () =>
            setFilesToConvert((prev) => ({
              ...prev,
              [file]: {
                ...prev[file],
                isProcessingFile: false,
                processingTime: timeEnd - timeStart,
                componentsNumber: tailwindOutput.length,
                isConverting: false,
              },
            })),
          2000
        )
      } catch (e) {
        if (e instanceof Error) {
          setFilesToConvert((prev) => ({
            ...prev,
            [file]: {
              ...prev[file],
              error: e.message,
            },
          }))
          return
        }

        setFilesToConvert((prev) => ({
          ...prev,
          [file]: {
            ...prev[file],
            error: "An error has occurred",
          },
        }))
      }
    }
  }, [])

  // fs.writeFileSync(filePath, fileContent)
  return Object.entries(filesToConvert).map(([key, singleFile]) => {
    if (singleFile.isProcessingFile) {
      return <Spinner key={key} label="Processing input..." />
    }

    if (singleFile.error) {
      return (
        <StatusMessage key={key} variant="error">
          <Text color="red">{singleFile.error}</Text>
        </StatusMessage>
      )
    }

    if (singleFile.isConverting) {
      return <Spinner key={key} label="Converting..." />
    }

    return (
      <React.Fragment key={key}>
        <StatusMessage variant="success">
          <Text>
            Converted{" "}
            <Text color="green" dimColor>
              {singleFile.componentsNumber}
            </Text>{" "}
            components in{" "}
            <Text color="green" dimColor>
              {singleFile.processingTime}ms
            </Text>
          </Text>
        </StatusMessage>
      </React.Fragment>
    )
  })
}
