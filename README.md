# Studio Hustle

An idle music tycoon for phones. Your artist starts in a rundown apartment and works up to bigger stages: unlock stations, upgrade them, hire crew to automate, move up, and drop albums for permanent fame.

Music by Elijah Gray.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The whole game (art, logic, styles) |
| `music/` | One looping beat per location |
| `icons/` | Home-screen and browser icons |
| `manifest.webmanifest` | Lets phones install it like an app |
| `sw.js` | Offline support. Bump `VERSION` on each new upload |
| `netlify.toml` | Netlify settings (no build step needed) |

## Where the game lives

**https://studio-hustle.netlify.app/** is the one game site for everyone (alpha/beta). There is no separate tester or production copy.

- Releases: the Netlify site `studio-hustle` deploys `main` from this repo. A push to `main` is a release for every player.
- Netlify settings: no build command, publish directory `.` (see `netlify.toml`).
- The old address, `elicosand.github.io/studio-hustle/`, is retired. GitHub Pages publishes the `pages-redirect` branch, which only shows a "moved" notice. It must never publish `main` again, and it gets switched off after the move.

## Install on a phone

- **iPhone:** open the link in Safari → Share → **Add to Home Screen**.
- **Android:** open the link in Chrome → menu → **Install app**.

## Notes for this build

- Progress saves on each device in the browser, and backs up to the player's cloud account. Players who protect their career with an email can load it on any phone (Settings → Cloud save → Already protected? Load my career).
- Ads and purchases are test placeholders. Real ads (e.g. AdMob) and real purchases come when the game is packaged for the App Store and Google Play.
