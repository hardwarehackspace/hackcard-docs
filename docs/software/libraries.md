# Libraries

Required Arduino libraries from `docs/ARDUINO_SETUP.md`.

---

## Install

**Tools → Manage Libraries** in Arduino IDE:

| Library | Author | Purpose |
|---------|--------|---------|
| **Adafruit NeoPixel** | Adafruit | 12-LED ring + WiFi RGB |
| **ArduinoJson** | Benoit Blanchon | Config load/save |
| **Adafruit PN532** | Adafruit | NFC tag reading/writing |
| **Adafruit BusIO** | Adafruit | Required by PN532 library |

---

## Which features need which library

| Library | Features |
|---------|----------|
| Adafruit NeoPixel | RGB ring (GPIO 45), Wi-Fi LED (GPIO 38) |
| Adafruit PN532 + BusIO | All NFC operations |
| ArduinoJson | `ConfigStore` — `/config/hackcard.json` |

---

## ESP32 core (built-in)

These ship with the ESP32 board package — no separate install:

- Wi-Fi (`WiFi`, `WebServer`)
- BLE (`BLEDevice`)
- USB HID (`USBHIDKeyboard`, etc. via TinyUSB)
- LittleFS, SD, SPI, Wire

---

## Version compatibility

<span class="coming-soon">Documentation coming soon</span>

Pinned library version matrix will be added after verification on CI. Use latest stable versions from Library Manager unless a tutorial specifies otherwise.

---

## Source

[`docs/ARDUINO_SETUP.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/ARDUINO_SETUP.md)
