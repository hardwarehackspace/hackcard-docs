# SD Card

Optional **microSD** storage via SPI.

---

## Pins

| Signal | GPIO |
|--------|------|
| CS | 10 |
| MOSI | 11 |
| CLK | 12 |
| MISO | 13 |

From `config/board_config.h`. SPI init in `StorageManager.cpp`:

```cpp
SPI.begin(PIN_SD_CLK, PIN_SD_MISO, PIN_SD_MOSI, PIN_SD_CS);
SD.begin(PIN_SD_CS);
```

---

## Requirements

- **FAT32** format (from `docs/ARDUINO_SETUP.md`)
- Insert until click (back PCB photo — bottom-right slot)

---

## Operating modes

| Mode | Condition | Storage |
|------|-----------|---------|
| **Flash Mode** | No SD | LittleFS (~960 KB) |
| **Full Mode** | SD detected | SD preferred |

SD scan is **deferred 8 seconds** after boot (`SD_SCAN_DELAY_MS`) for Wi-Fi stability.

---

## Auto-created folders (Full Mode)

From `StorageManager.cpp` when `SD_AUTO_CREATE_FOLDERS` is true:

```
/config
/logs
/nfc
/nfc/dumps
/wifi
/ble
/payloads
/vault
```

`/payloads` and `/vault` folders are created but **no apps consume them yet** in current firmware.

---

## Troubleshooting

From `docs/ARDUINO_SETUP.md`:

- Check SD is FAT32
- Serial command: `sd status`
- Verify GPIO 10/11/12/13

→ [Troubleshooting](../troubleshooting.md)

---

## Source

[`src/core/StorageManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
