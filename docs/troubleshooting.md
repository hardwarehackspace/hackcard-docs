# Troubleshooting

**Sources:** `docs/ARDUINO_SETUP.md`, `docs/WIFI_TROUBLESHOOTING.md`

---

## Upload fails

From `docs/ARDUINO_SETUP.md`:

1. Hold **BOOT**, press **RESET**, release RESET, release BOOT (download mode)
2. Lower upload speed to **115200**
3. Confirm board: **ESP32S3 Dev Module**
4. Use USB-C **data** cable

---

## Serial Monitor empty

| Check | Value |
|-------|-------|
| Baud rate | **115200** |
| USB CDC On Boot | Enabled |
| CLI enabled? | `CLI_SERIAL_ENABLED` defaults to `0` — use web terminal at `/terminal` |

Press RESET after opening Serial Monitor.

---

## Web page not loading

From `docs/ARDUINO_SETUP.md`:

1. Connect to AP from `user_config.h` (default `HackCard-Setup`)
2. Open `http://192.168.4.1`
3. Check serial for `Status dashboard online`
4. Phone must scan **2.4 GHz** networks

---

## Wi-Fi AP not visible

From `docs/WIFI_TROUBLESHOOTING.md`:

### Quick test

1. Re-upload firmware
2. Serial Monitor @ **115200**
3. **Scan Wi-Fi within 3 seconds of boot** (before LEDs start)
4. Look for `HackCard-Setup`

### Serial lines

```text
[wifi] AP IP: 192.168.4.1        ← AP OK
[boot] Wi-Fi still OK after RGB init
[boot] WARNING: Wi-Fi dropped after RGB init   ← GPIO45/38 issue
```

### PCB pin risks

| Pin | Function | Risk |
|-----|----------|------|
| GPIO 45 | RGB ring | Strapping pin — affects Wi-Fi |
| GPIO 38 | Wi-Fi LED | NeoPixel disturbs RF |
| GPIO 37 | Buzzer | PWM breaks SoftAP |
| GPIO 8 | NFC SDA | Must not be LOW at boot |
| GPIO 12 | SD CLK | SPI noise near antenna |

### Temporary test

Increase delay in `board_config.h`:

```cpp
#define WIFI_PERIPHERAL_DELAY_MS  60000
```

If AP stays 60 seconds, GPIO conflict confirmed.

### Hardware checks

1. ESP32-S3 antenna pad connected, keep-out clear
2. GPIO 45 WS2812 near antenna?
3. Try powered USB hub
4. Phone scans 2.4 GHz, not 5 GHz only

### CLI (when AP visible)

```text
wifi status
wifi diag
wifi restart
```

---

## Wrong LED colors

```cpp
#define RGB_USE_GRB  1   // try 0 in board_config.h
```

---

## SD not detected

From `docs/ARDUINO_SETUP.md`:

- FAT32 format
- Command: `sd status`
- Verify GPIO 10/11/12/13

---

## PN532 / NFC not detected

Error from firmware: `PN532 not detected on I2C bus`

- Install Adafruit PN532 + BusIO
- Verify I2C address `0x24`, pins 8/18/17
- Tap tags on **back** antenna coil

---

## NFC clarification

HackCard is an NFC **reader**. If you expected phone-to-HackCard tap (emulation), that is **not supported** — see [NFC Reader feature](features/nfc-reader.md).

---

## Get help

- [FAQ](faq.md)
- [GitHub Issues — docs](https://github.com/hardwarehackspace/hackcard-docs/issues)
- [GitHub Issues — firmware](https://github.com/hardwarehackspace/HackCard-ESP32/issues)
