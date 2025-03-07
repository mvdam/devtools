# setup correct limits
podman machine stop
podman machine set --cpus 8 --memory 8192
podman machine start

podman compose up -d
podman exec -it ollama ollama pull llama3

# todo: stop ollama and start it again offline
