# docker compose wait for healthy

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
