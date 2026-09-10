# Changelog

Firmware version history documented in the repository. Only verified entries included.

---

## v0.21.2

| Field | Source |
|-------|--------|
| Version string | `FIRMWARE_VERSION` in `config/board_config.h` |
| Phase label | Phase 21 (HID Payload Pack) — `HackCard_ESP32.ino` header |

<span class="coming-soon">Documentation coming soon</span>

Detailed change list for v0.21.2 not yet in a `CHANGELOG.md` file in the firmware repo.

---

## v0.21.1 (documented in README)

From firmware `README.md`:

- PIN pop-up validation on `/hid`
- Editable **Wi-Fi SSID**, **password**, and **Lab PIN** from `/hid` and `/settings` (saved to flash)

---

## v0.20 (documented in README)

From firmware `README.md`:

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

- [`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
- [`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
