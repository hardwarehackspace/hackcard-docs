# Quick Reference

One-page cheat sheet — all values from firmware config files.

---

## Defaults (`user_config.h`)

| Setting | Default |
|---------|---------|
| AP SSID | `HackCard-Setup` |
| AP password | `hackcard2026` |
| Lab PIN | `1234` |
| Ring brightness | `80` |
| Serial baud | `115200` |
| AP IP | `192.168.4.1` (typical) |

---

## Board (`board_config.h`)

| Setting | Value |
|---------|-------|
| Board | HackCard ESP32-S3 |
| MCU | ESP32-S3FH4R2 |
| Firmware | v0.21.2 |
| Flash | 4 MB |
| PSRAM | 2 MB |

---

## Key GPIO

| Function | GPIO |
|----------|------|
| BOOT | 0 |
| Buzzer | 37 |
| Wi-Fi LED | 38 |
| RGB ring | 45 |
| NFC SDA/SCL/IRQ | 8 / 18 / 17 |
| SD CS/MOSI/CLK/MISO | 10 / 11 / 12 / 13 |

→ [Full pinout](../hardware/pinout.md)

---

## Arduino IDE

| Setting | Value |
|---------|-------|
| Board | ESP32S3 Dev Module |
| USB Mode | USB-OTG (TinyUSB) |
| USB CDC On Boot | Enabled |
| Flash / PSRAM | 4 MB / OPI PSRAM |

---

## Essential URLs (on AP)

| URL | Purpose |
|-----|---------|
| `/` | Dashboard |
| `/terminal` | Web CLI |
| `/nfc` | NFC reader tools |
| `/wifi` | Wi-Fi lab |
| `/diag` | Diagnostics |
| `/settings` | Settings |

Base: `http://192.168.4.1`

---

## Essential CLI

```text
help
status
version
sd status
wifi status
nfc read
diag run
mode show
logs show
```

→ [Full CLI Reference](../software/cli-reference.md)

---

## Device modes

| Mode | Command |
|------|---------|
| business | `mode set business` |
| nfc_lab | `mode set nfc_lab` |
| wifi_audit | `mode set wifi_audit` |
| demo_day | `mode set demo_day` |

---

## Upload recovery

Hold **BOOT** → press **RESET** → release → upload at 115200.

---

## NFC reminder

**PN532 reader only** — reads/writes external tags. **Does not emulate** NFC cards.
