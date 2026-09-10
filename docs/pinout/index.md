# Pinout

GPIO reference and physical board layout for HackCard ESP32-S3.

---

## Quick reference

| Function | GPIO |
|----------|------|
| BOOT | 0 |
| Buzzer | 37 |
| Wi-Fi LED | 38 |
| RGB ring | 45 |
| NFC SDA / SCL / IRQ | 8 / 18 / 17 |
| SD CS / MOSI / CLK / MISO | 10 / 11 / 12 / 13 |

→ Full table: [GPIO Reference](gpio-reference.md)  
→ Photos and labels: [Board Layout](board-layout.md)

---

## MCU

| Spec | Value |
|------|-------|
| Chip | ESP32-S3FH4R2 |
| Flash | 4 MB |
| PSRAM | 2 MB OPI |
| USB | Native USB-C |

---

## Design notes

!!! warning "GPIO 45 strapping pin"
    RGB ring on GPIO 45 — initialize **Wi-Fi before RGB** to avoid RF issues.

!!! info "NFC tap side"
    Tap tags on the **back** of the PCB over the antenna coil.
