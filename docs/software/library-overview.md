# Library Overview

The HackCard library organizes code in three layers: **HAL** (hardware), **Apps** (features), and **Core** (config/storage).

---

## HAL layer

Direct hardware access — use these in custom sketches.

| Class | File | Hardware |
|-------|------|----------|
| `HalNfc` | `HalNfc.cpp` | PN532 NFC |
| `HalRgbRing` | `HalRgbRing.cpp` | 12-LED ring |
| `HalWifiLed` | `HalWifiLed.cpp` | Status LED |
| `HalBuzzer` | `HalBuzzer.cpp` | Piezo buzzer |
| `HalButtons` | `HalButtons.cpp` | BOOT button |
| `HalWifiAp` | `HalWifiAp.cpp` | Wi-Fi AP |
| `HalBle` | `HalBle.cpp` | Bluetooth LE |
| `HalUsbHid` | `HalUsbHid.cpp` | USB HID |

Global instances (e.g. `Nfc`, `RgbRing`, `Buzzer`) are ready after `begin()`.

---

## Apps layer

Higher-level feature modules with Serial output, storage, and feedback.

| App | Feature |
|-----|---------|
| `NfcReadApp` | Read UID |
| `NfcWriteApp` | Write NDEF |
| `NfcDumpApp` | Type 2 dump |
| `WifiScannerApp` | Wi-Fi scan |
| `BleLabApp` | BLE scan/advertise |
| `HidLabApp` | HID payloads |
| `LedBuzzerApp` | RGB + buzzer demos |
| `DiagnosticsApp` | Self-test |

---

## Core layer

| Module | Purpose |
|--------|---------|
| `ConfigStore` | Load/save JSON config |
| `StorageManager` | Flash vs SD file I/O |
| `Logger` / `ActivityLog` | Serial + CSV logging |
| `ModeManager` | Device mode presets |
| `LabPin` | Lab feature PIN gate |

---

## Initialization pattern

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();    // Wi-Fi → delay → RGB → buzzer → NFC
}

void loop() {
  HackCard.update();   // RGB animation, button polling
}
```

`HackCard.begin()` implements the correct boot sequence for GPIO 45 / Wi-Fi stability.

---

## Compile-time toggles

Disable features in `config/app_registry.h`:

```cpp
#define APP_NFC_READ        1
#define APP_WIFI_EVIL_TWIN  0   // exclude from build
#define APP_USB_HID         1
#define CLI_SERIAL_ENABLED  1   // USB serial CLI
#define APP_SYSTEM_WEB      0   // no web dashboard
```

---

## Related

- [Example Sketches](example-sketches.md)
- [Configuration](configuration.md)
