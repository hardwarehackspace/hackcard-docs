# Wi-Fi Tutorials

---

## Tutorial: Connect to HackCard AP

**Source:** `docs/BACKER_GUIDE.md`

| | |
|---|---|
| **Hardware** | HackCard, phone or laptop |
| **Libraries** | Full firmware uploaded |
| **Prerequisite** | [First Program](../getting-started/first-program.md) |

### Steps

1. Upload `HackCard_ESP32.ino`
2. Wait 5–10 seconds after boot
3. On phone: Wi-Fi settings → scan **2.4 GHz** networks
4. Connect to `HackCard-Setup` (password from `user_config.h`)
5. Open browser → `http://192.168.4.1`

### Expected result

- Web dashboard loads
- Serial shows `[wifi] AP IP: 192.168.4.1` (from `WIFI_TROUBLESHOOTING.md`)

### Troubleshooting

→ [Troubleshooting](../troubleshooting.md) — scan within 3 seconds of boot if AP disappears

**Source:** [`docs/BACKER_GUIDE.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/BACKER_GUIDE.md)

---

## Tutorial: Wi-Fi diagnostics via Serial

**Source:** `docs/WIFI_TROUBLESHOOTING.md`

<div class="code-meta" markdown="1">

**Hardware:** HackCard + USB · **Baud:** 115200

</div>

```text
wifi status
wifi diag
wifi restart
```

Run after connecting to AP (web terminal) or via Serial if `CLI_SERIAL_ENABLED = 1`.

### Expected result

`[wifi-diag]` block on Serial during boot.

---

## Tutorial: Scan nearby networks

<div class="code-meta" markdown="1">

**Hardware:** HackCard · **Access:** Web terminal or `/wifi`

</div>

```text
wifi scan
```

**Expected result:** List of nearby SSIDs with RSSI. Results saved to `/wifi/last_scan.json` when storage available.

After STA connect tests, firmware restores AP (`WifiScannerApp`).

**Source:** [`WifiScannerApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/wifi/WifiScannerApp.cpp)

---

## Tutorial: Change AP settings

```text
wifi ap show
wifi ap set ssid MyHackCard pass mypass1234
```

**Expected result:** Hotspot SSID/password updated live.

**Source:** [`CliEngine.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/CliEngine.cpp)

---

## Tutorial: Captive portal landing page

**Source:** `CliEngine::printWifiPortalStatus()`, `APP_WIFI_PORTAL`

| | |
|---|---|
| **Hardware** | HackCard + phone on AP |
| **Prerequisite** | Connected to HackCard AP |
| **Access** | Web terminal or Serial (if CLI enabled) |

When the captive portal is **ON**, phones joining your AP may auto-open your profile landing page.

### Enable portal

```text
wifi portal on
wifi portal status
```

### Expected result

```text
── Captive Portal ──
Enabled:  yes
DNS:      running
Landing:  http://192.168.4.1/portal
```

Open `http://192.168.4.1/portal` on a connected phone to preview the landing page.

When ON, phones joining the AP auto-open your profile page (from `CliEngine` help text).

### Disable portal

```text
wifi portal off
```

!!! tip "Profile content"
    Landing page uses your owner profile from config. Personalize first → [Personalize Profile](beginner/personalize-profile.md).

!!! warning "Lab feature — training portal"
    `wifi training start <pin>` is a separate **lab-only** awareness portal. Requires lab PIN and authorized use only → [Advanced Tutorials](advanced.md).
