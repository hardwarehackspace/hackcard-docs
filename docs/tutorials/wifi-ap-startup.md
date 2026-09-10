# Tutorial: Wi-Fi AP Startup

Start the HackCard **Wi-Fi hotspot** and connect from your phone.

| | |
|---|---|
| **Time** | ~10 min |
| **Difficulty** | :material-star-outline: Medium |
| **Hardware** | HackCard + phone or laptop |
| **Sketch** | `Examples → HackCard → 00_Basics → WiFi_AP_Startup` |

---

## Goal

Boot HackCard → see `HackCard-Setup` SSID on phone → connect with password.

---

## Default credentials

```cpp
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "hackcard2026"
```

Change these in `config/user_config.h` before shipping or demoing.

---

## Code

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();    // starts AP, waits, then RGB

  if (WifiAp.isRunning()) {
    Serial.print(F("AP SSID:     "));
    Serial.println(WifiAp.getSsid());
    Serial.print(F("AP IP:       "));
    Serial.println(WifiAp.getIp());
    Serial.println(F("Connect your phone to this network (2.4 GHz)"));
  } else {
    Serial.println(F("ERROR: AP failed to start"));
  }
}

void loop() {
  HackCard.update();
}
```

---

## Steps

1. Upload sketch
2. Open Serial Monitor — note SSID and IP (`192.168.4.1` typically)
3. On phone: **Settings → Wi-Fi**
4. Enable **2.4 GHz** scanning if your phone hides band
5. Select **HackCard-Setup**
6. Enter password
7. Wi-Fi status LED (GPIO 38) should indicate connected state

---

## Expected Serial output

```text
[boot] Wi-Fi AP starting...
[boot] AP: HackCard-Setup
AP SSID:     HackCard-Setup
AP IP:       192.168.4.1
Connect your phone to this network (2.4 GHz)
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| SSID not visible | Wait 5–10 s; ensure 2.4 GHz; check [Wi-Fi Issues](../troubleshooting/wifi-issues.md) |
| Wrong password | Min 8 chars in `AP_PASSWORD` |
| AP drops after RGB | GPIO 45 init order — use `HackCard.begin()` |

---

## Next tutorial

→ [Write NFC URL Tag](nfc-write-url.md)
