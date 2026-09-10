# Example Sketches

One Arduino example per HackCard function. Open via **File → Examples → HackCard → …**

---

## Catalog

### 00 — Basics

| Sketch | Tutorial |
|--------|----------|
| Boot_Serial_Status | [First Flash](../getting-started/first-flash.md) |
| Buttons_Gestures | — |
| RGB_Ring_Patterns | [RGB Ring](../tutorials/rgb-ring-patterns.md) |
| Buzzer_Tunes | — |
| WiFi_AP_Startup | [Wi-Fi AP](../tutorials/wifi-ap-startup.md) |
| Diagnostics | — |

### 01 — NFC

| Sketch | Tutorial |
|--------|----------|
| NFC_Read_UID | [NFC Read UID](../tutorials/nfc-read-uid.md) |
| NFC_Tag_Info | — |
| NFC_Dump_Type2 | — |
| NFC_Write_URL | [Write URL](../tutorials/nfc-write-url.md) |
| NFC_Write_Text | — |
| NFC_Clone_Type2 | Lab |
| NFC_Kill_Type2 | Lab |

### 02 — Wi-Fi

| Sketch | Description |
|--------|-------------|
| WiFi_Scan | Scan nearby networks |
| WiFi_STA_Connect | Connect to router |
| WiFi_AP_Settings | Change hotspot |
| WiFi_Captive_Portal | Portal demo |
| WiFi_Beacon | Beacon lab |
| WiFi_Training_Portal | Awareness demo |

### 03 — BLE

| Sketch | Description |
|--------|-------------|
| BLE_Scan | Discover devices |
| BLE_Advertise | Lab advertiser |
| BLE_Contact_Card | vCard over BLE |

### 04 — USB HID

| Sketch | Description |
|--------|-------------|
| HID_Keyboard_String | Type text |
| HID_Mouse_Move | Mouse demo |
| HID_Payload_Run | Full payload |

### 99 — Reference

| Sketch | Description |
|--------|-------------|
| Web_Dashboard_Full | Optional all-in-one web UI |

---

## Status

<span class="spec-badge">Library packaging in progress</span>

Examples marked with tutorials are documented first. Remaining sketches follow the same page template — see [Adding Documentation](../resources/adding-documentation.md).

---

## Sketch anatomy

Every example follows this structure:

```cpp
/*
 * HackCard Example: <Name>
 * Docs: https://hardwarehackspace.github.io/hackcard-docs/tutorials/<slug>/
 */
#include <HackCard.h>

void setup() {
  Serial.begin(115200);
  HackCard.begin();
  // feature init
}

void loop() {
  // feature logic
  HackCard.update();
}
```
