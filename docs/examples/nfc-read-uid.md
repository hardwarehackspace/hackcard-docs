# NFC Read UID

Read the **UID** of an ISO14443 NFC tag and print it on the Serial Monitor.

| | |
|---|---|
| **Category** | NFC |
| **Difficulty** | ⭐ Easy |
| **Hardware** | PN532 + any NTAG / Mifare tag |
| **Sketch** | `Examples → HackCard → 01_NFC → NFC_Read_UID` |

---

## What you'll learn

- Initialize the PN532 over I2C
- Poll for a tag and read its UID
- Print UID as hex on Serial (115200 baud)

---

## Before you start

- Complete **[Getting Started](../getting-started.md)** (board flashed at least once)
- Adafruit **PN532** and **BusIO** libraries installed
- An NFC tag (NTAG213/215/216, Mifare Ultralight, etc.)

---

## Wiring

No extra wiring — PN532 is onboard:

| Signal | GPIO |
|--------|------|
| SDA | 8 |
| SCL | 18 |
| IRQ | 17 |

---

## Code

=== "Minimal example (library — coming soon)"

    ```cpp
    #include <HackCard.h>

    void setup() {
      Serial.begin(115200);
      HackCard.begin();
      Nfc.begin();
      Serial.println("Hold a tag near the NFC antenna...");
    }

    void loop() {
      NfcTagInfo tag;
      if (Nfc.readTag(tag, 500)) {
        Serial.print("UID: ");
        Serial.println(tag.uidHex);
        delay(1000);  // debounce
      }
      HackCard.update();
    }
    ```

=== "Current firmware (monolith)"

    From `NfcReadApp` — the web dashboard and CLI use the same call:

    ```cpp
    NfcReadResult result = NfcRead.readOnce(1500);
    if (result.success) {
      Serial.println(result.tag.uidHex);
    }
    ```

---

## Steps

1. Open the **NFC_Read_UID** example (or full firmware sketch)
2. Set board to **ESP32S3 Dev Module** — see [Getting Started](../getting-started.md)
3. **Upload** to HackCard
4. Open **Serial Monitor** → **115200 baud**
5. Hold a tag on the **NFC zone** of the PCB

---

## Expected output

```
Hold a tag near the NFC antenna...
PN532 ready: PN532 firmware ver 1.6
UID: 04:A1:B2:C3:D4:E5:F6
Type: NTAG215
```

!!! success "It worked!"
    The ring LED may flash green and the buzzer plays a short success tone.

---

## Troubleshooting

### `PN532 not detected`

- Check I2C address `0x24` in [Pin Map](../hardware/pin-map.md)
- Re-seat USB and re-upload
- Run **Diagnostics** example

### No UID when tag is present

- Move tag slowly over the NFC icon
- Try a different tag (phone NFC may not emulate all types)
- Increase timeout: `Nfc.readTag(tag, 3000)`

### Garbled Serial output

- Confirm baud rate is **115200**
- Try a different USB cable (data-capable)

---

## Next examples

- [RGB Ring Patterns](rgb-ring-patterns.md) — visual feedback
- NFC Tag Info — NDEF content preview
- NFC Write URL — write a link to a blank tag

---

## Source code

Full implementation: `src/apps/nfc/NfcReadApp.cpp` and `src/platform/hal/HalNfc.cpp` in the [HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32) repo.
