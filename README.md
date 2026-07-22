# Love Letter

A small React (Vite) site: an envelope opens into a letter of cards, ending
in a question, then a photo slideshow.

## Latest changes
- Fixed the wax seal being clipped to its top quarter (it was laid out
  inside the flap's triangular `clip-path`, cutting most of it off). It's
  now positioned outside the clipped flap, centered on the fold point, so
  it renders in full and fades out as the envelope opens.
- Cards now animate in as if pulled up out of the envelope: each one rises
  from below with a slight tilt and scale-up rather than a plain fade.
- The final question now has a "No" option. Clicking "No" grows "Yes"
  a bit each time (and shrinks/fades "No"); after a few clicks "Yes" is
  large enough that "No" disappears, leaving "Yes" as the only option.

## Run it yourself
```
npm install
npm run dev       # dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Customize
- Edit the letter text (and final question) in `public/data/cards.json`.
- Drop photos into `public/photos/` and list their filenames in `public/data/photos.json`.
- Tune how fast "Yes" grows / how many "No" clicks it takes in `src/Card.jsx`
  (`MAX_NO_CLICKS` and the `yesScale` formula).

## Static hosting
The `dist/` folder in this zip is already built and ready to deploy as-is
(e.g. drag-and-drop onto Netlify, or serve with any static file server) —
it includes the data/photos folders so no build step is required.
