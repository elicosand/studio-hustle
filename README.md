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

**https://studiohustle.github.io/** is the one game site for everyone (alpha/beta). There is no separate tester or production copy.

- Home: the repo `studiohustle/studiohustle.github.io`, served free by GitHub Pages from `main`. A push to `main` is a release for every player.
- The old address, `elicosand.github.io/studio-hustle/`, is retired. Its repo (`elicosand/studio-hustle`) only publishes the `pages-redirect` branch, a "moved" notice. It never publishes the game again, and gets switched off and archived after the move.
- Netlify is not used (its free plan charges credits per deploy).

## Install on a phone

- **iPhone:** open the link in Safari → Share → **Add to Home Screen**.
- **Android:** open the link in Chrome → menu → **Install app**.

## Notes for this build

- Progress saves on each device in the browser, and backs up to the player's cloud account. Players who protect their career with an email can load it on any phone (Settings → Cloud save → Already protected? Load my career).
- Ads and purchases are test placeholders. Real ads (e.g. AdMob) and real purchases come when the game is packaged for the App Store and Google Play.
