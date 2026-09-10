# Bluetooth LE

HackCard uses the ESP32-S3 integrated **BLE 5** radio for scanning, advertising, and contact-card sharing.

---

## Capabilities

| Function | Description |
|----------|-------------|
| BLE scan | Discover nearby devices with RSSI |
| Lab advertiser | Broadcast custom BLE advertisement |
| Contact card | GATT service sharing vCard from profile |

---

## Usage notes

- BLE and Wi-Fi share the same radio — heavy Wi-Fi lab activity may affect BLE timing
- Contact card reads profile data from `user_config.h` or saved config
- Scan results saved to storage when SD is present

---

## Example API

```cpp
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();
  Ble.begin();
}

void loop() {
  BleScanResult results[20];
  int count = Ble.scan(results, 20, 5000);
  for (int i = 0; i < count; i++) {
    Serial.printf("%s  RSSI: %d\n", results[i].name, results[i].rssi);
  }
  delay(10000);
}
```

!!! note "Library API names may vary"
    Exact class names follow `HalBle` / `BleLabApp` in the firmware repo. See [Library Overview](../software/library-overview.md).

---

## Related

- [Tutorials](../tutorials/index.md)
- [Features overview](index.md)
