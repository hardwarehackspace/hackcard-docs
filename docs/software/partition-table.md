# Partition Table

HackCard uses a custom **`partitions.csv`** for 4 MB flash — large application partition plus LittleFS.

---

## Layout

| Partition | Type | Offset | Size | Purpose |
|-----------|------|--------|------|---------|
| nvs | data | 0x9000 | 20 KB | Wi-Fi/BLE calibration |
| otadata | data | 0xE000 | 8 KB | OTA metadata (unused) |
| app | app | 0x10000 | ~3 MB | Firmware |
| spiffs | data | — | ~960 KB | LittleFS (config, logs) |

!!! note "No OTA slot"
    Current layout has no OTA partition — updates require USB reflash.

---

## partitions.csv

Located in the sketch folder root:

```csv
# Name,   Type, SubType, Offset,  Size, Flags
nvs,      data, nvs,     0x9000,  0x5000,
otadata,  data, ota,     0xe000,  0x2000,
app0,     app,  ota_0,   0x10000, 0x300000,
spiffs,   data, spiffs,  ,        0xF0000,
```

---

## Arduino IDE setup

1. **Tools → Partition Scheme → Custom partition table**
2. Ensure `partitions.csv` is in the sketch directory
3. **Flash Size → 4 MB (32 Mb)**

If "Custom" is unavailable, use **Huge APP (3MB No OTA / 1MB LittleFS)**.

---

## Flash vs Full Mode

| Storage | Flash Mode | Full Mode |
|---------|------------|-----------|
| Config | LittleFS | SD `/config/hackcard.json` |
| Logs | LittleFS (limited) | SD `/logs/activity.csv` |
| NFC dumps | LittleFS | SD `/nfc/dumps/` |

---

## Related

- [Arduino Setup](../getting-started/arduino-setup.md)
- [SD Storage](../features/storage.md)
