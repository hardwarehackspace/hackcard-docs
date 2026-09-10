# HackCard Documentation Site

Live documentation for HackCard ESP32 — built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and hosted on **GitHub Pages**.

## Live URL

After deployment:

```
https://hardwarehackspace.github.io/hackcard-docs/
```

## Local preview

```powershell
cd hackcard-docs
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000

## Deploy to GitHub Pages

### 1. Update your username

Configured for GitHub user **hardwarehackspace** in `mkdocs.yml`.

### 2. Create GitHub repo

```powershell
cd hackcard-docs
git init
git add .
git commit -m "Initial HackCard documentation site"
gh repo create hackcard-docs --public --source=. --push
```

Or create **hackcard-docs** manually on github.com, then:

```powershell
git remote add origin https://github.com/hardwarehackspace/hackcard-docs.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push to `main` — workflow `.github/workflows/deploy.yml` publishes automatically

First deploy takes 1–3 minutes. URL appears under Settings → Pages.

## Add product photos

Place images in `docs/assets/product/` and reference in markdown:

```markdown
![HackCard front](../assets/product/hackcard-front.jpg)
```

## Structure

```
docs/
├── index.md              Home
├── getting-started.md    Flash guide
├── hardware/             Pin map, board
├── examples/             One page per sketch
├── troubleshooting.md
└── legal.md
```
