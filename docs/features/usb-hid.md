# USB HID (Lab)

HackCard acts as a **composite USB HID device** to a PC connected via USB-C.

**Source:** firmware `README.md`, `APP_USB_HID`

---

## Requirements

| Setting | Value |
|---------|-------|
| USB Mode | **USB-OTG (TinyUSB)** |
| USB CDC On Boot | **Enabled** |
| Connection | USB-C to target PC |

---

## Payload categories

From `README.md`:

| Category | Actions |
|----------|---------|
| Apps & System | Notepad, Calculator, Terminal, Terminal Info, Screenshot, Lock, Alt+Tab |
| Media | Mute, Vol ±, Play/Pause, Prev/Next |
| Mouse | Move (relative), Left/Right/Middle click |
| Keys | Tab, Enter, Esc, Backspace, Delete, Space, Arrows |
| Custom | Type text, Open URL |

---

## Web UI

`http://192.168.4.1/hid`

- Pick **Target OS** before launcher-based payloads
- Lab PIN required (v0.21.1+: PIN pop-up validation on `/hid`)

---

## Important

From `README.md`:

> Keystrokes and mouse input go to the **USB host PC**, not the phone browsing the web page

→ Tutorial: [USB HID Lab](../tutorials/advanced/usb-hid.md)  
→ [Legal & Ethical Use](../resources/legal-ethical-use.md)

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
