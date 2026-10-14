<p align="center"><img src="logo.png" width="140" alt="TMRs Ctrl Msg logo"></p>

# TMRs Ctrl Msg — Version 1 Beta

**Right information · at the right time · in the right format.**

A free, offline web app that helps Train Managers (TMRs) build control messages and reports quickly and correctly, in an emergency or in an incident.

> ⚠️ **This is NOT an official Indian Railways tool.** It is a personal, beta web tool made by a Train Manager to make work easier. It only *drafts* wording. You always check and send the message yourself, and Control's orders and the rule books always come first.

🌐 English · తెలుగు · हिन्दी (titles and help in all three languages)

---

## Why it matters
A clear control message at the right time lets the Control Office plan: arrange a relief engine or doctor, divert trains, alert RPF, and inform officials. A wrong train number, missing km or missing time wastes the minutes that matter most. In this digital era, photos, video and voice notes sent with the message are also *evidence* that supports the work of the train crew.

## Privacy: everything stays on your phone
- The app works **fully offline** after the first load.
- **All data stays in your device**: your name, phone, signature, contacts, saved messages, photos, records. 
- **No server, no login, no tracking, no ads, no analytics.** Nothing is uploaded anywhere by the app. (Fonts for Telugu and Hindi are bundled in the app, so it does not even contact Google.)
- A message leaves your phone only when **you** tap WhatsApp / SMS / Share.
- Because there is no server, there is no database to hack or leak. See [PRIVACY.md](PRIVACY.md).

## What it does
| | |
|---|---|
| **Guided messages** | 18 categories, 118 scenarios from the Control Messages Master Handbook, each in **Full** and **Short** format = **236 message formats** |
| **Combinations** | Drop-down choices alone give more than **5 trillion (5 lakh crore)** different messages, before train numbers, km, times and tick-boxes are added |
| **Quick entry** | Type or *say* one sentence; the app picks the scenario and fills the boxes it understood. Anything not said stays blank |
| **Emergency window** | One tap, voice input, quick WhatsApp to saved contacts, call Control |
| **Recheck** | Warns about blank parts or a wrong-looking train number before you send |
| **Evidence** | Photos, video, audio note, multi-camera, optional date-time-train-km stamp, send with the message |
| **Troubleshooting checklists** | Step-by-step lists with time stamps, stop timer, detention calculator, update reminder |
| **Reports** | TMR report, Loco Pilot report and **Joint report**, with signature pad, PDF, WhatsApp text, share with proof files |
| **Other tools** | Important numbers, My profile, My record (PME / training due dates), Saved messages and shift log (PDF/CSV), Free message mode, Night and Outdoor screens, Training mode, backup and restore |

## Install on your phone
**Android (Chrome)**
1. Open the app link in **Chrome**.
2. Tap **⋮ (menu) → Install app** (or **Add to Home screen**).
3. Open the app once **with internet**, wait a few seconds. After that it works without internet.

**iPhone (Safari)**
1. Open the link in **Safari**.
2. Tap **Share → Add to Home Screen**.

Full steps in three languages: [docs/INSTALL.md](docs/INSTALL.md).

## Publish your own copy on GitHub Pages
1. Create a new repository and upload **all files in this folder** (keep the `fonts` folder) to the `main` branch.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)` → Save.**
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.
4. Open it in Chrome on Android and install as above.

**Releasing an update:** edit the files, then change `CACHE_NAME` in `sw.js` (for example `…-r33`). Phones pick up the new version the next time they open the app with internet.

## Files
| File | Purpose |
|---|---|
| `index.html` | The whole app (one file) |
| `sw.js` | Offline support (service worker) |
| `manifest.json` | Install settings (name, icons, colours) |
| `fonts/` | Telugu and Hindi fonts (Noto Sans, SIL Open Font License) |
| `stations.json` | Station list used for suggestions |
| `logo.svg`, `logo.png`, `icon-*.png`, `apple-touch-icon.png`, `favicon-32x32.png` | Logo and icons |
| `docs/` | Install guide, user guide PDFs (English, Telugu, Hindi) and share messages |

## Beta — please help improve it
This is **Version 1 Beta**; there may be errors, bugs or wrong wording. Please tell us:
- 🐞 a bug or something that does not work → open an **Issue** (Bug report)
- ✍️ a wrong word, rule or format in a message → open an **Issue** (Wording correction)
- 💡 an idea or a missing scenario → open an **Issue** (Suggestion)

Inside the app, the button **Report wrong wording in this message** (Step 3) also helps.

## Future plan
A full Android app is planned if this web version proves useful.

## Known limits
- Browsers limit file sharing (roughly 10 files / 50 MB at a time); large videos may have to be attached by hand.
- Voice input uses the phone's own voice typing and needs internet.
- The update reminder works only while the app is open on the screen.
- The app may or may not match every local practice; it is an **aid** for constructing a message or report. It does not replace the manual, the phone call or the traditional way of informing Control.

## License
MIT (see [LICENSE](LICENSE)). The wording of messages follows the Control Messages Master Handbook supplied by the author; check the source document before reusing it elsewhere.
