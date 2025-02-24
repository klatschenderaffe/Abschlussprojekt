#!/usr/bin/env python
# import boto3
# import json

# # Für die Frontend Instanzen
# def get_ec2_inventory(tag_name_value):
#     # Initialisiere die EC2-Ressource
#     ec2 = boto3.resource('ec2')

#     # Filter für Instanzen mit einem bestimmten Tag 'Name'
#     instances = ec2.instances.filter(
#         Filters=[
#             {
#                 'Name': 'tag:Name',
#                 'Values': [tag_name_value]  # Wert des Tags, nach dem gefiltert wird
#             }
#         ]
#     )

#     # Grundstruktur des Inventars
#     inventory = {
#         'webserver': {  # Definiere eine Gruppe namens "webserver"
#             'hosts': []
#         },
#         '_meta': {
#             'hostvars': {}
#         }
#     }

#     # Iteriere über die gefilterten Instanzen
#     for instance in instances:
#         # Überprüfe, ob die Instanz eine öffentliche IP-Adresse hat
#         if instance.public_ip_address:
#             inventory['webserver']['hosts'].append(instance.public_ip_address)
#             inventory['_meta']['hostvars'][instance.public_ip_address] = {
#                 'ansible_ssh_user': 'ubuntu',
#                 'ansible_ssh_private_key_file': '~/.ssh/private_key.pem'
#                 # Füge bei Bedarf weitere Variablen hinzu
#             }

#     return inventory

# if __name__ == "__main__":
#     # Geben Sie hier den gewünschten Tag-Wert ein (z. B. "web-server")
#     tag_name_value = "nginx-asg-instance"
#     inventory = get_ec2_inventory(tag_name_value)

#     # JSON-Ausgabe des Inventars mit Einrückung für bessere Lesbarkeit
#     print(json.dumps(get_ec2_inventory(tag_name_value), indent=4))


import boto3
import json

# Funktion zum Abrufen des EC2-Inventars basierend auf mehreren Tag-Werten
def get_ec2_inventory(tag_name_values):
    # Initialisiere die EC2-Ressource
    ec2 = boto3.resource('ec2')

    # Grundstruktur des Inventars
    inventory = {
        '_meta': {
            'hostvars': {}
        }
    }

    # Iteriere über die Tag-Werte und erstelle Gruppen
    for group_name, tag_name_value in tag_name_values.items():
        # Filter für Instanzen mit einem bestimmten Tag 'Name'
        instances = ec2.instances.filter(
            Filters=[
                {
                    'Name': 'tag:Name',
                    'Values': [tag_name_value]  # Wert des Tags, nach dem gefiltert wird
                }
            ]
        )

        # Initialisiere die Gruppe im Inventar
        if group_name not in inventory:
            inventory[group_name] = {'hosts': []}

        # Iteriere über die gefilterten Instanzen
        for instance in instances:
            # Überprüfe, ob die Instanz eine öffentliche IP-Adresse hat
            if instance.public_ip_address:
                inventory[group_name]['hosts'].append(instance.public_ip_address)
                inventory['_meta']['hostvars'][instance.public_ip_address] = {
                    'ansible_ssh_user': 'ubuntu',
                    'ansible_ssh_private_key_file': '~/.ssh/private_key.pem'
                    # Füge bei Bedarf weitere Variablen hinzu
                }

    return inventory

if __name__ == "__main__":
    # Definiere die Gruppen und ihre entsprechenden Tag-Werte
    tag_name_values = {
        'webserver': 'nginx-asg-instance',  # Gruppe "webserver" mit Tag-Wert "nginx-asg-instance"
        'backend': 'backend-asg-instance'  # Gruppe "backend" mit Tag-Wert "backend-asg-instance"
    }

    # Rufe das Inventar ab
    inventory = get_ec2_inventory(tag_name_values)

    # JSON-Ausgabe des Inventars mit Einrückung für bessere Lesbarkeit
    print(json.dumps(inventory, indent=4))
