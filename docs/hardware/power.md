# Power

Power delivery for HackCard ESP32-S3.

---

## Verified configuration

| Setting | Value | Source |
|---------|-------|--------|
| Primary input | USB-C | PCB |
| `USB_POWER_ONLY` | `1` | `board_config.h` |

This indicates USB-C is the intended power source for the standard HackCard PCB.

---

## Powering HackCard

1. Connect USB-C cable to HackCard
2. Connect other end to PC, USB hub, or USB charger
3. Board boots automatically

From `WIFI_TROUBLESHOOTING.md`:

!!! tip "Weak USB ports"
    If Wi-Fi AP is unstable, try a powered USB hub or phone charger instead of a weak laptop port.

---

## Battery power

<span class="coming-soon">Documentation coming soon</span>

Battery holder or portable power options are not documented in the current firmware repository. The back PCB photo shows a coin-cell area near the buzzer — hardware details for your specific revision will be added when confirmed.

---

## Reset

| Control | Type |
|---------|------|
| RESET | Hardware button (back PCB) |
| BOOT | GPIO 0 — also used for upload mode |

Upload mode: hold **BOOT**, press **RESET**, release RESET, release BOOT.

---

## Source

[`config/board_config.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/config/board_config.h)
