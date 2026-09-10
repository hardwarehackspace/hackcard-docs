# Beginner Tutorials

Start here after [First Program](../getting-started/first-program.md).

---

## Tutorial index

| # | Tutorial | Time |
|---|----------|------|
| 1 | [Web Terminal](beginner/web-terminal.md) | 5 min |
| 2 | [Run Diagnostics](beginner/diagnostics.md) | 5 min |
| 3 | Personalize `user_config.h` | 5 min |
| 4 | Connect to Wi-Fi AP | 10 min |

---

## 3. Personalize your card

**Source:** `docs/BACKER_GUIDE.md`

<div class="code-meta" markdown="1">

**File:** `config/user_config.h` · **Libraries:** n/a · **Re-upload required:** Yes

</div>

```cpp
#define USER_NAME       "Your Name"
#define USER_EMAIL      "you@example.com"
#define AP_SSID         "HackCard-Setup"
#define AP_PASSWORD     "hackcard2026"
```

**Expected result:** Profile and AP reflect your values after re-upload.

→ [Configuration](../software/configuration.md)

---

## 4. Connect to Wi-Fi AP

→ Full steps: [Wi-Fi Tutorials](wifi.md)

---

## BOOT button

| Gesture | Action |
|---------|--------|
| Short press | Move ring menu pointer |
| Long press | Confirm |
| Double tap | Back / cancel |

→ [Buttons & Reset](../hardware/buttons.md)

---

## Next

- [NFC Tutorials](nfc.md)
- [CLI Reference](../software/cli-reference.md)
