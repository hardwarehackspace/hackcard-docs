# SD Card — All Features & Examples

Optional microSD unlocks **Full Mode** — larger storage for logs, NFC dumps, and config overrides.

**Web:** Status on home `http://192.168.4.1/` and `/diag`  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Hardware:** FAT32 microSD, SPI GPIO 10–13 — [Pinout](../hardware/pinout.md)

---

## Flash Mode vs Full Mode

| Mode | When | Storage |
|------|------|---------|
| **Flash Mode** | No SD card | LittleFS ~960 KB |
| **Full Mode** | SD inserted at boot | microSD (preferred for logs, dumps) |

SD scan starts **8 seconds** after boot (`SD_SCAN_DELAY_MS`) so Wi-Fi AP stays stable.

---

## 1. Check storage status

### Web dashboard

Home `/` — look for **Flash Mode** or **Full Mode** badge.

### CLI

```text
sd status
```

**Expected (no SD):**

```text
Storage: flash ready (SD scan deferred for Wi-Fi)
SD ready:   no
```

**Expected (with SD):**

```text
Storage: SD card ready (Full Mode)
SD ready:   yes
```

Also in:

```text
status
config show
```

### API

```text
GET /api/status    # "storage" field
```

---

## 2. Enable Full Mode (step-by-step)

1. Format microSD as **FAT32** (not exFAT)
2. Insert into slot on back PCB (bottom-right)
3. Power-cycle or press RESET
4. Wait **8+ seconds**
5. Run `sd status` or check home dashboard

**Expected:** `Storage: SD card ready (Full Mode)`

Auto-created folders when `SD_AUTO_CREATE_FOLDERS` is true:

```text
/config  /logs  /nfc  /nfc/dumps  /wifi  /ble  /payloads  /vault
```

(`/payloads` and `/vault` are scaffolded — not used by apps yet.)

---

## 3. Activity log on SD

When `ACTIVITY_LOGGING` is true:

| Path | Format |
|------|--------|
| `/logs/activity.csv` | `ms,app,action,result` |

### View on device

```text
logs show
```

Web: `/logs`

### View on PC

Remove SD → open `/logs/activity.csv` in Excel or text editor.

→ [Activity Log tutorial](../tutorials/beginner/activity-log.md)

---

## 4. Config override via SD JSON

Edit settings **without re-flashing** — SD JSON overrides compiled `user_config.h`.

### Steps

1. Confirm Full Mode (`sd status`)
2. On PC, open SD card → `/config/hackcard.json`
3. Edit owner name, AP SSID, brightness, lab PIN, etc.
4. Save file, reinsert SD, power-cycle HackCard
5. Verify:

```text
config show
```

Example JSON structure → [Storage & Logs](../software/storage-and-logs.md)

→ [SD config tutorial](../tutorials/sd-card.md)

---

## 5. What gets stored on SD

| Path | Feature | How to create |
|------|---------|---------------|
| `/config/hackcard.json` | Settings | Edit manually or web `/settings` |
| `/logs/activity.csv` | Activity log | Automatic when logging on |
| `/nfc/last_read.txt` | Last NFC UID | `nfc read` |
| `/nfc/dumps/` | Tag dumps | `nfc dump` |
| `/nfc/history.csv` | NFC history | Automatic |
| `/wifi/last_scan.json` | Wi-Fi scan | `wifi scan` or `/wifi` |
| `/wifi/training_portal.txt` | Training config | `/wifi/training` |
| `/wifi/training_captures.log` | Training captures | Training portal submissions |

---

## 6. Diagnostics (test SD + storage)

### Web dashboard

`/diag` → **Run Diagnostics**

### CLI

```text
diag run
```

Tests storage tier, SD detection, and other hardware.

### API

```text
POST /api/diag/run
```

---

## Requirements & troubleshooting

| Issue | Fix |
|-------|-----|
| SD not detected | FAT32 format; reseat card; wait 8 s after boot |
| Still Flash Mode | Remove and reinsert SD; full power cycle |
| Corrupt config | Delete `/config/hackcard.json` — falls back to `user_config.h` |

---

## More tutorials

→ [SD Card Tutorials](../tutorials/sd-card.md)  
→ [Storage & Logs](../software/storage-and-logs.md)

## Source

[`StorageManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/StorageManager.cpp)
