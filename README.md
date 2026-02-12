# NASA Image Gallery
NASA Image Gallery è una Single Page Application sviluppata in **React + Vite** che consente agli utenti di cercare e visualizzare immagini provenienti dalla **NASA API**. 

L'applicazione implementa il pattern architetturale **MVVM (Model View ViewModel)** per la separazione delle responsabilità e riutilizzo del codice.

## Model
Il Model, contiene la logica di accesso ai dati, che in questo caso è gestita da:
- **NasaModelAPOD**: utilizza l'API per ottenere l'immagine giornaliera.
- **NasaImageLibrary**: utilizzata l'API sia per ottenere la lista di immagini in base alla query, sia per restituire un'immagine dato l'identificativo.
