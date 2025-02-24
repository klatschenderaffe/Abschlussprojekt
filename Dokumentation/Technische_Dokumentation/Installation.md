Diese Anleitung führt Sie durch den Prozess der Installation und Einrichtung unserer Software.

### Systemanforderungen
- Lokal
- GitHub-Konto

- Webbrowser

- Visual Studio Code

- MongoDB-Konto

- Mapbox-Konto

- Docker Container
- Docker

### Über AWS
- AWS-Konto

### Schritt-für-Schritt-Installationsanleitung
- Lokale Installation
- Forken Sie das Repository.

- Öffnen Sie das Repository in Visual Studio Code.

**Installieren Sie die Frontend-Abhängigkeiten:**

- bash
- cd frontend
- npm install

**Installieren Sie die Backend-Abhängigkeiten:**

- bash
- cd ../backend
- npm install
- Erstellen Sie eine MongoDB-Datenbank und speichern Sie den URI-Link in einer .env-Datei im Backend-Verzeichnis.

**Starten Sie den Backend-Server:**

- bash
- node server.js
- Wechseln Sie zurück zum Frontend-Verzeichnis:

- bash
- cd ../frontend

### Besorgen Sie einen Mapbox-Schlüssel und speichern Sie diesen in einer .env-Datei im Frontend-Verzeichnis. 

*Achten Sie darauf, dass der Schlüssel mit VITE_ beginnt.*

Erstellen Sie einen Web3Forms API-Token und speichern Sie diesen ebenfalls in der .env-Datei. 

*Auch hier auf VITE_ achten.*

### Starten Sie den Frontend-Server:

- bash
- npm run dev
- Öffnen Sie http://localhost:3001 in Ihrem Browser.

### Abhängigkeiten:

Alle notwendigen Abhängigkeiten werden automatisch durch den npm install Befehl installiert.

**Installationsmethoden:**

- Lokal auf dem Rechner (wie oben beschrieben)

- Über Docker Container

- Mit Terraform über EC2-Instanzen

### Konfiguration:
Nach der Installation müssen Sie sicherstellen, dass alle Umgebungsvariablen korrekt gesetzt sind. Überprüfen Sie die .env-Dateien im Frontend- und Backend-Verzeichnis.

### Fehlerbehebung:

- Falls der Backend-Server nicht startet, überprüfen Sie die MongoDB-Verbindung und den URI in der .env-Datei.

- Bei Problemen mit dem Frontend, stellen Sie sicher, dass der Mapbox-Schlüssel und der Web3Forms API-Token korrekt in der .env-Datei hinterlegt sind.

### Verifikation:

**Um zu überprüfen, ob die Installation erfolgreich war:**

- Der Backend-Server sollte ohne Fehlermeldungen starten.

- Die Frontend-Anwendung sollte unter http://localhost:3001 erreichbar sein und keine Konsolenfehler aufweisen.

### Deinstallation:

**Um die Software zu deinstallieren:**

- Stoppen Sie alle laufenden Server-Prozesse.

- Löschen Sie die Projektverzeichnisse.

- Entfernen Sie die MongoDB-Datenbank, falls nicht mehr benötigt.

- Löschen Sie die Umgebungsvariablen und API-Schlüssel aus Ihren Konten.