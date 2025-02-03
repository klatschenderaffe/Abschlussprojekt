
# Sicherheitsgruppe erstellen
resource "aws_security_group" "docker_sg" {
  name        = "docker_security_group"
  description = "Security group for Docker on EC2" # Beschreibung angepasst
  
  # SSH-Zugriff erlauben, ggf. IP-Bereich anpassen
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP-Zugriff erlauben - für NGINX Relevant
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Ausgehender Verkehr erlauben
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"] 
  }
}