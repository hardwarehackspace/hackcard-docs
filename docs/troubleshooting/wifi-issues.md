# Wi-Fi Issues

## Hotspot not visible

**Symptoms:** `HackCard-Setup` SSID does not appear on phone.

### Fix 1 — Wait and use 2.4 GHz

ESP32 is **2.4 GHz only**. Some phones hide 2.4 GHz networks:

- Disable "Smart network switch" or 5 GHz preference
- Move closer to HackCard
- Wait 5–10 seconds after boot

### Fix 2 — GPIO 45 boot order

RGB ring on GPIO 45 can disrupt Wi-Fi if initialized too early.

```cpp
// WRONG
RgbRing.begin(80);
WifiAp.start();

// CORRECT — use HackCard.begin() or:
WifiAp.start();
delay(3000);
RgbRing.begin(80);
```

### Fix 3 — Check Serial log

```text
[boot] AP: HackCard-Setup
[boot] Wi-Fi still OK after RGB init
```

If you see `WARNING: Wi-Fi dropped after RGB init` — AP auto-restarts; if persistent, review boot order.

---

## Connected but no IP / captive portal

- Default AP IP: `192.168.4.1`
- Disable mobile data while testing
- "Use network without internet" is normal

---

## AP password rejected

`AP_PASSWORD` must be **minimum 8 characters** in `user_config.h`.

---

## STA connect drops AP

Wi-Fi STA test temporarily stops AP. Firmware restores AP after scan/connect tests. Run `wifi ap restart` or reboot if needed.

---

## Related

- [Wi-Fi AP Tutorial](../tutorials/wifi-ap-startup.md)
- [Wi-Fi Feature](../features/wifi.md)
