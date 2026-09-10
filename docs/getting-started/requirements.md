# What You Need

## Hardware

| Item | Required | Notes |
|------|----------|-------|
| HackCard ESP32 board | Yes | ESP32-S3FH4R2 PCB |
| USB-C data cable | Yes | Charge-only cables will not work |
| Windows / macOS / Linux PC | Yes | For Arduino IDE |
| microSD card | No | Enables Full Mode — logs, NFC dumps |
| NFC tags | For NFC tutorials | NTAG213/215/216 or Mifare Ultralight |
| Second device (phone/laptop) | For Wi-Fi tutorials | Connect to HackCard AP |

---

## Software

| Software | Version | Download |
|----------|---------|----------|
| Arduino IDE | 2.x | [arduino.cc](https://www.arduino.cc/en/software) |
| ESP32 board package | 3.x | Via Boards Manager |
| HackCard firmware | latest | [GitHub](https://github.com/hardwarehackspace/HackCard-ESP32) |

### Arduino libraries

Install via **Tools → Manage Libraries**:

| Library | Purpose |
|---------|---------|
| Adafruit NeoPixel | RGB ring + Wi-Fi LED |
| Adafruit PN532 | NFC reader/writer |
| Adafruit BusIO | PN532 dependency |
| ArduinoJson | Config persistence |

---

## Knowledge level

| Level | You can start with |
|-------|-------------------|
| **Beginner** | Follow [First Flash](first-flash.md) exactly — copy settings from tables |
| **Intermediate** | Skim setup, jump to [Tutorials](../tutorials/index.md) |
| **Expert** | [Software](../software/index.md) + [GPIO Reference](../pinout/gpio-reference.md) |

---

## Optional accessories

- **Tag-it NFC tags** — NTAG series for write tutorials
- **USB hub** — if your PC has limited ports
- **Anti-static mat** — good practice for bare PCBs
