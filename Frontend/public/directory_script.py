# import os
# import json

# # Pfad zum Verzeichnis, das die Ordner enthält
# # blog_posts_dir = './BlogPosts'
# current_dir = os.path.dirname(os.path.realpath(__file__))  # Pfad zum aktuellen Skript
# blog_posts_dir = os.path.join(current_dir, 'BlogPosts')

# # Liste für die Kategorien
# categories = []

# # Alle Ordner im Verzeichnis durchlaufen
# for folder_name in os.listdir(blog_posts_dir):
#     folder_path = os.path.join(blog_posts_dir, folder_name)
    
#     # Überprüfen, ob es sich um ein Verzeichnis handelt
#     if os.path.isdir(folder_path):
#         # Erstelle das Kategoriedatenobjekt
#         category = {
#             'name': folder_name,
#             'title': folder_name.replace('_', ' '),  # Ersetzt Unterstriche durch Leerzeichen
#             'image': f'{folder_name}.png'  # Der Name des Bildes basiert auf dem Ordnernamen
#         }
#         categories.append(category)

# # Die Daten als JSON-Datei speichern
# output_file = './Frontend/public/categories.json'
# with open(output_file, 'w', encoding='utf-8') as f:
#     # ensure_ascii=False stellt sicher, dass Zeichen wie 'ä' nicht als Unicode-Escape-Sequenz gespeichert werden
#     json.dump(categories, f, indent=4, ensure_ascii=False)

# print(f"Kategorien wurden in {output_file} gespeichert.")

import os
import json

current_dir = os.path.dirname(os.path.realpath(__file__))  # Pfad zum aktuellen Skript
blog_posts_dir = os.path.join(current_dir, 'BlogPosts')

# Liste für die Kategorien
categories = []

# Alle Ordner im Verzeichnis durchlaufen
for folder_name in os.listdir(blog_posts_dir):
    folder_path = os.path.join(blog_posts_dir, folder_name)
    
    # Überprüfen, ob es sich um ein Verzeichnis handelt
    if os.path.isdir(folder_path):
        # Erstelle das Kategoriedatenobjekt für die Kategorie
        category = {
            'name': folder_name,
            'title': folder_name.replace('_', ' '),  # Ersetzt Unterstriche durch Leerzeichen
            'image': f'../../assets/{folder_name}.png'  # Der Name des Bildes basiert auf dem Ordnernamen
        }
        categories.append(category)

        # Jetzt die Markdown-Dateien im Ordner durchlaufen
        markdown_files = []

        for file_name in os.listdir(folder_path):
            # Überprüfen, ob die Datei eine Markdown-Datei ist
            if file_name.endswith('.md'):
                markdown_files.append(file_name)

        # JSON-Datei für die Markdown-Dateien in diesem Ordner erstellen
        markdown_titles_file = os.path.join(folder_path, 'files.json')

        with open(markdown_titles_file, 'w', encoding='utf-8') as f:
            json.dump(markdown_files, f, indent=4, ensure_ascii=False)

        print(f"Markdown-Dateien in {folder_name} wurden in {markdown_titles_file} gespeichert.")

# Die Kategorien-Daten als JSON-Datei speichern
output_file = './Frontend/public/categories.json'
with open(output_file, 'w', encoding='utf-8') as f:
    # ensure_ascii=False stellt sicher, dass Zeichen wie 'ä' nicht als Unicode-Escape-Sequenz gespeichert werden
    json.dump(categories, f, indent=4, ensure_ascii=False)

print(f"Kategorien wurden in {output_file} gespeichert.")