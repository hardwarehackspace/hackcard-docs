# Tutorial: RGB Ring Patterns

Run **LED animations** on HackCard's 12-LED WS2812 ring.

| | |
|---|---|
| **Time** | ~5 min |
| **Difficulty** | :material-star: Easy |
| **Hardware** | RGB ring (GPIO 45) |
| **Sketch** | `Examples → HackCard → 00_Basics → RGB_Ring_Patterns` |

---

## Goal

See boot animation, then cycle through demo patterns every 5 seconds.

---

## Important: boot order

GPIO **45** affects Wi-Fi RF. Always use `HackCard.begin()` — it starts Wi-Fi **before** the RGB ring.

!!! warning "Do not call RgbRing.begin() before Wi-Fi"
    See [Wi-Fi Issues](../troubleshooting/wifi-issues.md) if hotspot disappears after adding RGB code.

---

## Code

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();

  RgbRing.begin(80);                    // brightness 0–100
  RgbRing.setPattern(RingPattern::BootAnim);
  Serial.println(F("RGB demo running"));
}

void loop() {
  RgbRing.update();                     // required every loop
  HackCard.update();

  static uint32_t lastSwitch = 0;
  static uint8_t demoId = 1;
  if (millis() - lastSwitch > 5000) {
    lastSwitch = millis();
    RgbRing.startDemo(demoId++, 0, 120, 255);
    Serial.printf("Demo pattern %d\n", demoId - 1);
    if (demoId > 6) demoId = 1;
  }
}
```

---

## Expected behavior

| Phase | What you see |
|-------|--------------|
| Boot | Ring sweep animation once |
| Every 5 s | Pattern changes (rainbow, chase, etc.) |
| Wi-Fi LED | Status color at top-left (GPIO 38) |

Serial output:

```text
RGB demo running
Demo pattern 1
Demo pattern 2
...
```

---

## Pattern reference

| API call | Effect |
|----------|--------|
| `setPattern(BootAnim)` | One-time boot sweep |
| `setPattern(Scanning)` | Rotating scan indicator |
| `setPattern(Success)` | Green flash |
| `setPattern(Error)` | Red flash |
| `startDemo(id, r, g, b)` | Continuous demo animation |

---

## Fix wrong colors

```cpp
#define RGB_USE_GRB  0   // flip in board_config.h if red/green swapped
```

---

## Next tutorial

→ [Wi-Fi AP Startup](wifi-ap-startup.md)
