# Buzzer Tutorials

---

## Tutorial: Enable / disable buzzer

**Source:** `config/user_config.h`

| | |
|---|---|
| **Hardware** | HackCard (buzzer GPIO 37) |
| **Libraries** | Full firmware |

<div class="code-meta" markdown="1">

**File:** `config/user_config.h`

</div>

```cpp
#define BUZZER_ENABLED    true
#define BOOT_ANIMATION    true
```

Re-upload. Boot tune plays if both enabled.

### Expected result

- Boot: buzzer boot tune (with boot animation)
- NFC success: success tune (`NfcFeedback`)
- NFC error: error tune

---

## Tutorial: Buzzer demo via web

**Source:** `LedBuzzerApp`, web `/apps`

Access `http://192.168.4.1/apps` → buzzer tune previews.

---

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Standalone `Buzzer_Tunes.ino` example sketch

---

## Source

[`src/platform/hal/HalBuzzer.h`](https://github.com/hardwarehackspace/HackCard-ESP32)
