# Tutorial: Run Hardware Diagnostics

Verify all peripherals with the built-in self-test.

**Source:** `DiagnosticsApp.cpp`, CLI `diag run`

| | |
|---|---|
| **Hardware** | Full HackCard board |
| **Libraries** | Full firmware uploaded |
| **Access** | Web `/diag` or CLI `diag run` |

---

## Steps

=== "Web dashboard"

    1. Connect to `HackCard-Setup` AP
    2. Open `http://192.168.4.1/diag`
    3. Click run diagnostics

=== "Web terminal / CLI"

    ```text
    diag run
    ```

---

## What is tested

From `DiagnosticsApp.cpp`:

| Test | Pass condition |
|------|----------------|
| Storage | LittleFS mounted |
| SD Card | Detected or "No SD — Flash Mode (OK)" |
| Wi-Fi AP | AP running |
| RGB Ring | Green/blue cycle (after peripherals ready) |
| WiFi LED | Status LED animated |
| Buzzer | Success tone (or skipped if disabled) |
| NFC (PN532) | Chip detected on I2C |
| BOOT Button | Manual — short press moves ring pointer |

!!! tip "Wait 3 seconds after boot"
    RGB/buzzer tests fail with *"Peripherals not ready yet"* if run immediately at boot.

---

## Expected result

All items pass except NFC may warn if no tag present. Report includes `allPass` status.

---

## Source

[`src/apps/system/DiagnosticsApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/DiagnosticsApp.cpp)
