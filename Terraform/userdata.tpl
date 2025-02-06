#!/bin/bash
# Updates und Installation von Docker
# Add Docker's official GPG key:
apt-get update
apt-get install ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update

apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y


# Docker-Dienst starten und aktivieren
# systemctl start docker
# systemctl enable docker
systemctl start docker-ce
systemctl enable docker-ce

# Docker-Image pullen und starten
docker pull klatschenderaffe/vanventura:latest
docker run -d --name vanventura -p 80:80 klatschenderaffe/vanventura:latest