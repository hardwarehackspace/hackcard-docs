# Component Map

Labeled reference from PCB photos and silkscreen in the firmware repository.

---

## Back PCB

<figure class="hardware-image" markdown="1">
![HackCard back PCB with labeled areas](../assets/hardware/hackcard-back-pcb.png)
<figcaption>Back PCB — component locations</figcaption>
</figure>

| # | Label / area | Component | Doc |
|---|--------------|-----------|-----|
| 1 | Left — rectangular coil | NFC antenna | [NFC](nfc.md) |
| 2 | Top-right | USB-C port | [Power](power.md) |
| 3 | Top — RESET, BOOT | Tactile buttons | [Buttons](buttons.md) |
| 4 | Center-right | ESP32-S3 module | [ESP32](esp32.md) |
| 5 | Center-right | PN532 NFC IC | [NFC](nfc.md) |
| 6 | Bottom-right — SD CARD | microSD slot | [SD Card](sd-card.md) |
| 7 | Bottom — BUZZER | Piezo buzzer | [Buzzer feature](../features/buzzer.md) |
| 8 | Test pads TPA/GND/TPB | NFC antenna test points | [NFC](nfc.md) |

---

## Front PCB

<figure class="hardware-image" markdown="1">
![HackCard front render](../assets/hardware/hackcard-front-render.png)
<figcaption>Front — LED areas</figcaption>
</figure>

| # | Area | Component | GPIO |
|---|------|-----------|------|
| 1 | Top-left — Wi-Fi icon | Status LED (WS2812) | 38 |
| 2 | Center ring | 12× RGB ring (WS2812) | 45 |
| 3 | Left edge | USB-C (through board) | — |

---

## Tap zone for NFC

Place **external NFC tags** on the **back**, centered over the rectangular antenna coil — not the front of the card.

<div class="nfc-notice" markdown="1">

PN532 is a **reader** — HackCard does not emulate tags. You tap **tags onto** HackCard, not the other way around.

</div>

---

## Additional photos

<span class="coming-soon">Documentation coming soon</span>

Add high-resolution photos to `docs/assets/product/` for angled views and scale reference.

---

## Source

PCB photos in repository + [`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
