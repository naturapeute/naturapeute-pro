serve:
	export GEM_HOME=$PWD/gems
	export PATH=$PWD/bin:$PATH
	export RUBYLIB=$PWD/lib:$RUBYLIB
	./gems/bin/jekyll serve
