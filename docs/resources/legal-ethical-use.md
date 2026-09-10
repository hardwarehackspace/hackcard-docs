# Legal & Ethical Use

HackCard firmware includes lab capabilities intended for **authorized security research, education, and testing**.

**Source:** `README.md` HID notes, lab PIN requirements in `CliEngine.cpp`

---

## Authorized use

- Learning embedded security on your own hardware
- Testing networks, tags, and systems **you own** or have **written permission** to test
- Authorized penetration testing within signed scope
- Security awareness training in controlled environments

---

## Lab features requiring PIN

These commands require `LAB_MODE_PIN` (default `1234` — change before use):

| Area | Examples |
|------|----------|
| NFC lab | `nfc erase`, `nfc clone`, `nfc kill`, `nfc classic clone`, `nfc keys scan` |
| Wi-Fi lab | `wifi twin start`, `wifi training start`, `wifi monitor deauth` |
| USB HID | `hid run <action> <pin>` |

---

## USB HID

From firmware `README.md`:

- Keystrokes and mouse input go to the **USB host PC**, not the phone browsing the web page
- Pick the correct **Target OS** on `/hid` before running launcher-based payloads
- **Use only on systems you own or have written permission to test**

---

## NFC

HackCard reads and writes **external tags** via the PN532 reader. Do not use NFC clone/write capabilities on credentials, payment cards, or access badges you do not own or lack authorization to test.

HackCard **does not emulate** NFC tags — this is a reader/writer only.

---

## Disclaimer

Hardware and software provided as-is for educational purposes. You are solely responsible for ensuring your activities comply with applicable laws.

---

## Change default PIN

```cpp
#define LAB_MODE_PIN  "1234"   // change in user_config.h
```

Also editable from web `/settings` per firmware README v0.21.1.

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
