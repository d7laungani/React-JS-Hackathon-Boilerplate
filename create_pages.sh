if [$1 = ""]
    then
        echo "none"
    else
	cd src/pages/
	mkdir $1
	cd $1
	mkdir reducks
	cd reducks
	touch $1.actions.js
	touch $1.model.js
	touch $1.reducer.js
	cd ../
	touch $1.container.js
	touch $1.routes.js
	touch $1.sagas.js
        echo $1
    fi
