# Adding Documentation

How to add new tutorials and pages to this site. Architecture is designed for easy maintenance.

---

## Site stack

| Tool | Purpose |
|------|---------|
| [MkDocs](https://www.mkdocs.org/) | Static site generator |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | Theme (dark + yellow) |
| GitHub Actions | Auto-deploy to Pages |
| Markdown | All content files |

---

## Folder structure

```
hackcard-docs/
├── mkdocs.yml              ← navigation + theme config
├── docs/
│   ├── index.md            ← home page
│   ├── getting-started/    ← one .md per page
│   ├── features/
│   ├── tutorials/          ← add new tutorials here
│   ├── software/
│   ├── pinout/
│   ├── troubleshooting/
│   ├── resources/
│   ├── assets/
│   │   └── hardware/       ← PCB photos
│   ├── stylesheets/extra.css
│   └── javascripts/extra.js
└── .github/workflows/deploy.yml
```

---

## Add a new tutorial (5 steps)

### 1. Create the markdown file

Copy an existing tutorial, e.g. `docs/tutorials/nfc-read-uid.md`:

```
docs/tutorials/ble-scan.md
```

### 2. Fill in the template

Every tutorial should include:

- Title + metadata table (time, difficulty, sketch path)
- Goal (one sentence)
- Hardware photo (if applicable)
- Prerequisites
- Steps
- Code block with syntax highlighting
- Expected Serial output
- Troubleshooting table
- Next tutorial link

### 3. Register in navigation

Edit `mkdocs.yml` under `Tutorials:`:

```yaml
  - Tutorials:
      - tutorials/index.md
      - tutorials/nfc-read-uid.md
      - tutorials/ble-scan.md        # ← add here
```

### 4. Update the tutorial index

Add a row to `docs/tutorials/index.md` table.

### 5. Push to GitHub

```powershell
git add docs/tutorials/ble-scan.md mkdocs.yml docs/tutorials/index.md
git commit -m "Add BLE scan tutorial"
git push
```

Site rebuilds automatically in ~1–2 minutes.

---

## Add images

1. Save photo to `docs/assets/hardware/` or `docs/assets/product/`
2. Reference in markdown:

```markdown
<figure class="hardware-image" markdown="1">
![Description](../assets/product/my-photo.jpg)
<figcaption>Caption text</figcaption>
</figure>
```

3. Compress large images (target < 500 KB)

---

## Markdown features available

=== "Code with copy button"

    ````markdown
    ```cpp
    Serial.println("Hello");
    ```
    ````

=== "Admonitions"

    ````markdown
    !!! tip "Helpful hint"
        Content here

    !!! warning "Caution"
        Important note
    ````

=== "Tabs"

    ````markdown
    === "Windows"
        Windows instructions

    === "macOS"
        macOS instructions
    ````

=== "Tables"

    ```markdown
    | Col A | Col B |
    |-------|-------|
    | val   | val   |
    ```

---

## Local preview

```powershell
cd hackcard-docs
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000

Strict build (matches CI):

```powershell
mkdocs build --strict
```

---

## Migrate to another GitHub account

Replace in `mkdocs.yml` and search all `docs/`:

| Find | Replace |
|------|---------|
| `hardwarehackspace` | `your-new-username` |
| `site_url` | new Pages URL |

Then transfer repo or push to new remote and enable Pages → GitHub Actions.

---

## Prev / next navigation

Enabled via `navigation.footer` in `mkdocs.yml` — follows nav order automatically. Keep logical ordering in the `nav:` section.
