build:
	rm -rf dist
	mkdir dist
	mkdir dist/gulp
	cp -r project/gulp dist/
	rm -rf dist/gulp/{node_modules,docs,dist,coverage,.nyc_output}
	cd dist/gulp && tar -cvjpf ../gulp.tar.bz2 *
	rm -rf dist/gulp

test:
	mkdir dist/xx/
	tar -xvjf dist/gulp.tar.bz2 -C dist/xx/
