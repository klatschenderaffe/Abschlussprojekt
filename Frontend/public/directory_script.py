import os
import json

# Pfad zum Verzeichnis, das die Ordner enthält
# blog_posts_dir = './BlogPosts'
current_dir = os.path.dirname(os.path.realpath(__file__))  # Pfad zum aktuellen Skript
blog_posts_dir = os.path.join(current_dir, 'BlogPosts')

# Liste für die Kategorien
categories = []

# Alle Ordner im Verzeichnis durchlaufen
for folder_name in os.listdir(blog_posts_dir):
    folder_path = os.path.join(blog_posts_dir, folder_name)
    
    # Überprüfen, ob es sich um ein Verzeichnis handelt
    if os.path.isdir(folder_path):
        # Erstelle das Kategoriedatenobjekt
        category = {
            'name': folder_name,
            'title': folder_name.replace('_', ' '),  # Ersetzt Unterstriche durch Leerzeichen
            'image': f'{folder_name}.png'  # Der Name des Bildes basiert auf dem Ordnernamen
        }
        categories.append(category)

# Die Daten als JSON-Datei speichern
output_file = './Frontend/public/categories.json'
with open(output_file, 'w', encoding='utf-8') as f:
    # ensure_ascii=False stellt sicher, dass Zeichen wie 'ä' nicht als Unicode-Escape-Sequenz gespeichert werden
    json.dump(categories, f, indent=4, ensure_ascii=False)

print(f"Kategorien wurden in {output_file} gespeichert.")