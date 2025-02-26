########## LOG RESSOURCES ########## 

# # S3-Bucket für das Backend
# resource "aws_s3_bucket" "terraform_state" {
#   bucket = "vanventura"
#   tags = {
#     Name        =  "Terraform State Bucket"
#   }
# }

# # Versionierung vom S3 Bucket
# resource "aws_s3_bucket_versioning" "terraform_state" {
#   bucket = aws_s3_bucket.terraform_state.id

#   versioning_configuration {
#     status = "Enabled"
#   }
# }

########## FRONTEND RESSOURCES ########## 

# Application Load Balancer (ALB)
resource "aws_lb" "frontend_alb" {
  name               = "vanventura-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id, aws_subnet.public_subnet_3.id]
  

  enable_deletion_protection = false
}

# Target Group für ALB
resource "aws_lb_target_group" "frontend_tg" {
  name     = "frontend-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
  # depends_on = [ aws_vpc.main ]

  health_check {
    path                = "/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }
}

# Listener für ALB
resource "aws_lb_listener" "https_listener" {
  load_balancer_arn = aws_lb.frontend_alb.arn
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = "arn:aws:acm:eu-central-1:043309333998:certificate/3a8f7758-c61d-4872-9165-e79c6f34374d"
  # depends_on = [ aws_lb_target_group.frontend_tg,
  # aws_lb.frontend_alb ]

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend_tg.arn
  }
}

resource "aws_lb_listener" "http_listener" {
  load_balancer_arn = aws_lb.frontend_alb.arn
  # für die target group
  port              = 80
  protocol          = "HTTP"
  # depends_on = [ aws_lb_target_group.frontend_tg,
  # aws_lb.frontend_alb ]

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend_tg.arn
  }
}

# Launch Template für EC2-Instanzen
resource "aws_launch_template" "frontend_lt" {
  name          = "nginx-launch-template"
  image_id      = "ami-07eef52105e8a2059" # Ubuntu User: ubuntu
  instance_type = "t2.micro"
  key_name      = "aws"
  # depends_on = [ 
  #   aws_subnet.public_subnet_1,
  #   aws_security_group.alb_sg 
  #   ]

   # User Data Script für Cloud-Init
   user_data = base64encode(file("${path.module}/userdata.tpl"))


  network_interfaces {
    # Öffentliche IP-Adressen = Ja
    associate_public_ip_address = true
    security_groups             = [aws_security_group.alb_sg.id]
    subnet_id                   = aws_subnet.public_subnet_1.id
  }

  tags = {
    Name = "nginx-launch-template"
  }
}

# Auto Scaling Group (ASG)
resource "aws_autoscaling_group" "frontend_asg" {
  desired_capacity     = 2
  max_size             = 3
  min_size             = 1
  # depends_on = [ 
  #   aws_launch_template.frontend_lt,
  #   aws_subnet.public_subnet_1,
  #   aws_subnet.public_subnet_2, 
  #   aws_subnet.public_subnet_3, 
  #   aws_lb_target_group.frontend_tg 
  #   ]

  launch_template {
    id      = aws_launch_template.frontend_lt.id
    version = "$Latest"
  }

  vpc_zone_identifier   = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id, aws_subnet.public_subnet_3.id]

  target_group_arns     = [aws_lb_target_group.frontend_tg.arn]

tag {
    key                 = "Name"
    value               = "nginx-asg-instance"
    propagate_at_launch = true

}
}

########## BACKEND RESSOURCES ########## 



########## CONFIGURATIONS ########## 

# # Datenquelle für Amazon Linux AMI (optional)
# data "aws_ami" "amazon_linux" {
#    most_recent      = true

#    filter {
#      name   = "name"
#      values = ["amzn2-ami-hvm-*-x86_64-gp2"]
#    }

#    owners           = ["amazon"]
# }

# # Um die IP-Adressen, der erstellen Instanzen für Ansible zu bekommen
# data "aws_instances" "frontend_instances" {
#   instance_tags = {
#     Name = "nginx-asg-instance" # Tag der Instanzen
#   }
# }

