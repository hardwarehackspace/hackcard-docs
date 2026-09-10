# Board Layout

Physical component locations on the HackCard PCB.

---

## Board photos

<div class="image-grid" markdown="1">

<figure class="hardware-image" markdown="1">
![HackCard front render](../assets/hardware/hackcard-front-render.png)
<figcaption><strong>Front</strong> — Wi-Fi status LED (top-left), 12-LED RGB ring (center), NFC tap zone, USB edge</figcaption>
</figure>

<figure class="hardware-image" markdown="1">
![HackCard back PCB](../assets/hardware/hackcard-back-pcb.png)
<figcaption><strong>Back</strong> — NFC antenna coil (left), ESP32-S3 + PN532 (right), USB-C, SD slot, RESET/BOOT, buzzer</figcaption>
</figure>

</div>

---

## Component map (back PCB)

| Label on PCB | Component | Notes |
|--------------|-----------|-------|
| NFC coil (left) | Antenna | Tap tags here |
| USB-C (top-right) | Power + data | Flash and HID |
| RESET / BOOT | Buttons | Upload mode: hold BOOT, tap RESET |
| SD CARD | microSD slot | FAT32, push to click |
| BUZZER | Piezo | GPIO 37 |
| ESP32-S3 | Main MCU | Under metal shield |
| PN532 | NFC controller | I2C to ESP32 |

---

## Component map (front)

| Area | Component | GPIO |
|------|-----------|------|
| Top-left | Wi-Fi icon + status LED | 38 |
| Center | 12-LED RGB ring | 45 |
| Edge | USB-C connector | — |

---

## More photos coming

!!! info "Placeholder section"
    Additional real product photos (angled views, scale reference, packaging) will be added here. To contribute photos, place files in `docs/assets/product/` and update this page.

Suggested photos to add:

- [ ] Angled 3/4 view (front)
- [ ] Hand scale reference
- [ ] USB-C port close-up
- [ ] NFC tap demonstration
- [ ] SD card insertion

---

## Related

- [GPIO Reference](gpio-reference.md)
- [Getting Started](../getting-started/index.md)
