/* eslint-disable no-prototype-builtins */
import _ from "lodash"

function stripWhitespace(str) {
  return str.replace(/\s+/g, "")
}

function normalizeValue(value) {
  if (typeof value === "string") {
    return stripWhitespace(value)
  } else if (Array.isArray(value)) {
    return value.map(normalizeValue)
  } else if (typeof value === "object" && value !== null) {
    const newValue = {}
    for (const key in value) {
      newValue[key] = normalizeValue(value[key])
    }
    return newValue
  } else {
    return value
  }
}

export function findPropertyByValue(object, propertyName, value) {
  const normalizedValue = normalizeValue(value)

  if (object.hasOwnProperty(propertyName) && _.isEqual(normalizeValue(object[propertyName]), normalizedValue)) {
    return object
  }

  for (let prop in object) {
    if (object[prop] && typeof object[prop] === "object") {
      let result = findPropertyByValue(object[prop], propertyName, value)
      if (result) {
        return result
      }
    }
  }

  return undefined
}
