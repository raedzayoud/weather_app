# WeatherApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Prerequisites

- Node.js 18 or 20 (LTS recommended)
- npm 9+
- Angular CLI installed globally (optional):

```bash
npm install -g @angular/cli
```

## Setup

1) Install dependencies:

```bash
npm install
```

2) Install Zone.js (required for Angular change detection):

```bash
npm install zone.js@^0.14 --save
```

3) Configure OpenWeather API key:

- By default, the key is set inside `src/app/service/api/weather/weather-service.ts`.
- Replace the placeholder with your own key if needed:

```ts
private apiKey = 'YOUR_OPENWEATHER_API_KEY';
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Troubleshooting

- Zone.js error (NG0908 / failed to resolve import "zone.js"):
  - Run `npm install zone.js@^0.14 --save`.
  - Ensure `import 'zone.js';` exists in `src/main.ts`.

- Weather request returns 404:
  - This usually means the city was not found by OpenWeather.
  - Try `city,country_code` (e.g., `Lagos,NG`, `New York,US`).
  - Consider using the Geocoding API to search and then query by `lat`/`lon`.
