# Updates

How to update HackCard firmware and understand the flash layout.

---

## Current version

**v0.21.2** — `FIRMWARE_VERSION` in `config/board_config.h`

---

## How to update

1. Pull latest from [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)
2. Review `CHANGELOG` if present — <span class="coming-soon">Documentation coming soon</span>
3. Open `HackCard_ESP32.ino` in Arduino IDE
4. Upload via USB-C (same procedure as [First Program](../getting-started/first-program.md))

!!! note "No OTA in current layout"
    `partitions.csv` has no OTA partition — updates require USB reflash.

---

## Partition table

From `partitions.csv`:

```csv
# HackCard ESP32-S3FH4R2 — 4MB flash
# Huge APP (~3MB) + LittleFS (~960KB)
nvs,      data, nvs,     0x9000,  0x5000,
phy_init, data, phy,     0xe000,  0x1000,
factory,  app,  factory, 0x10000, 0x300000,
littlefs, data, spiffs,  0x310000,0xF0000,
```

| Partition | Size | Purpose |
|-----------|------|---------|
| factory | 3 MB | Application |
| littlefs | 960 KB | Config when no SD |

---

## Preserving settings

| Storage | Survives reflash? |
|---------|-------------------|
| `user_config.h` (recompile) | Yes — if you keep your edited file |
| LittleFS on flash | May be erased on full flash |
| SD `/config/hackcard.json` | Yes — SD not affected by firmware upload |

---

## Prebuilt binaries

<span class="coming-soon">Documentation coming soon</span>

Precompiled `.bin` files for backers who skip Arduino IDE are not yet published in the repository.

---

## Source

[`partitions.csv`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/partitions.csv)
