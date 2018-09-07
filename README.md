<p align="center">
  <img src="https://github.com/sandoche/Jekyll-webpack-boilerplate/blob/master/icon.png?raw=true" width="200"/>
</p>
<h1 align="center">
  Jekyll-webpack-boilerplate
</h1>


![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg) [![Telegram](https://img.shields.io/badge/chat-Telegram-blue.svg)](https://t.me/JekyllWebpack)


A Jekyll boilerplate supercharged with Webpack to build modern performant websites (including Progressive Web Apps).
Read more about how this boilerplate has been built: https://medium.com/learning-lab/5-how-i-learnt-webpack-3-and-created-a-jekyll-and-webpack-boilerplate-edd86645fd5e

## Features

**Improved workflow**
* Webpack working along with Jekyll
* BrowserSync live reload

**Optimized Style and SASS**
* SASS Style
* PostCSS Auto Preffixer
* CSS minified
* Critical CSS Path added to the main template (using the command with optim)

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

**Easy to deploy**
* Easy deployment with Netlify

## Prerequisites
The following tools should be installed before starting:
* NodeJS, npm
* Ruby, Gem, Bundler
* Jekyll
* Sass

## Quick start
1. Make sure you have all the prerequisites above installed.
2. Clone this repo using `git clone https://github.com/sandoche/Jekyll-webpack-boilerplate.git`
3. Move to the appropriate directory: `cd Jekyll-webpack-boilerplate`.
4. Run `npm install` and `bundler install` in order to install dependencies and clean the git repo.
5. Run `npm start` to start the development server (or use `npm start`).

## Quick deployment
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sandoche/Jekyll-webpack-boilerplate)

Here is a demo of the Netlify build: https://dazzling-swartz-9738b5.netlify.com

## Development
To start the development server just run  `npm start`

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
├── package.json <--- Update this file with your information especially the name which is used for the meta tags
├── README.md
├── _scss <--- Put your partials here
│   └── _default.scss
├── _src <--- This folder contains your JS and SASS entry points
│   ├── index.js
│   ├── index.scss
│   └── template
│       └── default.html <--- Here is the main default template, feel free to edit it but do not delete it
├── webpack.config.js
└── package-lock.json
```
You can see above the basic structure of the boilerplate and the main differences with the official Jekyll folder structure

### Configurations
* The required configurations are all in `_config.yml`
* Also edit `package.json` the name is used in the meta tags
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

### Optimized website
To build the website run the following line

```
npm run build

# or if you want the critical css
npm run build:optim
```
The built website will be in `_site` folder.

You can also run a local server to test it with this command
```
npm run serve:dist
```

### PWA
If you want to build a PWA (including the manifest.json and the service worker) run the following. Please ensure to have configured this file `config/webpack.pwa.js`
The built website will be in `_site` folder.
```
npm run build:pwa

# or if you want the critical css
npm run build:pwa:optim
```

### Clean assets & \_site folders
This will remove the generated folders
```
npm run clean:project
```

## Known issues
* Jekyll watch doesn't reload / rebuild when a translation file is updated inside `_i18n` folder, I recommand to remove `jekyll-multiple-languages-plugin` if you don't want a multi language website and if you want to watch / rebuild faster. Otherwise close and start  `npm run start` to rebuild and see your changes from `_i18n`
* The critical CSS Path may show some weird behavior when the page is loading that is why there are separated npm scripts

## Websites using Jekyll Webpack Boilerplate
* Typster - https://typster.xyz
* TEDxMarseille - https://tedxmarseille.com
* Motive network - https://motive.network
* CoinGenerator - https://coingenerator.sh

## Other documentations
* [Jekyll](https://jekyllrb.com/)
* [Webpack](https://webpack.js.org/)
* [Jekyll multiple languages plugin](https://github.com/Anthony-Gaudino/jekyll-multiple-languages-plugin)
* [Jekyll SEO tag](https://github.com/jekyll/jekyll-seo-tag)
* [BrowserSync Webpack plugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)
* [PostCSS](http://postcss.org/)

## Buy me a beer
If you like this project [Buy me a beer](https://paypal.me/kanbanote)
