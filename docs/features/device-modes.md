# Device Modes — Preset Behaviors

Switch HackCard between professional, lab, and demo appearances. Changes LED idle behavior and dashboard focus.

**Web page:** [http://192.168.4.1/modes](http://192.168.4.1/modes)  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)

---

## Available modes

| Mode | CLI value | LED / behavior |
|------|-----------|----------------|
| Business | `business` | Professional idle — contact card focus |
| NFC Lab | `nfc_lab` | Scanning LED pattern — NFC focus |
| Wi-Fi Audit | `wifi_audit` | Scanning LED — Wi-Fi lab focus |
| Demo Day | `demo_day` | Bright success-style visuals |

---

## Web dashboard

1. Connect to HackCard AP
2. Open `/modes`
3. Click mode card → applies immediately

---

## CLI examples

```text
mode show
mode set business
mode set nfc_lab
mode set wifi_audit
mode set demo_day
```

**Expected:**

```text
Mode set to: nfc_lab
```

---

## API

```text
POST /api/mode
Body: mode=business
```

Valid values: `business`, `nfc_lab`, `wifi_audit`, `demo_day`

---

## More tutorials

→ [Device Modes tutorial](../tutorials/beginner/device-modes.md)

## Source

[`ModeManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/ModeManager.cpp)
