# Tutorial: USB HID Lab

Send keyboard, mouse, and media commands to a connected PC.

**Source:** firmware `README.md` — authorized testing only

| | |
|---|---|
| **Hardware** | HackCard USB-C → PC (data) |
| **Settings** | USB-OTG (TinyUSB), USB CDC On Boot Enabled |
| **PIN** | Lab PIN required (`LAB_MODE_PIN`) |

!!! danger "Authorized use only"
    Use only on systems you own or have written permission to test. See [Legal & Ethical Use](../../resources/legal-ethical-use.md).

---

## Setup

| Arduino setting | Value |
|-----------------|-------|
| USB Mode | **USB-OTG (TinyUSB)** |
| USB CDC On Boot | **Enabled** |

Connect HackCard USB-C to target PC (not just phone on Wi-Fi).

---

## Web UI

1. Join HackCard AP (optional — for triggering from phone)
2. PC must have HackCard USB connected
3. Open `http://192.168.4.1/hid`
4. Set **Target OS** before launcher-based payloads
5. Enter lab PIN when prompted

---

## CLI examples

<div class="code-meta" markdown="1">

**Hardware:** USB to PC · **Libraries:** Full firmware · **Source:** `README.md`

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

Replace `1234` with your `LAB_MODE_PIN`.

---

## Payload categories

From `README.md`:

| Category | Actions |
|----------|---------|
| Apps & System | Notepad, Calculator, Terminal, Terminal Info, Screenshot, Lock, Alt+Tab |
| Media | Mute, Vol ±, Play/Pause, Prev/Next |
| Mouse | Move (relative dx/dy), Left/Right/Middle click |
| Keys | Tab, Enter, Esc, Backspace, Delete, Space, Arrow keys |
| Custom | Type text, Open URL |

---

## Expected result

- Actions execute on **USB host PC**
- Media keys work without opening an app
- Mouse move is **relative** (−127 to 127 pixels per action)
- Terminal Info runs OS-specific commands (Windows: `ipconfig`, `whoami`; macOS/Linux: `uname -a`, etc.)

---

## Important notes

From `README.md`:

> Keystrokes and mouse input go to the **USB host PC**, not the phone browsing the web page

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
