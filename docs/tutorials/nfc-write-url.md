# Tutorial: Write NFC URL Tag

Write a **URL** to a blank NTAG / Type 2 tag as an NDEF record.

| | |
|---|---|
| **Time** | ~10 min |
| **Difficulty** | :material-star-outline: Medium |
| **Hardware** | Writable NFC tag (NTAG213/215/216) |
| **Sketch** | `Examples → HackCard → 01_NFC → NFC_Write_URL` |

---

## Goal

Program a tag so any phone tap opens `https://example.com`.

!!! warning "Tag must be writable"
    Locked or read-only tags will fail. Use fresh NTAG stickers or cards.

---

## Code

```cpp
#include <HackCard.h>

const char* URL = "https://example.com";

void setup() {
  Serial.begin(115200);
  HackCard.begin();
  Nfc.begin();

  Serial.println(F("Hold a WRITABLE tag on NFC coil..."));
  Serial.print(F("Will write URL: "));
  Serial.println(URL);
}

void loop() {
  static bool done = false;
  if (!done) {
    char err[64] = {0};
    if (Nfc.writeNdefUri(URL, err, sizeof(err))) {
      Serial.println(F("SUCCESS — tag written!"));
      RgbRing.setPattern(RingPattern::Success);
      Buzzer.playSuccess();
      done = true;
    } else if (err[0]) {
      Serial.print(F("Error: "));
      Serial.println(err);
    }
  }
  HackCard.update();
}
```

---

## Steps

1. Upload sketch
2. Open Serial Monitor (115200)
3. Place a **blank NTAG** on the back coil
4. Hold until `SUCCESS` appears
5. Test with phone NFC reader — should open the URL

---

## Expected output

```text
Hold a WRITABLE tag on NFC coil...
Will write URL: https://example.com
SUCCESS — tag written!
```

---

## Erase a tag

To clear user data before rewriting:

```cpp
Nfc.eraseType2UserData(err, sizeof(err));
```

Or use the full firmware CLI: `nfc erase`

---

## Next steps

- [NFC Feature docs](../features/nfc.md)
- [NFC Read UID](nfc-read-uid.md) — verify written tag
