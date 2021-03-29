provider "aws" {
  region = "us-east-2"
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_KEY
}

resource "aws_vpc" "guru-vpc" { 
  cidr_block = "10.0.0.0/16"
}

resource "aws_internet_gateway" "guru-aig" {
  vpc_id = aws_vpc.guru-vpc.id
}

resource "aws_route_table" "guru-route" {
  vpc_id = aws_vpc.guru-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.guru-aig.id
  }

  route {
    ipv6_cidr_block        = "::/0"
    gateway_id = aws_internet_gateway.guru-aig.id
  }
}

resource "aws_subnet" "guru-subnet-public" {
  vpc_id     = aws_vpc.guru-vpc.id
  cidr_block = "10.0.0.0/24"
  availability_zone = "us-east-2a"

  tags = {
    Name = "Guru_Public"
  }
}

resource "aws_subnet" "guru-subnet-private-1" {
  vpc_id     = aws_vpc.guru-vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-2a"

  tags = {
    Name = "Guru_Private_1"
  }
} 

resource "aws_subnet" "guru-subnet-private-2" {
  vpc_id     = aws_vpc.guru-vpc.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-east-2b"

  tags = {
    Name = "Guru_Private_2"
  }
} 

resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.guru-subnet-public.id
  route_table_id = aws_route_table.guru-route.id
}

resource "aws_security_group" "allow-web" {
  name        = "allow_web_traffic"
  description = "Allow Web inbound traffic"
  vpc_id      = aws_vpc.guru-vpc.id

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_web"
  }
}

resource "aws_network_interface" "guru-nic" {
  subnet_id       = aws_subnet.guru-subnet-public.id
  private_ips     = ["10.0.1.50"]
  security_groups = [aws_security_group.allow-web.id]

#   attachment {
#     instance     = aws_instance.test.id
#     device_index = 1
#   }
}

resource "aws_eip" "guru-eip" {
  network_interface = aws_network_interface.guru-nic.id
  private_ips = "10.0.1.50"
  vpc      = true
  depends_on = [aws_internet_gateway.guru-aig]
}

resource "aws_instance" "guru-server-instance" {
    ami = "ami-08962a4068733a2b6"
    instance_type = "t2.micro"
    availability_zone = "us-east-2a"
    key_name = "main-guru"

    network_interface {
        device_index = 0
        network_interface_id = aws_network_interface.guru-nic.id
    }

}

# user_data = <<-EOF
        #!/bin/bash
