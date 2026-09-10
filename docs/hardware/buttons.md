# Buttons & Reset

Physical controls on the HackCard PCB.

**Source:** `docs/BACKER_GUIDE.md`, `config/board_config.h`, back PCB photo

---

## Buttons (back PCB)

| Button | Type | Purpose |
|--------|------|---------|
| **RESET** | Hardware | Reboot device |
| **BOOT** | GPIO 0 | Upload mode + gestures |

<figure class="hardware-image" markdown="1">
![RESET and BOOT buttons on back PCB](../assets/hardware/hackcard-back-pcb.png)
<figcaption>RESET and BOOT — top-right area on back PCB</figcaption>
</figure>

---

## BOOT gestures

From `docs/BACKER_GUIDE.md`:

| Gesture | Timing | Action |
|---------|--------|--------|
| Short press | — | Move ring menu pointer |
| Long press | ~1500 ms (`BOOT_LONG_PRESS_MS`) | Confirm |
| Double tap | ~400 ms window (`BOOT_DOUBLE_TAP_MS`) | Back / cancel |

---

## Upload mode (BOOT + RESET)

From `docs/ARDUINO_SETUP.md`:

1. Hold **BOOT**
2. Press **RESET**
3. Release **RESET**
4. Release **BOOT**

Use when upload fails with "Failed to connect to ESP32".

---

## Diagnostics note

From `DiagnosticsApp.cpp`:

> BOOT Button — Manual — short press should move ring pointer

Included in `diag run` report as manual verification item.

---

## Source

- [`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
- [`docs/BACKER_GUIDE.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/BACKER_GUIDE.md)
