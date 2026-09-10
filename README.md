# HackCard Documentation

Professional hardware documentation for HackCard ESP32 — built with **MkDocs Material**, deployed to **GitHub Pages**.

## Live site

**https://hardwarehackspace.github.io/hackcard-docs/**

## Sections

| Tab | Content |
|-----|---------|
| Getting Started | Requirements, Arduino setup, first flash |
| Features | NFC, Wi-Fi, BLE, RGB, HID, SD |
| Tutorials | Step-by-step guides with code |
| Software | Library, examples, config, partitions |
| Pinout | GPIO reference + board photos |
| Troubleshooting | Upload, Wi-Fi, NFC, Serial |
| Resources | FAQ, legal, how to add docs |

## Local preview

```powershell
cd hackcard-docs
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000

## Deploy

Push to `main` — GitHub Actions publishes automatically.

## Add a tutorial

See [Adding Documentation](docs/resources/adding-documentation.md):

1. Create `docs/tutorials/my-tutorial.md`
2. Add to `mkdocs.yml` nav
3. Update `docs/tutorials/index.md`
4. `git push`

## Theme

Dark technical design with yellow accents — customized in `docs/stylesheets/extra.css`.
