# FAQ

Answers derived from verified repository documentation only.

---

## General

### Does HackCard come pre-flashed?

No. You upload firmware yourself via Arduino IDE. See [First Program](getting-started/first-program.md).

### Can HackCard emulate an NFC card for my phone?

**No.** HackCard has a PN532 **reader** — it reads and writes **external** tags. It does not emulate NFC tags or cards.

### Does HackCard support 5 GHz Wi-Fi?

**No.** ESP32 is 2.4 GHz only (`user_config.h` comment).

### Do I need an SD card?

No for basic use. SD enables Full Mode with logs and dump storage. See [SD Card feature](features/sd-card.md).

---

## Setup

### Which Arduino board setting?

**ESP32S3 Dev Module** — full table in [Arduino Setup](software/arduino-setup.md).

### Default Wi-Fi password?

`hackcard2026` from `user_config.h` — change before demos.

### Default lab PIN?

`1234` from `user_config.h` — change before demos.

### Why is Serial Monitor empty?

`CLI_SERIAL_ENABLED` defaults to `0`. Use web terminal at `http://192.168.4.1/terminal` or enable serial CLI in `app_registry.h`. See [Web Terminal tutorial](tutorials/beginner/web-terminal.md).

### Where is the full command list?

[CLI Reference](software/cli-reference.md) — extracted from firmware `CliEngine::printHelp()`.

---

## Hardware

### Where do I tap NFC tags?

Back of PCB, over the antenna coil. See [NFC Hardware](hardware/nfc.md).

### Why does Wi-Fi disappear after boot?

GPIO 45 (RGB ring) can affect RF. Firmware delays RGB init 3 seconds. See [Troubleshooting](troubleshooting.md).

---

## Software

### What firmware version?

**0.21.2** per `FIRMWARE_VERSION` in `board_config.h`.

### Are standalone example sketches available?

<span class="coming-soon">Documentation coming soon</span> — library packaging in progress. Current workflow uses full `HackCard_ESP32.ino`.

### How do I update firmware?

Pull latest repo, re-upload via USB. No OTA partition. See [Updates](software/updates.md).

---

## Resources

### Where is source code?

[github.com/hardwarehackspace/HackCard-ESP32](https://github.com/hardwarehackspace/HackCard-ESP32)

### Where are schematics?

<span class="coming-soon">Documentation coming soon</span> — see [Resources → Schematics](resources/schematics.md).
