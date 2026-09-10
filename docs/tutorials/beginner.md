# Beginner Tutorials

Start here after [First Program](../getting-started/first-program.md).

---

## Available

### 1. Verify Serial output

**Hardware:** HackCard + USB cable  
**Libraries:** All four (from installation)  
**Sketch:** `HackCard_ESP32.ino`

<div class="code-meta" markdown="1">

**Expected result:** Boot log at 115200 baud including `[boot]` lines

</div>

```text
[boot] Starting RGB/buzzer after Wi-Fi settle time...
```

**Source:** [`HackCard_ESP32.ino`](https://github.com/hardwarehackspace/HackCard-ESP32)

---

### 2. Personalize your card

Edit `config/user_config.h`, re-upload.

<div class="code-meta" markdown="1">

**Expected result:** AP SSID and profile reflect your changes

</div>

```cpp
#define USER_NAME    "Your Name"
#define AP_SSID      "HackCard-Setup"
```

**Source:** [`docs/BACKER_GUIDE.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/BACKER_GUIDE.md)

---

### 3. Use the web dashboard

From `docs/BACKER_GUIDE.md`:

1. Connect to `HackCard-Setup` Wi-Fi
2. Open `http://192.168.4.1`
3. Try diagnostics or NFC read page

**Expected result:** Web UI loads (requires `APP_SYSTEM_WEB = 1`)

---

### 4. BOOT button gestures

From `docs/BACKER_GUIDE.md`:

| Gesture | Action |
|---------|--------|
| Short press | Move ring menu pointer |
| Long press | Confirm |
| Double tap | Back / cancel |

---

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Standalone `Boot_Serial_Status` example sketch
- Standalone `Diagnostics` example sketch

---

## Next topics

- [NFC Tutorials](nfc.md)
- [RGB Tutorials](rgb.md)
