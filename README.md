Gulp Basic Boilerplate
==========================

My own version of https://github.com/ryanbenson/Harvest

Boilerplate includes:

CSS:
Minify-css
Sass
Autoprefixer


Javascript:
Uglify

Utility:
Imagemin
Concat

Helpers:
Browser-sync
Sequence
Plumber
Clean

What it does?
==========================
It's a ready to go environment that grabs all SCSS/CSS (styles/scss), combines it into one file, cleans for unused rules and compress it, similar for Javascript but it doesn't remove any scripts and it provides compression for images.

Installation
==========================
Make sure you have gulp and node installed.

1. Install node: https://nodejs.org/
2. Install gulp globally: run your command line interface and type in "npm install gulp -g"
3. Clone/download the repo
4. Navigate to root of the project
5. Type in "npm install" -it will download all missing dependencies
6. Initialize server by typing "gulp"
7. When you are finished, stop server by pressing ctr+c and deploy ready-to-go files by typing "gulp deploy"

Version
==========================

1.0.3 - removed uncss - too much bugged

1.0.2 - javascript fix for browser-sync

1.0.0 - project started

