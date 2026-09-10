# Firmware

HackCard firmware is a monolithic Arduino sketch with modular apps.

---

## Repository

**[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

---

## Version

| Field | Value | Source |
|-------|-------|--------|
| `FIRMWARE_VERSION` | `0.21.2` | `config/board_config.h` |
| Phase label | Phase 21 (HID Payload Pack) | `HackCard_ESP32.ino` header |

---

## Repository layout

```
HackCard_ESP32/
├── HackCard_ESP32.ino       ← Upload this sketch
├── config/
│   ├── board_config.h       ← Pin map (hardware)
│   ├── user_config.h        ← Your settings
│   └── app_registry.h       ← Feature compile switches
├── partitions.csv           ← Flash layout
└── src/
    ├── platform/hal/        ← Hardware drivers
    ├── apps/                ← Feature modules
    └── core/                ← Config, storage, CLI
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

<span class="coming-soon">Documentation coming soon</span>

Standalone example sketches (one `.ino` per feature) are planned as a separate library package. Current workflow: upload the full `HackCard_ESP32.ino` sketch or use CLI/web commands within it.

---

## Source links

| File | Purpose |
|------|---------|
| [`HackCard_ESP32.ino`](https://github.com/hardwarehackspace/HackCard-ESP32) | Main entry |
| [`app_registry.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/app_registry.h) | Feature toggles |
| [`user_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/user_config.h) | User settings |
