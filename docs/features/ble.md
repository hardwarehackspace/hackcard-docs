# Bluetooth LE — All Features & Examples

On-chip **BLE 5** on ESP32-S3. Shares radio with Wi-Fi — heavy Wi-Fi lab activity may affect BLE.

**Web page:** [http://192.168.4.1/ble](http://192.168.4.1/ble)  
**CLI:** [http://192.168.4.1/terminal](http://192.168.4.1/terminal)  
**Lab PIN:** required for advertiser (`LAB_MODE_PIN`, default `1234`)

---

## 1. BLE status

Check if BLE stack is ready.

### Web dashboard

`/ble` — status section at top (auto-loads)

### CLI

```text
ble status
```

### API

```text
GET /api/ble/status
```

---

## 2. Scan nearby BLE devices

5-second scan for nearby advertisers.

### Web dashboard

1. Open `/ble`
2. Click **Scan**
3. Wait ~5 seconds — results list device names and RSSI

### CLI

```text
ble scan
```

### API

```text
POST /api/ble/scan
GET  /api/ble/scan/last    # cached results
```

---

## 3. Lab advertiser (custom BLE name)

Broadcast a custom device name for lab demos. **Lab PIN required.**

### Web dashboard

1. `/ble` → **Advertiser**
2. Enter device name (e.g. `HackCard-Demo`)
3. Enter lab PIN → **Start Advertising**
4. **Stop** when done

### CLI

```text
ble advertise start 1234 HackCard-Demo
ble advertise stop
```

Syntax: `ble advertise start <pin> <name>`

### API

```text
POST /api/ble/advertise/start   Body: pin=1234&name=HackCard-Demo
POST /api/ble/advertise/stop
```

---

## 4. BLE contact card (share profile)

Shares your contact profile over BLE GATT — phones with BLE scanner apps can read name, email, vCard.

**Prerequisite:** Profile configured → [Personalize Profile](../tutorials/beginner/personalize-profile.md)

### Web dashboard

1. `/ble` → **Contact Card**
2. Click **Start Contact Card**
3. Scan with phone BLE app — look for HackCard service
4. **Stop Contact Card** when done

### CLI

```text
ble contact start
ble contact refresh
ble contact stop
```

`ble contact refresh` updates GATT data after profile changes.

### API

```text
POST /api/ble/contact/start
POST /api/ble/contact/refresh
POST /api/ble/contact/stop
```

### GATT service (from firmware)

| UUID suffix | Content |
|-------------|---------|
| `0000fc00-...` | Service |
| `fc01` | vCard data |
| `fc02` | Name |
| `fc03` | Email |

---

## Example workflow — share contact at an event

1. Set profile at `/profile/edit`
2. Open `/ble` → **Start Contact Card**
3. Tell visitor to use a BLE scanner app
4. When done: **Stop Contact Card**

---

## More tutorials

→ [BLE Contact Card (advanced)](../tutorials/advanced/ble-contact-card.md)  
→ [Legal & Ethical Use](../resources/legal-ethical-use.md)

## Source

[`BleLabApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/ble/BleLabApp.cpp), [`BleContactCardApp.cpp`](https://github.com/hardwarehackspace/HackCard-ESP32/blob/main/src/apps/ble/BleContactCardApp.cpp)
