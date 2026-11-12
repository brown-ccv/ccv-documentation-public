# CCV Documentation Public Repository

This monorepo contains comprehensive public documentation, guides, and resources for the Center for Computation and Visualization (CCV) at Brown University.

## Repository Structure

GitBook's GitHub Sync links a GitBook site a folder in this monorepo.

In GitBook, *spaces* are the private, internal containers where you create and edit documentation pages as the content source. *Sites* are the public-facing, customized, and published versions of that content. Sites are linked to spaces and have an m-n relationship.

Below, the tree illustrates how different sites in this repository are linked to one or more documentation spaces, representing both single-space and multi-space site structures.

```bash
.
├── Site 1: "Single Space Site" linked to Space A
└── Site 2: "Multi-Space Site" 
    ├── Linked to Space B
    └── Linked to Space C
```

## Linting

Markdown files in this repository are linted using [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) with [GitHub's recommended markdownlint configurations](https://github.com/github/markdownlint-github).

### Rules enforced

At the moment, we are focusing on a subset of rules to improve the accessibility of our documentation as well as to not overwhelm the project. The heavy hitters include alt text, descriptive links, and headings. We will be adding rules and configurations as we resolve linting errors.

### Running locally

```bash
# Lint a single file or glob pattern
npm run lint:md "oscar/**/*.{md,mdx}"

# Lint all files
npm run lint:md:all

# Auto-fix a single file or glob pattern
npm run lint:md:fix "oscar/**/*.{md,mdx}"

# Auto-fix all files
npm run lint:md:fix:all
```

### GitHub Actions

| Trigger               | Workflow           | Description                                           |
| :---                  | :---               | :---                                                  |
| Pull request          | Lint changed files | Lints changed files. Fails if errors are found.       |
| Push to main / manual | Lint Audit Report  | Creates, updates, or closes issues with lint results. |

The audit workflow accepts two optional inputs:

* **path** — folder or file to lint (e.g. `oscar`, `oscar/file.md`). Leave empty for all files.
* **group_by** — `all`, `folder`, or `file`.

Issues are labelled `lint` and `automated-report`. Path-scoped issues use the title format `fix(lint): <path>`, while repo-wide runs use `fix(lint): repo`. They are closed automatically when the workflow is re-run and finds no errors for that scope.

## Updating customization via API

GitBook provides an [api for site customization](https://gitbook.com/docs/developers/gitbook-api/api-reference/docs-sites/site-customization). This allows us to have consistent styling and theme between documentation sites.

The `./updateCustomization.js` file provides functions to fetch the site customization object from an existing GitBook site, update it to match a standardized customization file located in `customization.json`, and override the customization object in the live site. Run with:

```bash
# single site
npm run customize <sitename>
# all sites
npm run customize all
```

### Environment files

Two hidden files are required, a `.env` file with keys and organization ID:

```ini
# .env, see .env.example
TOKEN=<YOUR_GITBOOK_TOKEN>
ORGANIZATION=<ORGANIZATION ID>
```

and a `siteIds.json` file containing an object with site names in UPPER_SNAKE_CASE mapping to the site ID from GitBook. You must be an admin on the site to be updated for your token to work!

```jsonc
// siteIds.json, see siteIds.example.json
{
    "SITE_ONE": "<site_id_one>",
    "SITE_TWO": "<site_id_tow>"
}
```

Both organization ID and site IDs can be found in the GitBook url: `https://app.gitbook.com/o/<ORGANIZATION_ID>/sites/<SITE_ID>/customization/general`.
