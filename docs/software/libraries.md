# Libraries

Required Arduino libraries and the official **HackCard** board library.

---

## Install — dependencies

**Tools → Manage Libraries** in Arduino IDE:

| Library | Author | Purpose |
|---------|--------|---------|
| **Adafruit NeoPixel** | Adafruit | 12-LED ring + WiFi RGB |
| **ArduinoJson** | Benoit Blanchon | Config load/save (full firmware) |
| **Adafruit PN532** | Adafruit | NFC tag reading/writing |
| **Adafruit BusIO** | Adafruit | Required by PN532 library |

---

## Install — HackCard library

The official board library ships in the firmware repo:

[`library/HackCard`](https://github.com/hardwarehackspace/HackCard-ESP32/tree/main/library/HackCard)

1. Clone or download [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)
2. Copy `library/HackCard` to `Documents/Arduino/libraries/HackCard`
3. Restart Arduino IDE
4. Open **File → Examples → HackCard**

Or: zip the `HackCard` folder → **Sketch → Include Library → Add .ZIP Library…**

```cpp
#include <HackCard.h>
```

Provides pin map (`HackCard_Pins.h`) plus drivers: `RgbRing`, `WifiLed`, `Buzzer`, `Buttons`, `Nfc`, `Ble`.

---

## Which features need which library

| Library | Features |
|---------|----------|
| HackCard | Pin map + HAL used by examples |
| Adafruit NeoPixel | RGB ring (GPIO 45), Wi-Fi LED (GPIO 38) |
| Adafruit PN532 + BusIO | All NFC operations |
| ArduinoJson | Full firmware `ConfigStore` — `/config/hackcard.json` |

---

## ESP32 core (built-in)

These ship with the ESP32 board package — no separate install:

- Wi-Fi (`WiFi`, `WebServer`)
- BLE (`BLEDevice`)
- USB HID (`USBHIDKeyboard`, etc. via TinyUSB)
- LittleFS, SD, SPI, Wire

---

## Version compatibility

| Component | Version |
|-----------|---------|
| HackCard firmware / library | `0.21.2` |
| ESP32 Arduino core | 3.x recommended |
| Adafruit NeoPixel / PN532 / BusIO | Latest stable from Library Manager |
| ArduinoJson | Latest stable (full firmware) |

Pin versions in CI later if builds are automated. Prefer latest stable unless a tutorial pins a version.

---

## Source

- [`library/HackCard`](https://github.com/hardwarehackspace/HackCard-ESP32/tree/main/library/HackCard)
- [`docs/ARDUINO_SETUP.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/ARDUINO_SETUP.md)
