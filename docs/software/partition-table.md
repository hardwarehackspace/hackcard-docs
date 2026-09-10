# Partition Table

Flash layout from `partitions.csv` in the firmware repository.

---

## partitions.csv

```csv
# HackCard ESP32-S3FH4R2 — 4MB flash
# Huge APP (~3MB) + LittleFS (~960KB)
nvs,      data, nvs,     0x9000,  0x5000,
phy_init, data, phy,     0xe000,  0x1000,
factory,  app,  factory, 0x10000, 0x300000,
littlefs, data, spiffs,  0x310000,0xF0000,
```

---

## Layout

| Partition | Offset | Size | Purpose |
|-----------|--------|------|---------|
| nvs | 0x9000 | 20 KB | Wi-Fi/BLE calibration data |
| phy_init | 0xE000 | 4 KB | RF PHY init |
| factory | 0x10000 | 3 MB | Application firmware |
| littlefs | 0x310000 | 960 KB | Flash filesystem |

**Total flash:** 4 MB (`FLASH_SIZE_MB` in `board_config.h`)

---

## Arduino IDE

1. **Partition Scheme → Custom partition table**
2. `partitions.csv` must be in sketch folder
3. Fallback if unavailable: **Huge APP (3MB No OTA / 1MB LittleFS)**

From `docs/ARDUINO_SETUP.md`.

---

## No OTA partition

Current layout has **no OTA slot** — firmware updates require USB reflash. See [Updates](updates.md).

---

## Source

[`partitions.csv`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/partitions.csv)
