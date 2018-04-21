# Alekalculator

Ein Taschenrechner als Hybride App

### Setup

Lade das Projekt mit einer Software deiner Wahl runter. In Sourcetree einfach den Repository link einfügen und auf PULL drücken.


### Entwickeln eines Features

Wenn du etwas zu dem Projekt beitragen möchtest dann musst du zunächst einen neuen Branch erstellen. Klicke dazu in Sourcetree oben auf "Branch". Lasse alle Einstellungen
so wie sie sind und gebe dem Branch einen Namen. Nach einem klick auf OK sollte der Branch erstellt worden sein und du müsstest einen Punkt neben deinem ausgewählten Branch in der Branchliste sehen.

Entwickel dein Feature, vergiss aber nicht regelmäßig lokal zu committen. Solltest du zufrieden sein kannst du dein Projekt hochladen. Checke dazu unten den Haken für "Push changes immediatly to XXX"
In GitLab musst du danach einen Mergerequest starten. Wir werden diesen annehmen und das Projekt sollte nach  ~ 5 Minuten dann auf dem Webserver zu finden sein.


### Wie starte/teste ich das Projekt

Um das Projekt testen zu können musst du Node.JS runtergeladen und installiert haben.

1. Zunächst einmal solltest du alle Projekt-Dateien runtergeladen haben. Gehe dann mit Hilfe der Kommandozeile in diesen Ordner rein. 

2. Wenn du _**ls**_ eingibst solltest du package.json, einen WWW-Ordner und anderes sehen. 

3. Danach müssen zunächst alle Dependencies runtergeladen werden. Gebe dazu in die Kommandozeile _**npm install**_ ein.

4. Ändere mit einem Textprogramm die Datei package.json. Ändere den Eintrag _**"serve": "http-server ./www/ -o -c 1 -a"**_ in _**"serve": "http-server ./www/ -o -c 1 -a localhost"**_

5. Danach führe _**npm run serve**_ in der Kommandozeile aus.

6. Die Website kannst du nun im Browser unter http://localhost:8081 sehen.