# RGB Ring — Colors, Patterns & Blinking

Control the **12-LED WS2812 ring** (GPIO 45) on the front of HackCard.

**Web page:** [http://192.168.4.1/apps](http://192.168.4.1/apps)  
**CLI:** Web terminal at [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Source:** `HalRgbRing.cpp`, `LedBuzzerApp.cpp`, `WebStatusServer.cpp`

---

## Before you start

1. Power HackCard via USB
2. Connect phone/laptop to Wi-Fi **`HackCard-Setup`** (password from `user_config.h`)
3. Open **`http://192.168.4.1/apps`** for visual buttons, or **`/terminal`** for text commands

!!! warning "GPIO 45 boot order"
    The ring initializes **after** Wi-Fi starts. If LEDs look wrong at boot, wait 5–10 seconds and try again.

---

## Quick examples

### Red strobe (CLI)

```text
led demo 12 180 0 0
```

Pattern **12** = strobe. Colors are **R G B** (0–255).

### Green success flash (CLI)

```text
led success
```

Returns to idle when demo is stopped or another preset runs.

### Blue chase via web

1. Open `/apps`
2. Pick color `#0078ff` (or any color)
3. Click **2 Chase**

---

## Status presets (solid feedback colors)

These match the buttons under **Status presets** on `/apps`.

| Preset | CLI | Color / animation | When firmware uses it |
|--------|-----|-------------------|------------------------|
| Idle | `led idle` | Dim blue pulse | Standby |
| Success | `led success` | Green | NFC OK, operation complete |
| Error | `led error` | Red | Failed operation |
| Scanning | `led scan` | Blue chase | Wi-Fi scan, NFC wait |
| Boot | `led boot` | Blue boot sweep | Power-on animation |
| Pointer | `led pointer` | Single blue LED | BOOT button menu |

### Web dashboard

On `/apps` → **Status presets** → click **Idle**, **Success**, **Error**, **Scanning**, or **Boot Anim**.

### CLI examples

```text
led idle
led success
led error
led scan
led boot
```

**Expected result:** Ring immediately shows the matching animation.

---

## Demo patterns 1–12 (colors + blinking)

Animated patterns. Default color if you omit RGB: **blue** `(0, 120, 255)`.

| ID | Name | What you see |
|----|------|--------------|
| 1 | Solid | All LEDs one color |
| 2 | Chase | Single LED runs around ring |
| 3 | Rainbow | Color wheel (ignores your RGB pick) |
| 4 | Breathe | Smooth brightness pulse |
| 5 | Sparkle | Random flashes |
| 6 | Wipe | Ring fills progressively |
| 7 | Alternate | Even/odd LEDs blink |
| 8 | Dual Chase | Two LEDs chase opposite sides |
| 9 | Ping-Pong | One LED bounces back and forth |
| 10 | Theater | Every 3rd LED marquee |
| 11 | Gradient | Fade along the ring |
| 12 | Strobe | Fast on/off flash |

### Web dashboard

1. Open `/apps`
2. Set **Ring brightness** slider (10–100%)
3. Pick **Pattern color** with the color picker
4. Click pattern button **1 Solid** … **12 Strobe**
5. Click **Stop Pattern** to return to idle

### CLI syntax

```text
led demo <1-12> [R G B]
led stop
```

### Color examples (copy-paste)

```text
led demo 1 255 0 0          # Solid red
led demo 1 0 255 0          # Solid green
led demo 1 0 0 255          # Solid blue
led demo 2 255 128 0        # Orange chase
led demo 4 0 180 60         # Green breathe
led demo 7 255 255 0        # Yellow alternate blink
led demo 12 180 0 0           # Red strobe
led stop                    # Stop and return to idle
```

**Expected CLI output:**

```text
Ring demo pattern 3 (rgb 0,120,255)
```

---

## Brightness

| Method | Command / action |
|--------|------------------|
| CLI | `settings brightness 80` |
| Web `/apps` | Ring brightness slider (auto-saves) |
| Web `/settings` | Brightness field → Save |
| Compile-time default | `DEFAULT_RING_BRIGHTNESS` in `user_config.h` |

Valid range: **10–100** (values outside are clamped).

```text
settings show
settings brightness 50
```

---

## Wi-Fi status LED (GPIO 38)

Separate single LED near the Wi-Fi symbol. Brightness follows ring brightness from settings.

---

## Wrong red/green colors?

Edit `config/board_config.h` before upload:

```cpp
#define RGB_USE_GRB  1   // try 0 if red and green are swapped
```

---

## Web API (advanced)

All POST to `http://192.168.4.1/api/apps` as form data:

| action | Parameters | Example body |
|--------|------------|--------------|
| `ring` | `value=idle\|success\|error\|scan\|boot` | `action=ring&value=success` |
| `ring_demo` | `value=1-12`, optional `r,g,b` | `action=ring_demo&value=12&r=180&g=0&b=0` |
| `ring_stop` | — | `action=ring_stop` |
| `ring_brightness` | `value=10-100` | `action=ring_brightness&value=80` |

---

## More tutorials

→ [RGB Tutorials](../tutorials/rgb.md)

## Source

[`HalRgbRing.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/platform/hal/HalRgbRing.cpp)
