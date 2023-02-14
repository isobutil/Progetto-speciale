# Progetto-speciale
##Informazioni preliminari e specifiche: 
Il codice sorgente del progetto è disponibile su GitHub al seguente link: https://github.com/isobutil/Progetto-speciale.git
E’ stato effettuato il deploy dell’applicazione (di cui sopra il codice sorgente) raggiungibile al seguente link: bit.ly/3RV3ljB
 
Il progetto è stato sviluppato utilizzando alcune dipendenze viste a lezione (come flask, flask_session) e integrato con dipendenze esterne per le esigenze del progetto.
Le dipendenze sono elencate in fondo al documento. 

Come da specifiche l’applicazione è pensata per essere visualizzata su dispositivi mobili. Nel caso di visualizzazione da browser è consigliabile utilizzare la modalità sviluppo scegliendo un dispositivo mobile come schermo (per lo sviluppo ho utilizzato come riferimento le dimensioni di iPhone SE). 

Il test dell’applicazione è stato fatto su browser dekstop Chrome Versione 109.0.5414.120 e su browser mobile Chrome versione 110.0.5481.64

L’applicazione è stata sviluppata utilizzando python 3.11 per il lato server

##Risultati attesi dal progetto: 
*Utilizzo di funzionalità CSS avanzate come approfondimento rispetto al corso di IAW quali: selector (::after, :hover, :focus), proprietà transform, e animazioni in CSS quali transition, animation, cursor e semplice gestione dei @keyframe. Le animazioni più semplici sono state gestite direttamente con il CSS. Anche il font è stato personalizzato importandolo da Google Font
*Utilizzo della libreria anime.js per gestire animazioni che richiedono una maggiore interazione con l’utente: è l’esempio del footer per la gestione degli accrediti, quando si preme sul bottone si apre il footer che riempie lo schermo
*Utilizzo di JS per la visualizzazione degli eventi: 
*Alla prima apertura la pagina del sito scorre visualizzando l’evento prossimo a venire basandosi sull’ora corrente (se ad esempio l’ora corrente è 13:14 il prossimo evento disponibile visualizzato sarà quello delle 13:30). Sono stati caricati degli esempi di prova ad intervalli di mezz’ora per permettere chiaramente la visualizzazione di questa funzionalità. Per questo caso la pagina propone gli eventi per un singolo giorno (in questo caso didattico sempre settato al giorno corrente). 
 La barra della timeline e le informazioni dell’evento si oscurano una volta che un evento è passato. Gli eventi passati rimangono comunque consultabili.
Utilizzo della libreria qrcode.js per la generazione del qrcode client-side (non memorizzato dunque su server) quando l’utente si accredita. L’utente accreditato visualizzerà il suo qr code tutte le volte che accede alla pagina poichè questo viene mantenuto mediante una sessione (implementata con flask_session)
Modale personalizzato per la visualizzazione del dettaglio di ogni evento. 
Informazioni utente e eventi memorizzati in database, la pagina si adatta in caso di aggiunta, modifica o rimozione di uno o più eventi.
Form personalizzato: è stato realizzato partendo da una libreria di form open surce e personalizzato all’esigenza. 

##Risultati ulteriori:
Generazione di hash utilizzando lalibreria py hashlib mediante algoritmo MD5: l’obiettivo è creare un hash univoco contenente le informazioni utente, hash che viene utilizzato come contenuto del qrcode. 

Deploy del progetto su pythonantwhere

##Dipendenze esterne: 
Server-side:
flask 
flask_session
sqlite3
hashlib

Client-side: 
dayjs.js 
customParseFormat.js: plugin di dayjs per la gestione personalizzata dei formati orari
anime.js
qrcode.js
