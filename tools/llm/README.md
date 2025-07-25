## Services

### Ollama

http://localhost:11434

### Open WebUI

http://localhost:3000

### Run the stack

Make sure Docker is running.

```
./start.sh
```

## Tips & Tricks

```
podman exec -ti ollama /bin/bash

ollama pull llama3

podman stats --no-stream
```

### Podman specifics

```
podman machine stop
podman machine set --cpus 4 --memory 8192
podman machine start
```

TODO:
check if we can increase CPU count
https://www.cpu-monkey.com/en/cpu-apple_m1_pro_10_cpu_16_gpu

https://stackoverflow.com/a/69546359
