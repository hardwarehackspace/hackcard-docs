# Firmware Download

---

## Source repository

**[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

### Download options

=== "Git clone"

    ```bash
    git clone https://github.com/hardwarehackspace/HackCard-ESP32.git
    ```

=== "ZIP download"

    GitHub → **Code** → **Download ZIP**

---

## What to open

```
HackCard_ESP32/HackCard_ESP32.ino
```

Upload this sketch via Arduino IDE.

---

## Version

| Field | Value |
|-------|-------|
| `FIRMWARE_VERSION` | `0.21.2` |
| Phase | 21 (HID Payload Pack) |

Check `config/board_config.h` in your downloaded copy.

---

## Precompiled binaries

<span class="coming-soon">Documentation coming soon</span>

Pre-built `.bin` files are not yet published in the repository.

---

## Configuration before upload

Edit before first flash:

| File | Purpose |
|------|---------|
| `config/user_config.h` | Name, AP, PINs |
| `config/app_registry.h` | Enable/disable features |
| `config/board_config.h` | Pins (only if custom PCB) |

→ [Arduino Setup](../software/arduino-setup.md)

---

## Source

[`HackCard-ESP32`](https://github.com/hardwarehackspace/HackCard-ESP32)
