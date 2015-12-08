SHELL := /bin/bash

build:
	@rm -Rf lib/*
	@babel -qd lib src


test: build
	@echo "----------------- 我是分界线 -----------------"
	@nodeunit test/*
	@echo "----------------- 我是分界线 -----------------"

profile: build
	@echo "----------------- Profiling -----------------"
	@babel -qd profile_compiled profile
	@node profile_compiled/index.js
	@rm -Rf profile_compiled
	@echo "----------------- Profiling END -------------"

.PHONY: test profile
