Reaper Gulp Boilerplate
==========================
My own version of gulp basic boilerplate. This is a tool for coding simple websites and layouts.

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
Rename  

Helpers:  
Browser-sync  
Sequence  
Plumber  
Del  
Vinyl-paths  

What it does?
==========================
-Joins (concatonates) Javascript/Css/Sass files  
-Compress files  
-Compress images  
-Compiles SASS to CSS  
-Displays errors but does not stop running (doesn't "break") after such  
-Hosts simple server that updates automatically changes in your files to your browser  

In short: makes your life easier


Usage
==========================
Download or clone this repo: "git clone https://github.com/melcma/Reaper"

Run "gulp" in your command line to set-up developing version
This will concat all your scss files into one and output css file, you have to include "src/main.css" in your index file
Same with javascript, it collects are .js files from scripts folder and compiles it into one "main.js"

Run "deploy" to create "dist" folder ready to go on server
Concatones, minifies javascript and scss/css files


Installation
==========================
Make sure you have gulp and node installed.

1. Install node: https://nodejs.org/  
2. Install gulp globally: run your command line interface and type in "npm install gulp -g"  
3. Clone/download the repo  
4. Navigate to root of the project  
5. Type in "npm install" - this will download all missing dependencies  
6. Initialize server by typing "gulp"  
7. When you are finished, stop server by pressing ctr+c and deploy ready-to-go files by typing "gulp deploy"



Version
==========================

1.1.0 - Fixed a lot issues and bugs with serving scss/js files, added vinyl-paths, gulp-util, and gulp-rename  

1.0.5 - replaced "gulp-clean" with "del"  

1.0.4 - changed "app" dir to "src", fixed bug with .js init  

1.0.3 - removed "uncss" - too much bugged  

1.0.2 - javascript fix for "browser-sync"  

1.0.0 - project started

