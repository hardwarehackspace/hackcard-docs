# Software Installation

Install the tools required to build and upload HackCard firmware.

**Source:** `docs/ARDUINO_SETUP.md`

---

## 1. Arduino IDE

Download **Arduino IDE 2.x**: [arduino.cc/en/software](https://www.arduino.cc/en/software)

---

## 2. ESP32 board package

1. **File → Preferences**
2. **Additional boards manager URLs:**

    ```
    https://espressif.github.io/arduino-esp32/package_esp32_index.json
    ```

3. **Tools → Board → Boards Manager**
4. Search `esp32` → install **esp32 by Espressif Systems**

---

## 3. Libraries

**Tools → Manage Libraries:**

| Library | Purpose |
|---------|---------|
| Adafruit NeoPixel | RGB ring + Wi-Fi LED |
| ArduinoJson | Config load/save |
| Adafruit PN532 | NFC reader |
| Adafruit BusIO | PN532 dependency |

→ Details: [Libraries](libraries.md)

---

## 4. Firmware source

Download from GitHub:

**[HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

Open: `HackCard_ESP32/HackCard_ESP32.ino`

→ Details: [Firmware](firmware.md)

---

## 5. Verify installation

| Check | Expected |
|-------|----------|
| Board list shows ESP32S3 Dev Module | Yes |
| All 4 libraries installed | Yes |
| COM port visible when HackCard connected | Yes |

---

## Next

→ [Arduino Setup](arduino-setup.md) — exact board settings  
→ [First Program](../getting-started/first-program.md) — upload firmware
