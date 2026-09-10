# Serial Monitor

## Empty output

| Setting | Required value |
|---------|----------------|
| Baud rate | **115200** |
| Line ending | Newline or Both NL & CR |
| USB CDC On Boot | **Enabled** |
| COM port | ESP32 port (not Bluetooth) |

Press **RESET** after opening Serial Monitor.

---

## Garbled characters

Baud mismatch — set exactly **115200**.

---

## USB serial disabled in firmware

Default firmware may have `CLI_SERIAL_ENABLED 0`. Options:

1. Set `CLI_SERIAL_ENABLED 1` in `app_registry.h` and re-upload
2. Use web terminal at `http://192.168.4.1/terminal` (full firmware + AP connected)

---

## Two COM ports on Windows

ESP32-S3 may expose two ports — try both. The **USB JTAG/serial** port is usually correct for Monitor.

---

## Related

- [First Flash](../getting-started/first-flash.md)
- [Arduino Setup](../getting-started/arduino-setup.md)
