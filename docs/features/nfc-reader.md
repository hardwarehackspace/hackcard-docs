# NFC Reader — All Features & Examples

PN532 **reader only** — reads and writes **external physical tags**. HackCard does **not** emulate NFC cards.

**Web page:** [http://192.168.4.1/nfc](http://192.168.4.1/nfc)  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Hardware:** Place tags on the **back** of the PCB over the antenna coil (I2C GPIO 8/18/17, addr `0x24`)

<div class="nfc-notice" markdown="1">

HackCard **does not act as an emulated card**. You cannot tap a phone on HackCard to receive a contact or URL — you write data **onto external tags**, then tap those tags elsewhere.

</div>

---

## Before you start

Check PN532 is detected:

```text
nfc status
```

If not found:

```text
Error: PN532 not detected on I2C bus
```

→ [Troubleshooting](../troubleshooting.md)

Successful reads/writes trigger **green LED + buzzer** (`NfcFeedback`).

---

## 1. Read tag UID

### Web dashboard

1. Open `/nfc`
2. Click **Read Tag**
3. Hold tag on antenna when prompted

### CLI

```text
nfc read
```

**Expected result:**

```text
UID:  04:A1:B2:C3:D4:E5:F6
Type: NTAG213
Saved: /nfc/last_read.txt
```

### API

```text
POST /api/nfc/read
GET  /api/nfc/status
```

---

## 2. Tag info + NDEF preview

See tag family and any URL/text already on the tag.

### Web dashboard

`/nfc` → **Tag Info**

### CLI

```text
nfc info
```

### API

```text
POST /api/nfc/info
```

---

## 3. Write URL to blank tag

Write a link — phone opens it when tag is tapped elsewhere.

### Web dashboard

1. `/nfc` → **Write URL**
2. Enter `https://example.com`
3. Hold **writable** NTAG on antenna

### CLI

```text
nfc write https://hardwarehackspace.github.io/hackcard-docs/
nfc write https://github.com/yourprofile
```

**Expected result:** `NDEF URL written: https://...`

### API

```text
POST /api/nfc/write
Body: type=url&url=https://example.com
```

---

## 4. Write plain text

### Web dashboard

`/nfc` → **Write Text** → enter message

### CLI

```text
nfc write text Hello from HackCard
```

### API

```text
POST /api/nfc/write
Body: type=text&text=Hello+from+HackCard
```

---

## 5. Write vCard contact

Writes your profile (name, email, phone, etc.) as a contact on the tag.

**Prerequisite:** Profile set → [Personalize Profile](../tutorials/beginner/personalize-profile.md)

### Web dashboard

`/nfc` → **Write vCard**

### CLI

```text
nfc write vcard
```

**Expected result:** `vCard written for: Your Name`

### API

```text
POST /api/nfc/write
Body: type=vcard
```

---

## 6. Dump Type 2 tag (save pages to storage)

Saves all pages to `/nfc/dumps/` on SD (or flash if no SD).

### Web dashboard

`/nfc` → **Dump Tag**

### CLI

```text
nfc dump
```

**Expected result:**

```text
── NFC Dump OK ──
Saved: /nfc/dumps/1234567890_ABCD1234.txt
```

### API

```text
POST /api/nfc/dump
GET  /api/nfc/last-dump
```

---

## 7. NFC activity history

### Web dashboard

`/nfc` → **History** section

### CLI

```text
nfc history
```

### API

```text
GET /api/nfc/history
```

Stored at `/nfc/history.csv` when storage available.

---

## Lab features (PIN required)

Default lab PIN: **`1234`**. Change in `/settings` or `user_config.h`.

| Feature | CLI | Web `/nfc` | Warning |
|---------|-----|------------|---------|
| Erase user pages | `nfc erase 1234` | Erase button + PIN | Destructive |
| Clone dump to tag | `nfc clone 1234 last` | Clone + PIN | Needs prior dump |
| Permanent lock | `nfc kill 1234` | Kill + PIN | **Irreversible** |
| Classic dump | `nfc classic dump FFFFFFFFFFFF` | Classic Dump | Mifare Classic only |
| Classic clone | `nfc classic clone 1234` | Classic Clone + PIN | Lab only |
| Key scan | `nfc keys scan 0` | Keys Scan | Try common keys |

### Clone workflow example

```text
nfc dump
nfc clone 1234 last
```

Or specify dump file:

```text
nfc clone 1234 /nfc/dumps/1234567890_ABCD1234.txt
```

### API examples

```text
POST /api/nfc/erase        Body: pin=1234
POST /api/nfc/clone        Body: pin=1234&path=last
POST /api/nfc/kill         Body: pin=1234
POST /api/nfc/classic/dump Body: key=FFFFFFFFFFFF
POST /api/nfc/classic/clone Body: pin=1234&key=FFFFFFFFFFFF
POST /api/nfc/keys/scan    Body: sector=0
```

---

## Storage paths

| Path | Content |
|------|---------|
| `/nfc/last_read.txt` | Last UID |
| `/nfc/dumps/` | Timestamped dump files |
| `/nfc/history.csv` | Activity log |

---

## More tutorials

→ [NFC Tutorials](../tutorials/nfc.md)  
→ [NFC Dump + Clone (advanced)](../tutorials/advanced/nfc-dump-clone.md)

## Source

[`HalNfc.h`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/platform/hal/HalNfc.h), [`WebStatusServer.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/system/WebStatusServer.cpp)
