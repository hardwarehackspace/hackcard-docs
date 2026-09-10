# Hardware Versions

Identify which HackCard board you have.

---

## Verified hardware revision

| Field | Value | Source |
|-------|-------|--------|
| Board name | `HackCard ESP32-S3` | `BOARD_NAME` |
| MCU | `ESP32-S3FH4R2` | `BOARD_MCU` |
| Flash | 4 MB | `FLASH_SIZE_MB` |
| PSRAM | 2 MB | `PSRAM_SIZE_MB` |
| USB | USB-C, power only flag set | `USB_POWER_ONLY = 1` |

This is the only hardware configuration documented in the current firmware repository.

---

## How to identify your board

1. **MCU marking** — ESP32-S3 module on back of PCB (see [board photo](../hardware/overview.md))
2. **NFC coil** — rectangular antenna trace on back left
3. **USB-C** — top-right on back PCB photo
4. **SD slot** — bottom-right, labeled on silkscreen

---

## Reward tiers / PCB revisions

<span class="coming-soon">Documentation coming soon</span>

If Kickstarter shipped multiple PCB revisions or feature tiers, revision-specific documentation will be added here. Until then, refer to `config/board_config.h` pin definitions for your board.

!!! tip "Custom PCB revision"
    `board_config.h` header states: *"Edit only if you have a custom PCB revision."* If your pins differ, compare against [Pinout](../hardware/pinout.md) before uploading firmware.

---

## Firmware compatibility

| Firmware | Hardware |
|----------|----------|
| HackCard_ESP32 v0.21.2 | ESP32-S3FH4R2 / 4 MB flash / OPI PSRAM |

Arduino board setting: **ESP32S3 Dev Module** (see [Arduino Setup](../software/arduino-setup.md)).
