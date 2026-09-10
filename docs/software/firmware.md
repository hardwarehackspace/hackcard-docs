# Firmware

HackCard firmware is a monolithic Arduino sketch with modular apps, plus an Arduino **library** and **standalone examples** that mirror the web dashboard.

---

## Repository

**[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)**

---

## Version

| Field | Value | Source |
|-------|-------|--------|
| `FIRMWARE_VERSION` | `0.21.2` | `config/board_config.h` |
| Phase label | Phase 21 (HID Payload Pack) | `HackCard_ESP32.ino` header |
| Library / examples | `0.21.3` | `library/HackCard/library.properties` |

---

## Two ways to use the code

| Path | Best for |
|------|----------|
| **Full firmware** `HackCard_ESP32.ino` | Backers who want the phone web dashboard + every lab in one upload |
| **Library examples** `library/HackCard/examples/` | Backers learning one feature, or building their own apps |

Start building custom apps from **`00_Start_Here/Template_Custom_App`**.  
Full web → sketch map: [`EXAMPLES.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/library/HackCard/EXAMPLES.md).

---

## Repository layout

```
HackCard-ESP32/
├── HackCard_ESP32.ino       ← Full firmware (web + CLI + all labs)
├── config/
├── partitions.csv
├── src/
└── library/HackCard/
    ├── EXAMPLES.md          ← Web page → example map (backers)
    ├── src/                 ← Pin map + HAL
    └── examples/
        ├── 00_Start_Here/   ← Template + feature map
        ├── 01_Basics/       ← /apps
        ├── 02_NFC/          ← /nfc
        ├── 03_WiFi/         ← /wifi
        ├── 04_BLE/          ← /ble
        ├── 05_USB_HID/      ← /hid
        ├── 05_Storage/
        ├── 06_RealLife/
        └── 07_System/       ← /diag /profile /modes /logs
```

---

## Example sketches (mirror the web app)

Install `library/HackCard`, then **File → Examples → HackCard**.

| Web page | Example folder |
|----------|----------------|
| `/nfc` | `02_NFC/*` (read, write, dump, erase, clone, kill, classic) |
| `/wifi` | `03_WiFi/*` (scan, AP, connect, portal, beacon, twin, training, monitor) |
| `/ble` | `04_BLE/*` |
| `/hid` | `05_USB_HID/*` |
| `/apps` | `01_Basics/*` |
| `/diag` `/profile` `/modes` `/logs` | `07_System/*` |

→ [Libraries](libraries.md) · [Firmware download](../resources/firmware.md)

---

## Compile-time features (full firmware)

From `config/app_registry.h` — disable any `#define` by setting it to `0`.

---

## Source links

| File | Purpose |
|------|---------|
| [`HackCard_ESP32.ino`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/HackCard_ESP32.ino) | Main firmware |
| [`EXAMPLES.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/library/HackCard/EXAMPLES.md) | Backer example map |
| [`Template_Custom_App`](https://github.com/hardwarehackspace/HackCard-ESP32/tree/main/library/HackCard/examples/00_Start_Here/Template_Custom_App) | Fork to build your own app |
