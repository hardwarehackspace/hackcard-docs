# HackCard Documentation Website

Official documentation for **HackCard ESP32-S3** hardware — built for Kickstarter backers and developers.

**Live site:** https://hardwarehackspace.github.io/hackcard-docs/

**Technical source of truth:** [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32) firmware repository

---

## Stack

| Tool | Purpose |
|------|---------|
| [MkDocs](https://www.mkdocs.org/) | Static site generator |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | Dark theme, search, navigation |
| GitHub Actions | Deploy to GitHub Pages |
| Markdown | All content in `docs/` |

---

## Local development

### Prerequisites

- Python 3.10+
- pip

### Setup

```powershell
cd hackcard-docs
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # macOS/Linux
pip install -r requirements.txt
mkdocs serve
```

Open **http://127.0.0.1:8000**

### Strict build (matches CI)

```powershell
mkdocs build --strict
```

Output in `site/` (gitignored).

---

## Project structure

```
hackcard-docs/
├── mkdocs.yml                 # Site config + navigation
├── requirements.txt           # Python dependencies
├── .github/workflows/deploy.yml
└── docs/
    ├── index.md               # Home
    ├── getting-started/       # Backer onboarding
    ├── hardware/              # Pinout, ESP32, NFC, SD, power
    ├── software/              # Installation, firmware, Arduino
    ├── features/              # Wi-Fi, NFC reader, RGB, buzzer, SD
    ├── tutorials/             # Step-by-step guides
    ├── troubleshooting.md
    ├── faq.md
    ├── resources/             # GitHub, firmware, schematics
    ├── assets/hardware/       # PCB photos
    ├── stylesheets/extra.css  # HackCard dark + yellow theme
    └── javascripts/extra.js
```

---

## Adding documentation

### New page

1. Create `docs/path/to/page.md`
2. Add to `nav:` section in `mkdocs.yml`
3. Run `mkdocs serve` to preview
4. Commit and push to `main`

### New tutorial

1. Create `docs/tutorials/my-topic.md`
2. Add under **Tutorials** in `mkdocs.yml`
3. Include verified content only:
   - Hardware requirements
   - Required libraries
   - Code block with language tag
   - Expected result
   - Link to source file in HackCard-ESP32 repo
4. If feature not yet documented in repo, use:

    ```markdown
    <span class="coming-soon">Documentation coming soon</span>
    ```

### Code example template

```markdown
<div class="code-meta" markdown="1">

**Hardware:** ... · **Libraries:** ... · **Source:** [`file.cpp`](https://github.com/...)

</div>

\`\`\`cpp
// verified code from repo
\`\`\`

**Expected result:** ...
```

### NFC wording rule

Always state: HackCard has a **PN532 NFC reader** for external tags. It **does not emulate** NFC tags/cards.

---

## Adding images

1. Save to `docs/assets/hardware/` or `docs/assets/product/`
2. Compress (target < 500 KB)
3. Reference:

```markdown
<figure class="hardware-image" markdown="1">
![Alt text](../assets/hardware/photo.png)
<figcaption>Caption</figcaption>
</figure>
```

---

## Updating navigation

Edit `nav:` in `mkdocs.yml`. Order determines sidebar sequence and **previous/next** footer links.

Top-level tabs map to main sections (Getting Started, Hardware, Software, etc.).

---

## Deployment

### GitHub Pages (automatic)

Push to `main` → `.github/workflows/deploy.yml` builds and deploys.

### Enable Pages (first time)

Repo → **Settings → Pages → Source: GitHub Actions**

### Manual deploy

```powershell
mkdocs gh-deploy --force
```

Requires `gh` CLI authenticated.

---

## Content rules

1. **Do not invent specs** — derive from HackCard-ESP32 repo
2. **Missing info** → use `Documentation coming soon`
3. **Version** — check `FIRMWARE_VERSION` in `board_config.h`
4. **NFC** — reader only, never emulation

---

## Configuration

| File | Key settings |
|------|--------------|
| `mkdocs.yml` | `site_url`, `repo_url`, `nav`, theme |
| `docs/stylesheets/extra.css` | Colors, layout |
| `extra.firmware_version` | Version badge reference |

---

## License

<span class="coming-soon">Documentation coming soon</span>
