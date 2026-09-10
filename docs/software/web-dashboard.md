# Web Dashboard

Complete URL map when `APP_SYSTEM_WEB = 1` (default).

**Source:** `WebStatusServer.cpp`, `docs/BACKER_GUIDE.md`

Base URL: **`http://192.168.4.1`** (after joining HackCard AP)

---

## Main pages

| URL | Purpose |
|-----|---------|
| `/` | Status dashboard, quick links |
| `/setup` | First-run setup wizard |
| `/terminal` | Web CLI (**primary for backers**) |
| `/profile` | Contact profile viewer |
| `/profile/edit` | Edit profile |
| `/profile.vcf` | Download vCard file |
| `/settings` | Brightness, buzzer, AP, lab PIN |
| `/modes` | Device mode presets |
| `/apps` | LED + buzzer demos |
| `/logs` | Activity log viewer |
| `/diag` | Hardware self-test |

---

## Feature pages

| URL | Feature |
|-----|---------|
| `/nfc` | NFC reader — read, write, dump, lab |
| `/wifi` | Wi-Fi scan, connect, lab tools |
| `/wifi/ap` | AP settings |
| `/wifi/training` | Training / awareness portal |
| `/ble` | BLE scan, advertise, contact card |
| `/hid` | USB HID lab payloads |
| `/portal` | Captive portal landing preview |

---

## Captive portal detection

Auto-routes for connected clients (from `WebStatusServer.cpp`):

| URL | Purpose |
|-----|---------|
| `/generate_204` | Android captive detect |
| `/hotspot-detect.html` | Apple captive detect |
| `/connecttest.txt` | Windows captive detect |
| `/ncsi.txt` | Windows NCSI |
| `/redirect` | Captive redirect handler |

Enabled when `CAPTIVE_PORTAL_ENABLED` is true in `user_config.h`.

---

## API endpoints (selected)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/status` | GET | JSON device status |
| `/api/cli` | POST | Web terminal commands |
| `/api/nfc/read` | POST | Read NFC tag |
| `/api/wifi/scan` | POST | Wi-Fi scan |
| `/api/diag/run` | POST | Run diagnostics |
| `/api/settings` | POST | Save settings |
| `/api/hid/run` | POST | Run HID payload |

Full API list in [`WebStatusServer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/WebStatusServer.cpp).

---

## Access notes

| Topic | Detail |
|-------|--------|
| Wi-Fi band | **2.4 GHz only** (`user_config.h`) |
| Serial CLI | Disabled by default — use `/terminal` |
| HID payloads | Require USB to PC — keystrokes go to PC, not browser |

---

## Troubleshooting

From `docs/ARDUINO_SETUP.md`:

- Connect to AP from `user_config.h`
- Check serial for `Status dashboard online`

→ [Troubleshooting](../troubleshooting.md)

---

## Source

[`src/apps/system/WebStatusServer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/WebStatusServer.cpp)
