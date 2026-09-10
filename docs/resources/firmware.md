# Firmware Download

---

## Source repository

**[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

### Download options

=== "Git clone"

    ```bash
    git clone https://github.com/hardwarehackspace/HackCard-ESP32.git
    cd HackCard-ESP32
    ```

=== "ZIP download"

    GitHub → **Code** → **Download ZIP**

---

## What to open

| Goal | Open |
|------|------|
| Full product firmware (web dashboard) | `HackCard_ESP32.ino` at repo root |
| One-feature Serial examples | Install `library/HackCard`, then **File → Examples → HackCard** |

→ [Firmware overview](../software/firmware.md) · [Libraries](../software/libraries.md)

---

## Version

| Field | Value |
|-------|-------|
| `FIRMWARE_VERSION` | `0.21.2` |
| Phase | 21 (HID Payload Pack) |
| Library | `0.21.2` |

Check `config/board_config.h` and `library/HackCard/library.properties` in your copy.

---

## Precompiled binaries

<span class="coming-soon">Documentation coming soon</span>

Pre-built `.bin` files are not yet published. Flash from source with Arduino IDE for now.

---

## Configuration before upload

Edit before first flash of the **full firmware**:

| File | Purpose |
|------|---------|
| `config/user_config.h` | Name, AP, PINs |
| `config/app_registry.h` | Enable/disable features |
| `config/board_config.h` | Pins (only if custom PCB) |

→ [Arduino Setup](../software/arduino-setup.md)

---

## Source

[`HackCard-ESP32`](https://github.com/hardwarehackspace/HackCard-ESP32)
