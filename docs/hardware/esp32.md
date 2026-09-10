# ESP32

HackCard is built around the **ESP32-S3FH4R2** module.

---

## Specifications

| Spec | Value | Source |
|------|-------|--------|
| Chip | ESP32-S3FH4R2 | `BOARD_MCU` |
| Flash | 4 MB | `FLASH_SIZE_MB` |
| PSRAM | 2 MB (OPI) | `PSRAM_SIZE_MB` |
| Wi-Fi | 2.4 GHz | ESP32-S3, confirmed in `user_config.h` |
| BLE | On-chip | `APP_BLE` in `app_registry.h` |
| USB | Native USB-C | TinyUSB for CDC + HID |

---

## Arduino IDE settings

| Setting | Value |
|---------|-------|
| Board | ESP32S3 Dev Module |
| CPU Frequency | 240 MHz |
| Flash Mode | QIO 80 MHz |
| Flash Size | 4 MB (32 Mb) |
| PSRAM | OPI PSRAM |
| USB CDC On Boot | Enabled |
| USB Mode | USB-OTG (TinyUSB) |

→ Full table: [Arduino Setup](../software/arduino-setup.md)

---

## Partition layout

From `partitions.csv`:

| Partition | Size | Purpose |
|-----------|------|---------|
| nvs | 20 KB | Non-volatile storage |
| phy_init | 4 KB | RF calibration |
| factory (app) | 3 MB | Application firmware |
| littlefs | 960 KB | Flash filesystem |

→ Details: [Software → Updates](../software/updates.md)

---

## Wireless notes

- **Wi-Fi is 2.4 GHz only** — phones must scan 2.4 GHz networks to see `HackCard-Setup`
- **No 5 GHz** — documented in `user_config.h`
- Custom PCB antenna — see [Wi-Fi Troubleshooting](../troubleshooting.md)

---

## Source

- [`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
- [`partitions.csv`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/partitions.csv)
