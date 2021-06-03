#!/usr/bin/env node

//
// This script takes an exercise folder as a template and creates
// a new exercise folder from it renaming all files (+file content) accordingly.
//
// Example Usage:
// ./scripts/createExercise.js src/exercises/01-Query-Renderer/ src/exercises/02-New-Exercise
//

const { execSync } = require("child_process")
const fs = require("fs")
const { exit } = require("node:process")
const { join } = require("path")
const path = require("path")

const getFileBase = folder => path.parse(folder).base

const renameFileContent = (file, search, replace) => {
  const data = fs.readFileSync(file, "utf8")

  const result = data.replace(new RegExp(search, "g"), replace)

  fs.writeFileSync(file, result, "utf8")
}

const rename = (directory, oldNumber, newNumber) => {
  const files = fs.readdirSync(directory)

  files.forEach(file => {
    const filePath = join(directory, file)
    const newFilePath = join(directory, file.replace(oldNumber, newNumber))

    if (fs.lstatSync(filePath).isDirectory()) {
      // don't rename inside of docs folder
      if (filePath.endsWith("docs")) return
      // rename recursively
      rename(filePath, oldNumber, newNumber)
    } else {
      // rename file content
      ;["Exercise", "Artist"].forEach(prefix => {
        renameFileContent(filePath, `${prefix}${oldNumber}`, `${prefix}${newNumber}`)
      })

      renameFileContent(
        filePath,
        `exercise-${parseInt(oldNumber)}`,
        `exercise-${parseInt(newNumber)}`,
      )
      renameFileContent(
        filePath,
        `Exercise ${parseInt(oldNumber)}`,
        `Exercise ${parseInt(newNumber)}`,
      )
    }

    // rename file
    fs.renameSync(filePath, newFilePath)
  })
}

const copyAllFiles = (templateFolder, exerciseFolder) => {
  const files = fs.readdirSync(templateFolder)

  files.forEach(file => {
    const filePath = join(templateFolder, file)

    if (fs.lstatSync(filePath).isDirectory()) return

    execSync(`cp ${templateFolder}/${file} ${exerciseFolder}/${file}`)
  })
}

const createExercise = (templateFolder, exerciseFolder) => {
  execSync(`mkdir ${exerciseFolder}`)
  execSync(`mkdir ${exerciseFolder}/docs`)
  execSync(`mkdir ${exerciseFolder}/beginning`)
  execSync(`mkdir ${exerciseFolder}/completed`)

  execSync(`cp -r ${templateFolder}/beginning/README.md ${exerciseFolder}/beginning/README.md`)
  execSync(`cp -r ${templateFolder}/completed/README.md ${exerciseFolder}/completed/README.md`)

  copyAllFiles(templateFolder, exerciseFolder)

  const templateNumber = parseInt(getFileBase(templateFolder).match(/^[0-9]+/)).toString()
  const exerciseNumber = parseInt(getFileBase(exerciseFolder).match(/^[0-9]+/)).toString()

  rename(exerciseFolder, templateNumber, exerciseNumber)
}

const checkFolders = (templateFolder, exerciseFolder) => {
  if (
    !getFileBase(templateFolder).match(/^[0-9]+/) ||
    !getFileBase(exerciseFolder).match(/^[0-9]+/)
  ) {
    console.error("Exercise folders have to start with a number (e.g. 01-Query-Renderer)")
    exit(1)
  }

  if (!fs.existsSync(templateFolder)) {
    console.error(`"${templateFolder}" doesn't exist.`)
    exit(1)
  }

  if (fs.existsSync(exerciseFolder)) {
    console.error(`"${exerciseFolder}" already exists.`)
    exit(1)
  }
}

const [templateFolder, exerciseFolder] = process.argv.slice(2)

checkFolders(templateFolder, exerciseFolder)
createExercise(templateFolder, exerciseFolder)
