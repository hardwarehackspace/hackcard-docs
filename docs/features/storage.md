# SD Storage

HackCard supports optional **microSD** storage via SPI for logs, NFC dumps, and portable config.

<figure class="hardware-image" markdown="1">
![HackCard back — SD card slot](../assets/hardware/hackcard-back-pcb.png)
<figcaption>microSD slot (bottom-right) — FAT32 required</figcaption>
</figure>

---

## Operating modes

| Mode | Condition | Primary storage |
|------|-----------|-----------------|
| **Flash Mode** | No SD | LittleFS (~960 KB) |
| **Full Mode** | SD inserted | microSD (FAT32) |

Full Mode activates automatically when a valid SD card is detected at boot.

---

## SPI pins

| Signal | GPIO |
|--------|------|
| CS | 10 |
| MOSI | 11 |
| CLK | 12 |
| MISO | 13 |

---

## Auto-created folders (Full Mode)

```
/config/hackcard.json    ← portable settings override
/logs/activity.csv       ← activity log
/nfc/dumps/              ← NFC dump files
/nfc/last_read.txt
/wifi/last_scan.json
/payloads/               ← reserved
/vault/                  ← reserved
```

---

## Activity log format

CSV columns: timestamp, category, action, detail

View via Serial, example sketch, or (in full firmware) the logs page.

---

## Config override

When SD is present, `/config/hackcard.json` overrides compiled defaults from `user_config.h`. Remove the file or the SD card to revert to flash defaults.

→ See [Configuration](../software/configuration.md)

---

## Related

- [Partition Table](../software/partition-table.md)
- [Troubleshooting](../troubleshooting/index.md)
