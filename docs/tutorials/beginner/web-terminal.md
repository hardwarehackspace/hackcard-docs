# Tutorial: Use the Web Terminal

Access the full CLI from your phone or laptop browser — no USB serial required.

**Source:** `docs/BACKER_GUIDE.md`, `app_registry.h`

| | |
|---|---|
| **Hardware** | HackCard + Wi-Fi client device |
| **Firmware** | `APP_SYSTEM_WEB = 1` (default) |
| **Prerequisite** | [First Program](../../getting-started/first-program.md) |

---

## Steps

1. Upload firmware
2. Connect to HackCard AP (`HackCard-Setup` / password from `user_config.h`)
3. Open **`http://192.168.4.1/terminal`**

Alternative from backer guide: dashboard → **Open Web CLI**

---

## Try these commands

<div class="code-meta" markdown="1">

**Expected result:** Command output in terminal pane

</div>

```text
help
status
version
memory
sd status
nfc status
wifi status
profile show
```

---

## Why web terminal is default

`app_registry.h`:

```cpp
#define CLI_SERIAL_ENABLED  0   // backers use web terminal
```

Enable USB serial CLI by setting to `1` and re-uploading.

---

## Source

- [`docs/BACKER_GUIDE.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/docs/BACKER_GUIDE.md)
- [CLI Reference](../../software/cli-reference.md)
