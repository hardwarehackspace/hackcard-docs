# Web Dashboard

Optional web UI when `APP_SYSTEM_WEB = 1` (default in `app_registry.h`).

**Source:** `docs/BACKER_GUIDE.md`, `WebStatusServer.cpp`

---

## Connect

1. Power HackCard by USB
2. Connect phone/laptop to AP from `user_config.h` (default `HackCard-Setup`)
3. Open browser → **`http://192.168.4.1`**

!!! warning "2.4 GHz only"
    Phone must scan 2.4 GHz networks to see the HackCard SSID.

---

## Key URLs

| URL | Purpose |
|-----|---------|
| `/` | Status dashboard, quick links |
| `/terminal` | Web CLI (primary for backers) |
| `/setup` | First-run setup wizard |
| `/nfc` | NFC read, write, dump, lab tools |
| `/wifi` | Wi-Fi scan and lab tools |
| `/ble` | BLE scan, advertise, contact card |
| `/hid` | USB HID lab payloads |
| `/apps` | LED and buzzer demos |
| `/settings` | Brightness, buzzer, AP, lab PIN |
| `/profile` | Contact card + vCard download |
| `/diag` | Hardware self-test |
| `/logs` | Activity log viewer |
| `/portal` | Captive portal preview |

Default AP IP from troubleshooting docs: `192.168.4.1`

---

## Web terminal vs USB serial

| | Web terminal | USB Serial |
|---|-------------|------------|
| Default | **Yes** (`CLI_SERIAL_ENABLED 0`) | Disabled by default |
| Access | Join AP → `/terminal` | Enable in `app_registry.h` |
| Commands | Same CLI set | Same CLI set |

From `app_registry.h` comment: *"Set to 1 while debugging on USB Serial; backers use web terminal"*

---

## First-run setup

`/setup` wizard personalizes profile and saves to flash. Complements editing `user_config.h` before upload.

---

## Troubleshooting

From `docs/ARDUINO_SETUP.md`:

- Connect to AP from `user_config.h`
- Open `http://192.168.4.1`
- Check serial log for `Status dashboard online`

→ [Troubleshooting](../troubleshooting.md)

---

## Source

- [`docs/BACKER_GUIDE.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/BACKER_GUIDE.md)
- [`src/apps/system/WebStatusServer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/WebStatusServer.cpp)
