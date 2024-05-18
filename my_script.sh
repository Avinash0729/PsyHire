#!/bin/bash

# Change directory and activate the virtual environment
cd /root/psy_backend_testing/ && source env/bin/activate && python manage.py makemigrations && python manage.py migrate
systemctl restart psy_development_testing.service

# Run your desired command
python manage.py migrate
