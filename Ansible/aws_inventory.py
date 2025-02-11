#!/usr/bin/env python
import boto3
import json

def get_ec2_inventory(tag_name_value):
    # Initialisiere die EC2-Ressource
    ec2 = boto3.resource('ec2')

    # Filter für Instanzen mit einem bestimmten Tag 'Name'
    instances = ec2.instances.filter(
        Filters=[
            {
                'Name': 'tag:Name',
                'Values': [tag_name_value]  # Wert des Tags, nach dem gefiltert wird
            }
        ]
    )

    # Grundstruktur des Inventars
    inventory = {
        '_meta': {
            'hostvars': {}
        }
    }

    # Iteriere über die gefilterten Instanzen
    for instance in instances:
        # Überprüfe, ob die Instanz eine öffentliche IP-Adresse hat
        if instance.public_ip_address:
            inventory['_meta']['hostvars'][instance.public_ip_address] = {
                'ansible_ssh_user': 'ubuntu',
                'ansible_ssh_private_key_file': '~/.ssh/private_key.pem'
                # Füge bei Bedarf weitere Variablen hinzu
            }

    return inventory

if __name__ == "__main__":
    # Geben Sie hier den gewünschten Tag-Wert ein (z. B. "web-server")
    tag_name_value = "nginx-asg-instance"

    # JSON-Ausgabe des Inventars mit Einrückung für bessere Lesbarkeit
    print(json.dumps(get_ec2_inventory(tag_name_value), indent=4))
