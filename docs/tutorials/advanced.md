# Advanced Tutorials

Lab features requiring **authorization** and the **lab PIN** (`LAB_MODE_PIN`, default `1234`).

!!! danger "Authorized use only"
    Use only on systems, networks, and tags you own or have written permission to test.

---

## Documented in firmware README

**Source:** `README.md` — USB HID Lab

| | |
|---|---|
| **Hardware** | HackCard USB-C connected to PC |
| **Settings** | USB-OTG (TinyUSB), USB CDC On Boot Enabled |
| **PIN** | Required for most payloads |

<div class="code-meta" markdown="1">

**CLI examples from README.md**

</div>

```text
hid status
hid os windows
hid run screenshot 1234
hid run calc 1234
hid run terminal_info 1234
hid run mute 1234
hid run move 1234 20,0
hid run click 1234 right
hid run key 1234 tab
hid run lock 1234
```

### Expected result

- Keystrokes/mouse input sent to **USB host PC**
- Not to phone browsing web dashboard

---

## NFC lab operations

From `app_registry.h` — require lab PIN:

| Feature | App flag |
|---------|----------|
| Type 2 clone | `APP_NFC_CLONE` |
| Type 2 kill | `APP_NFC_KILL` |
| Mifare Classic | `APP_NFC_CLASSIC` |

<span class="coming-soon">Documentation coming soon</span> — step-by-step lab tutorials with authorization checklist.

---

## Wi-Fi lab operations

| Feature | App flag |
|---------|----------|
| Evil twin | `APP_WIFI_EVIL_TWIN` |
| Training portal | `APP_WIFI_TRAINING` |
| Monitor / deauth demo | `APP_WIFI_MONITOR` |

<span class="coming-soon">Documentation coming soon</span>

---

## BLE

| Feature | App flag |
|---------|----------|
| Contact card | `APP_BLE` |
| Lab advertise | `APP_BLE` |

From README — BLE contact card CLI:

```text
ble contact start
ble contact stop
ble scan
```

<span class="coming-soon">Documentation coming soon</span> — full BLE tutorials.

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
