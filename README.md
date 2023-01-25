# docker compose wait for healthy

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- action-docs-description -->

## Description

This action waits for a docker compose services to be marked as healthy

<!-- action-docs-description -->

_IMPORTANT_: in order for this to work your container must have a functioning HEALTHCHECK directive. More info on that can be found [here](https://docs.docker.com/engine/reference/builder/#healthcheck).

## Usage

To use this in your projects do this:

```
...
- uses: ejhayes/docker-compose-wait-for-healthy@releases/main
  with:
    services: 'space separate list of services you want to wait for'
    path: relativePathToDockerComposeFile
...
```

<!-- action-docs-inputs -->

## Inputs

| parameter | description                                      | required | default                 |
| --------- | ------------------------------------------------ | -------- | ----------------------- |
| timeout   | amount of time in seconds to wait before failing | `false`  | 60                      |
| services  | space separate list of services to wait for      | `false`  |                         |
| path      | default path to use                              | `false`  | ${{ github.workspace }} |

<!-- action-docs-inputs -->

<!-- action-docs-outputs -->

<!-- action-docs-outputs -->

<!-- action-docs-runs -->

## Runs

This action is a `node16` action.

<!-- action-docs-runs -->

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ejhayes"><img src="https://avatars.githubusercontent.com/u/310233?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Hayes</b></sub></a><br /><a href="https://github.com/ejhayes/docker-compose-wait-for-healthy/commits?author=ejhayes" title="Documentation">📖</a> <a href="#infra-ejhayes" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/ejhayes/docker-compose-wait-for-healthy/commits?author=ejhayes" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
