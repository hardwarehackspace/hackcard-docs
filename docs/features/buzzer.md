# Buzzer

Piezo buzzer for audio feedback.

**Source:** `config/board_config.h`, `config/user_config.h`, `HalBuzzer`

---

## Hardware

| Spec | Value |
|------|-------|
| GPIO | 37 |
| Driver | LEDC PWM |
| Enable | `BUZZER_ENABLED` in `user_config.h` |

Visible on back PCB — labeled **BUZZER** near SD slot.

---

## Tunes

Configured in runtime config (`AppContext`):

| Tune | Typical trigger |
|------|-----------------|
| Boot | Power-on (if `BOOT_ANIMATION` + buzzer enabled) |
| Success | NFC read OK, operation complete |
| Error | Failed operation |
| NFC ready | Tag scan start |

---

## Wi-Fi interaction

From `WIFI_TROUBLESHOOTING.md`:

> GPIO 37 — Buzzer (LEDC PWM) — Known ESP32-S3 issue: PWM can break SoftAP visibility

Firmware detaches buzzer PWM when idle to reduce RF impact.

---

## Settings

```cpp
#define BUZZER_ENABLED          true
#define BOOT_ANIMATION          true
```

Edit in `config/user_config.h`, re-upload.

---

## Tutorial

→ [Buzzer Tutorials](../tutorials/buzzer.md)

---

## Source

[`src/platform/hal/HalBuzzer.h`](https://github.com/hardwarehackspace/HackCard-ESP32)
