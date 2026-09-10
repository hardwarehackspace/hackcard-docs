# CLI Reference

Command list from `CliEngine::printHelp()` in the firmware repository.

---

## Accessing the CLI

| Method | When available |
|--------|----------------|
| **Web terminal** | `http://192.168.4.1/terminal` (default — `CLI_SERIAL_ENABLED 0`) |
| **USB Serial** | When `CLI_SERIAL_ENABLED 1` in `app_registry.h`, 115200 baud |

Prompt: `hackcard>`

---

## General

| Command | Description |
|---------|-------------|
| `help` | Show command list |
| `status` | Device status (owner, AP, storage, uptime) |
| `version` | Firmware and board info |
| `memory` | Heap and PSRAM usage |
| `clear` | Clear terminal screen |
| `diag run` | Hardware self-test |

---

## Storage

| Command | Description |
|---------|-------------|
| `sd status` | Storage tier and SD state |

---

## Wi-Fi

| Command | Description |
|---------|-------------|
| `wifi status` | AP status |
| `wifi diag` | Detailed Wi-Fi hardware report |
| `wifi restart` | Restart access point |
| `wifi test` | Full hardware test (scan + connect router) |
| `wifi scan` | Scan nearby networks |
| `wifi connect <ssid> <password\|open>` | Connect to network |
| `wifi portal [on\|off\|status]` | Captive portal landing page |
| `wifi ap [show\|set ssid X [pass Y] [ch N]]` | AP settings |
| `wifi beacon [status\|start <pin>\|stop]` | Lab beacon demo |
| `wifi twin [status\|start <pin> <ssid>\|stop]` | Evil-twin sim (lab) |
| `wifi training [status\|start <pin>\|stop\|captures]` | Awareness portal |
| `wifi monitor [status\|sniff\|deauth\|probes clear]` | Probe/deauth lab |

!!! note "2.4 GHz only"
    `wifi status` output includes: *"HackCard broadcasts on 2.4 GHz only."*

---

## NFC (reader — external tags only)

| Command | Description |
|---------|-------------|
| `nfc status` | PN532 chip status |
| `nfc read` | Read tag UID |
| `nfc info` | Tag family + NDEF preview |
| `nfc dump` | Dump Type 2 pages to storage |
| `nfc write <url>` | Write NDEF URL to blank tag |
| `nfc write text <msg>` | Write NDEF plain text |
| `nfc write vcard` | Write profile as vCard |
| `nfc history` | Recent NFC activity |
| `nfc erase <pin>` | Erase Type 2 user pages (lab PIN) |
| `nfc clone <pin> [dump_path]` | Clone Type 2 dump (lab PIN) |
| `nfc kill <pin>` | Permanently lock Type 2 tag (lab PIN) |
| `nfc classic dump [key]` | Mifare Classic dump |
| `nfc classic clone <pin> [key]` | Clone last classic dump |
| `nfc keys scan [sector]` | Try common Classic keys |

<div class="nfc-notice" markdown="1">

All NFC commands operate on **external physical tags** via the PN532 **reader**. HackCard does not emulate tags.

</div>

---

## BLE

| Command | Description |
|---------|-------------|
| `ble status` | BLE state |
| `ble scan` | Scan nearby devices |
| `ble advertise ...` | Lab advertiser |
| `ble contact start` | Start BLE contact card sharing |
| `ble contact stop` | Stop contact card |

From firmware `README.md` BLE Contact Card table.

---

## USB HID (lab)

| Command | Description |
|---------|-------------|
| `hid status` | HID device state |
| `hid os windows\|macos\|linux` | Set target OS |
| `hid run <action> <pin>` | Run payload (lab PIN required) |

Example actions from `README.md`: `screenshot`, `calc`, `terminal_info`, `mute`, `move`, `click`, `key`, `lock`

Keystrokes go to the **USB host PC**, not the web browser.

---

## Settings & profile

| Command | Description |
|---------|-------------|
| `config show` | Config source (flash vs SD) |
| `profile show` | Contact profile summary |
| `settings show` | Device settings |
| `settings brightness <0-100>` | Ring brightness |
| `settings buzzer on\|off` | Buzzer enable |
| `settings tune <success\|error\|boot\|nfc> <0-7>` | Tune selection |
| `mode show` | Current preset mode |
| `mode set business\|nfc_lab\|wifi_audit\|demo_day` | Change mode |
| `logs show` | Activity log entries |
| `logs clear` | Clear logs |

---

## LED & buzzer (direct)

| Command | Description |
|---------|-------------|
| `led idle\|success\|error\|scan\|boot\|demo <1-12> [r g b]\|stop` | Ring control |
| `buzzer success\|error\|boot\|nfc_*\|tune <0-7>` | Play tune |

---

## Source

[`src/core/CliEngine.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/CliEngine.cpp) — `printHelp()`
