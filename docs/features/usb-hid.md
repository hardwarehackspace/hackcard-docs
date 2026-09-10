# USB HID (Lab) — All Features & Examples

HackCard acts as a **USB keyboard + mouse + media remote** to a **PC connected via USB-C**.

!!! important "Keystrokes go to the PC"
    Actions run on the **USB host computer**, not the phone browsing the web page. Connect USB-C from HackCard to your target PC.

**Web page:** [http://192.168.4.1/hid](http://192.168.4.1/hid)  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Lab PIN:** required for every action (default `1234`)

**Arduino settings required:**

| Setting | Value |
|---------|-------|
| USB Mode | USB-OTG (TinyUSB) |
| USB CDC On Boot | Enabled |

---

## Before you start

1. Connect HackCard USB-C to target PC
2. Open `/hid` on phone (still on HackCard Wi-Fi) **or** use CLI
3. Set **Target OS** (Windows / macOS / Linux) — affects shortcut keys
4. Enter lab PIN when prompted

### Check status

```text
hid status
```

**Expected:** USB ready, host connected, target OS name.

### Set target OS

```text
hid os windows
hid os mac
hid os linux
```

Web: `/hid` → OS dropdown → applies via `POST /api/hid/os`

---

## Apps & system shortcuts

Same buttons as `/hid` web page.

| Action | Web button | CLI example |
|--------|------------|-------------|
| Open Notepad | Notepad | `hid run notepad 1234` |
| Open Calculator | Calculator | `hid run calc 1234` |
| Open Terminal | Terminal | `hid run terminal 1234` |
| System info in terminal | Terminal Info | `hid run sysinfo 1234` |
| Screenshot | Screenshot | `hid run screenshot 1234` |
| Lock screen | Lock Screen | `hid run lock 1234` |
| Alt+Tab | Alt+Tab | `hid run alt_tab 1234` |
| Close window | Close Window | `hid run close 1234` |

**CLI shortcuts:**

```text
hid notepad 1234
hid lock 1234
```

---

## Media controls

| Action | Web button | CLI |
|--------|------------|-----|
| Mute | Mute | `hid run mute 1234` |
| Volume down | Vol − | `hid run vol_down 1234` |
| Volume up | Vol + | `hid run vol_up 1234` |
| Play/Pause | Play/Pause | `hid run play 1234` |
| Previous track | Prev | `hid run prev 1234` |
| Next track | Next | `hid run next 1234` |

---

## Mouse control

| Action | Web | CLI |
|--------|-----|-----|
| Move relative | D-pad on `/hid` | `hid run move 1234 10,0` |
| Left click | Left Click | `hid run click 1234 left` |
| Right click | Right Click | `hid run click 1234 right` |
| Middle click | Middle Click | `hid run click 1234 middle` |

Payload for move: `dx,dy` (e.g. `10,-5`)

---

## Keyboard keys

Web: `/hid` → Key pad (Tab, Enter, Esc, arrows, etc.)

```text
hid run key 1234 Tab
hid run key 1234 Enter
hid run key 1234 Escape
```

---

## Custom text and URLs

### Type arbitrary text

**Web:** `/hid` → Type Text field → enter text → **Type Text**

**CLI:**

```text
hid type 1234 Hello from HackCard
hid run type 1234 Hello from HackCard
```

### Open website in browser

**Web:** `/hid` → URL field → **Open URL**

**CLI:**

```text
hid url 1234 https://example.com
hid run url 1234 https://example.com
```

---

## Full CLI action list

```text
hid run <action> <pin> [payload]
```

| action | payload | Notes |
|--------|---------|-------|
| `notepad` | — | Opens Notepad (Windows) / TextEdit path varies by OS |
| `calc` / `calculator` | — | Opens calculator |
| `terminal` | — | Opens terminal app |
| `terminal_info` / `sysinfo` | — | Runs info command in terminal |
| `screenshot` | — | OS screenshot shortcut |
| `lock` / `lock_screen` | — | Locks screen |
| `alt_tab` / `app_switcher` | — | Switch apps |
| `close_window` / `close` | — | Close active window |
| `volume_mute` / `mute` | — | |
| `volume_up` / `vol_up` | — | |
| `volume_down` / `vol_down` | — | |
| `media_play_pause` / `play` | — | |
| `media_next` / `next` | — | |
| `media_previous` / `prev` | — | |
| `mouse_click` / `click` | `left\|right\|middle` | |
| `mouse_move` / `move` | `dx,dy` | Relative move |
| `key_press` / `key` | key name | Tab, Enter, etc. |
| `type_text` / `type` | text string | Types characters |
| `open_website` / `url` | URL | Opens in default browser |

---

## Web API

```text
GET  /api/hid/status
POST /api/hid/os          Body: os=0|1|2   (Windows|macOS|Linux)
POST /api/hid/run         Body: action=notepad&pin=1234
POST /api/hid/run         Body: action=type_text&pin=1234&text=Hello
POST /api/hid/run         Body: action=open_website&pin=1234&url=https://example.com
POST /api/hid/run         Body: action=mouse_move&pin=1234&dx=10&dy=0
POST /api/hid/run         Body: action=mouse_click&pin=1234&button=left
```

---

## Example demo script (CLI)

With PC connected and Notepad focused:

```text
hid os windows
hid run notepad 1234
hid type 1234 Hello from HackCard HID lab!
```

---

## More tutorials

→ [USB HID Lab tutorial](../tutorials/advanced/usb-hid.md)  
→ [Legal & Ethical Use](../resources/legal-ethical-use.md)

## Source

[`HidLabApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/hid/HidLabApp.cpp), [`WebStatusServer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/WebStatusServer.cpp)
