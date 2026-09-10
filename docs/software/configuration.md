# Configuration

All settings derived from `config/user_config.h`, `config/board_config.h`, and `config/app_registry.h` in the firmware repository.

---

## user_config.h — personal settings

Edit and re-upload to apply.

| Setting | Default | Purpose |
|---------|---------|---------|
| `USER_NAME` | `"Your Name"` | Contact profile |
| `USER_EMAIL` | `"you@example.com"` | Contact profile |
| `AP_SSID` | `"HackCard-Setup"` | Wi-Fi hotspot name |
| `AP_PASSWORD` | `"hackcard2026"` | AP password (min 8 chars) |
| `LAB_MODE_PIN` | `"1234"` | Lab feature PIN |
| `DEFAULT_RING_BRIGHTNESS` | `80` | RGB ring 0–100 |
| `BOOT_ANIMATION` | `true` | Boot LED animation |
| `BUZZER_ENABLED` | `true` | Piezo buzzer |
| `ACTIVITY_LOGGING` | `true` | CSV activity log |
| `CAPTIVE_PORTAL_ENABLED` | `true` | Captive portal landing |

!!! warning "Change before demos"
    Default `LAB_MODE_PIN` is `1234`. Change in `user_config.h` or via web `/settings` before any public demo.

---

## SD config override (Full Mode)

When SD is inserted, `/config/hackcard.json` overrides compiled defaults. Without SD, settings come from `user_config.h` and LittleFS.

From `docs/BACKER_GUIDE.md`: *"Works without SD card. SD overrides when inserted."*

---

## app_registry.h — compile-time features

Set `#define` to `1` (include) or `0` (exclude):

| Flag | Default | Feature |
|------|---------|---------|
| `CLI_SERIAL_ENABLED` | `0` | USB Serial CLI (backers use web terminal) |
| `APP_SYSTEM_WEB` | `1` | Web dashboard |
| `APP_NFC_READ` | `1` | NFC read UID |
| `APP_NFC_WRITE` | `1` | NFC write |
| `APP_WIFI_SCANNER` | `1` | Wi-Fi scan |
| `APP_USB_HID` | `1` | USB HID lab |
| `APP_BLE` | `1` | BLE lab + contact card |

Full list in [`config/app_registry.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/app_registry.h).

---

## Device modes

From `ModeManager.cpp`:

| Mode | CLI command | Description |
|------|-------------|-------------|
| `business` | `mode set business` | Contact card and professional idle look |
| `nfc_lab` | `mode set nfc_lab` | Scan tags with `/nfc` or `nfc read` |
| `wifi_audit` | `mode set wifi_audit` | Scan networks with `/wifi` or `wifi scan` |
| `demo_day` | `mode set demo_day` | Bright success visuals for presentations |

Check current mode: `mode show`

---

## board_config.h — hardware pins

**Do not edit** unless you have a custom PCB revision. See [Pinout](../hardware/pinout.md).

---

## Source

- [`config/user_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/user_config.h)
- [`config/app_registry.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/app_registry.h)
- [`src/core/ModeManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/ModeManager.cpp)
