# RGB & Buzzer

HackCard provides visual and audio feedback through a **12-LED WS2812 ring** and a **piezo buzzer**.

---

## RGB ring

| Spec | Value |
|------|-------|
| LED count | 12 |
| GPIO | 45 |
| Protocol | WS2812 (GRB order) |
| Brightness | 0–100 (configurable) |

<figure class="hardware-image" markdown="1">
![HackCard front — 12-LED RGB ring](../assets/hardware/hackcard-front-render.png)
<figcaption>12-LED RGB ring (center) — GPIO 45</figcaption>
</figure>

### Patterns

| Pattern | When used |
|---------|-----------|
| `BootAnim` | Power-on |
| `Idle` | Soft pulse |
| `Scanning` | NFC / Wi-Fi active |
| `Success` | Operation OK |
| `Error` | Failure |
| `Pointer` | Menu selection |

### Demo patterns

Rainbow, chase, theater chase, and solid color demos via `RgbRing.startDemo()`.

→ Tutorial: [RGB Ring Patterns](../tutorials/rgb-ring-patterns.md)

---

## Wi-Fi status LED

| Spec | Value |
|------|-------|
| LED count | 1 |
| GPIO | 38 |
| Location | Wi-Fi icon (top-left) |

Shows AP state, connection status, and error conditions.

---

## Buzzer

| Spec | Value |
|------|-------|
| GPIO | 37 |
| Driver | LEDC PWM |
| Config | `BUZZER_ENABLED` in user_config.h |

### Tunes

| Tune | Trigger |
|------|---------|
| Boot | Power-on (if enabled) |
| Success | NFC read OK, operation complete |
| Error | Failed operation |
| NFC ready | Tag detected |

```cpp
Buzzer.begin(true);
Buzzer.playSuccess();
Buzzer.playError();
Buzzer.playBoot();
```

---

## Color order fix

If red and green are swapped:

```cpp
#define RGB_USE_GRB  0   // change from 1 in board_config.h
```

---

## Related

- [GPIO Reference](../pinout/gpio-reference.md)
- [Wi-Fi Issues](../troubleshooting/wifi-issues.md) — GPIO 45 note
