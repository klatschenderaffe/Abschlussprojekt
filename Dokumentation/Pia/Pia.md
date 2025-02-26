> 25.02.2025

# Tag 20:

### Alleine:

- docker compose erstellt.
- Frontend mit dem backend verbunden.
- viel Fehlersuche
- localhost auf van-ventura geaendert.
- nginx.conf angepasst.

### Alle zusammen:

- Fehlersuche

---

> 24.02.2025

# Tag 19:

### Alleine:

- BlogPost nach Kategorien sortiert.
- Python Script geschrieben (mit Sophie) welches mir neue Ordner und die darin enthaltene JSON Datei dynamisch erzeugt.
- Viele kleine Fehler ausgebügelt.
- BlogPosts überarbeitet.
- Kleinigkeiten an der Präsentation bearbeitet.
- Ansible Playbook für Backend Container vorbereitet.

---

> 23.02.2025

# Tag 18:

### Alleine:

- Link um die BlogPosts einzubinden gefunden: [Markdown aus einem Ordner Rendern](https://medium.com/@dimterion/react-markdown-examples-372fa1b21c0c).
- React Markdown eingebunden.
- json File mit den Titeln der Jeweiligen Kategorie der BlogPosts Ordner im public Ordner hinzugefügt.
- BlogDetails geändert
- BlogList -> für jeden Eintrag im jeweiligen Ordner eine li Komponente erstellen lassen.
- ToDo Liste geschrieben: ![Logik BlogPosts](./Bilder/BlogPost-Ablauf.jpeg)

---

> 22.02.2025

# Tag 17:

### Alleine:

- Title der Blogseite wird Dynamisch angepasst.
- BlogPosts sortiert.
- 2 weitere Kategorien hinzugefügt.
- Meine Präsentationsseiten nochmals überarbeitet.
- Präsentations Notizen überarbeitet.
- Playbook fürs Backend vorbereitet.
- Infrastructure.yml Workflow für Backend vorbereitet.
- Inventory File in eine zweite Gruppe unterteilen lassen.

---

> 21.02.2025

# Tag 16:

### Alleine:

- Angefangen Logik für JS Logik zu erdenken.
  ![Logik aufzeichnung](./Bilder/logik-js.png)

### Alle zusammen:

- Präsentation abgewandelt.
- Präsentation durchgesprochen vor Sophie.

---

> 20.02.2025

# Tag 15:

### Alleine:

- Neue Notizen zu meinen neuen Folien gemacht.
- Recherche MongoDB Container

### Alle zusammen:

- Präsentation gehalten
- Feedback durchgelesen
- Präsentation geändert.

---

> 19.02.2025

# Tag 14:

### Alleine:

- Navbar in vor und nach Login aufgeteilt.
- Notizen zu meinen Folien innerhalb der Präsentation geschrieben.
- Anmelden Button getyled.
- Private Routen erstellt.
- Private Routen wieder auskommentiert.
- Recherche wie Private Routen und Cognito zusammen funktionieren.
- Neuen Userpool erstellt, um Dopplungen in der Registrierungsmaske zu entfernen.

### Alle zusammen:

- Präsentation eingeteilt.
- Präsentation Probedurchlauf.
- Recherche Blog Logik.

---

> 18.02.2025

# Tag 13:

### Alleine:

- Mit Dimitar auf Fehlersuche warum LogOut unter AWS nicht funktioniert.
- Fehler weitestgehend behoben.

---

> 17.02.2025

# Tag 12:

### Alleine:

- Cognito dem Code hinzugefügt.
- Secrets aus Cognito in Workflow env hinzugefügt.
- Secrets im Repo ergänzt.
- Cognito Anmeldungseite angepasst.
- Aufgaben in unserem Dashboard richtig eingepflegt.
- gitignore in Backend ergänzt.
- Workflow Dateien umbenannt.
- Neuen Workflow hinzugefügt.
  - Backend Image erstellen
  - MONGO_URI in den Secrets in Github gespeichert.
- Dokumentations Stichworte aufgeschrieben, dass Martina morgen eine Aufgabe hat:
  ![Screenshot aus unserem Dashboard](./Bilder/Stichpunkte.png)
- Aufgabe im Dashboard durchgegangen und gegebenfalls Unteraufgaben ergänzt.
- Job test wieder entkommentiert.
- BlogPosts ins Repo eingefügt, das diese bei Bedarf in einem S3 Bucket gespeichert werden können.
- Terraform destroy durchgeführt.

### Alle zusammen:

- Präsentation angefangen.
- Gliederung besprochen.

---

> 15.02.2025

# Tag 11:

### Alleine:

- Video Cognito Implementierung in React geschaut.
- Gute Video Reihe gefunden. [Cognito implementierung einfach erklärt](https://www.youtube.com/watch?v=8WZmIdXZe3Q&t=45s)

---

> 14.02.2025

# Tag 10:

### Alleine:

- SSL Zertifikat dem Load Balancer hinzugefügt.
- Listener auf HTTPS umgestellt.
- In Route53 einen neuen CNAME Datensatz hinzugefügt.
- Terraform angepasst.
  - WICHTIG: Nach einem neuen Apply muss in Route53 ein Datensatz zu dem neu erstellten Load Balancer hinzugefügt werden.
- Recherche wie Blog umsetzen.
- Videos angeschaut um AWS Cognito zu verstehen. [Cognito Infos](https://www.youtube.com/watch?v=peiv4qbV0Y8), [Cognito und Node.js](https://www.youtube.com/watch?v=Mvcv-AM23R4)

---

> 13.02.2025

# Tag 9:

### Alleine:

- Appbrewery Course für Authentication gestartet
- Mit Dimitar durch die Fehlermeldungen bei Cognito durch gegangen.
- Domain gekauft.
- SSL Zertifikat für die Domain van-ventura.eu über den Certificate Manager in Auftrag gegeben.
  - Warte noch auf Validierung
    ![Screenshot Certificate Manager](./Bilder/validate_SSL.png)
- Register Form geschrieben
- Recherche Domain mit ELB verbinden
- Domain mit Elastic Load Balancer über den Datensatz verbunden.

---

> 12.02.2025

# Tag 8:

### Alleine:

- Frontend aufbau der Blogs erstmal provisorisch fertig gestellt.
- Fehlersuche ansible script.
- Ansible Funktionsfähig eingebunden
- Cognito Plan über den Haufen geworfen - wird die nächsten Tage händisch geschrieben.
  - will zwingend SSL Zertifikat
- Private Routen in React gesetzt.
- Videos zur Authentication geschaut um mir einen Überblick zu geben.
- Aufgaben für meine Teammitglieder gesucht.

---

> 11.02.2025

# Tag 7:

### Alleine:

- mit Sophie überlegt, wie ich die Integration mit Cognito am besten umsetzten kann, dann auf weitere Probleme gestoßen
  - Cognito braucht eine URL an die es nach dem LogIn verweißt, diese ändert sich momentan aber dauerhaft, da wir momentan noch mit Userdata arbeiten und um ein neues Image auf die Instanzen laden zu können, müssen diese gelöscht und neu hergestellt werden
    - LÖSUNG: Python Script um die IP-Adressen dynamisch abfragen zu können.
  - Um die Routen nicht öffentlich zugänglich zu machen, sollten diese als Private Routen in React-Router-DOM eingefüt werden.
- Zu beiden Problemen habe ich Links bekommen und arbeite mich durch.
  - Ansible Scripts geschrieben und ausprobiert
    - mittlerweile bin ich soweit, das er lokal die IP-Adressen erkennt nur im Workflow noch nicht.
    - Playbook ist auch soweit geschrieben
    - Workflow ist abgeändert

---

> 10.02.2025

# Tag 6:

### Alleine:

- Weitere ToDos für das Projekt in Notion gesammelt
- Mit der Implementierung von Cognito vertraut gemacht
- React Router DOM Implementiert und React Scroll durch React Router DOM ersetzt.
- Eigene Impressum Seite verlinkt.
- Problem bei der CI/CD Pipeline entdeckt.
  - Wenn die Container über die Userdata laufen, dann wir immer nur beim erstellen der EC2 Container das passende Image überspielt. Das heißt man müsste mit jeder Änderung dafür sorgen, das ein Terraform destroy und anschließend wieder ein Apply ausgeführt wird. - Ich bin noch dabei eine andere Lösung zu finden.
- Provisorische LogIn Seite erstellt
  ![Screenshot Login Form](./Bilder/login.png)
- Angefangen die Seite nach dem Login zu schreiben.
  ![Screenshot Welcome Page](./Bilder/welcomepage.png)

### Alle zusammen:

- Fehlersuche

---

> 07.02.2025

# Tag 5:

### Alleine:

- envs in Secrets gespeichert und geschaut, dass die Map auf den Instanzen angezeigt werden.
  ![Screenshot VanVentura](./Bilder/map-func.png)
- die Auslösung der Workflows überarbeitet.
- AWS Cognito Videos geschaut

### Alle zusammen:

- uns mit Vitest auseinander gesetzt.
- Tests geschrieben und ausprobiert.

---

> 06.02.2025

# Tag 4:

### Alleine:

- Recherche `depends_on` für terraform.
- Terraform apply auslösung auf push wieder eingefügt.
- `depends_on` in Terraform ergänzt.
- Terraform apply und Terraform destroy laufen nun fehlerfrei durch
- Probiert herauszufinden warum meine Instanzen als "unhealthy" gekennzeichnet sind.
  - Händisch die Schritte der Userdata nachgegangen, dabei herausgefunden, dass es docker nicht mehr so leicht auf dem apt Paketmanager verfügbar ist also musste ich die `Userdata.tpl` umändern.
  - Routing Tabelle von Subnet 3 nachgetragen.
- VanVentura Seite ohne Map zum auf den EC2 Instanzen zum laufen gebracht. Beide Instanzen sind Healthy und der DNS Link des LoadBalancer läuft auch.
  ![Screenshot VanVentura](./Bilder/vanventura-screenshot.png)
- Amazon Cognito Recherche.
- README.md Technologien ergänzt

---

> 05.02.2025

# Tag 3:

### Alleine:

- AWS Benutzer "Bob" erstellt, um dauerhafte Zugriffsschlüssel zu bekommen.
- Ansible aus dem Workflow auskommentiert
- dem Launch Template UserData hinzugefügt um direkt auf den Instanzen einen Docker Container laufen zu lassen.
- Den Fehler der Credentials von AWS in den Workflows gelöst.
- "Bob" die passenden Berechtigungen erteilt.
- Instanzen die durch die Auto-Scaling-Group erstellt werden Öffentliche IP-Adressen frei gegeben.
- Terraform apply verändert, das es nur noch auf den Push ausgelöst wird.
- Versucht die Infrastruktur wieder zu destroyen, Leider mit Fehlermeldungen.
  ![Fehlermeldung bei destroyen der Infrastruktur](./Bilder/destroy-fail.png)
- Terraform Apply auf Push auskommentiert, das ich mich erstmal um die Fehlermeldungen bei Terraform destroy kümmern kann.

### Alle zusammen:

- wenn es kleinere Fehler oder Probleme gab uns gegenseitig unterstützt.

---

> 04.02.2025

# Tag 2:

### Alleine:

- Terraform Fehler korrigiert
  - noch vorhanderer Fehler IP-Adressen werden nicht in die inventory.ini File geschrieben (Es gibt keinen richitigen Output der IP-Adressen). Ohne diesen Fehler läuft die Pipeline aber mittlerweile Fehlerfrei durch.
- Ansible Code verbessert und auf Fehlersuche
- Workflows angepasst
- Viele verschiedenst Varianten der Fehlerbehbung ausprobiert.

### Alle zusammen:

- Aufgaben verteilt
- Erste Gedanken über das Vorher innerhalb der Präsentation ( Ausgangslage )

---

> 03.02.2025

# Tag 1:

### Alleine:

- vorhandene VanVentura Dateien in dieses Repo kopiert.
- Mit Github Actions angefangen.
  - Recherche für die `Dockerfile` unter Vite.
  - `Dockerfile` und `.dockerignore` erstellt.
  - Workflows an den jetzigen Stand angepasst, was noch nicht benutzt wird auskommentiert.
  - Recherche tests ausführen unter Vite.
  - Für Vitest alles vorbereitet.
  - Terraform Dateien erstellt.
  - Ansible Dateien hinzugefügt.
  - Übergangslösungen gefunden, um die Pipeline testen zu können, trotz fehlendem Backend.
    - Die `Sleepspots.json` innerhalb eines `data` Ordners im `frontend/src` Ordner
  - Secrets dem Repo hinzugefügt

### Alle zusammen:

- Planung fortgesetzt
  ![Projektplanung](./Bilder/projektAufbau.png)
- Aufgaben verteilt
  ![Dashboard Notion](./Bilder/tasks.png)

---

#### Vorlage:

> DATUM

# Tag ?:

### Alleine:

### Alle zusammen:

---
