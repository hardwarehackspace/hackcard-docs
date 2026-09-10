# Pin Map

GPIO reference for the **HackCard ESP32-S3** PCB.  
Defined in firmware at `config/board_config.h`.

---

## Pin table

| Function | GPIO | Bus | Notes |
|----------|------|-----|-------|
| BOOT button | **0** | — | Short / long / double-tap gestures |
| Buzzer (PWM) | **37** | LEDC | Piezo buzzer |
| Wi-Fi status LED | **38** | WS2812 | 1× RGB at Wi-Fi symbol |
| RGB ring | **45** | WS2812 | 12× LEDs in circle |
| NFC SDA | **8** | I2C | PN532 data |
| NFC SCL | **18** | I2C | PN532 clock |
| NFC IRQ | **17** | — | PN532 interrupt |
| SD CS | **10** | SPI | microSD chip select |
| SD MOSI | **11** | SPI | |
| SD CLK | **12** | SPI | |
| SD MISO | **13** | SPI | |
| USB | USB-C | — | Power + data + HID |

### NFC I2C address

```
0x24
```

---

## Board diagram

```
                    ┌─────────────────────────┐
                    │      HackCard ESP32     │
                    │                         │
         [USB-C]────┤                         │
                    │    ◉  RGB Ring (×12)    │
                    │       GPIO 45           │
                    │                         │
                    │  [NFC]     [BOOT]       │
                    │  I2C       GPIO 0       │
                    │  8,18,17                │
                    │                         │
                    │  WiFi LED ◉  GPIO 38    │
                    │  Buzzer     GPIO 37     │
                    │  [SD slot]  SPI 10-13   │
                    └─────────────────────────┘
```

!!! warning "GPIO 45 and Wi-Fi"
    The RGB ring uses **GPIO 45**, a strapping pin. Firmware starts **Wi-Fi before the RGB ring** to avoid RF issues.  
    See **[Troubleshooting](../troubleshooting.md#wifi-not-visible)** if the hotspot does not appear.

---

## WS2812 color order

Most WS2812 LEDs on HackCard use **GRB** order:

```cpp
#define RGB_USE_GRB  1   // in board_config.h
```

If red and green are swapped, set to `0`.

---

## Power

| Source | Notes |
|--------|-------|
| USB-C | Primary — power and data |
| Battery | Not on standard HackCard PCB |

`USB_POWER_ONLY` is set to `1` in board config.

---

## Related pages

- [Board Overview](board-overview.md)
- [Getting Started](../getting-started.md)
- [Troubleshooting — Wi-Fi](../troubleshooting.md#wifi-not-visible)
