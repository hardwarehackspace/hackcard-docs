# What's Included

Physical contents and on-board peripherals for the HackCard ESP32-S3 PCB.

---

## On-board hardware

Verified from `config/board_config.h` and PCB photos:

| Component | Detail |
|-----------|--------|
| **MCU** | ESP32-S3FH4R2 (4 MB flash, 2 MB PSRAM) |
| **NFC** | PN532 controller + PCB antenna coil |
| **RGB ring** | 12× WS2812 LEDs (GPIO 45) |
| **Wi-Fi status LED** | 1× WS2812 (GPIO 38) |
| **Buzzer** | Piezo, PWM on GPIO 37 |
| **microSD slot** | SPI interface (GPIO 10–13) |
| **USB-C** | Power and data |
| **Buttons** | RESET (hardware) + BOOT (GPIO 0) |

<div class="image-grid" markdown="1">

<figure class="hardware-image" markdown="1">
![HackCard front](../assets/hardware/hackcard-front-render.png)
<figcaption>Front — RGB ring, Wi-Fi LED area</figcaption>
</figure>

<figure class="hardware-image" markdown="1">
![HackCard back](../assets/hardware/hackcard-back-pcb.png)
<figcaption>Back — NFC coil, ESP32-S3, USB-C, SD slot, RESET/BOOT, buzzer</figcaption>
</figure>

</div>

---

## What you need to supply

| Item | Required |
|------|----------|
| USB-C **data** cable | Yes |
| PC with Arduino IDE | Yes |
| microSD card (FAT32) | Optional — enables Full Mode |
| NFC tags (NTAG, etc.) | For NFC tutorials |

---

## Packaging contents

<span class="coming-soon">Documentation coming soon</span>

Detailed Kickstarter packaging checklist (cable included, SD pre-installed, etc.) will be added when confirmed for your reward tier.

---

## What works without SD card

From `docs/BACKER_GUIDE.md`:

- Boot animation and status LEDs
- USB terminal (`help`, `status`, `config show`) — when `CLI_SERIAL_ENABLED` is 1
- Wi-Fi status dashboard (when web firmware uploaded)
- Contact details from `user_config.h`

---

## What improves with SD card

From `docs/BACKER_GUIDE.md` and `StorageManager.cpp`:

| Path | Purpose |
|------|---------|
| `/config/hackcard.json` | Portable config override |
| `/logs/activity.csv` | Activity log |
| `/nfc/dumps/` | NFC dump files |
| `/wifi/` | Wi-Fi scan results |

Insert SD and HackCard automatically switches to **Full Mode**.
