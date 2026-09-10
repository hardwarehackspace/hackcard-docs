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

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Wi-Fi network scan tutorial
- Captive portal walkthrough
- AP settings change tutorial
