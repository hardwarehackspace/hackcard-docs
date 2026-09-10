# Tutorial: View Activity Logs

Track what HackCard apps do — NFC reads, Wi-Fi scans, config changes.

**Source:** `Logger.cpp`, `ActivityLog.cpp`, `CliEngine.cpp`

| | |
|---|---|
| **Hardware** | HackCard (SD recommended for persistent logs) |
| **Setting** | `ACTIVITY_LOGGING true` in `user_config.h` |
| **Access** | Web `/logs`, web terminal, or SD file |

---

## Check logging is enabled

```text
settings show
```

Look for `Activity log: on`.

Or verify in `user_config.h`:

```cpp
#define ACTIVITY_LOGGING    true
```

---

## View recent entries (CLI)

```text
logs show
```

**Expected result:** Last 30 entries, format `ms,app,action,result` (from `ActivityLogs.readTail()`).

Example output header:

```text
── Activity Logs (last 30) ──
```

---

## View on web dashboard

1. Connect to HackCard AP
2. Open `http://192.168.4.1/logs`

---

## Read from SD card (Full Mode)

When SD is present, logs persist at:

```text
/logs/activity.csv
```

Remove SD and open the file on your PC. CSV columns: `ms,app,action,result`.

→ Full path details: [Storage & Logs](../../software/storage-and-logs.md)

---

## Clear logs

```text
logs clear
```

**Expected result:** `Activity logs cleared.`

---

## Source

- [`src/core/Logger.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/Logger.cpp)
- [`src/core/CliEngine.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/core/CliEngine.cpp)
