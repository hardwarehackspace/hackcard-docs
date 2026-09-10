# FAQ

## General

### Does HackCard come pre-flashed?

No. HackCard ships without pre-loaded firmware. Follow [Getting Started](../getting-started/index.md) to flash your first example.

### Do I need an SD card?

No. All basic tutorials work in **Flash Mode** without SD. SD enables Full Mode for logs and NFC dump storage.

### What phone do I need for Wi-Fi tutorials?

Any phone that can connect to **2.4 GHz** Wi-Fi networks.

---

## Development

### Can I use PlatformIO?

Currently documented for **Arduino IDE only**. PlatformIO support may be added later.

### How do I disable the web dashboard?

Set in `app_registry.h`:

```cpp
#define APP_SYSTEM_WEB  0
#define CLI_SERIAL_ENABLED  1
```

### Where is the library?

The HackCard library is being packaged from `src/platform/hal/` and `src/apps/`. Until released, use the full `HackCard_ESP32` sketch folder.

---

## Hardware

### Which GPIO is the RGB ring?

GPIO **45** — 12 WS2812 LEDs. Initialize Wi-Fi before RGB.

### Where do I tap NFC tags?

On the **back** of the PCB, over the rectangular antenna coil.

### Why are my LED colors wrong?

Change `RGB_USE_GRB` in `board_config.h` from `1` to `0`.

---

## Security

### What is the default lab PIN?

`1234` — **change it** in `user_config.h` before any demo.

### Can I use evil twin / HID on public networks?

No. Lab features require authorization. See [Legal & Ethical Use](legal-ethical-use.md).

---

## Documentation

### How do I add a new tutorial?

See [Adding Documentation](adding-documentation.md).

### Can I download a PDF?

This site is the manual — always live and searchable. No PDF version planned.
