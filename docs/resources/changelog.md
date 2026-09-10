# Changelog

Firmware version history from the [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32) repository.

---

## v0.21.3 (examples pack)

| Field | Source |
|-------|--------|
| Library | `library/HackCard` `0.21.3` |
| Catalog | [`EXAMPLES.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/library/HackCard/EXAMPLES.md) |

### Highlights

- **46** Serial examples mirroring the web dashboard (`/nfc`, `/wifi`, `/ble`, `/hid`, `/apps`, `/diag`, …)
- `Template_Custom_App` for backers building their own applications
- Lab sketches gated with editable PIN + ethical-use notes

---

## v0.21.2

| Field | Source |
|-------|--------|
| Version string | `FIRMWARE_VERSION` in `config/board_config.h` |
| Phase label | Phase 21 (HID Payload Pack) |
| Library | `library/HackCard` `0.21.2` |

### Highlights

- Public GitHub release: full firmware + Arduino library + examples
- Standalone Serial examples (basics, NFC, Wi-Fi, BLE, HID, SD)
- Real-life sketches: badge tap, guest portal, BLE card, desk status light
- LICENSE, CHANGELOG, release README

Full notes: [`CHANGELOG.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/CHANGELOG.md)

---

## v0.21.1

- PIN pop-up validation on `/hid`
- Editable **Wi-Fi SSID**, **password**, and **Lab PIN** from `/hid` and `/settings` (saved to flash)

---

## v0.20

- Dedicated HID page with OS picker, Notepad, Lock, Type Text, Open URL

---

## How to check your version

=== "Serial / CLI"

    ```text
    version
    ```

=== "Config file"

    Look for `FIRMWARE_VERSION` in `config/board_config.h` of your downloaded copy.

---

## Source

- [`CHANGELOG.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/CHANGELOG.md)
- [`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
