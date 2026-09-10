# Tutorial: Personalize Your Profile

Set your contact card details and Wi-Fi AP name.

**Source:** `docs/BACKER_GUIDE.md`, `user_config.h`

| | |
|---|---|
| **Hardware** | HackCard + USB |
| **Time** | ~5 min |
| **Re-upload** | Yes |

---

## Method A — Edit before upload

<div class="code-meta" markdown="1">

**File:** `config/user_config.h` · **Source:** BACKER_GUIDE.md

</div>

```cpp
#define USER_NAME       "Your Name"
#define USER_EMAIL      "you@example.com"
#define USER_WEBSITE    "https://yoursite.com"
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "yourpass8"
#define LAB_MODE_PIN    "5678"
```

Upload firmware → values compiled in.

**Expected result:** Profile and AP use your values. vCard at `/profile.vcf`.

---

## Method B — Web setup wizard

1. Upload default firmware
2. Join AP → `http://192.168.4.1/setup`
3. Complete wizard (saves to flash)

From `WebStatusServer.cpp` route: `/setup`

---

## Method C — SD config (Full Mode)

1. Insert SD card
2. Edit or create `/config/hackcard.json` on SD
3. Reboot — SD overrides compiled defaults

→ [Storage & Logs](../../software/storage-and-logs.md) for JSON format

---

## Verify

```text
profile show
config show
wifi status
```

Or visit `http://192.168.4.1/profile`

---

## Source

[`docs/BACKER_GUIDE.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/BACKER_GUIDE.md)
