# Ausgabe der öffentlichen IPs der Instanzen
output "public_ips" {
  value       = data.aws_instances.frontend_instances.public_ips
  description = "Öffentliche IP-Adressen der EC2-Instanzen im Frontend"
}