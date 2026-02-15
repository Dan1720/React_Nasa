# NASA Image Gallery
NASA Image Gallery è una Single Page Application sviluppata in **React + Vite** che consente agli utenti di cercare e visualizzare immagini provenienti dalle **API della NASA**. 

## Funzionalità principali
- Visualizzazione dell'immagine del giorno con relativa descrizione
- Ricerca immagini tramite parola chiave
- Visualizzazione del dettaglio di una singola immagine
- Gestione degli errori

## Pattern Architetturale
L'applicazione implementa il pattern architetturale **MVVM (Model View ViewModel)** al fine di separare la logica di accesso ai dati, la logica di coordinamento e l’interfaccia utente e per favorire il riutilizzo del codice.


### Model
I Models, contengono la logica di accesso ai dati ed interagiscono con le API esterne. In questo software l'implementazione è stata sviluppata all'interno dei seguenti files:
- **NasaModelAPOD**: utilizza l'API per ottenere l'immagine giornaliera.
```bash
   endpoint: https://api.nasa.gov/planetary/apod
```
- **NasaImageLibrary**: utilizza l'API sia per ottenere la lista di immagini in base alla query, sia per restituire un'immagine dato l'identificativo.
```bash
   endpoint: https://images-api.nasa.gov/
```

### View
Le Views sono responsabili della struttura dell'interfaccia utente e della presentazione dei dati. Sono composte da pagine principali e componenti riutilizzabili.
#### Pagine principali
- **App.jsx** - gestione del layout principale e del sistema di routing.
- **Home.jsx** - visualizzazione dell'immagine giornaliera (APOD).
- **Gallery.jsx** - visualizzazione della galleria.
#### Componenti riutilizzabili
- **Template principale** - definisce la struttura base dell'applicazione includendo Navbar, Footer e il contenuto dinamico (children).  
- **Navbar** - barra di navigazione che consente lo spostamento tra le sezioni (Home e Gallery)
- **Footer** - sezione inferiore dell’interfaccia che presenta il logo della NASA, a indicare la provenienza delle immagini e dei contenuti mostrati nell’applicazione.
- **Card immagini** - componente riutilizzabile per la visualizzazione sintetica delle immagini nella galleria
- **Dettaglio immagini** - mostra le informazioni complete di una singola immagine selezionata
- **NotFound** - componente visualizzato in caso di rotta non valida

### ViewModel
Il ViewModel ha il compito di connettere il Model e le View, gestendo lo stato dell'applicazione e coordinando le operazioni asincrone.

In particolare si occupano di:
- gestire lo stato dei dati, di caricamento e gestire eventuali errori
- coordinare le chiamate alle API della NASA
- aggiorna automaticamente i dati quando cambia la query di ricerca, grazie all’utilizzo di hook reattivi (**useEffect**).

Sono presenti tre ViewModel principali:
- **useNasaAPODViewModel** - recupera e gestisce l'immagine del giorno.
- **useNasaLibraryViewModel** - gestisce la ricerca e la lista delle immagini.
- **useNasaImageDetailViewModel** - recupera i dati di una singola immagine tramite identificativo.

## Possibili miglioramenti
- Attualmente viene utilizzato un debounce manuale con lodash; in futuro si potrebbe implementare una gestione più avanzata tramite hook personalizzato o libreria dedicata.
- Utilizzo di [Auth0](https://auth0.com/) per l'autenticazione e salvataggio delle immagini preferite.

## Tecnologie utilizzate
- React
- Vite
- React Router
- Bootstrap
- [NASA Open APIs](https://api.nasa.gov/)

## Installazione e avvio
Per eseguire il progetto in locale:
1. Clonare il repository:
```bash
   git clone https://github.com/Dan1720/React_Nasa.git
```
2. Entrare nella cartella del progetto:
```bash
   cd React_Nasa
```
3. Installare le dipendenze:
```bash
   npm install
```
4. Avviare il server di sviluppo:
```bash
   npm run dev
```
L'appicazione sarà disponibile all'indirizzo indicato nel terminale.

Il progetto utilizza le NASA Open APIs. Se necessario, inserire la propria API Key nel file di configurazione <em>.env</em>:
```bash
   VITE_NASA_API_KEY=your_api_key_here
```

È disponibile una build al seguente indirizzo: [https://dan1720.github.io/React_Nasa/](https://dan1720.github.io/React_Nasa/)

