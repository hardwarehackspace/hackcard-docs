# First Setup

Connect HackCard and prepare your computer for the first firmware upload.

---

## Step 1 — Connect HackCard

1. Use a USB-C **data** cable (not charge-only)
2. Connect HackCard to your PC
3. Confirm a COM/serial port appears (see [Troubleshooting](../troubleshooting.md) if not)

**Power:** `USB_POWER_ONLY` is set to `1` in `board_config.h` — USB-C is the primary power source.

---

## Step 2 — Install Arduino IDE

Download **Arduino IDE 2.x** from [arduino.cc](https://www.arduino.cc/en/software).

---

## Step 3 — Install ESP32 board support

1. **File → Preferences**
2. Add boards manager URL:

    ```
    https://espressif.github.io/arduino-esp32/package_esp32_index.json
    ```

3. **Tools → Board → Boards Manager** → install **esp32 by Espressif Systems**

Full details: [Software Installation](../software/installation.md)

---

## Step 4 — Install libraries

Via **Tools → Manage Libraries**, install:

| Library | Required for |
|---------|--------------|
| Adafruit NeoPixel | RGB ring + Wi-Fi LED |
| Adafruit PN532 | NFC reader |
| Adafruit BusIO | PN532 dependency |
| ArduinoJson | Config storage |

---

## Step 5 — Download firmware

Clone or download the firmware repository:

**[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

Open folder: `HackCard_ESP32/HackCard_ESP32.ino`

---

## Step 6 — Configure Arduino board settings

Before uploading, set **Tools** exactly as documented in [Arduino Setup](../software/arduino-setup.md):

| Setting | Value |
|---------|-------|
| Board | ESP32S3 Dev Module |
| USB CDC On Boot | Enabled |
| USB Mode | USB-OTG (TinyUSB) |
| Flash Size | 4 MB (32 Mb) |
| PSRAM | OPI PSRAM |
| Partition Scheme | Custom partition table |

---

## Next step

→ [First Program](first-program.md) — upload firmware and verify Serial output
