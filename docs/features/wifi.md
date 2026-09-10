# Wi-Fi Lab

ESP32-S3 provides **2.4 GHz Wi-Fi only** — no 5 GHz support.

<figure class="hardware-image" markdown="1">
![HackCard front — Wi-Fi status LED](../assets/hardware/hackcard-front-render.png)
<figcaption>Wi-Fi status LED at top-left (GPIO 38)</figcaption>
</figure>

---

## Capabilities

| Function | Description |
|----------|-------------|
| Access Point | Default hotspot for phone/laptop connection |
| Network scan | List nearby SSIDs with RSSI |
| STA connect | Test connection to your router |
| AP settings | Change SSID, password, channel live |
| Captive portal | Landing page demo |
| Beacon broadcast | Lab beacon demo |
| Evil twin sim | Time-limited SSID impersonation — lab only |
| Training portal | Phishing awareness demo |
| Monitor | Probe sniff + limited deauth demo |

---

## Default access point

```cpp
// config/user_config.h
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "hackcard2026"
#define AP_CHANNEL      0    // 0 = auto
```

After boot, connect a phone to this SSID (2.4 GHz) to interact with Wi-Fi examples or the optional web dashboard.

---

## Critical boot order

!!! danger "GPIO 45 conflicts with Wi-Fi RF"
    The RGB ring uses GPIO 45 (strapping pin). Firmware **must start Wi-Fi before initializing the RGB ring**.

```cpp
// Correct order (handled by HackCard.begin())
WifiAp.start();           // 1. Wi-Fi first
delay(WIFI_PERIPHERAL_DELAY_MS);
RgbRing.begin(brightness); // 2. RGB after settle
```

See [Wi-Fi Issues](../troubleshooting/wifi-issues.md) if hotspot does not appear.

---

## Tutorial

→ [Wi-Fi AP Startup](../tutorials/wifi-ap-startup.md)

---

## Related

- [Wi-Fi Issues](../troubleshooting/wifi-issues.md)
- [Configuration](../software/configuration.md)
