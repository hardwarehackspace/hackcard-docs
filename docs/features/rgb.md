# RGB

Visual feedback via WS2812 addressable LEDs.

**Source:** `config/board_config.h`, `HalRgbRing`, `HalWifiLed`

---

## Hardware

| LED | Count | GPIO | Location |
|-----|-------|------|----------|
| RGB ring | 12 | 45 | Center of front PCB |
| Wi-Fi status | 1 | 38 | Wi-Fi symbol (front) |

```cpp
#define RGB_USE_GRB       1    // 1=GRB (most WS2812), 0=RGB
#define DEFAULT_RING_BRIGHTNESS 80   // 0–100 in user_config.h
```

---

## Patterns

From `HalRgbRing.h`:

| Pattern | Use |
|---------|-----|
| `BootAnim` | Power-on animation |
| `Idle` | Standby pulse |
| `Scanning` | Active operation |
| `Success` | OK feedback |
| `Error` | Failure feedback |
| `Pointer` | Menu selection (BOOT button) |

Demo patterns via `LedBuzzerApp` / web `/apps` page.

---

## Boot order

!!! warning "GPIO 45"
    RGB ring must initialize **after** Wi-Fi AP starts. See [Wi-Fi Troubleshooting](../troubleshooting.md).

---

## Wrong colors

From `docs/ARDUINO_SETUP.md`:

```cpp
#define RGB_USE_GRB  1   // try 0 if red/green are swapped
```

---

## Tutorial

→ [RGB Tutorials](../tutorials/rgb.md)

---

## Source

[`src/platform/hal/HalRgbRing.h`](https://github.com/hardwarehackspace/HackCard-ESP32)
