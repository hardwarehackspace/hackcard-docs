# Feature Guides — Complete Examples

Step-by-step instructions for **every feature** built into HackCard firmware — matching the web dashboard buttons and CLI commands.

**Connect first:** Join Wi-Fi **`HackCard-Setup`** → open **`http://192.168.4.1`**

| Method | URL |
|--------|-----|
| Web dashboard | `http://192.168.4.1` |
| Web terminal (CLI) | `http://192.168.4.1/terminal` |
| Feature pages | Links below |

---

## Visual & audio

| Feature | Web page | Guide |
|---------|----------|-------|
| RGB ring — colors, 12 patterns, blinking | [/apps](http://192.168.4.1/apps) | [RGB Ring](rgb.md) |
| Buzzer — 8 tunes + event sounds | [/apps](http://192.168.4.1/apps) + [/settings](http://192.168.4.1/settings) | [Buzzer](buzzer.md) |
| Device modes | [/modes](http://192.168.4.1/modes) | [Device Modes](device-modes.md) |

---

## Connectivity

| Feature | Web page | Guide |
|---------|----------|-------|
| Wi-Fi — scan, AP, portal, lab tools | [/wifi](http://192.168.4.1/wifi) | [Wi-Fi (all features)](wifi.md) |
| BLE — scan, advertise, contact card | [/ble](http://192.168.4.1/ble) | [Bluetooth LE](ble.md) |
| USB HID — keyboard, mouse, media | [/hid](http://192.168.4.1/hid) | [USB HID Lab](usb-hid.md) |

---

## NFC & storage

| Feature | Web page | Guide |
|---------|----------|-------|
| NFC reader — read, write, dump, clone | [/nfc](http://192.168.4.1/nfc) | [NFC Reader](nfc-reader.md) |
| SD card — Full Mode, logs, config | `/` status + [/diag](http://192.168.4.1/diag) | [SD Card](sd-card.md) |

<div class="nfc-notice" markdown="1">

**NFC reminder:** HackCard is a **reader only**. It reads/writes **external tags** — it does not emulate NFC cards.

</div>

---

## System pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Status, quick links |
| Setup wizard | `/setup` | First-run profile |
| Profile | `/profile` | Contact card |
| Settings | `/settings` | Brightness, buzzer, AP, portal, PIN |
| Activity logs | `/logs` | Event history |
| Diagnostics | `/diag` | Hardware self-test |
| Terminal | `/terminal` | Full CLI |

Full URL map → [Web Dashboard](../software/web-dashboard.md)  
All CLI commands → [CLI Reference](../software/cli-reference.md)

---

## Lab features

Wi-Fi beacon, evil twin, training portal, monitor, NFC clone/kill, USB HID, and BLE advertiser require the **lab PIN** (default `1234`). Change it in `/settings` before shipping to customers.

→ [Legal & Ethical Use](../resources/legal-ethical-use.md)
