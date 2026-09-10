# Board Overview

## Specifications

| Spec | Detail |
|------|--------|
| Name | HackCard ESP32-S3 |
| MCU | ESP32-S3FH4R2 |
| Flash | 4 MB |
| PSRAM | 2 MB (OPI) |
| Wireless | Wi-Fi 2.4 GHz + BLE 5 |
| NFC | PN532 (ISO14443 Type A/B, Mifare) |
| LEDs | 12× WS2812 ring + 1× status LED |
| Audio | Piezo buzzer (PWM) |
| Storage | microSD (SPI, optional) |
| USB | USB-C (CDC serial + HID via TinyUSB) |

---

## On-board features

### NFC antenna zone

Hold ISO14443 tags (NTAG, Mifare Ultralight, Classic) near the **NFC icon** on the PCB.  
The PN532 handles polling — no extra wiring needed.

### RGB ring

12 addressable LEDs show status patterns:

- Boot animation
- Scanning / success / error
- Demo patterns (rainbow, chase, etc.)

### BOOT button

| Gesture | Default action |
|---------|----------------|
| Short press | Cycle menu pointer on ring |
| Long press (~1.5 s) | Confirm |
| Double tap | Back / cancel |

### microSD (optional)

Insert a FAT32 microSD for **Full Mode**:

- Activity logs
- NFC dump files
- Config override at `/config/hackcard.json`

Without SD, HackCard runs in **Flash Mode** using onboard LittleFS.

---

## Photo placeholders

!!! info "Add your product photos"
    Replace these placeholders with real photos in `docs/assets/product/`:

    - `hackcard-front.jpg` — front of PCB
    - `hackcard-back.jpg` — back / antenna side
    - `usb-port.jpg` — USB-C close-up
    - `nfc-zone.jpg` — where to tap tags

Example markdown once photos are added:

```markdown
![HackCard front view](../assets/product/hackcard-front.jpg)
```

---

## Firmware delivery model

HackCard ships as:

1. **Arduino library** (`HackCard`) — HAL + feature APIs
2. **Example sketches** — one `.ino` per function
3. **This documentation site** — live guide (you are here)

You flash and customize — no pre-loaded monolith required.

---

## See also

- [Pin Map](pin-map.md)
- [Getting Started](../getting-started.md)
- [Examples](../examples/index.md)
