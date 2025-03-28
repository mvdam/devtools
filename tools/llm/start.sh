export ONLINE="true"
DEFAULT_MODEL="llama3.2:1b"

# only for podman: setup correct limits
# podman machine stop
# podman machine set --cpus 8 --memory 8192
# podman machine start

docker compose up -d
docker exec -it ollama ollama pull ${DEFAULT_MODEL}

docker compose down

ONLINE="false"

docker compose up -d

# todo: stop ollama and start it again offline
