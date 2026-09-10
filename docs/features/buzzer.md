# Buzzer — Sounds & Tunes

Piezo buzzer on **GPIO 37** for audio feedback.

**Web page:** [http://192.168.4.1/apps](http://192.168.4.1/apps) (preview) · [http://192.168.4.1/settings](http://192.168.4.1/settings) (assign tunes)  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Source:** `HalBuzzer.cpp`, `LedBuzzerApp.cpp`

---

## Before you start

Buzzer must be enabled:

```cpp
#define BUZZER_ENABLED    true   // config/user_config.h
```

Or via CLI / settings:

```text
settings buzzer on
```

Check status:

```text
settings show
```

---

## 8 built-in tunes (IDs 0–7)

Preview these on **`/apps`** under **Buzzer — 8 Tunes**, or play by ID on CLI.

| ID | Name | Character |
|----|------|-----------|
| 0 | Classic | Rising two-tone |
| 1 | Soft | Gentle low tones |
| 2 | Alert | Triple beep |
| 3 | Arcade | Four-note game sound |
| 4 | Chime | Pleasant ascending chime |
| 5 | Pulse | Single short beep |
| 6 | Warning | Low descending tones |
| 7 | Digital | High digital chirp |

### Web dashboard

1. Open `/apps`
2. Scroll to **Buzzer — 8 Tunes**
3. Click **Classic**, **Soft**, **Alert**, etc.

### CLI — play raw tune

```text
buzzer tune 0
buzzer tune 3
buzzer tune 7
```

**Expected output:**

```text
Buzzer tune: Arcade (3)
```

---

## Event sounds (what plays during normal use)

Each event uses the tune you assigned in **Settings**. Defaults map to tune IDs in config.

| Event | CLI preview | Web `/apps` button | When it plays |
|-------|-------------|-------------------|---------------|
| Success | `buzzer success` | Success | NFC read OK, general success |
| Error | `buzzer error` | Error | Failed operation |
| Boot | `buzzer boot` | Boot | Power-on (with `BOOT_ANIMATION`) |
| NFC ready | `buzzer nfc_ready` | NFC Ready | Tag scan starting |
| NFC write OK | — | NFC Write | Tag write complete |
| NFC clone OK | — | NFC Clone | Lab clone complete |
| NFC kill OK | — | NFC Kill | Lab lock complete |

### Web dashboard

`/apps` → **Event previews** → click any button.

### CLI examples

```text
buzzer success
buzzer error
buzzer boot
buzzer nfc_ready
```

---

## Assign tunes to events

Pick which of the 8 tunes plays for each event.

### Web dashboard

1. Open `/settings`
2. Under tune dropdowns: **Success tune**, **Error tune**, **Boot tune**, **NFC tune**
3. Click **Save Settings**

### CLI

```text
settings tune success 4
settings tune error 6
settings tune boot 0
settings tune nfc 3
settings show
```

Syntax: `settings tune <success|error|boot|nfc> <0-7>`

---

## Enable / disable buzzer

| Method | How |
|--------|-----|
| Compile-time | `BUZZER_ENABLED true` in `user_config.h` |
| CLI | `settings buzzer on` / `settings buzzer off` |
| Web | `/settings` → Buzzer checkbox → Save |

---

## Web API

POST `http://192.168.4.1/api/apps`:

| action | value | Example |
|--------|-------|---------|
| `buzzer` | `success`, `error`, `boot`, `nfc_ready`, `nfc_write`, `nfc_clone`, `nfc_kill` | `action=buzzer&value=success` |
| `buzzer_tune` | `0`–`7` | `action=buzzer_tune&value=3` |

Settings POST `http://192.168.4.1/api/settings`:

```text
buzzer=1&tune_success=4&tune_error=6&tune_boot=0&tune_nfc=3
```

---

## Wi-Fi note

GPIO 37 uses PWM. Firmware detaches buzzer PWM when idle to reduce impact on SoftAP visibility. See [Troubleshooting](../troubleshooting.md).

---

## More tutorials

→ [Buzzer Tutorials](../tutorials/buzzer.md)

## Source

[`HalBuzzer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/platform/hal/HalBuzzer.cpp)
