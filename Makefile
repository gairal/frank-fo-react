SHELL := /bin/bash
BRANCH := $(shell git branch | sed -n -e 's/^\* \(.*\)/\1/p')
VERSION := $(shell git describe --abbrev=0 --tags)
# Install project and dependencies
.PHONY: install
install:
	yarn config set registry https://mirror.ekino.com/npm/npm
	yarn install
	yarn config delete registry

# Lint and test
.PHONY: test
test:
	yarn run lint

# Build
.PHONY: build
build:
	make install
	yarn run build

# Release
.PHONY: release
release:
	make install
	yarn run release

# start
.PHONY: start
start:
	yarn run start
