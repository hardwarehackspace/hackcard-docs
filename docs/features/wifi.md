# Wi-Fi — All Features & Examples

ESP32-S3 **2.4 GHz Wi-Fi** only. Every feature below is available on the web dashboard and via CLI.

**Main web page:** [http://192.168.4.1/wifi](http://192.168.4.1/wifi)  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Lab PIN:** default `1234` (`LAB_MODE_PIN` in `user_config.h`)

!!! warning "2.4 GHz only"
    HackCard cannot broadcast or scan 5 GHz. Use a phone setting that shows 2.4 GHz networks.

!!! danger "Lab features"
    Beacon, evil twin, training portal, and monitor tools are for **authorized testing and training only**. See [Legal & Ethical Use](../resources/legal-ethical-use.md).

---

## Default access point

From `config/user_config.h`:

```cpp
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "hackcard2026"
#define AP_CHANNEL      0    // 0 = auto
```

---

## 1. Connect to HackCard (every user)

### Steps

1. Upload firmware, wait 5–10 s after boot
2. Phone → Wi-Fi → join **`HackCard-Setup`**
3. Browser → **`http://192.168.4.1`**

### CLI check

```text
wifi status
```

**Expected output includes:** SSID, client count, `HackCard broadcasts on 2.4 GHz only.`

---

## 2. Scan nearby networks

Find routers and hotspots around you.

### Web dashboard

1. Open `/wifi`
2. Click **Scan Networks**
3. Wait ~10 seconds — AP restarts after scan
4. Results appear in the list; saved to `/wifi/last_scan.json` when storage available

### CLI

```text
wifi scan
```

### API

```text
POST /api/wifi/scan
GET  /api/wifi/last          # last scan JSON
```

---

## 3. Connect to a router (STA test)

Test connecting HackCard to your home/office Wi-Fi. AP comes back after test.

### Web dashboard

1. `/wifi` → **Connect to Network**
2. Enter SSID, password (or leave blank for open)
3. Click **Connect**

### CLI

```text
wifi connect MyHomeWiFi mypassword123
wifi connect GuestNetwork open
wifi connect OfficeNet secretpass ch:6
```

### API

```text
POST /api/wifi/connect
Body: ssid=MyHomeWiFi&password=mypassword123
GET  /api/wifi/connect/last
```

---

## 4. AP settings (rename hotspot)

Change SSID, password, or channel.

### Web dashboard

1. Open `/wifi/ap`
2. Edit SSID, password, channel (1, 6, 11, or auto)
3. Click **Apply** — rejoin Wi-Fi on your phone if SSID/password changed

### CLI

```text
wifi ap show
wifi ap set ssid MyHackCard pass mypass1234
wifi ap set ssid MyHackCard pass mypass1234 ch 6
```

### API

```text
GET  /api/wifi/ap
POST /api/wifi/ap   Body: ssid=MyHackCard&password=mypass1234&channel=6
```

---

## 5. Captive portal (profile landing page)

When enabled, phones joining your AP may auto-open your contact/profile page.

### Web dashboard

1. `/settings` → enable **Captive portal** → Save  
   **or** preview at `/portal`
2. Enable via CLI:

```text
wifi portal on
wifi portal status
```

**Expected output:**

```text
── Captive Portal ──
Enabled:  yes
Landing:  http://192.168.4.1/portal
```

When ON, joining clients can be redirected to `/portal` (profile page).

### Disable

```text
wifi portal off
```

### API

Settings: `POST /api/settings` with `captive=1` or `captive=0`

---

## 6. Wi-Fi diagnostics & restart

```text
wifi diag
wifi restart
wifi test
```

| Command | Purpose |
|---------|---------|
| `wifi diag` | AP status + hardware notes (GPIO 45/37/SD timing) |
| `wifi restart` | Restart SoftAP (+ portal if enabled) |
| `wifi test` | Full scan + STA connect using `WIFI_TEST_STA_*` in config |

---

## 7. Beacon lab (broadcast fake SSIDs)

**Lab PIN required.** Broadcasts saved SSID names as beacon frames for awareness demos.

### Web dashboard

1. `/wifi` → **Beacon Lab**
2. Enter SSIDs (one per line) or use saved list
3. Enter lab PIN → **Start Beacon**
4. **Stop Beacon** when done

### CLI

```text
wifi beacon status
wifi beacon start 1234
wifi beacon start 1234 CoffeeShop FreeWiFi Airport_Guest
wifi beacon stop
```

### API

```text
GET  /api/wifi/beacon
POST /api/wifi/beacon/start   Body: pin=1234&ssids=SSID1%0ASSID2
POST /api/wifi/beacon/stop
```

---

## 8. Evil twin simulation (time-limited)

**Lab PIN required.** Temporarily impersonates a target SSID for authorized security demos. Auto-restores original AP.

### Web dashboard

1. `/wifi` → **Evil Twin Simulation**
2. Enter target SSID, duration (minutes), optional channel
3. Enter lab PIN → **Start Twin**
4. **Stop Twin** restores `HackCard-Setup`

### CLI

```text
wifi twin status
wifi twin start 1234 CoffeeShop_Free
wifi twin start 1234 TargetSSID 5 6
wifi twin stop
```

Syntax: `wifi twin start <pin> <ssid> [minutes] [channel]` — default 5 minutes.

### API

```text
GET  /api/wifi/twin
POST /api/wifi/twin/start  Body: pin=1234&ssid=CoffeeShop&minutes=5&channel=6
POST /api/wifi/twin/stop
```

---

## 9. Training / awareness portal

**Lab PIN required.** Shows a login-style page at `/portal` for phishing awareness training. Captures are logged locally for debrief.

### Web dashboard

1. `/wifi/training` — configure template, network name, headline
2. Start with lab PIN
3. Victim device joins AP → `/portal` shows login template
4. View captures on same page

**Template IDs:**

| ID | Template | Default headline |
|----|----------|------------------|
| 0 | wifi_login | Sign in to Wi-Fi |
| 1 | network_auth | Network Authentication |
| 2 | hotel_wifi | Welcome — Hotel Wi-Fi |

### CLI

```text
wifi training status
wifi training start 1234
wifi training stop
wifi training captures
wifi training captures clear
```

### API

```text
GET  /api/wifi/training
POST /api/wifi/training/config   Body: template=0&network=GuestWiFi&headline=Sign+in
POST /api/wifi/training/start    Body: pin=1234
POST /api/wifi/training/stop
GET  /api/wifi/training/captures
POST /api/wifi/training/captures/clear
```

Reveal page after submit: `/portal/reveal`

---

## 10. Monitor lab (probe sniff + deauth demo)

**Lab PIN required.** Sniff probe requests and run limited deauth demonstration.

### Web dashboard

1. `/wifi` → **Monitor Lab**
2. **Start Sniff** — enter PIN, optional minutes (default 3)
3. View probe list (refreshes automatically)
4. **Deauth Demo** — enter PIN, target BSSID, channel, count

### CLI

```text
wifi monitor status
wifi monitor sniff start 1234
wifi monitor sniff start 1234 5
wifi monitor sniff stop
wifi monitor deauth start 1234 AA:BB:CC:DD:EE:FF 6 5
wifi monitor deauth stop
wifi monitor probes clear
```

### API

```text
GET  /api/wifi/monitor
GET  /api/wifi/monitor/probes
POST /api/wifi/monitor/sniff/start    Body: pin=1234&minutes=3
POST /api/wifi/monitor/sniff/stop
POST /api/wifi/monitor/deauth/start   Body: pin=1234&bssid=AA:BB:CC:DD:EE:FF&channel=6&count=5
POST /api/wifi/monitor/deauth/stop
POST /api/wifi/monitor/probes/clear
```

---

## Web pages summary

| URL | Purpose |
|-----|---------|
| `/wifi` | Scan, connect, beacon, twin, monitor |
| `/wifi/ap` | AP SSID/password/channel |
| `/wifi/training` | Training portal admin |
| `/portal` | Captive / profile landing preview |
| `/portal/reveal` | Post-training reveal |
| `/settings` | Captive portal toggle, AP, lab PIN |

---

## More tutorials

→ [Wi-Fi Tutorials](../tutorials/wifi.md)  
→ [Web Dashboard](../software/web-dashboard.md)

## Source

[`WebStatusServer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/WebStatusServer.cpp), [`CliEngine.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/CliEngine.cpp)
