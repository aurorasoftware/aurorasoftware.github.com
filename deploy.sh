#!/bin/bash

s3cmd sync . s3://www.aurora.io/ -P --exclude=.git/* --exclude=*.un~ --exclude=.sass-cache/*
