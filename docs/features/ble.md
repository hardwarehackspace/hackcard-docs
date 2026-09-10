# Bluetooth LE

On-chip **BLE 5** on ESP32-S3. Enabled when `APP_BLE = 1`.

**Source:** `app_registry.h`, firmware `README.md`

---

## Capabilities

| Feature | CLI | Web |
|---------|-----|-----|
| BLE scan | `ble scan` | `/ble` — Scan section |
| Lab advertiser | `ble advertise ...` | `/ble` — Advertiser section |
| Contact card | `ble contact start` | `/ble` — Start Contact Card |
| Stop contact | `ble contact stop` | Stop Contact Card |

---

## Contact card

Shares profile from `user_config.h` (name, email, website, etc.) over BLE GATT.

→ Tutorial: [BLE Contact Card](../tutorials/advanced/ble-contact-card.md)

---

## Web page

`http://192.168.4.1/ble`

API routes from `WebStatusServer.cpp`: `/api/ble/scan`, `/api/ble/advertise/start`, `/api/ble/contact/start`, etc.

---

## Notes

BLE and Wi-Fi share the ESP32 radio — heavy Wi-Fi lab activity may affect BLE timing.

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
