# Simple TODO API

![](https://img.shields.io/github/license/1mpossible-code/simple-todo-api?color=green)

Backend part (api) of Simple TODO Application. You may
use [Front part](https://github.com/1mpossible-code/simple-todo-front#simple-todo-front) to collect full Simple TODO
Application.

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

----

## Description

Simple TODO API is a part of SPA application that manage your tasks. It
uses [Simple TODO Front](https://github.com/1mpossible-code/simple-todo-front#simple-todo-front) to work.

## Installation

### Dependencies:

* [docker-compose](https://docs.docker.com/compose/)
* [npm](https://www.npmjs.com/)
* [vue-cli](https://cli.vuejs.org/)

* Clone this repo

```shell
git clone https://github.com/1mpossible-code/simple-todo-api
```

* Clone [front](https://github.com/1mpossible-code/simple-todo-front#simple-todo-front) repo

```shell
git clone https://github.com/1mpossible-code/simple-todo-front
```

After cloning repos do:

```shell
# Go to simple-todo-api directory in another
# terminal or tmux or screen (command) maybe
cd simple-todo-api
# Run docker-compose.yml file
docker-compose up -d

# Go to simple-todo-front directory
cd ../simple-todo-front
# Copy .env file
cp .env.example .env
# Install package.json dependencies
npm install
# Run server
npm run serve
```

> You will have api on http://localhost:3000/api/
> And front on http://localhost:8080/

## Usage

You may specify your own MongoDB uri in `.env` file. [Example](.env.example).

This API supports:

|Method|Route|Params|Result|Description|
|:----:|-----|:----:|------|-----------|
GET | /api | {} | List of all the [tasks](#task-json-example) in JSON | Get all the tasks
GET | /api/{id} | {} | [Task](#task-json-example) with specified {id} in JSON | Get the task with specified {id}
POST | /api | {body: String, completed: Boolean} | New created task in JSON| Store new task with parameters. 'body' is required and 'completed' is optional
PATCH | /api/{id} | {body: String, completed: Boolean} | JSON data {"n":1,"nModified":1,"ok":1} | Update task with specified {id} with the data from params. Both 'body' and 'completed' are optional
DELETE | /api/{id} | {} | JSON data {"n":1,"ok":1,"deletedCount":1} | Destroy task with specified :id

#### Task JSON example

```json
{
  "_id": "60e2e43294a901002890349e",
  "body": "test",
  "completed": false,
  "__v": 0
}
```

## Contributing

Feel freely to contribute this project. [Issues](https://github.com/1mpossible-code/simple-todo-api/issues)
and [PRs](https://github.com/1mpossible-code/simple-todo-api/pulls) are welcome!

## Credits

You can mail to `linme00p@gmail.com` to contact the author

# License

Copyright © 2021 [1mpossible-code](https://github.com/1mpossible-code). This project
is [GPLv3](https://www.https://www.gnu.org/licenses/gpl-3.0.htmlgnu.org/licenses/gpl-3.0) licensed.
