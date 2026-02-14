# NASA Image Gallery
NASA Image Gallery è una Single Page Application sviluppata in **React + Vite** che consente agli utenti di cercare e visualizzare immagini provenienti dalle **API della NASA**. 

L'applicazione implementa il pattern architetturale **MVVM (Model View ViewModel)** per la separazione delle responsabilità e riutilizzo del codice.

## Model
Il Model, contiene la logica di accesso ai dati e l'interazione con le API esterne, che in questo caso è gestita da:
- **NasaModelAPOD**: utilizza l'API per ottenere l'immagine giornaliera.
- **NasaImageLibrary**: utilizzata l'API sia per ottenere la lista di immagini in base alla query, sia per restituire un'immagine dato l'identificativo.

## View
La View è responsabile della struttura dell'interfaccia utente e della presentazione dei dati. È composta da pagine principali e componenti riutilizzabili.
### Pagine principali
- **App.jsx** - gestione del layout principale e del sistema di routing.
- **Home.jsx** - visualizzazione dell'immagine giornaliera (APOD).
- **Gallery.jsx** - visualizzazione della galleria.
### Componenti riutilizzabili
- **Template principale**
- **Navbar**
- **Footer**
- **Card immagini**
- **Dettaglio immagini**
- **NotFound**

## ViewModel
Il ViewModel ha il compito di connettere il modello e le view. Gestisce lo stato e la logica di business, trasformando i dati del modello in un formato utilizzabile dalle view.

In particolare si occupano di:
- gestire lo stato dell'applicazione
- coordinare le chiamate asincrone alle API della NASA
- reagire ai cambiamenti di stato (es. variazione della query di ricerca)

Sono presenti due ViewModel principali:
- **useNasaAPODViewModel** - recupera e gestisce l'immagine del giorno.
- **useNasaLibraryViewModel** - gestisce la ricerca e la lista delle immagini.
- **useNasaImageDetailViewModel** - recupera i dati di una singola immagine tramite identificativo.

## Tecnologie utilizzate
- React
- Vite
- React Router
- Bootstrap
- [NASA Open APIs](https://api.nasa.gov/)

## Funzionalità principali
- Visualizzazione dell'immagine del giorno con relativa descrizione
- Ricerca immagini tramite parola chiave
- Visualizzazione del dettaglio di una singola immagine
- Gestione degli errori

## Possibili miglioramenti
- Miglioramento della ricerca delle immagini
- Autenticazione tramite [Auth0](https://auth0.com/)

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

