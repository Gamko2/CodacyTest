# Alekulator

Ein Taschenrechner als Hybride App


### Setup

Lade das Projekt mit einer Software deiner Wahl runter. In Sourcetree einfach den Repository link einfügen und auf PULL drücken.


### Entwickeln eines Features

Wenn du etwas zu dem Projekt beitragen möchtest dann musst du zunächst einen neuen Branch erstellen. Klicke dazu in Sourcetree oben auf "Branch". Lasse alle Einstellungen
so wie sie sind und gebe dem Branch einen passenden Namen (zB wie das Feature heißt). Nach einem klick auf OK sollte der Branch erstellt worden sein und du müsstest einen Punkt neben deinem ausgewählten Branch in der Branchliste sehen.

Entwickel dein Feature, vergiss aber nicht regelmäßig lokal zu committen. Solltest du zufrieden sein kannst du dein Projekt hochladen. Checke dazu unten den Haken für "Push changes immediatly to XXX"
In GitLab musst du danach einen Mergerequest starten. Wir werden diesen annehmen und das Projekt sollte nach  ~ 5 Minuten dann auf dem Webserver zu finden sein.


### Wie starte/teste ich die Website?

Um das Projekt testen zu können musst du [Node.JS](https://nodejs.org/en/) runtergeladen und installiert haben.

1. Zunächst einmal solltest du alle Projekt-Dateien runtergeladen haben. Gehe dann mit Hilfe der Kommandozeile in diesen Ordner rein.

2. Wenn du _**ls**_ eingibst solltest du package.json, einen WWW-Ordner und anderes sehen.

3. Danach müssen zunächst alle Dependencies runtergeladen werden. Gebe dazu in die Kommandozeile _**npm install**_ ein.

4. Danach führe _**npm run local**_ in der Kommandozeile aus.

5. Die Website kannst du nun im Browser unter http://localhost:8081 sehen.
6. 

### Wie Schreibe ich die Tests?

1. Werdet vertraut mit unserem Testing Framework Jest: https://facebook.github.io/jest/docs/en/getting-started.html
2. Falls ihr noch kein $ npm install ausgeführt habt solltet ihr dies nun tun, um die benötigen Dependencies zu installieren
3. Eure Tests werdet ihr in der app.test.js Datei schreiben, welche sich im Root Verzeichnis des Projekts befindet.
4. Es werden IMMER zuerst die Tests geschrieben, bevor das Feature selber implementiert wird (Test Driven Development)
5. Sobald ihr euren Test fertig geschrieben habt geht in das Root Verzeichnis des Projekts und schreibt $ npm test  
6. Falls eure Tests erfolgreich waren könnt ihr eure Ergebnisse pushen.
