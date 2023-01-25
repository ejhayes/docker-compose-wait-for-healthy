FROM busybox

ENTRYPOINT ["tail", "-f", "/dev/null"]
HEALTHCHECK --interval=5s --timeout=10s CMD exit 0