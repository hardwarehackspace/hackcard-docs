# Wi-Fi

ESP32-S3 **2.4 GHz Wi-Fi** lab features.

**Source:** `app_registry.h`, `user_config.h`, `WIFI_TROUBLESHOOTING.md`

---

## Default access point

From `config/user_config.h`:

```cpp
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "hackcard2026"   // min 8 characters
#define AP_CHANNEL      0                // 0 = auto
```

!!! warning "2.4 GHz only"
    `user_config.h` states: *"HackCard AP is 2.4 GHz only (ESP32 cannot do 5 GHz). Phones must scan 2.4 GHz networks to see this SSID."*

---

## Enabled features

| App flag | Capability |
|----------|------------|
| `APP_WIFI_SCANNER` | Scan + connect + `/wifi` page |
| `APP_WIFI_PORTAL` | Captive portal |
| `APP_WIFI_AP_CONTROL` | AP settings |
| `APP_WIFI_BEACON` | Lab beacon demo |
| `APP_WIFI_EVIL_TWIN` | Evil-twin simulation (time-limited, lab) |
| `APP_WIFI_TRAINING` | Training / phishing awareness portal |
| `APP_WIFI_MONITOR` | Probe sniff + limited deauth demo |

---

## Web dashboard access

From `docs/BACKER_GUIDE.md`:

1. Power HackCard by USB
2. Connect to AP (`HackCard-Setup`)
3. Open `http://192.168.4.1`
4. Web CLI: `http://192.168.4.1/terminal`

---

## Boot order requirement

Wi-Fi must start **before** RGB ring (GPIO 45). Firmware handles this in `HackCard_ESP32.ino`.

→ [Wi-Fi Troubleshooting](../troubleshooting.md)

---

## CLI commands (when CLI enabled)

From `WIFI_TROUBLESHOOTING.md`:

```
wifi status
wifi diag
wifi restart
```

---

## Tutorial

→ [Wi-Fi Tutorials](../tutorials/wifi.md)

---

## Source

[`config/app_registry.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/app_registry.h)
