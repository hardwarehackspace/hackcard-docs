# RGB Tutorials

---

## Tutorial: Boot animation

**Source:** `HackCard_ESP32.ino`, `user_config.h`

| | |
|---|---|
| **Hardware** | HackCard (12-LED ring GPIO 45) |
| **Libraries** | Adafruit NeoPixel |
| **Setting** | `BOOT_ANIMATION true` |

### Steps

1. Ensure `BOOT_ANIMATION` and `DEFAULT_RING_BRIGHTNESS` set in `user_config.h`
2. Upload firmware
3. Press RESET

### Expected result

Ring sweep animation once at boot, then idle pattern.

Boot occurs **after** Wi-Fi settle delay (`WIFI_PERIPHERAL_DELAY_MS = 3000`).

---

## Tutorial: LED demo via web

**Source:** `LedBuzzerApp`, web `/apps` page

| | |
|---|---|
| **Hardware** | HackCard + phone on AP |
| **Access** | `http://192.168.4.1/apps` |

### Expected result

Preview LED patterns and buzzer tunes from web UI.

---

## Tutorial: Fix swapped colors

**Source:** `docs/ARDUINO_SETUP.md`

<div class="code-meta" markdown="1">

**File:** `config/board_config.h`

</div>

```cpp
#define RGB_USE_GRB  1   // try 0 if red/green are swapped
```

Re-upload after change.

---

## Tutorial: CLI ring control

**Source:** `CliEngine::printHelp()`, `LedBuzzerApp.cpp`

<div class="code-meta" markdown="1">

**Access:** Web terminal or Serial (if enabled)

</div>

```text
led idle
led success
led error
led scan
led boot
led demo 3 0 120 255
led stop
settings brightness 80
```

Patterns from `LedBuzzerApp`: `idle`, `success`, `error`, `scan`, `boot`, `pointer`, demo patterns 1–12.

**Expected result:** Ring changes pattern immediately; brightness persists via settings.

---

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Standalone `RGB_Ring_Patterns.ino` example sketch

---

## Source

[`src/platform/hal/HalRgbRing.h`](https://github.com/hardwarehackspace/HackCard-ESP32)
