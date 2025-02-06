#!/bin/bash
# Updates und Installation von Docker
apt-get update -y
apt-get upgrade -y
snap install docker

# Docker-Dienst starten und aktivieren
# systemctl start docker
# systemctl enable docker
systemctl start snap.docker.dockerd.service
systemctl enable snap.docker.dockerd.service

# Docker-Image pullen und starten
docker pull klatschenderaffe/vanventura:latest
docker run -d --name vanventura -p 80:80 klatschenderaffe/vanventura:latest