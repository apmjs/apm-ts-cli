tar:
	rm -rf dist
	mkdir dist
	mkdir dist/gulp
	cp -r project/gulp dist/
	rm -rf dist/gulp/{node_modules,docs,dist,coverage,.nyc_output}
	cd dist/gulp && zip -r ../gulp.zip .[!.]* *
	# tar -cvjpf ../gulp.tar.bz2 *
	rm -rf dist/gulp

