# # Ausgabe der öffentlichen IPs der Instanzen
# output "public_ips" {
#   value       = aws_instances.nginx-asg-instance.*.public_ips
#   description = "Öffentliche IP-Adressen der EC2-Instanzen im Frontend"
# }

# output "frontend_alb_dns" {
#   value       = aws_lb.frontend_alb.dns_name
#   description = "Die DNS-Adresse des Application Load Balancers"
# }

output "public_ips" {
  value = data.aws_instances.frontend_instances.public_ips
}