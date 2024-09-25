# README

## Oversikt
Dette prosjektet handler om Harry Potter og bruker [HP API](https://hp-api.onrender.com/) for å hente informasjon om karakterer fra Harry Potter-universet. Programmet henter minst 8 data om personer og viser dem på skjermen, inkludert navn og bilde.

## Hvordan programmet fungerer
Programmet sender en forespørsel til HP API for å hente data om karakterene. Det henter informasjon som navn, bilde, hus, alder, kjønn, og mer. Dataene blir deretter vist på en webside med et responsivt design. Bruk av CSS gir en moderne og attraktiv visuell stil.

## Implementasjon
- **API Forespørsel:** Bruker `fetch`-metoden for å hente data fra API-en.
- **Visning:** Dataene blir dynamisk generert og lagt til i DOM-en for å vise informasjonen på skjermen. Hver karakter vises i et kort med bilde og tilhørende informasjon.
- **Design:** Designet er laget med fokus på universell utforming og responsivitet, og CSS-stilene sikrer en brukervennlig opplevelse.

## Teknologier brukt
- HTML
- CSS
- JavaScript
- Fetch API

## Funksjoner / Funksjonalitet
- Henter og viser informasjon om minst 8 karakterer fra Harry Potter-universet.
- Viser navn og bilde for hver karakter i et kortformat.
- Responsivt design som fungerer på forskjellige enheter.
- Universell utforming for tilgjengelighet.


## Lenker og dokumenter jeg har brukt
- [HP API dokumentasjon](https://hp-api.onrender.com/)
- [W3Schools JavaScript Fetch API](https://www.w3schools.com/js/js_api_fetch.asp)
- [MDN Web Docs om Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Design
### Farger brukt
- Bakgrunnsfarge: #f0f0f0 (lys grå bakgrunn)
- Karakterkort bakgrunn: #fff (hvit)
- Kantfarge på kort: #ddd (lys grå)
- Tekstfarge for overskrifter: #333 (mørk grå)
- Tekstfarge for beskrivelse: #666 (grå)

### Universell utforming
Designet er laget med tanke på universell utforming, inkludert kontrast mellom tekst og bakgrunn, samt bruk av beskrivende alt-tekster for bilder. CSS-stilen sikrer at tekst er lett å lese og at kortene er enkle å navigere.

## Egenvurdering
Jeg ville ha gjort noen ting annerledes, som for eksempel:
- Bruke flere datafelter fra API-en for å gi mer informasjon.
- Forbedre designet med bedre typografi og layout.
- Implementere flere tilgjengelighetsfunksjoner.

Jeg brukte de valgte fargene for å skape en visuell sammenheng med Harry Potter-universet, og designet reflekterer magien og eventyret i historiene.

## Kilder
- [CSS-Tricks om universell utforming](https://css-tricks.com/accessibility/)


