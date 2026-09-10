# RGB Ring Patterns

Run **LED animations** on the 12-LED WS2812 ring and Wi-Fi status LED.

| | |
|---|---|
| **Category** | Basics |
| **Difficulty** | ⭐ Easy |
| **Hardware** | RGB ring (GPIO 45) + Wi-Fi LED (GPIO 38) |
| **Sketch** | `Examples → HackCard → 00_Basics → RGB_Ring_Patterns` |

---

## What you'll learn

- Initialize the RGB ring after Wi-Fi bring-up
- Set patterns: boot, idle, scanning, success, error
- Run demo animations (rainbow, chase, etc.)

---

## Important: Wi-Fi before RGB

GPIO **45** is a strapping pin. Always start Wi-Fi **before** the RGB ring:

```cpp
HackCard.begin();   // starts AP first, then RGB after delay
RgbRing.begin(80);  // brightness 0–100
```

!!! warning "Wrong init order"
    Initializing the ring before Wi-Fi can cause the hotspot to fail. Use `HackCard.begin()` or follow the boot sequence in the full firmware.

---

## Code

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();

  RgbRing.begin(80);
  RgbRing.setPattern(RingPattern::BootAnim);

  Serial.println("RGB demo — watch the ring");
}

void loop() {
  RgbRing.update();   // call every loop for animations
  HackCard.update();

  // Cycle demo patterns every 5 seconds
  static uint32_t lastSwitch = 0;
  static uint8_t demoId = 1;
  if (millis() - lastSwitch > 5000) {
    lastSwitch = millis();
    RgbRing.startDemo(demoId++, 0, 120, 255);
    if (demoId > 6) demoId = 1;
  }
}
```

---

## Available patterns

| Pattern | Use case |
|---------|----------|
| `BootAnim` | Power-on sequence |
| `Idle` | Soft pulse |
| `Scanning` | Active scan (NFC / Wi-Fi) |
| `Success` | Green flash |
| `Error` | Red flash |
| `Pointer` | Menu selection index |

---

## Expected behavior

1. Boot animation plays once on the ring
2. Every 5 seconds, demo pattern changes (rainbow, chase, etc.)
3. Wi-Fi status LED shows AP state (typically blue/green when AP is up)

---

## Troubleshooting

### Ring stays off

- Wi-Fi must start first — wait 3 s after boot
- Check brightness: `RgbRing.begin(80)` not `0`
- Call `RgbRing.update()` in `loop()`

### Wrong colors (red/green swapped)

In `board_config.h`:

```cpp
#define RGB_USE_GRB  0   // try flipping from 1 to 0
```

### Wi-Fi broke after adding RGB

See [Troubleshooting — Wi-Fi not visible](../troubleshooting.md#wifi-not-visible)

---

## Source code

- `src/platform/hal/HalRgbRing.cpp`
- `src/apps/demo/LedBuzzerApp.cpp`
