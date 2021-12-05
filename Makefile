include env.make

SERVER_NAME:=form-online-web
IMAGE_TAG:=v0.0.1


build:
	npm run build


deploy:
	cp default.conf dist/
	docker build -t $(IMAGES_REPO)/$(SERVER_NAME):$(IMAGE_TAG) -f Dockerfile dist
	echo "$(DOCKER_PSW)" | docker login --username=$(DOCKER_USR) $(REPO_DOMAIN) --password-stdin
	docker push $(IMAGES_REPO)/$(SERVER_NAME):$(IMAGE_TAG)
	git commit --allow-empty -am "deploy:$(IMAGE_TAG)"
	git push

docker:
	npm run build-docker
	cp default.conf dist/
	docker build -t $(SERVER_NAME):$(IMAGE_TAG) -f Dockerfile dist
	- docker stop $(SERVER_NAME)
	docker run --name $(SERVER_NAME) -d --rm -p 80:80 -p 443:443 $(SERVER_NAME):$(IMAGE_TAG)

