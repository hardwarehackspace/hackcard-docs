# Troubleshooting

Solutions for common HackCard setup and runtime issues.

---

## Quick diagnosis

| Symptom | Likely cause | Page |
|---------|--------------|------|
| Upload fails | Wrong board / cable / download mode | [Upload Issues](upload-issues.md) |
| Serial Monitor empty | Baud / CDC settings | [Serial Monitor](serial-monitor.md) |
| Wi-Fi SSID missing | GPIO 45 / 2.4 GHz / boot order | [Wi-Fi Issues](wifi-issues.md) |
| PN532 not detected | I2C / library | [NFC Issues](nfc-issues.md) |
| Wrong LED colors | GRB vs RGB order | [GPIO Reference](../pinout/gpio-reference.md) |
| SD not found | Format / insertion | [SD Storage](../features/storage.md) |

---

## Diagnostic tools

=== "Serial boot log"

    Connect USB → Serial Monitor 115200 → press RESET.  
    Look for `[boot]` lines and error messages.

=== "Diagnostics example"

    Flash the Diagnostics example or run `diag run` in CLI.

=== "Wi-Fi diag"

    Serial output includes `[wifi-diag]` reports after RGB init.

---

## Still stuck?

1. Re-check [Arduino Setup](../getting-started/arduino-setup.md) board table
2. Try a different USB-C **data** cable
3. Open an issue on [GitHub](https://github.com/hardwarehackspace/hackcard-docs/issues)
