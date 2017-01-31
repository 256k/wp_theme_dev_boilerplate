this is an empty theme template development environment boilerplate for wordpress.


===========================================================================================


this dev environment runs on a few packages:

	nodejs/npm (package manager)
	gulp (task runner)
	browser-sync (serving files for autoreloading changes)
	gulp-sass (for compiling scss into a style.css file)

===========================================================================================

when starting the development, open terminal and run gulp. this should load all tasks and browser sync will load a browser page and serve the page. NOTE: the proxy setting in the gulpgile.js should be the address of the LAMP/MAMP apache server.

	

===========================================================================================

Foundation is used in this boilerplate as a starting point for styling.
Foundation is used by loading the full foundation framework/library from a single .scss file (originally the .css file but changex extension to be compiled with other sass files)

the entirety of the foundation framework available will be incorporated into the style.css outputted file..

TODO:

find a way to use uncss to clean unnecessary styleings from foundation or any other files before production. so far seems pretty complicated to do for a wordpress php site.

