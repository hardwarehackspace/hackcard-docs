# Troubleshooting

Common issues when setting up and flashing HackCard.

---

## Upload fails

### `Failed to connect to ESP32`

1. Hold **BOOT**, press **RESET**, release BOOT — enters download mode
2. Try a **data-capable** USB-C cable
3. Lower upload speed to **115200** in Tools
4. Install CP210x or native USB driver if COM port missing

### `A fatal error occurred: Invalid head of packet`

- Wrong board selected — use **ESP32S3 Dev Module**
- Press RESET after upload completes

---

## Wi-Fi not visible { #wifi-not-visible }

The HackCard hotspot (`HackCard-Setup` by default) does not appear on your phone.

### Causes

1. **RGB ring initialized before Wi-Fi** — GPIO 45 affects RF
2. Phone on **5 GHz only** — ESP32 is **2.4 GHz only**
3. Firmware still booting — wait 5–10 seconds

### Fixes

- Use firmware boot order: Wi-Fi first, RGB after 3 s delay
- On phone: disable 5 GHz preference or use a 2.4 GHz–capable device
- Check Serial Monitor for `[boot] AP: HackCard-Setup`

See also the firmware doc `WIFI_TROUBLESHOOTING.md` in the repo.

---

## Serial Monitor empty

| Check | Action |
|-------|--------|
| Baud rate | Set to **115200** |
| USB CDC On Boot | **Enabled** in Tools |
| Wrong port | Select the ESP32 COM port (not a Bluetooth port) |
| After upload | Press **RESET** once |

!!! tip "Web terminal alternative"
    If USB serial is quiet, join the HackCard AP and use the web terminal at `http://192.168.4.1/terminal` (full firmware only).

---

## NFC not detected

| Symptom | Fix |
|---------|-----|
| `PN532 not detected` | Verify I2C pins 8/18/17 — [Pin Map](hardware/pin-map.md) |
| Tag not read | Move tag slowly over NFC icon |
| Wrong library | Install **Adafruit PN532** + **BusIO** |

---

## Wrong LED colors

```cpp
// config/board_config.h
#define RGB_USE_GRB  1   // change to 0 if red/green swapped
```

---

## SD card not detected

- Format as **FAT32**
- Push card until it clicks
- Full Mode activates automatically when SD is present
- Without SD, Flash Mode still works

---

## USB HID not working on PC

| Setting | Required value |
|---------|----------------|
| USB Mode | **USB-OTG (TinyUSB)** |
| USB CDC On Boot | Enabled |
| Target | PC must be connected via USB data |

HID sends keystrokes to the **connected computer** — not to Serial Monitor.

---

## Still stuck?

1. Run the **Diagnostics** example or `diag run` in CLI
2. Check [Getting Started](getting-started.md) board settings table
3. Open an issue on [GitHub](https://github.com/hardwarehackspace/hackcard-docs/issues)
