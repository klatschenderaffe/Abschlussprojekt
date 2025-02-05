#!/bin/bash
# Updates und Installation von Docker
apt-get update -y
apt-get install -y docker.io

# Docker-Image pullen und starten
docker pull klatschenderaffe/vanventura:latest
docker run -d --name vanventura -p 80:80 klatschenderaffe/vanventura:latest