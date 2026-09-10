# SD Card Tutorials

---

## Tutorial: Enable Full Mode

**Source:** `docs/BACKER_GUIDE.md`, `StorageManager.cpp`

| | |
|---|---|
| **Hardware** | HackCard + FAT32 microSD |
| **Libraries** | Full firmware |
| **Prerequisite** | [First Program](../getting-started/first-program.md) |

### Steps

1. Format microSD as **FAT32**
2. Insert into SD slot (back PCB, bottom-right)
3. Power-cycle or reset HackCard
4. Wait 8+ seconds for deferred SD scan
5. Check status via Serial or web

<div class="code-meta" markdown="1">

**CLI command**

</div>

```text
sd status
```

### Expected result

From `StorageManager.cpp`:

```text
Storage: SD card ready (Full Mode)
```

Auto-created folders: `/config`, `/logs`, `/nfc/dumps`, `/wifi`, `/ble`

---

## Tutorial: Activity log on SD

**Source:** `Logger.cpp`

When `ACTIVITY_LOGGING` is true and SD present:

- Log file: `/logs/activity.csv`
- Format: `ms,app,action,result`

View via web `/logs` page or read file from SD on PC.

---

## Tutorial: Override config with SD JSON

**Source:** `ConfigStore.cpp`, [Storage & Logs](../software/storage-and-logs.md)

| | |
|---|---|
| **Hardware** | HackCard + FAT32 microSD in Full Mode |
| **Prerequisite** | `sd status` shows SD ready |

### Steps

1. Insert SD and wait for Full Mode (`Storage: SD card ready`)
2. On PC, open the SD card — folder `/config` is auto-created
3. Create or edit `/config/hackcard.json` (see JSON structure in [Storage & Logs](../software/storage-and-logs.md))
4. Power-cycle HackCard (reset or unplug USB)
5. Verify:

```text
config show
sd status
```

### Expected result

- Config loads from SD JSON instead of compiled `user_config.h` defaults
- AP SSID, owner name, brightness, and lab PIN reflect JSON values
- Changes persist across reboots without re-flashing

!!! note "Priority"
    SD JSON overrides compiled defaults. If SD is removed, firmware falls back to `user_config.h`.

---

## Coming soon

<span class="coming-soon">Documentation coming soon</span>

- Standalone SD card test sketch

---

## Source

[`src/core/StorageManager.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32)
