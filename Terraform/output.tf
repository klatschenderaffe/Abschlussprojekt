# Ausgabe der öffentlichen IP-Adresse der EC2-Instanz
output "public_ips" {
  value = aws_instance.docker_instance.*.public_ip
}