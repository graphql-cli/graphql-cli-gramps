# graphql-cli-gramps ![npm](https://img.shields.io/npm/v/graphql-cli-gramps.svg?style=for-the-badge)
![CircleCI](https://img.shields.io/circleci/project/github/supergraphql/graphql-cli-gramps.svg?style=for-the-badge)![David](https://img.shields.io/david/supergraphql/graphql-cli-gramps.svg?style=for-the-badge)  
Plugin for [`graphql-cli`](https://github.com/graphql-cli/graphql-cli). Adds the [`gramps-cli`](https://github.com/gramps-graphql/gramps-cli) to `graphql-cli`.

## Installation

Install `graphql-cli-gramps` either globally (recommended) or locally using your favorite package manager:
```shell
$ yarn [global] add graphql-cli-gramps
$ npm install graphql-cli-gramps [--global]
```

## Usage
```
graphql gramps dev

run a GraphQL gateway for local development

Choose data source(s) for local development:
  --data-source, --data-sources, -d  path to one or more data sources    [array]

Choose a GraphQL gateway to run the data sources:
  --gateway, -g  path to a GraphQL gateway start script                 [string]

Choose real or mock data:
  --live, -l  run GraphQL with live data
  --mock, -m  run GraphQL offline with mock data

Turn Babel on or off:
  --no-transpile

Options:
  --dotenv       Path to .env file                                      [string]
  -p, --project  Project name                                           [string]
  --transpile    don’t transpile data sources (point to a build dir)
                                                       [boolean] [default: true]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```
<hr>
<p align="center">
  <img src="https://img.shields.io/badge/built-with_love-blue.svg?style=for-the-badge"/><a href="https://github.com/kbrandwijk" target="-_blank"><img src="https://img.shields.io/badge/by-kim_brandwijk-blue.svg?style=for-the-badge"/></a>
</p>
