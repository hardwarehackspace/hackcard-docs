# First Program

Upload the HackCard firmware and confirm it runs.

**Source:** `docs/ARDUINO_SETUP.md`

---

## Hardware requirements

| Item | Required |
|------|----------|
| HackCard ESP32-S3 | Yes |
| USB-C data cable | Yes |
| microSD | No |

## Required libraries

Adafruit NeoPixel, Adafruit PN532, Adafruit BusIO, ArduinoJson

---

## Steps

1. Open `HackCard_ESP32/HackCard_ESP32.ino`
2. Confirm [Arduino Setup](../software/arduino-setup.md) board settings
3. Select correct **COM port**
4. Click **Upload**
5. Open **Serial Monitor** at **115200 baud**
6. Press **RESET** if needed

---

## Expected result

Serial Monitor should show boot messages including Wi-Fi AP startup and peripheral initialization. From `HackCard_ESP32.ino` boot sequence:

```text
[boot] Starting RGB/buzzer after Wi-Fi settle time...
[boot] Wi-Fi still OK after RGB init
```

If web firmware is active (`APP_SYSTEM_WEB = 1`), serial may also show dashboard status. Default AP from `user_config.h`:

| Setting | Default |
|---------|---------|
| SSID | `HackCard-Setup` |
| Password | `hackcard2026` |
| AP IP | `192.168.4.1` (typical ESP32 AP) |

---

## Personalize (optional)

Edit `config/user_config.h` before upload:

<div class="code-meta" markdown="1">

**File:** `config/user_config.h` · **Action:** Edit and re-upload

</div>

```cpp
#define USER_NAME       "Your Name"
#define USER_EMAIL      "you@example.com"
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "hackcard2026"
#define LAB_MODE_PIN    "1234"
```

!!! warning "Change lab PIN"
    Default `LAB_MODE_PIN` is `1234`. Change before demos or client use.

---

## Web dashboard (optional)

From `docs/BACKER_GUIDE.md`:

1. Power HackCard by USB
2. Connect phone/laptop to AP (`HackCard-Setup`)
3. Open `http://192.168.4.1`
4. Web CLI: `http://192.168.4.1/terminal`

Note: `CLI_SERIAL_ENABLED` defaults to `0` — web terminal is the primary CLI for backers.

---

## Source code

- Entry point: [`HackCard_ESP32.ino`](https://github.com/hardwarehackspace/HackCard-ESP32)
- Boot sequence: `initDeferredPeripherals()` in same file
- Upload guide: [`docs/ARDUINO_SETUP.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/ARDUINO_SETUP.md)

---

## Next steps

- [NFC Reader feature](../features/nfc-reader.md)
- [Beginner tutorials](../tutorials/beginner.md)
- [Troubleshooting](../troubleshooting.md) if upload fails
