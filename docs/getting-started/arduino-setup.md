# Arduino Setup

Configure Arduino IDE for HackCard ESP32-S3. Complete this once — settings are saved per board.

---

## 1. Install ESP32 board support

1. **File → Preferences**
2. Add to **Additional boards manager URLs**:

    ```
    https://espressif.github.io/arduino-esp32/package_esp32_index.json
    ```

3. **Tools → Board → Boards Manager** → search `esp32`
4. Install **esp32 by Espressif Systems** (v3.x)

---

## 2. Install libraries

**Tools → Manage Libraries** — install all four:

```
Adafruit NeoPixel
Adafruit PN532
Adafruit BusIO
ArduinoJson
```

---

## 3. Board settings

Connect HackCard via USB-C, then configure **Tools**:

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
| COM Port | Select HackCard port |

!!! warning "HID requires TinyUSB"
    USB HID keyboard examples need **USB-OTG (TinyUSB)** — not Hardware CDC and not USB-OTG WebUSB.

---

## 4. Custom partition table

HackCard uses `partitions.csv` in the sketch folder:

| Partition | Size | Purpose |
|-----------|------|---------|
| Application | ~3 MB | Firmware (Huge APP) |
| LittleFS | ~960 KB | Config when no SD |

=== "Arduino IDE 2.x"

    1. Open the `HackCard_ESP32` sketch folder
    2. Set **Partition Scheme → Custom partition table**
    3. Arduino picks up `partitions.csv` from the sketch directory

=== "If custom option missing"

    Choose the closest: **Huge APP (3MB No OTA / 1MB LittleFS)**

See [Partition Table](../software/partition-table.md) for details.

---

## 5. Download firmware

=== "Option A — Full sketch (current)"

    Clone [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32) and open `HackCard_ESP32/HackCard_ESP32.ino`

=== "Option B — Library + examples (planned)"

    Copy `libraries/HackCard` into your Arduino `libraries/` folder:
    ```
    Documents/Arduino/libraries/HackCard/
    ```

---

## Verify COM port

| OS | Where to look |
|----|---------------|
| Windows | Device Manager → Ports (COM & LPT) |
| macOS | `/dev/cu.usbmodem*` or `/dev/cu.usbserial*` |
| Linux | `ls /dev/ttyACM*` or `ls /dev/ttyUSB*` |

!!! tip "No port visible?"
    Try a different USB-C cable, install CP210x/USB drivers if prompted, or hold **BOOT** and tap **RESET** to enter download mode.

---

## Next

→ [First Flash](first-flash.md)
