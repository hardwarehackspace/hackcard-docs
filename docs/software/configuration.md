# Configuration

HackCard settings live in header files and optional JSON on SD.

---

## user_config.h

Personal and runtime settings — edit and re-upload:

```cpp
// Identity
#define USER_NAME               "Your Name"
#define USER_TITLE              "Security Researcher"
#define USER_EMAIL              "you@example.com"
#define USER_WEBSITE            "https://yoursite.com"

// Wi-Fi AP
#define AP_SSID                 "HackCard-Setup"
#define AP_PASSWORD             "hackcard2026"
#define AP_CHANNEL              0

// Defaults
#define DEFAULT_RING_BRIGHTNESS 80
#define BOOT_ANIMATION          true
#define BUZZER_ENABLED          true
#define ACTIVITY_LOGGING        true

// Security — change before shipping!
#define LAB_MODE_PIN            "1234"
```

---

## board_config.h

Hardware pins and firmware version — **only edit for custom PCB revisions**:

```cpp
#define FIRMWARE_VERSION        "0.21.2"
#define PIN_BOOT                0
#define PIN_BUZZER              37
#define PIN_RGB_WIFI            38
#define PIN_RGB_RING            45
#define PIN_NFC_SDA             8
// ... see Pinout section
```

---

## app_registry.h

Compile-time feature switches:

```cpp
#define APP_NFC_READ            1
#define APP_SYSTEM_WEB          0
#define CLI_SERIAL_ENABLED      1
```

Set to `0` to exclude a feature from the build entirely.

---

## JSON config (Full Mode)

When SD is inserted, `/config/hackcard.json` overrides compiled defaults:

```json
{
  "ownerName": "Your Name",
  "email": "you@example.com",
  "apSsid": "HackCard-Setup",
  "apPassword": "yourpass8",
  "labModePin": "5678",
  "ringBrightness": 80,
  "buzzerEnabled": true
}
```

Priority: **SD JSON** > **user_config.h** > **factory defaults**

---

## Device modes

| Mode | Purpose |
|------|---------|
| `business` | Profile + contact sharing |
| `nfc_lab` | NFC tools prioritized |
| `wifi_audit` | Wi-Fi lab tools |
| `demo_day` | Safe demo patterns |

Set via config or CLI: `mode set demo_day`

---

## Related

- [Partition Table](partition-table.md)
- [SD Storage](../features/storage.md)
