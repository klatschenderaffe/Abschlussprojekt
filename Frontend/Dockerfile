## Dockerfile 
######################################## 
## BUILD-UMGEBUNG ############ 
################################# 

# Verwenden Sie das offizielle Node.js Alpine-Image (passen Sie es an die Anforderungen Ihres Projekts an) 
# Sie finden das entsprechende Image auf Docker Hub: https://hub.docker.com/_/node 
# In diesem Beispiel verwenden wir node:20-alpine3.20 
# Führen Sie in der Terminalbefehlzeile „node --version aus, um die Version Ihrer App abzurufen“ 
FROM  node:20-alpine3.20  As  build 

# Legen Sie das Arbeitsverzeichnis innerhalb des Containers fest 
WORKDIR  /usr/src/app 

# Kopieren Sie package.json und package-lock.json in den Container 
COPY  package*.json  package-lock.json  ./ 

# Installieren Sie Abhängigkeiten mit npm. 
RUN  npm  ci 

# Kopieren Sie die Projektdateien in das Arbeitsverzeichnis. 
COPY  ./  ./ 

# Erstellen Sie die React-App für die Produktion. 
RUN  npm  run  build 

##################################### 
#### PRODUKTIONSUMGEBUNG #### 
################################### 

# Verwenden Sie das offizielle NGINX-Image für die Produktion. 
FROM  nginx:stable-alpine  AS  production 

# Kopieren Sie die Nginx-Konfiguration in den Nebenordner conf.d. 
COPY  --from=build  /usr/src/app/nginx  /etc/nginx/conf.d 

# Kopieren Sie die Build-Ausgabe aus dem Ordner „dist“ in das Nginx-HTML-Verzeichnis. 
COPY  --from=build  /usr/src/app/dist  /usr/share/nginx/html 

# Legen Sie den Port frei. 80 um Zugriff auf die App zu ermöglichen 
EXPOSE  80 

# Führen Sie Nginx im Vordergrund aus 
ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]