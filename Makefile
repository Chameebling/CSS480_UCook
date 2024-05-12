all:
	@echo "usage: 'make build' or 'make run'"

build:
	sudo docker rm -f u-cook || true
	sudo docker build --tag u-cook:latest .

run:
	sudo docker rm -f u-cook || true
	sudo docker run --privileged -d \
		--name=u-cook \
		--memory=4096m \
		--net container:tf \
		u-cook:latest
