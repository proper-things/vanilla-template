# Vanilla Template

Vanilla Template from Proper Things is a simple boilerplate to create static apps with Vite and pure HTML/SCSS.

## Getting Started

First, install all dependencies by `yarn`. After installation you can run development server using `yarn dev`, you can build application by `yarn build` or run preview mode by `yarn preview`.

## Deployment

Deployment to Github Pages is automated by `yarn deploy` script. Deployment is done per repository, so to make it work you have to change `homepage` field in `package.json` and `base` in `vite.config.js` to match your repository url and name.

## Adding new page

Multiple HTML pages aren't included in build by default. To change that behaviour, add new HTML page in `pages` directory and include that page in `vite.config.js`. Use `about.html` as example.

## Partials

Partials are HTML's files that can be included in pages. They're meant to be reusable. They're configured in `vite.config.js`. In any HTML file you can include partial using following syntax: `{{> PARTIAL_FILENAME }}`. To support nested folders in partials you have to tweak configuration a little since handlebars options accepts an array.

## Styles

SCSS is supported by default. All styles are imported in `scripts/main.js`. If you want to apply styling on any page, just include that file by `<script>` tag.