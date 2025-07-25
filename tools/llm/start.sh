export ONLINE=true
DEFAULT_MODEL="llama3.2:3b"

# only for podman: setup correct limits
podman machine stop




docker-compose up -d
docker exec -it ollama ollama pull ${DEFAULT_MODEL}

# podman compose down

# ONLINE=false

# podman compose up -d

