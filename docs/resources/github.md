# GitHub

Official repositories for HackCard.

---

## Repositories

| Repository | URL | Purpose |
|------------|-----|---------|
| **Documentation** | [hardwarehackspace/hackcard-docs](https://github.com/hardwarehackspace/hackcard-docs) | This website (Markdown source) |
| **Firmware** | [hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32) | Arduino sketch, HAL, apps |

---

## Report issues

| Type | Link |
|------|------|
| Documentation error | [hackcard-docs/issues](https://github.com/hardwarehackspace/hackcard-docs/issues) |
| Firmware bug | [HackCard-ESP32/issues](https://github.com/hardwarehackspace/HackCard-ESP32/issues) |

---

## Edit this documentation

Each page has an **Edit on GitHub** link (top right) when `content.action.edit` is enabled.

Workflow:

1. Fork `hackcard-docs`
2. Edit Markdown in `docs/`
3. Open pull request

→ See the repository [README](https://github.com/hardwarehackspace/hackcard-docs#adding-documentation) for how to add pages and tutorials.

---

## Migrating to another account

When moving to production GitHub org:

1. Transfer or push repo
2. Update `site_url` and `repo_url` in `mkdocs.yml`
3. Enable GitHub Pages → GitHub Actions
4. Update QR codes on packaging
