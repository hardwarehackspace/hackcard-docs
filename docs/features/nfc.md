# NFC / RFID

HackCard includes a **PN532** NFC controller with a PCB-integrated antenna coil (visible on the back of the board).

<figure class="hardware-image" markdown="1">
![HackCard back — NFC antenna coil](../assets/hardware/hackcard-back-pcb.png)
<figcaption>NFC antenna coil on back PCB — tap tags on this side</figcaption>
</figure>

---

## Capabilities

| Function | Tag types | Tutorial |
|----------|-----------|----------|
| Read UID | NTAG, Ultralight, most Type A | [NFC Read UID](../tutorials/nfc-read-uid.md) |
| Tag info + NDEF | NTAG, Type 2 | — |
| Dump pages | Mifare Ultralight / NTAG | — |
| Write URL / text / vCard | Writable Type 2 | [Write NFC URL](../tutorials/nfc-write-url.md) |
| Erase user data | Type 2 | — |
| Clone Type 2 | From dump file | Lab — PIN required |
| Kill Type 2 | Permanent lock | Lab — PIN required |
| Mifare Classic | Dump, clone, keyscan | Lab — PIN required |

---

## Hardware connection

| Signal | GPIO | Bus |
|--------|------|-----|
| SDA | 8 | I2C |
| SCL | 18 | I2C |
| IRQ | 17 | Digital |
| I2C address | `0x24` | — |

```cpp
// config/board_config.h
#define PIN_NFC_SDA         8
#define PIN_NFC_SCL         18
#define PIN_NFC_IRQ         17
#define NFC_I2C_ADDRESS     0x24
```

---

## Library API (HalNfc)

```cpp
#include <HackCard.h>

NfcTagInfo tag;
if (Nfc.readTag(tag, 1500)) {
  Serial.println(tag.uidHex);
  Serial.println(tag.tagType);
}
```

| Method | Description |
|--------|-------------|
| `Nfc.begin()` | Initialize PN532 |
| `Nfc.readTag()` | Read UID |
| `Nfc.readTagDetail()` | UID + NDEF preview |
| `Nfc.dumpType2Tag()` | Full page dump |
| `Nfc.writeNdefUri()` | Write URL to tag |
| `Nfc.writeNdefText()` | Write text record |
| `Nfc.eraseType2UserData()` | Clear user memory |

---

## Feedback

Successful reads trigger RGB **success** pattern and a buzzer tone via `NfcFeedback`. Failed reads show **error** pattern.

---

## Storage

| Path | Content |
|------|---------|
| `/nfc/last_read.txt` | Last UID (flash or SD) |
| `/nfc/dumps/` | Timestamped dump files (SD) |

---

## Related

- [GPIO Reference — NFC pins](../pinout/gpio-reference.md)
- [NFC Issues](../troubleshooting/nfc-issues.md)
