# Datasheets

Manufacturer documentation for components identified in the HackCard firmware repository.

!!! note "External links"
    These are **manufacturer** references — verify against the exact parts on your PCB revision.

---

## Identified components

| Component | ID in firmware | Manufacturer documentation |
|-----------|----------------|---------------------------|
| MCU | ESP32-S3FH4R2 | [Espressif ESP32-S3 Series](https://www.espressif.com/en/products/socs/esp32-s3) |
| NFC controller | PN532 | [NXP PN532 Product Page](https://www.nxp.com/products/rfid-nfc/nfc-hf/nfc-readers/wmp/product:PN5321A) |
| RGB LEDs | WS2812 | [Worldsemi WS2812 Datasheet (PDF)](https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf) |

---

## HackCard-specific docs

| Resource | Link |
|----------|------|
| Pinout | [Hardware → Pinout](../hardware/pinout.md) |
| GPIO source | [`board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h) |
| Schematics | [Schematics](schematics.md) — <span class="coming-soon">coming soon</span> |

---

## ESP32 Arduino core

| Resource | Link |
|----------|------|
| Board package | [espressif/arduino-esp32](https://github.com/espressif/arduino-esp32) |
| Install URL | `https://espressif.github.io/arduino-esp32/package_esp32_index.json` |

From `docs/ARDUINO_SETUP.md` (via installation guide).
