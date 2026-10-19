# Timestamp Microservice

A simple Express API that converts date strings or Unix timestamps into Unix time in milliseconds and a UTC date string.

## Run locally

```bash
npm install
npm start
```

The server uses `PORT` from the environment when provided, or defaults to `8000`.

## API examples

- `GET /api` — returns the current date and time.
- `GET /api/1451001600000` — parses a Unix timestamp in milliseconds.
- `GET /api/2015-12-25` — parses a date string.
- `GET /api/invalid-date` — returns `{"error":"Invalid Date"}`.

Successful responses have this shape:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
