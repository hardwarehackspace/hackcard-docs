# Examples Overview

Each HackCard feature has a **standalone Arduino example sketch**.  
Flash one sketch, test one function — no web browser required.

---

## How examples are organized

```
HackCard/examples/
├── 00_Basics/          ← Start here
├── 01_NFC/
├── 02_WiFi/
├── 03_BLE/
├── 04_USB_HID/
├── 05_Storage/
└── 99_Reference/       ← Optional full dashboard
```

Open any example: **File → Examples → HackCard → …**

---

## 00 — Basics

| Example | Description | Difficulty |
|---------|-------------|------------|
| Boot Serial Status | Print board info on Serial | ⭐ Easy |
| Buttons Gestures | BOOT short / long / double | ⭐ Easy |
| RGB Ring Patterns | LED animations | ⭐ Easy |
| Buzzer Tunes | Success / error / boot sounds | ⭐ Easy |
| WiFi AP Startup | Start HackCard hotspot | ⭐⭐ Medium |
| Diagnostics | Self-test all peripherals | ⭐⭐ Medium |

---

## 01 — NFC

| Example | Description | Difficulty |
|---------|-------------|------------|
| **[NFC Read UID](nfc-read-uid.md)** | Read tag UID to Serial | ⭐ Easy |
| NFC Tag Info | Family + NDEF preview | ⭐ Easy |
| NFC Dump Type2 | Full page dump | ⭐⭐ Medium |
| NFC Write URL | Write NDEF URL | ⭐⭐ Medium |
| NFC Write Text | Write text record | ⭐⭐ Medium |
| NFC Clone Type2 | Restore from dump | ⭐⭐⭐ Lab |
| NFC Kill Type2 | Permanently lock tag | ⭐⭐⭐ Lab |
| NFC Classic Dump | Mifare Classic read | ⭐⭐⭐ Lab |

---

## 02 — Wi-Fi

| Example | Description |
|---------|-------------|
| WiFi Scan | Scan nearby networks |
| WiFi STA Connect | Connect to your router (test) |
| WiFi AP Settings | Change hotspot SSID/password |
| WiFi Captive Portal | Landing page demo |
| WiFi Beacon | Beacon broadcast lab |
| WiFi Training Portal | Security awareness demo |

---

## 03 — BLE

| Example | Description |
|---------|-------------|
| BLE Scan | Discover nearby devices |
| BLE Advertise | Lab advertiser |
| BLE Contact Card | Share vCard over BLE |

---

## 04 — USB HID

| Example | Description |
|---------|-------------|
| HID Keyboard String | Type text on connected PC |
| HID Mouse Move | Move cursor |
| HID Payload Run | Full payload demo |

!!! warning "HID needs a PC"
    Connect HackCard USB to a computer. Enable **USB-OTG (TinyUSB)** in board settings.

---

## 05 — Storage

| Example | Description |
|---------|-------------|
| SD Card Test | Detect and list SD |
| Activity Log | Write CSV log entries |
| Config JSON | Load/save settings |

---

## Example page template

Every documented example includes:

1. **Goal** — what it does in one sentence  
2. **Sketch path** — where to find it in Arduino IDE  
3. **Code snippet** — key lines  
4. **Expected Serial output**  
5. **Troubleshooting** — common failures  

See **[NFC Read UID](nfc-read-uid.md)** for a full demo page.

---

## Status legend

| Badge | Meaning |
|-------|---------|
| ✅ Documented | Full doc page available |
| 🚧 Coming soon | Sketch or doc in progress |

Current demo docs: **NFC Read UID**, **RGB Ring Patterns**
