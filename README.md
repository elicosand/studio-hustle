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

## Put it online (GitHub + Netlify)

1. **GitHub:** create a new repository named `studio-hustle`. On the repo page choose **Add file → Upload files**, drag in everything from this folder (keep the `music` and `icons` folders), and commit.
2. **Netlify:** choose **Add new site → Import an existing project → GitHub**, pick `studio-hustle`. Leave the build command empty and the publish directory as `.`, then deploy.
3. In Netlify's **Site configuration**, change the site name to `studio-hustle` if it's free. Your link becomes `studio-hustle.netlify.app`.
4. Every time you upload new files to GitHub, Netlify republishes automatically.

## Install on a phone

- **iPhone:** open the link in Safari → Share → **Add to Home Screen**.
- **Android:** open the link in Chrome → menu → **Install app**.

## Notes for this build

- Progress saves on each device in the browser.
- Ads and purchases are test placeholders. Real ads (e.g. AdMob) and real purchases come when the game is packaged for the App Store and Google Play.
