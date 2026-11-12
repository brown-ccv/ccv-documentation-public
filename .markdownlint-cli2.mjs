import markdownIt from "markdown-it"
import {init} from "@github/markdownlint-github"

const overriddenOptions = init({
  "default": false,

  // GitHub's Custom Rules
  "GH001": true, // No default alt text
  "GH002": true, // No generic link text
  "GH003": true, // No Empty Alt Text

  // Standard Markdownlint Rules
  "MD001": true, // Heading levels should only increment by one level at a time
  "MD011": true, // Reversed link syntax
  "MD022": true, // Headings should be surrounded by blank lines
  "MD024": { "siblings_only": true }, // Multiple headings with the same content
  "MD025": true, // Multiple top-level headings in the same document
  "MD031": true, // Fenced code blocks should be surrounded by blank lines
  "MD034": true, // Bare URL used
  "MD036": true, // Emphasis used instead of a heading
  "MD040": true, // Fenced code blocks should have a language specified
  "MD041": true, // First line in a file should be a top-level heading
  "MD042": true, // No empty links
  "MD045": true, // Images should have alternate text (alt text)
  "MD047": true, // Files should end with a single newline character
  "MD059": true  // Link text should be descriptive (Standardized equivalent for GH002/Custom link checks)
})

const markdownItFactory = () => markdownIt({ html: true })
const options = {
    ignores: [
      ".gitbook",
      "node_modules",

      // Gitbook sites
      "archive",                                  // Archived sites and spaces

      // Explicitly Ignored Metadata Files
      "SUMMARY.md"
    ],
    config: overriddenOptions,
    customRules: ["@github/markdownlint-github"],
    markdownItFactory,
    outputFormatters: [
      ...( process.env.REPORT ? [
        [ "markdownlint-cli2-formatter-json", { "name": "./markdownlint-cli2-results.json"} ],
        [ "markdownlint-cli2-formatter-summarize", { "byRule": true } ]
      ]
      : [[ "markdownlint-cli2-formatter-pretty", { "appendLink": true } ]]
    )]
}
export default options
