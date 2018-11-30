#/bin/bash
docker run -p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=pass123 \
	-v $PWD/db:/data/db -d mongo