# GPIO Reference

All pins defined in `config/board_config.h`.

---

## Complete pin table

| Function | GPIO | Interface | Notes |
|----------|------|-----------|-------|
| BOOT button | **0** | Digital in | Short / long / double-tap |
| Buzzer | **37** | LEDC PWM | Piezo buzzer |
| Wi-Fi status LED | **38** | WS2812 | 1× RGB, GRB order |
| RGB ring | **45** | WS2812 | 12× RGB, **strapping pin** |
| NFC SDA | **8** | I2C | PN532 data |
| NFC SCL | **18** | I2C | PN532 clock |
| NFC IRQ | **17** | Digital in | PN532 interrupt |
| SD CS | **10** | SPI | microSD chip select |
| SD MOSI | **11** | SPI | |
| SD CLK | **12** | SPI | |
| SD MISO | **13** | SPI | |
| USB D+/D- | USB | Native | CDC + HID |

---

## NFC

```
I2C address: 0x24
Bus: Wire (SDA=8, SCL=18)
```

---

## WS2812 color order

```cpp
#define RGB_USE_GRB  1   // 1=GRB (default), 0=RGB
#define RGB_RING_COUNT  12
#define RGB_WIFI_COUNT  1
```

---

## Boot timing constants

| Constant | Value | Purpose |
|----------|-------|---------|
| `WIFI_PERIPHERAL_DELAY_MS` | 3000 | Delay before RGB init |
| `SD_SCAN_DELAY_MS` | 8000 | SD detect after boot |
| `BOOT_LONG_PRESS_MS` | 1500 | Long press threshold |
| `BOOT_DOUBLE_TAP_MS` | 400 | Double-tap window |

---

## Code reference

```cpp
// config/board_config.h
#define BOARD_NAME              "HackCard ESP32-S3"
#define BOARD_MCU               "ESP32-S3FH4R2"
#define FIRMWARE_VERSION        "0.21.2"
#define PIN_BOOT                0
#define PIN_BUZZER              37
#define PIN_RGB_WIFI            38
#define PIN_RGB_RING            45
#define PIN_NFC_SDA             8
#define PIN_NFC_SCL             18
#define PIN_NFC_IRQ             17
#define NFC_I2C_ADDRESS         0x24
#define PIN_SD_CS               10
#define PIN_SD_MOSI             11
#define PIN_SD_CLK              12
#define PIN_SD_MISO             13
```

---

## Related

- [Board Layout](board-layout.md)
- [Wi-Fi Issues](../troubleshooting/wifi-issues.md)
