# Pinout

Complete GPIO reference from `config/board_config.h`.

---

## Pin table

| Function | GPIO | Interface | Notes |
|----------|------|-----------|-------|
| BOOT button | **0** | Digital | Short / long / double-tap |
| Buzzer | **37** | LEDC PWM | Piezo |
| Wi-Fi status LED | **38** | WS2812 | 1× RGB, GRB order |
| RGB ring | **45** | WS2812 | 12× RGB — **strapping pin** |
| NFC SDA | **8** | I2C | PN532 |
| NFC SCL | **18** | I2C | PN532 |
| NFC IRQ | **17** | Digital | PN532 interrupt |
| SD CS | **10** | SPI | microSD |
| SD MOSI | **11** | SPI | |
| SD CLK | **12** | SPI | |
| SD MISO | **13** | SPI | |
| USB | USB-C | Native | CDC + HID |

---

## NFC I2C

```
Address: 0x24
SDA: GPIO 8
SCL: GPIO 18
IRQ: GPIO 17
```

---

## WS2812

```cpp
#define RGB_USE_GRB       1    // 1=GRB, 0=RGB if colors swapped
#define RGB_RING_COUNT    12
#define RGB_WIFI_COUNT    1
```

---

## Timing constants

| Constant | Value (ms) | Purpose |
|----------|------------|---------|
| `WIFI_PERIPHERAL_DELAY_MS` | 3000 | Delay before RGB/buzzer |
| `SD_SCAN_DELAY_MS` | 8000 | Deferred SD scan |
| `BOOT_LONG_PRESS_MS` | 1500 | Long press threshold |
| `BOOT_DOUBLE_TAP_MS` | 400 | Double-tap window |

---

## PCB risk pins

From `docs/WIFI_TROUBLESHOOTING.md`:

| Pin | Function | Risk |
|-----|----------|------|
| GPIO 45 | RGB ring | Strapping pin — WS2812 can affect Wi-Fi |
| GPIO 38 | Wi-Fi LED | NeoPixel after AP can disturb RF |
| GPIO 37 | Buzzer | PWM can break SoftAP visibility |
| GPIO 8 | NFC SDA | Must not be held LOW at boot |
| GPIO 12 | SD CLK | SPI noise near antenna |

---

## Source

[`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
