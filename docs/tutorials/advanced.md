# Advanced Tutorials

Lab features for **authorized testing only**. Requires lab PIN (`LAB_MODE_PIN`).

!!! danger "Read first"
    [Legal & Ethical Use](../resources/legal-ethical-use.md)

---

## Tutorials

| Tutorial | Source |
|----------|--------|
| [USB HID Lab](advanced/usb-hid.md) | `README.md` |
| [BLE Contact Card](advanced/ble-contact-card.md) | `README.md` |
| [NFC Dump + Clone](advanced/nfc-dump-clone.md) | `NfcDumpApp`, `NfcLabApp` |

---

## CLI lab commands (reference)

Full list: [CLI Reference](../software/cli-reference.md)

### NFC lab (external tags only)

```text
nfc erase <pin>
nfc clone <pin>
nfc kill <pin>
nfc classic dump [key]
nfc keys scan [sector]
```

### Wi-Fi lab

```text
wifi twin start <pin> <ssid>
wifi training start <pin>
wifi monitor deauth
```

---

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Evil twin walkthrough (authorized environments only)
- Mifare Classic dump step-by-step

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md), [`CliEngine.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/CliEngine.cpp)
