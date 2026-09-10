# Firmware

HackCard firmware is a monolithic Arduino sketch with modular apps, plus an Arduino **library** and **standalone examples**.

---

## Repository

**[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

---

## Version

| Field | Value | Source |
|-------|-------|--------|
| `FIRMWARE_VERSION` | `0.21.2` | `config/board_config.h` |
| Phase label | Phase 21 (HID Payload Pack) | `HackCard_ESP32.ino` header |
| Library | `0.21.2` | `library/HackCard/library.properties` |

---

## Repository layout

```
HackCard-ESP32/
├── HackCard_ESP32.ino       ← Full firmware (web + CLI + all labs)
├── config/
│   ├── board_config.h       ← Pin map (hardware)
│   ├── user_config.h        ← Your settings
│   └── app_registry.h       ← Feature compile switches
├── partitions.csv           ← Flash layout
├── src/                     ← HAL, apps, core
├── library/HackCard/        ← Arduino library + examples
└── docs/                    ← Setup guides
```

---

## Compile-time features

From `config/app_registry.h` — all currently enabled (`1`):

| Category | Apps |
|----------|------|
| System | Web dashboard, diagnostics, logs, modes |
| NFC | Read, info, dump, write, clone, kill, classic |
| Wi-Fi | Scan, portal, AP control, beacon, evil twin, training, monitor |
| BLE | Scan, advertise, contact card |
| USB HID | Keyboard/mouse/media lab payloads |

Disable any app by setting its `#define` to `0`.

---

## Example sketches

Install `library/HackCard` into your Arduino libraries folder, then open **File → Examples → HackCard**.

| Category | Sketches |
|----------|----------|
| Basics | Hello RGB Ring, Buzzer Tunes, BOOT Button, Wi-Fi Status LED |
| NFC | Read UID, Tag Info, Write URL, Dump Type 2 |
| Wi-Fi | Access Point, Scanner |
| BLE | Advertise, Scanner |
| USB HID | Type Hello |
| Storage | SD Card Info |
| Real life | Conference Badge Tap, Guest Portal, BLE Business Card, Desk Status Light |

Examples use **Serial Monitor** (115200) — no web UI required. The full `HackCard_ESP32.ino` sketch remains the dashboard experience.

→ [Library install notes](libraries.md) · [Firmware download](../resources/firmware.md)

---

## Source links

| File | Purpose |
|------|---------|
| [`HackCard_ESP32.ino`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/HackCard_ESP32.ino) | Main firmware entry |
| [`library/HackCard`](https://github.com/hardwarehackspace/HackCard-ESP32/tree/main/library/HackCard) | Library + examples |
| [`app_registry.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/app_registry.h) | Feature toggles |
| [`user_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/user_config.h) | User settings |
