# SD Card Feature

Optional microSD enables **Full Mode** with expanded storage.

**Source:** `StorageManager.cpp`, `docs/BACKER_GUIDE.md`, `docs/ARDUINO_SETUP.md`

---

## Modes

| Mode | Trigger | Primary storage |
|------|---------|-----------------|
| Flash Mode | No SD | LittleFS (~960 KB) |
| Full Mode | SD inserted at boot | microSD (FAT32) |

SD scan deferred **8 seconds** after boot for Wi-Fi stability.

---

## Stored data (Full Mode)

| Path | Content |
|------|---------|
| `/config/hackcard.json` | Settings override |
| `/logs/activity.csv` | Activity log (CSV) |
| `/nfc/dumps/` | NFC dump files |
| `/nfc/last_read.txt` | Last UID |
| `/wifi/last_scan.json` | Wi-Fi scan results |

Auto-created when `SD_AUTO_CREATE_FOLDERS` is `true`.

---

## CLI

```text
sd status
```

From `docs/ARDUINO_SETUP.md` troubleshooting.

---

## Requirements

- FAT32 formatted microSD
- GPIO 10/11/12/13 (SPI) — [Pinout](../hardware/pinout.md)

---

## Tutorial

→ [SD Card Tutorials](../tutorials/sd-card.md)

---

## Source

[`src/core/StorageManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
