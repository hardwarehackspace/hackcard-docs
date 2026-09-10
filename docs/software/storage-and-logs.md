# Storage & Logs

How HackCard stores config, NFC dumps, and activity logs.

**Source:** `StorageManager.cpp`, `ConfigStore.cpp`, `Logger.cpp`

---

## Storage tiers

| Tier | Condition | Label |
|------|-----------|-------|
| Flash Mode | No SD | LittleFS (~960 KB) |
| Full Mode | SD ready | SD preferred |

Check: `sd status` or Serial boot line from `StorageManager`:

```text
Storage: flash ready (SD scan deferred for Wi-Fi)
Storage: SD card ready (Full Mode)
```

SD scan starts **8 seconds** after boot (`SD_SCAN_DELAY_MS`).

---

## Config file

Path: **`/config/hackcard.json`**

Priority: SD JSON → compiled `user_config.h` defaults

### JSON structure

From `ConfigStore::serialize()`:

```json
{
  "owner": {
    "name": "Your Name",
    "title": "Security Researcher",
    "company": "Your Company",
    "email": "you@example.com",
    "phone": "+1 000 000 0000",
    "website": "https://yoursite.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "bio": "Ethical hacking & embedded security."
  },
  "ap": {
    "ssid": "HackCard-Setup",
    "password": "hackcard2026",
    "channel": 0
  },
  "defaults": {
    "ring_brightness": 80,
    "buzzer_enabled": true,
    "boot_animation": true,
    "activity_logging": true,
    "mode": "business",
    "lab_mode_pin": "1234"
  },
  "security": {
    "lab_mode_pin": "1234"
  }
}
```

Check config source: `config show`

---

## Activity log

When `ACTIVITY_LOGGING` is true (`user_config.h`):

| Path | Format |
|------|--------|
| `/logs/activity.csv` | CSV: `ms,app,action,result` |

CLI:

```text
logs show
logs clear
```

Web: `http://192.168.4.1/logs`

---

## NFC storage paths

| Path | Content |
|------|---------|
| `/nfc/last_read.txt` | Last UID read |
| `/nfc/dumps/` | Timestamped dump files |
| `/nfc/history.csv` | NFC activity history |

---

## Wi-Fi storage paths

| Path | Content |
|------|---------|
| `/wifi/last_scan.json` | Last Wi-Fi scan |

---

## Auto-created SD folders

When `SD_AUTO_CREATE_FOLDERS` is true:

```
/config  /logs  /nfc  /nfc/dumps  /wifi  /ble  /payloads  /vault
```

`/payloads` and `/vault` are scaffolded but **not used by apps yet** in current firmware.

---

## Source

- [`src/core/StorageManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
- [`src/core/ConfigStore.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
- [`src/core/Logger.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
