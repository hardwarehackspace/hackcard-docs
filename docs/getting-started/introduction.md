# Introduction

HackCard is a pocket-sized **ESP32-S3** development board in a credit-card form factor, designed for hands-on security research and embedded development.

---

## What HackCard is

| Capability | Hardware | Verified in repo |
|------------|----------|------------------|
| NFC tag reading/writing | PN532 + PCB antenna | `HalNfc`, `APP_NFC_*` |
| Wi-Fi lab tools | ESP32-S3 2.4 GHz | `APP_WIFI_*` |
| Bluetooth LE | On-chip BLE | `APP_BLE` |
| RGB feedback | 12× WS2812 ring + 1 status LED | `HalRgbRing`, `HalWifiLed` |
| Audio feedback | Piezo buzzer | `HalBuzzer` |
| Storage | microSD (SPI) + LittleFS | `StorageManager` |
| USB HID (lab) | TinyUSB composite | `APP_USB_HID` |

Firmware is delivered as the **HackCard_ESP32** Arduino sketch. You install Arduino IDE, upload firmware via USB-C, and interact via Serial Monitor, optional web dashboard, or future example sketches.

---

## What HackCard is not

<div class="nfc-notice" markdown="1">

- HackCard is **not** an NFC tag or card **emulator**. The PN532 operates as a **reader/writer** for external tags only.
- HackCard does **not** ship with pre-loaded firmware — you upload it yourself.
- HackCard Wi-Fi is **2.4 GHz only** — not 5 GHz (`user_config.h` comment).

</div>

---

## Who this documentation is for

| Audience | Start here |
|----------|------------|
| **Kickstarter backers** | [What's Included](whats-included.md) → [First Setup](first-setup.md) |
| **Developers** | [Software Installation](../software/installation.md) → [Pinout](../hardware/pinout.md) |
| **Troubleshooting** | [Troubleshooting](../troubleshooting.md) |

---

## Firmware version

Current verified version: **`0.21.2`** (`FIRMWARE_VERSION` in `config/board_config.h`).

The sketch header references **Phase 21 (HID Payload Pack)**. README in the firmware repo documents **v0.21.1** for HID features — use `board_config.h` as the authoritative version string.

---

## Source of truth

All hardware specifications in this site are derived from:

- `HackCard_ESP32/config/board_config.h`
- `HackCard_ESP32/config/user_config.h`
- `HackCard_ESP32/docs/ARDUINO_SETUP.md`
- `HackCard_ESP32/docs/BACKER_GUIDE.md`
- `HackCard_ESP32/docs/WIFI_TROUBLESHOOTING.md`

Repository: [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)
