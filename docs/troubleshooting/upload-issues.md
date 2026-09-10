# Upload Issues

## Failed to connect to ESP32

**Symptoms:** `Failed to connect` or timeout during upload.

**Fix:**

1. Hold **BOOT**, press **RESET**, release **BOOT** → download mode
2. Select correct **COM port**
3. Use a **data-capable** USB-C cable
4. Lower upload speed to **115200**
5. Confirm board: **ESP32S3 Dev Module**

---

## Wrong board selected

| Wrong | Correct |
|-------|---------|
| ESP32 Dev Module | **ESP32S3 Dev Module** |
| Generic ESP32 | **ESP32S3 Dev Module** |

---

## COM port not listed

| OS | Action |
|----|--------|
| Windows | Device Manager → install CP210x or USB driver |
| macOS | Check System Report → USB |
| Linux | Add user to `dialout` group: `sudo usermod -aG dialout $USER` |

---

## Invalid head of packet

- Press **RESET** after upload completes
- Disconnect/reconnect USB
- Try different USB port (direct to PC, not hub)

---

## Partition scheme error

Set **Custom partition table** and ensure `partitions.csv` is in sketch folder.  
→ [Partition Table](../software/partition-table.md)
