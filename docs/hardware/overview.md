# Hardware Overview

Physical layout and subsystems of the HackCard ESP32-S3 PCB.

---

## Board photos

<div class="image-grid" markdown="1">

<figure class="hardware-image" markdown="1">
![Front render](../assets/hardware/hackcard-front-render.png)
<figcaption>Front — Wi-Fi symbol + status LED, 12-LED RGB ring</figcaption>
</figure>

<figure class="hardware-image" markdown="1">
![Back PCB](../assets/hardware/hackcard-back-pcb.png)
<figcaption>Back — NFC antenna coil (left), ESP32-S3 + PN532 (right), USB-C, SD, buttons</figcaption>
</figure>

</div>

---

## Subsystems

| Subsystem | Page | GPIO / interface |
|-----------|------|------------------|
| ESP32-S3 MCU | [ESP32](esp32.md) | USB, Wi-Fi, BLE |
| NFC reader (PN532) | [NFC](nfc.md) | I2C 8/18/17 |
| microSD | [SD Card](sd-card.md) | SPI 10–13 |
| RGB + buzzer | [Features → RGB](../features/rgb.md) | 45, 38, 37 |
| Power | [Power](power.md) | USB-C |

→ Full pin table: [Pinout](pinout.md)

---

## Boot behavior (verified)

From `HackCard_ESP32.ino` and `WIFI_TROUBLESHOOTING.md`:

1. **Wi-Fi starts first**
2. RGB, buzzer, SD scan deferred **3–8 seconds** (`WIFI_PERIPHERAL_DELAY_MS`, `SD_SCAN_DELAY_MS`)
3. NFC initialized after deferred peripherals
4. Serial diagnostics printed at 115200 baud

This order prevents GPIO 45 (RGB ring) from disrupting Wi-Fi RF on the custom PCB.

---

## Additional photos

<span class="coming-soon">Documentation coming soon</span>

More product photography (angled views, scale reference, tap-zone demo) will be added as available.
