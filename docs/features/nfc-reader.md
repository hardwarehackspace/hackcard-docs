# NFC Reader

HackCard includes a **PN532 NFC reader** for interacting with external ISO14443 tags and cards.

<div class="nfc-notice" markdown="1">

**Important:** HackCard **reads and writes external NFC tags**. HackCard **does not emulate** NFC tags or cards. You cannot tap a phone on HackCard to use it as a contactless card, key fob, or payment token.

</div>

---

## What the NFC reader can do

| Capability | App flag | Interacts with |
|------------|----------|----------------|
| Read UID | `APP_NFC_READ` | External tag |
| Tag info + NDEF preview | `APP_NFC_INFO` | External tag |
| Dump Type 2 pages | `APP_NFC_DUMP` | External tag |
| Write NDEF URL/text/vCard | `APP_NFC_WRITE` | Writable external tag |
| Erase user data | `APP_NFC_WRITE` | Writable external tag |
| Clone Type 2 from dump | `APP_NFC_CLONE` | External tag (lab) |
| Kill (lock) Type 2 | `APP_NFC_KILL` | External tag (lab) |
| Mifare Classic ops | `APP_NFC_CLASSIC` | External Classic card (lab) |

All operations require a **physical tag or card** placed on the antenna coil.

---

## Hardware

| Signal | GPIO |
|--------|------|
| SDA | 8 |
| SCL | 18 |
| IRQ | 17 |
| I2C address | `0x24` |

Tap tags on the **back** of the PCB over the antenna coil.

→ [NFC Hardware](../hardware/nfc.md)

---

## CLI examples

When CLI is available (`nfc read`, etc.) or via web terminal at `/nfc`:

<div class="code-meta" markdown="1">

**Hardware:** PN532 + external NFC tag · **Libraries:** Adafruit PN532, BusIO

</div>

```text
nfc read
nfc info
nfc write url https://example.com
nfc dump
```

Error when PN532 not found (from `NfcReadApp.cpp`):

```text
PN532 not detected on I2C bus
```

---

## Feedback

Successful operations: RGB success pattern + buzzer (`NfcFeedback`).  
Reads saved to `/nfc/last_read.txt` and optionally `/nfc/dumps/` on SD.

---

## Tutorial

→ [NFC Tutorials](../tutorials/nfc.md)

---

## Source

- [`src/platform/hal/HalNfc.h`](https://github.com/hardwarehackspace/HackCard-ESP32)
- [`src/apps/nfc/NfcReadApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
