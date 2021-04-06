resource "aws_db_subnet_group" "private" {
    name = "guru-bbq-db-subnet-group-private"
    subnet_ids = [aws_subnet.guru-subnet-private-1.id, aws_subnet.guru-subnet-private-2.id]
}

resource "aws_db_instance" "default" {
  allocated_storage    = 20
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  name                 = "guru-bbq-db"
  username             = var.username
  password             = var.password
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
  apply_immediately = true
  db_subnet_group_name = aws_db_subnet_group.private.id 
  publicaly_accessible = false
  vpc_security_group_ids = [aws_security_group.allow-internal.id]
}