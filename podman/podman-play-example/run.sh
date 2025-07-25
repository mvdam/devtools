export $(grep -v '^#' .env | xargs)
envsubst < joplin-pod.yaml > joplin-pod-substituted.yaml
podman play kube ./joplin-pod-substituted.yaml
