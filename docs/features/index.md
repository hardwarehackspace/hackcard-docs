# Features

HackCard combines multiple security-lab peripherals on a single credit-card PCB. Each feature has dedicated HAL code, example sketches, and tutorials.

---

## Feature map

| Feature | Hardware | Example tutorials |
|---------|----------|-------------------|
| [NFC / RFID](nfc.md) | PN532 + PCB antenna coil | Read UID, Write URL, Dump, Clone |
| [Wi-Fi Lab](wifi.md) | ESP32-S3 2.4 GHz | AP, Scan, Captive portal, Beacon |
| [Bluetooth LE](ble.md) | On-chip BLE 5 | Scan, Advertise, Contact card |
| [RGB & Buzzer](rgb-and-buzzer.md) | 12× WS2812 + piezo | Ring patterns, status feedback |
| [USB HID](usb-hid.md) | TinyUSB composite | Keyboard, mouse, media keys |
| [SD Storage](storage.md) | SPI microSD | Logs, NFC dumps, config JSON |

---

## Architecture

```mermaid
flowchart TB
    subgraph hw [Hardware Layer]
        NFC[PN532]
        WIFI[ESP32 Wi-Fi]
        BLE[ESP32 BLE]
        RGB[WS2812 Ring]
        HID[USB HID]
        SD[microSD]
    end
    subgraph hal [HAL — HackCard Library]
        H1[HalNfc]
        H2[HalWifiAp]
        H3[HalBle]
        H4[HalRgbRing]
        H5[HalUsbHid]
        H6[StorageManager]
    end
    subgraph apps [Your Sketch or Example]
        SK[setup / loop]
    end
    NFC --> H1
    WIFI --> H2
    BLE --> H3
    RGB --> H4
    HID --> H5
    SD --> H6
    H1 --> SK
    H2 --> SK
    H3 --> SK
    H4 --> SK
    H5 --> SK
    H6 --> SK
```

Each feature is accessible independently — use one or combine many in your custom firmware.

---

## Operating modes

| Mode | Trigger | Storage |
|------|---------|---------|
| **Flash Mode** | No SD card | LittleFS + compiled defaults |
| **Full Mode** | SD inserted | SD preferred, auto folder setup |

---

## Lab features

Some capabilities are intended for **authorized testing only**:

- NFC clone / kill
- Wi-Fi evil twin simulation
- Probe sniff / deauth demo
- USB HID payload injection

See [Legal & Ethical Use](../resources/legal-ethical-use.md) before using lab features.
