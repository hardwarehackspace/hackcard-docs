# Backer Checklist

Printable checklist — all steps verified against firmware documentation.

---

## Before you start

- [ ] USB-C **data** cable (not charge-only)
- [ ] PC with internet (for Arduino IDE + libraries)
- [ ] [Arduino IDE 2.x](https://www.arduino.cc/en/software) installed
- [ ] Optional: FAT32 microSD, NFC tags (NTAG)

---

## Software setup (one time)

- [ ] ESP32 board package installed ([Installation](../software/installation.md))
- [ ] Libraries installed: NeoPixel, PN532, BusIO, ArduinoJson
- [ ] [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32) downloaded

---

## First flash

- [ ] Board: **ESP32S3 Dev Module**
- [ ] USB CDC On Boot: **Enabled**
- [ ] USB Mode: **USB-OTG (TinyUSB)**
- [ ] Flash Size: **4 MB**, PSRAM: **OPI PSRAM**
- [ ] Partition: **Custom** (`partitions.csv`)
- [ ] Opened `HackCard_ESP32.ino` and uploaded
- [ ] Serial Monitor **115200** shows boot log ([First Program](first-program.md))

---

## Personalize

- [ ] Edited `config/user_config.h` (name, AP password)
- [ ] Changed **`LAB_MODE_PIN`** from default `1234`
- [ ] Re-uploaded firmware

---

## Verify hardware

- [ ] Joined Wi-Fi AP (`HackCard-Setup` or your SSID)
- [ ] Opened `http://192.168.4.1`
- [ ] Ran diagnostics (`/diag` or `diag run`)
- [ ] NFC read tested with external tag ([NFC Reader](../features/nfc-reader.md))
- [ ] Confirmed: HackCard is an NFC **reader**, not tag emulator

---

## Optional — Full Mode

- [ ] Inserted FAT32 microSD
- [ ] `sd status` shows Full Mode
- [ ] `/config/hackcard.json` created on SD

---

## If stuck

→ [Troubleshooting](../troubleshooting.md) · [FAQ](../faq.md) · [Quick Reference](../resources/quick-reference.md)
