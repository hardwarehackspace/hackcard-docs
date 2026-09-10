# Tutorial: Device Modes

Switch HackCard between preset operating modes.

**Source:** `ModeManager.cpp`, CLI `mode set`

| | |
|---|---|
| **Hardware** | HackCard on AP or Serial |
| **Access** | Web `/modes` or CLI |

---

## Available modes

| Mode | CLI | Description (from firmware) |
|------|-----|----------------------------|
| Business | `mode set business` | Contact card and professional idle look |
| NFC Lab | `mode set nfc_lab` | Scan tags with `/nfc` or `nfc read` |
| Wi-Fi Audit | `mode set wifi_audit` | Scan networks with `/wifi` or `wifi scan` |
| Demo Day | `mode set demo_day` | Bright success visuals for presentations |

---

## Steps

=== "CLI / web terminal"

    ```text
    mode show
    mode set demo_day
    mode show
    ```

=== "Web UI"

    1. Open `http://192.168.4.1/modes`
    2. Select mode and apply

---

## Expected result

- RGB ring changes to match mode (`ModeManager::apply()`)
- Activity log entry: `mode apply demo_day`
- Setting persists in config when saved via `/settings` or JSON

Default mode in config: `business`

---

## Source

[`src/core/ModeManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/ModeManager.cpp)
