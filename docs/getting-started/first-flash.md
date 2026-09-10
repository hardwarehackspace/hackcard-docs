# First Flash

Upload your first firmware to HackCard and confirm it works on Serial Monitor.

**Time:** ~5 minutes  
**Prerequisite:** [Arduino Setup](arduino-setup.md) complete

---

## Step 1 — Open the sketch

=== "Full firmware (available now)"

    1. Open `HackCard_ESP32/HackCard_ESP32.ino` from the firmware repo
    2. Confirm board settings from [Arduino Setup](arduino-setup.md)

=== "Library example (coming soon)"

    **File → Examples → HackCard → 00_Basics → Boot_Serial_Status**

---

## Step 2 — Upload

1. Connect USB-C
2. Select correct **COM port** in Tools
3. Click **Upload** (→)
4. Wait for `Hard resetting via RTS pin...` or `Leaving...`

!!! failure "Upload failed?"
    Hold **BOOT**, press **RESET**, release BOOT — then retry upload.  
    See [Upload Issues](../troubleshooting/upload-issues.md).

---

## Step 3 — Serial Monitor

1. **Tools → Serial Monitor**
2. Set baud to **115200**
3. Press **RESET** on HackCard

### Expected output

```text
[boot] HackCard ESP32-S3
[boot] Firmware v0.21.2
[boot] Free heap: ...... bytes
[boot] Wi-Fi AP starting...
[boot] AP: HackCard-Setup
[boot] Starting RGB/buzzer after Wi-Fi settle time...
[ready] System online
```

!!! success "It works!"
    If you see boot messages and the RGB ring animates — your HackCard is alive.

---

## Step 4 — Personalize (optional)

Edit `config/user_config.h` before uploading:

```cpp
#define USER_NAME       "Your Name"
#define USER_EMAIL      "you@example.com"
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "yourpass8"      // min 8 characters
#define LAB_MODE_PIN    "1234"           // change before demos!
```

Re-upload after saving.

---

## What to try next

| Tutorial | Why |
|----------|-----|
| [NFC Read UID](../tutorials/nfc-read-uid.md) | Test PN532 with any NFC tag |
| [RGB Ring Patterns](../tutorials/rgb-ring-patterns.md) | See all LED animations |
| [Wi-Fi AP Startup](../tutorials/wifi-ap-startup.md) | Connect phone to HackCard hotspot |

---

## Checklist

- [ ] Upload succeeded
- [ ] Serial Monitor shows boot log at 115200
- [ ] RGB ring or Wi-Fi LED responds
- [ ] Changed default lab PIN if demoing to others
