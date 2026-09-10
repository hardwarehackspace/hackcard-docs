# USB HID

HackCard acts as a **USB composite device** — CDC serial plus HID keyboard/mouse/media keys to a connected PC via TinyUSB.

---

## Requirements

| Setting | Value |
|---------|-------|
| USB Mode | **USB-OTG (TinyUSB)** |
| USB CDC On Boot | Enabled |
| Connection | USB-C to PC (data) |

!!! warning "Target is the connected PC"
    HID keystrokes go to the computer connected via USB — not to Serial Monitor.

---

## Capabilities

| Payload type | Description |
|--------------|-------------|
| Keyboard string | Type arbitrary text |
| Keyboard shortcuts | OS-aware combos (Win/Linux/macOS) |
| Mouse move / click | Cursor control |
| Media keys | Volume, play/pause |
| Payload runner | Sequences of HID actions |

Lab payloads require the **lab PIN** (`LAB_MODE_PIN` in config).

---

## Example

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();
  Hid.begin();
  delay(2000);  // wait for USB enumerate
  Hid.typeString("Hello from HackCard!");
}

void loop() {}
```

---

## OS targeting

Firmware detects or accepts target OS for correct shortcut keys:

```cpp
// Windows: Win+R, Linux: Super key variants, macOS: Cmd key
Hid.setTargetOs(HidTargetOs::Windows);
```

---

## Related

- [Arduino Setup — TinyUSB](../getting-started/arduino-setup.md)
- [Legal & Ethical Use](../resources/legal-ethical-use.md)
