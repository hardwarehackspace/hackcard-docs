# Tutorial: NFC Read UID

Read the **UID** of an ISO14443 NFC tag and print it on Serial Monitor.

| | |
|---|---|
| **Time** | ~5 min |
| **Difficulty** | :material-star: Easy |
| **Hardware** | PN532 + any NTAG / Ultralight tag |
| **Sketch** | `Examples → HackCard → 01_NFC → NFC_Read_UID` |

---

## Goal

Tap a tag on the NFC antenna → see UID hex string on Serial at 115200 baud.

<figure class="hardware-image" markdown="1">
![Tap NFC tag on back antenna coil](../assets/hardware/hackcard-back-pcb.png)
<figcaption>Tap tags on the back — over the rectangular antenna coil</figcaption>
</figure>

---

## Prerequisites

- [First Flash](../getting-started/first-flash.md) completed
- Adafruit **PN532** + **BusIO** libraries installed
- Any NFC tag (NTAG213/215/216 recommended)

---

## Steps

### 1. Open the example

=== "Library example (planned)"

    **File → Examples → HackCard → 01_NFC → NFC_Read_UID**

=== "Current firmware"

    Use full `HackCard_ESP32.ino` or CLI command `nfc read` via Serial/web terminal.

### 2. Verify board settings

Confirm [Arduino Setup](../getting-started/arduino-setup.md) table — especially **ESP32S3 Dev Module** and **115200** Serial.

### 3. Upload and open Serial Monitor

Upload → Serial Monitor → **115200 baud** → press RESET.

### 4. Tap a tag

Hold tag flat over the **NFC coil** on the back of the PCB for 1–2 seconds.

---

## Code walkthrough

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();          // Wi-Fi first, then NFC init
  Nfc.begin();
  Serial.println(F("Hold tag near NFC coil..."));
}

void loop() {
  NfcTagInfo tag;
  if (Nfc.readTag(tag, 500)) {
    Serial.print(F("UID:  "));
    Serial.println(tag.uidHex);
    Serial.print(F("Type: "));
    Serial.println(tag.tagType);
    delay(1500);             // debounce — avoid duplicate reads
  }
  HackCard.update();
}
```

---

## Expected output

```text
Hold tag near NFC coil...
PN532 ready: PN532 firmware ver 1.6
UID:  04:A1:B2:C3:D4:E5:F6
Type: NTAG215
```

!!! success "Success indicators"
    - Green RGB flash on ring
    - Short buzzer success tone
    - UID printed on Serial

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `PN532 not detected` | Check I2C pins — [GPIO Reference](../pinout/gpio-reference.md) |
| No UID | Move tag slower; try different tag |
| Garbled Serial | Set baud to **115200** |

→ Full guide: [NFC Issues](../troubleshooting/nfc-issues.md)

---

## Next tutorial

→ [Write NFC URL Tag](nfc-write-url.md)
