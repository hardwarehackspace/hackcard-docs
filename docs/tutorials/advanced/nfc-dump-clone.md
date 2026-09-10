# Tutorial: NFC Dump + Clone (Type 2)

Copy user data from one **external Type 2 tag** to another blank tag.

!!! danger "Authorized use only"
    Only clone tags you own or have explicit permission to duplicate. See [Legal & Ethical Use](../../resources/legal-ethical-use.md).

**Source:** `NfcDumpApp.cpp`, `NfcLabApp.cpp`, `CliEngine.cpp`

| | |
|---|---|
| **Hardware** | HackCard + PN532, two Type 2 tags (source + blank target) |
| **Lab PIN** | Required (`LAB_MODE_PIN` from `user_config.h`) |
| **Storage** | SD recommended — dumps saved to `/nfc/dumps/` |

<div class="nfc-notice" markdown="1">

HackCard reads/writes **external tags only**. It does not emulate NFC cards.

</div>

---

## Step 1 — Dump source tag

Place source tag on antenna (back of PCB):

```text
nfc dump
```

**Expected result:**

```text
── NFC Dump OK ──
UID:  ...
Saved: /nfc/dumps/<timestamp>_<uid>.txt
```

Dump file format (from `NfcDumpApp::formatDumpFile()`):

```text
# HackCard NFC Dump
uid=...
type=...
pages=...

page0=...
page1=...
```

---

## Step 2 — Clone to blank tag

Replace `<pin>` with your lab PIN. Use `last` for the most recent dump:

```text
nfc clone <pin> last
```

Or specify a dump path:

```text
nfc clone <pin> /nfc/dumps/1234567890_ABCD1234.txt
```

Hold a **blank writable Type 2 tag** on the antenna when prompted.

### Expected result

```text
── NFC Clone OK ──
```

On failure:

```text
── NFC Clone FAILED ──
No dump file — run nfc dump first
```

---

## Related lab commands

| Command | Purpose |
|---------|---------|
| `nfc erase <pin>` | Erase user pages on Type 2 tag |
| `nfc kill <pin>` | **Permanent** lock — irreversible |
| `nfc classic dump [key]` | Mifare Classic dump (lab) |

Full reference → [CLI Reference](../../software/cli-reference.md)

---

## Source

- [`src/apps/nfc/NfcDumpApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/nfc/NfcDumpApp.cpp)
- [`src/apps/nfc/NfcLabApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/nfc/NfcLabApp.cpp)
