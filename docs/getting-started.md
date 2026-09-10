# Getting Started

Flash your HackCard in **~15 minutes**. No SD card required for the first test.

---

## What you need

- HackCard ESP32 board
- USB-C data cable (not charge-only)
- Windows, macOS, or Linux PC
- [Arduino IDE 2.x](https://www.arduino.cc/en/software)

---

## Step 1 — Install ESP32 board support

1. Open **Arduino IDE**
2. Go to **File → Preferences**
3. Add this URL to **Additional boards manager URLs**:

    ```
    https://espressif.github.io/arduino-esp32/package_esp32_index.json
    ```

4. Open **Tools → Board → Boards Manager**
5. Search **esp32**, install **esp32 by Espressif Systems** (v3.x recommended)

---

## Step 2 — Install libraries

Open **Tools → Manage Libraries** and install:

| Library | Author |
|---------|--------|
| Adafruit NeoPixel | Adafruit |
| Adafruit PN532 | Adafruit |
| Adafruit BusIO | Adafruit |
| ArduinoJson | Benoit Blanchon |

---

## Step 3 — Download HackCard firmware

1. Clone or download the **[HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)** repository
2. Copy the `libraries/HackCard` folder into your Arduino libraries directory:

    === "Windows"
        ```
        Documents\Arduino\libraries\HackCard
        ```

    === "macOS"
        ```
        ~/Documents/Arduino/libraries/HackCard
        ```

    === "Linux"
        ```
        ~/Arduino/libraries/HackCard
        ```

!!! note "Demo / current repo layout"
    If the library is not packaged yet, open the `HackCard_ESP32` sketch folder directly from the firmware repo.

---

## Step 4 — Arduino board settings

Connect HackCard via USB-C, then set **Tools** as follows:

| Setting | Value |
|---------|-------|
| Board | **ESP32S3 Dev Module** |
| USB CDC On Boot | **Enabled** |
| USB Mode | **USB-OTG (TinyUSB)** |
| CPU Frequency | 240 MHz |
| Flash Mode | QIO 80 MHz |
| Flash Size | **4 MB (32 Mb)** |
| PSRAM | **OPI PSRAM** |
| Partition Scheme | **Custom partition table** |
| Upload Speed | 921600 |

!!! warning "HID examples need TinyUSB"
    USB HID keyboard examples require **USB-OTG (TinyUSB)** — not Hardware CDC.

---

## Step 5 — Flash your first example

1. In Arduino IDE: **File → Examples → HackCard → 00_Basics → Boot_Serial_Status**
    - *If not available yet, open `HackCard_ESP32/HackCard_ESP32.ino` from the firmware repo*
2. Select the correct **COM port** under Tools
3. Click **Upload** (→)
4. Open **Serial Monitor** at **115200 baud**
5. Press the **RESET** button if nothing appears

### Expected output

```
[boot] HackCard ESP32-S3
[boot] Firmware v0.21.2
[boot] Free heap: ...... bytes
[boot] Wi-Fi AP starting...
[boot] AP: HackCard-Setup
[ready] Hold tag / open Serial for commands
```

If you see similar lines — **your board is working.**

---

## Step 6 — Try the next examples

| Order | Example | What you'll learn |
|-------|---------|-------------------|
| 1 | Boot Serial Status | Board alive, Serial, heap |
| 2 | WiFi AP Startup | Join HackCard Wi-Fi hotspot |
| 3 | RGB Ring Patterns | 12-LED animations |
| 4 | [NFC Read UID](examples/nfc-read-uid.md) | Read a tag UID |

Browse the full list on the **[Examples overview](examples/index.md)** page.

---

## Personalize your card (optional)

Edit `config/user_config.h` in the firmware folder:

```cpp
#define USER_NAME       "Your Name"
#define USER_EMAIL      "you@example.com"
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "yourpassword8"   // min 8 chars
#define LAB_MODE_PIN    "1234"            // change before demos!
```

Re-upload after editing.

---

## What's next?

- **[Pin Map](hardware/pin-map.md)** — GPIO reference
- **[Examples](examples/index.md)** — one sketch per feature
- **[Troubleshooting](troubleshooting.md)** — if upload or Wi-Fi fails
