#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Dario Emerson /'),
  'handle': chalk.cyan('dedo1911'),
  'work': chalk.white('Co-Founder @ CloudPhoenix Srl'),
  'workLink': chalk.cyan('cloudphoenix.it'),
  'job': chalk.white('Full-stack Developer'),
  'skills': chalk.white('Go, Node, React, C# and many more!'),
  'github': chalk.cyan('github.com/dedo1911'),
  'linkedin': chalk.cyan('linkedin.com/in/dedo1911'),
  'web': chalk.cyan('dedo1911.xyz'),
  'npx': chalk.white('npx dedo1911'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelSkills': chalk.white.bold('    Skills:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

const output = `
${data.name} ${data.handle}\n
${data.labelWork}  ${data.work}
             ${data.workLink}\n
${data.labelSkills}  ${data.skills}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelWeb}  ${data.web}
${data.labelCard}  ${data.npx}
`

console.log(chalk.green(boxen(output, options)))