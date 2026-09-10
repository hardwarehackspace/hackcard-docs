# Arduino Setup

Exact Arduino IDE settings for HackCard ESP32-S3.

**Source:** `docs/ARDUINO_SETUP.md` (verbatim)

---

## Board settings

Open **Arduino IDE → Tools**:

| Setting | Value |
|---------|-------|
| Board | ESP32S3 Dev Module |
| USB CDC On Boot | **Enabled** (composite serial + HID; use web terminal if serial is quiet) |
| USB Mode | **USB-OTG (TinyUSB)** — required for HID keyboard |
| CPU Frequency | 240MHz |
| Flash Mode | QIO 80MHz |
| Flash Size | 4MB (32Mb) |
| PSRAM | OPI PSRAM |
| Partition Scheme | Custom partition table |
| Upload Speed | 921600 |

---

## Custom partition table

Project includes `partitions.csv`:

- ~3 MB application firmware (Huge APP)
- ~960 KB LittleFS for no-SD fallback

**Arduino IDE 2.x:**

1. Open the `HackCard_ESP32` sketch folder
2. Set **Partition Scheme** to **Custom partition table**
3. Arduino picks up `partitions.csv` from sketch directory

If unavailable, choose closest: **Huge APP (3MB No OTA / 1MB LittleFS)**.

---

## Personal settings

Edit `config/user_config.h`:

- Name, email, website
- AP SSID and password
- Buzzer and LED defaults

No SD card required for initial setup.

---

## Upload procedure

1. Connect HackCard by USB-C
2. Select correct COM port
3. Upload
4. Open Serial Monitor at **115200 baud**
5. Press RESET if needed

---

## Flash vs Full Mode

| Mode | When | Storage |
|------|------|---------|
| Flash Mode | No SD inserted | LittleFS + compiled defaults |
| Full Mode | SD inserted | SD preferred, auto folder setup |

---

## Source

[`docs/ARDUINO_SETUP.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/ARDUINO_SETUP.md)
