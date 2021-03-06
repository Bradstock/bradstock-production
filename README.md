# Bradstock forestry site

For styling, this project supports SCSS via [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass), and uses the [Bulma](https://bulma.io/) CSS framework.

## Project structure

- Site-level configuration is stored in `site-config.json` so it can be exposed to Forestry. This file is loaded in `gatsby-config.js` to configure Gatsby.
- Edit SCSS in `src/css`. Bulma variables like the primary color can be configured in `src/css/variables.scss`.
- Images are sourced from `src/images`. Using `gatsby-transformer-remark`, we can use paths relative to the project root like `/src/images/gatsby-icon.png` and they will be translated to the appropriate relative path for use with `gatsby-remark-images`.
- Data files are located in `src/data`. Data files are transformed via `gatsby-transformer-json`. You could use YAML files if you want, but it will require installing the appropriate transfomer plugin.
- Markdown content is located in `src/pages`. Blog posts are in `src/pages/posts`.
- Page templates are located in `src/templates`.

### List, Single, and Blocks templates

This site uses three templates: list, single, and blocks. The **blocks** template uses Forestry's blocks feature to compose landing pages from front matter values. The **list** template is used by default for any file named `index.md`, and will show a list of all pages that exist in the same directory or subdirectories. The **single** template is used for all other cases.

To force a file to use a specific template, add a `template` parameter to its front matter with `list`, `single`, or `blocks` and it will use the associated template.

## Editing In Forestry

The **Pages** section is where you can edit markdown files that are direct children of the `src/pages` directory. Any subdirectories in `src/pages` are treated as collections (and would require their own sections), but this behavior can be easily changed by modifying the section configuration without needing to update any code.

The **Posts** section is where you can edit and create the blog posts in `src/pages/posts`.

The **Nav Menu** section will allow you to edit the site navigation.

Then **Site Config** section will allow you to edit some site-level configuration values

## Previewing the Site

Forestry allows users to preview the changes they've made before publishing them. Forestry has two methods for previewing: **standard previews** and **instant previews**. You will need to configure Forestry differently depending on which preview method you wish to use.

When using Forestry previews, ensure that the environment variable `GATSBY_WEBPACK_PUBLICPATH` is set to `/`. URLs in CSS and other files processed by webpack might not work right otherwise.

### Standard Preview

The **standard preview** method is the simpler strategy. With standard previews, the site is built by the static site generator and deployed to a temporary directory on our preview server, where it can be viewed from a preview URL. For a standard preview, you should run `npm run build` - you need to use a command that terminates when the build is finished. 


### Instant Previews

The **instant preview** method spins up the Gatsby development server for a long-lived preview that can rebuild much faster in response to content updates. When using instant previews, your preview command should be the `develop` command. The development server spawned by this command should be available over port `8000`, and bind to `0.0.0.0`. The `forestry:preview` command in this project's `package.json` will spin up a Gatsby dev server compatible with Forestry's instant previews.

## Publishing

If you are publishing the site to a subdirectory, such as GitHub pages, you will want to se the `PATH_PREFIX` env var to the value of the subdirectory (without a trailing slash), and enure the `--prefix-paths` flag is passed into the build command. This will ensure any URLs are generated with the correct paths. This command is encapsulated in the `forestry:publish` command in this project's `package.json` file.

## Limitations

The build will fail if there isn't at least 1 instance of a given front matter value used in your content. For example, if every markdown file had an empty `date` field, the build would fail because `frontmatter.date` is referenced in the graphQL queries for the page templates. (If anyone knows a way to query front matter without this limitation, I'd love to hear about it - post an issue!)

# test
<!-- merge -->
package.json
    "test": "echo \"Error: no test specified\" && exit 1"

# remotes/ origins
there are two
prod and stage

# Deploy Stage
use git branch stage-work then merge to stage then push
git push stage stage
# Deploy Prod 
use git branch prod-work then merge to prod then push
git push prod prod

files with .env stuff 
- index.html var env for forestry
<script id="admin-config-script" type="text/javascript">
  var env = {
      siteId: "vqgxsegq6qsifw",
      // siteId: "ywb6jbjzy1--0g",
      local: false
  };
- github / workflows files
merge
<!-- # This file was auto-generated by the Firebase CLI -->
<!-- # https://github.com/firebase/firebase-tools -->

name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      # - stage 
      - prod
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          # firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BRADSTOCK_STAGING }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BRADSTOCK_PRODUCTION }}'
          channelId: live
          # projectId: bradstock-staging
          projectId: bradstock-production

pull
<!-- # This file was auto-generated by the Firebase CLI -->
<!-- # https://github.com/firebase/firebase-tools -->

name: Deploy to Firebase Hosting on PR
'on': pull_request
jobs:
  build_and_preview:
    if: '${{ github.event.pull_request.head.repo.full_name == github.repository }}'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          # firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BRADSTOCK_STAGING }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BRADSTOCK_PRODUCTION }}'
          # projectId: bradstock-staging
          projectId: bradstock-production
