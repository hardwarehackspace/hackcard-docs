# Tutorial: BLE Contact Card

Share your contact profile over Bluetooth LE.

**Source:** firmware `README.md`, `APP_BLE`

| | |
|---|---|
| **Hardware** | HackCard + BLE-capable phone |
| **Libraries** | Full firmware |
| **Profile data** | `user_config.h` or saved config |

---

## CLI commands

From `README.md` BLE Contact Card table:

<div class="code-meta" markdown="1">

**Expected result:** Phone discovers HackCard BLE contact service

</div>

```text
ble contact start
ble contact stop
```

| Feature | CLI | Web |
|---------|-----|-----|
| Start sharing | `ble contact start` | Start Contact Card on `/ble` |
| Stop sharing | `ble contact stop` | Stop Contact Card |
| Lab scan | `ble scan` | Scan section on `/ble` |
| Lab advertise | `ble advertise ...` | Advertiser section |

---

## Steps

1. Personalize profile in `user_config.h` (name, email, website)
2. Upload firmware
3. Start contact card via web `/ble` or CLI
4. Scan with phone BLE settings or companion app

---

## Expected result

<span class="coming-soon">Documentation coming soon</span>

Detailed phone-side pairing steps and expected GATT service names will be added after verification on target devices.

---

## Source

[`README.md`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/README.md)
