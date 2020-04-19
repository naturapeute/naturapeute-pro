serve:
	export GEM_HOME=$PWD/gems
	export PATH=$PWD/bin:$PATH
	export RUBYLIB=$PWD/lib:$RUBYLIB
	${PWD}/gems/bin/jekyll serve

install:
	gem install --user-install bundler jekyll
