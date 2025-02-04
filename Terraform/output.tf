# Ausgabe der öffentlichen IPs der Instanzen
output "public_ips" {
  value       = aws_instances.frontend-lt.*.public_ips
  description = "Öffentliche IP-Adressen der EC2-Instanzen im Frontend"
}