# Coworkly website

Static site for Coworkly, Rourkela. Open it with a local server so the shared navigation can load:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Add a member reel

1. Put an MP4 in `assets/reels/`.
2. Add an object to the array in `js/testimonials.js` with `name`, `role`, `src`, and an optional `poster`.
