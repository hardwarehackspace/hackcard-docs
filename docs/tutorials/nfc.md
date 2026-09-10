# NFC Tutorials

All NFC tutorials use the **PN532 reader** with **external physical tags**. HackCard does not emulate tags.

<div class="nfc-notice" markdown="1">

Place tags on the **back** of the PCB over the antenna coil. HackCard reads/writes **external tags only** — it does not act as an emulated card.

</div>

---

## Tutorial: Read NFC tag UID

**Source:** `NfcReadApp.cpp`, CLI `nfc read`

| | |
|---|---|
| **Hardware** | HackCard + external NFC tag (NTAG recommended) |
| **Libraries** | Adafruit PN532, Adafruit BusIO |
| **Access** | Web `/nfc`, web terminal, or CLI |

### Via web terminal / CLI

<div class="code-meta" markdown="1">

**Expected result:** UID hex string printed; RGB success + buzzer

</div>

```text
nfc read
```

Success output fields (from `NfcReadApp.toText()`):

```text
UID:  <hex>
Type: <tag type>
Saved: /nfc/last_read.txt
```

Failure:

```text
Error: PN532 not detected on I2C bus
```

### Expected behavior

- Ring LED: success pattern (`NfcFeedback::success()`)
- File saved: `/nfc/last_read.txt` (and `/nfc/dumps/` on SD)

**Source:** [`src/apps/nfc/NfcReadApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/nfc/NfcReadApp.cpp)

---

## Tutorial: Write URL to external tag

**Source:** `HalNfc.h` — `writeNdefUri()`

| | |
|---|---|
| **Hardware** | Writable NTAG / Type 2 tag |
| **Libraries** | Adafruit PN532, BusIO |
| **Access** | Web `/nfc` write section or CLI |

<div class="code-meta" markdown="1">

**CLI example**

</div>

```text
nfc write url https://example.com
```

### Expected result

- NDEF URL written to **external tag**
- Phone NFC reader opens URL when tag is tapped elsewhere

!!! warning "Writable tag required"
    Read-only or locked tags will fail.

---

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Standalone `NFC_Read_UID.ino` example sketch
- NFC dump tutorial
- NFC info / NDEF preview tutorial

---

## Troubleshooting

→ [Troubleshooting](../troubleshooting.md) — PN532 not detected
