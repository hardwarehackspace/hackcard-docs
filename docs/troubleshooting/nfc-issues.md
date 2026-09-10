# NFC Issues

## PN532 not detected

**Serial message:** `PN532 not detected on I2C bus`

| Check | Action |
|-------|--------|
| Libraries | Install Adafruit PN532 + BusIO |
| I2C address | `0x24` in board_config.h |
| Pins | SDA=8, SCL=18, IRQ=17 |
| Power | Re-seat USB, re-upload |
| Wiring | Onboard — no external wiring needed |

Run Diagnostics example to test I2C bus.

---

## Tag not read

| Cause | Fix |
|-------|-----|
| Wrong tap location | Use **back** of PCB over antenna coil |
| Tag type | Try NTAG213/215; phones may not emulate all types |
| Timeout too short | Increase: `Nfc.readTag(tag, 3000)` |
| Metal surface | Lift card off metal table |

---

## Write fails

| Cause | Fix |
|-------|-----|
| Read-only tag | Use blank/writable NTAG |
| Tag locked | Use fresh tag |
| Insufficient memory | NTAG213 = 144 bytes NDEF — shorten URL |

---

## Classic / Mifare issues

Mifare Classic requires known keys. Use `nfc keys scan` (lab) or default transport keys for testing only on **your own** tags.

---

## Related

- [NFC Read UID Tutorial](../tutorials/nfc-read-uid.md)
- [NFC Feature](../features/nfc.md)
- [GPIO Reference](../pinout/gpio-reference.md)
