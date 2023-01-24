# docker compose wait for healthy
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is a simple action that waits for your docker compose services to be `HEALTHY`

_IMPORTANT_: in order for this to work your container must have a functioning HEALTHCHECK directive. More info on that can be found [here](https://docs.docker.com/engine/reference/builder/#healthcheck).

## using

To use this in your projects do this:

```
...
- uses: ejhayes/docker-compose-wait-for-healthy@main
  with:
    services: 'space separate list of services you want to wait for'
    path: relativePathToDockerComposeFile
...
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!