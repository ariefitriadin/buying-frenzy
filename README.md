[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux

## Description

Buyinng Frenzy
a backend service and a database for a food delivery platform


## Pre Development in local machine

Local Machine Requirement : 
- Docker


```bash

#after clone the repository
$ go to root app directory

# install required library
$ npm install

#run postgres db in docker
$ npm run start:dev:db

#run migration
$ npm run typeorm:migration:run

# development
$ npm run start:dev

```


## Running the app

```bash
# development
$ npm run start:dev

```




## Note

This API is heavily use [NestJS](https://www.nestjs.com)

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

