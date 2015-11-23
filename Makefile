SHELL := /bin/bash

test:
	@echo "----------------- 我是分界线 -----------------"
	@rm -Rf lib/*
	@babel -d lib src
	@nodeunit test/*
	@echo "----------------- 我是分界线 -----------------"

.PHONY: test
