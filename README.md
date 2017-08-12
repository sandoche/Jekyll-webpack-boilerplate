<p align="center">
  <img src="https://github.com/sandoche/Jekyll-webpack-boilerplate/blob/master/icon.png?raw=true" width="200"/>
</p>
<h1 align="center">
  Jekyll-webpack-boilerplate
</h1>

A Jekyll boilerplate supercharged with Webpack to build modern performant websites (including Progressive Web Apps).
Read more about how this boilerplate has been built: https://medium.com/learning-lab

## Features

**Improved workflow**
* Webpack working along with Jekyll
* BrowserSync live reload

**Optimized Style and SASS**
* SASS Style
* PostCSS Auto Preffixer
* CSS minified
* Critical CSS Path added to the main template

**ES6 & Optimization**
* ES6 Babel
* JS minified and uglified
* ES Lint

**Images optimized**
* Imagemin, images optimizations

**Write less code**
* Theme color in config
* Favicon generated automatically
* Google Analytics setup in config file (optional)
* Doorbell setup in config file (optional)
* Cookie consent setup in config file (optional)

**SEO Ready**
* SEO Plugin Jekyll
* Sitemap generated
* Accelerated Mobile Pages enabled for Posts

**Write better code**
* Internationalization plugin

**Progressive Web Apps (optional)**
* Generation of the Manifest
* Generation of Service worker

## Quick start
1. Clone this repo using `git clone https://github.com/sandoche/Jekyll-webpack-boilerplate.git`
2. Move to the appropriate directory: `cd Jekyll-webpack-boilerplate`.
3. Run `yarn install` or `npm install` in order to install dependencies and clean the git repo.
4. Run `yarn start` or `npm start`  to start the development server.

## Development
To start the development server just run  `yarn start` or `npm start`

### Folder structure
```
.
├── 404.html
├── about.md
├── blog.md
├── config <--- This folder contains the different Webpack config files
│   ├── optimization-fix <--- A fix for optimization, do not delete this folder
│   ├── postcss.config.js <--- Post css config
│   ├── sw.config.js <--- The service worker config file
│   ├── webpack.common.js <--- The common Webpack config file for all the environment
│   ├── webpack.dev.js <--- Dev Webpack environment config file
│   ├── webpack.optim.js <--- This is used to add the css critical path in the default template
│   ├── webpack.prod.js <--- Prod Webpack environment config file
│   └── webpack.pwa.js <--- Please edit this file if you want a PWA
├── _config.yml <--- The Jekyll config file that you need to set up
├── Gemfile
├── Gemfile.lock
├── _i18n <--- Contains your posts and data in the language you need (check below how to remove it)
├── _images <--- Put all your images here, you will access them with this path /assets/images/
│   ├── icon.png <--- Replace this with your icon
│   └── large-icon.png <--- Replace this with your Facebook Open Graph picture
├── icon.png <--- Same with this one
├── _includes
├── index.md
├── _layouts
│   ├── amp.html <--- The layout for Accelerated mobile page
│   ├── blog.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── _scss <--- Put your partials here
│   └── _default.scss
├── _src <--- This folder contains your JS and SASS entry points
│   ├── index.js
│   ├── index.scss
│   └── template
│       └── default.html <--- Here is the main default template, feel free to edit it but do not delete it
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```
You can see above the basic structure of the boilerplate and the main differences with the official Jekyll folder structure

### Configurations
* The required configurations are all in `_config.yml`
* If you want a `manifest.json` file please edit `config/webpack.pwa.js`
* Replace the different icon by yours in `_images` and in the root folder

### Assets
* SCSS partials should be located in `_scss` for better reading
* Put all your images in `_images` the content of this folder will be moved to the `_site/assets/images` so you can access them with this path `/assets/images/**` in your templates, check the examples
* Put all your Javascript files inside `_src` and import them from `index.js` or you can also add them as a new entry point in your webpack configuration file

### Internationalization
* All the posts should be there in inside `_i18n` folder inside its language, check the boilerplate examples
* You can put your variables inside `_i18n/en.yml` (replace en with your language) and call them in your template with `{% t variable_name.sub_variable %}`
* You can remove the plugin by removing `gem 'jekyll-multiple-languages-plugin'` from `gemfile` and `jekyll-multiple-languages-plugin` from `plugins` in `_config.yml`
* We invite you to read the very good [official documentation](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin) of the plugin Jekyll multiple language plugin

## Build

If you don't user `yarn` replace it by `npm run` in the following commands.

### Optimized website
To build the website run the following line

```
yarn build
```
The built website will be in `_site` folder.

You can also run a local server to test it with this command
```
yarn serve:dist
```

### PWA
If you want to build a PWA (including the manifest.json and the service worker) run the following. Please ensure to have configured this file `config/webpack.pwa.js`
The built website will be in `_site` folder.
```
yarn build:pwa
```

### Clean assets & \_site folders
This will remove the generated folders
```
yarn clean:project
```

## Other documentations
* [Jekyll](https://jekyllrb.com/)
* [Webpack](https://webpack.js.org/)
* [Jekyll multiple languages plugin](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin)
* [Jekyll SEO tag](https://github.com/jekyll/jekyll-seo-tag)
* [BrowserSync Webpack plugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)
* [PostCSS](http://postcss.org/)

## Buy me a beer
If you like this project [Buy me a beer](https://paypal.me/kanbanote)

## To do
- [x] Create the home layout
- [x] Write sass
- [x] Create the page layout
- [x] Create the blog layout
- [x] Create the post layout
- [x] Create footer
- [x] Check for markdown
- [x] See for page and post translations
- [x] Check with the blog post what is missing
- [x] Use path resolve in the webpack config
- [x] Remove images compression from dev webpack
- [x] Try to put CSS & JS Hash for prod --> JS with hash but not css because of the optim
- [x] Fix CSS minification
- [x] Try precss, or node-sass --> Didn't work
- [x] Check for SASS map --> couldn't make it work
- [x] Delete assets & site
- [x] Write default data
- [x] Test to add images in the pages to check the whole boilerplate
- [x] Update logo & icon
- [x] Try AMP
- [x] Design template
- [x] Write documentation
- [x] Try subfolders for images
- [x] Doorbell script to update because it's in French
- [x] Fix the empty remove
- [ ] Try the boilerplate with a real project (snitco compare after before with Lighthouse)
- [ ] Change doc and file to have a single logo to load for everywhere
- [ ] Check manifest and PWA
- [ ] Write the article draft
- [ ] Try to fix in windows
- [ ] Try to build Guetzli
- [ ] Finish the article
