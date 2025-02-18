Hier findest Du alle Schritte für eine Installations.md-Datei für unser React-Projekt. 

# Installation

Diese Anleitung beschreibt, wie du ein React-Projekt einrichtest und startest.

## Voraussetzungen

Stelle sicher, dass die folgenden Programme auf deinem Computer installiert sind:
- **Node.js** (empfohlen: neueste LTS-Version)
- **npm** (wird mit Node.js geliefert)

### Du kannst überprüfen, ob Node.js und npm installiert sind, indem du die folgenden Befehle in deinem Terminal ausführst:
node -v
npm -v


Falls nicht installiert, lade Node.js von [https://nodejs.org](https://nodejs.org) herunter.

---

## Projekt erstellen

### Mit Create React App (empfohlen)
1. Öffne dein Terminal.
2. Führe den folgenden Befehl aus, um ein neues React-Projekt zu erstellen:
npx create-react-app my-app


Ersetze `my-app` durch den gewünschten Namen deines Projekts.

3. Wechsel in das Projektverzeichnis:
cd my-app

4. Starte den Entwicklungsserver:
npm start


Dein Browser öffnet automatisch `http://localhost:3000`, wo deine React-App läuft.

---

## Alternativ: Mit Vite (für schnellere Builds)

1. Installiere Vite mit folgendem Befehl:
npm create vite@latest my-app -- --template react


2. Navigiere in das Projektverzeichnis:
cd my-app


3. Installiere die Abhängigkeiten:
npm install


4. Starte den Entwicklungsserver:
npm run dev


Deine App wird unter `http://localhost:5173` verfügbar sein.

---

## Projektstruktur

Nach der Erstellung des Projekts sieht die Verzeichnisstruktur wie folgt aus:

my-app/

├── node_modules/ # Abhängigkeiten des Projekts
├── public/ # Statische Dateien wie index.html
├── src/ # Quellcode der Anwendung
│ ├── App.js # Hauptkomponente der App
│ ├── index.js # Einstiegspunkt der App
│ └── ...
├── .gitignore # Dateien, die von Git ignoriert werden sollen
├── package.json # Projektkonfiguration und Abhängigkeiten
└── README.md # Automatisch generierte README-Datei



---

## Zusätzliche Konfiguration

### Umgebungsvariablen hinzufügen

Falls du Umgebungsvariablen benötigst, erstelle eine `.env`-Datei im Stammverzeichnis deines Projekts und füge Variablen wie folgt hinzu:

REACT_APP_API_URL=https://api.example.com



**Hinweis:** Alle Umgebungsvariablen müssen mit `REACT_APP_` beginnen, damit sie in React verfügbar sind.

---

## Nützliche Befehle

- **Entwicklungsserver starten**:  
npm start


Öffnet die App unter `http://localhost:3000`.

- **Tests ausführen**:  
npm test



- **Produktions-Build erstellen**:  
npm run build

t
Erstellt optimierte Dateien im Ordner `build/`.

---

## Fehlerbehebung

Falls Probleme auftreten:
1. Stelle sicher, dass Node.js und npm korrekt installiert sind.
2. Lösche den Ordner `node_modules` und die Datei `package-lock.json`, und installiere die Abhängigkeiten erneut:
rm -rf node_modules package-lock.json
npm install



3. Überprüfe die Logs im Terminal auf spezifische Fehlermeldungen.

---

Viel Erfolg bei deinem Projekt!