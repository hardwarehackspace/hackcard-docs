# Legal & Ethical Use

HackCard includes features intended for **authorized security research, education, and testing on systems you own or have written permission to test**.

---

## Authorized use only

You may use HackCard for:

- Learning embedded security and NFC/Wi-Fi/BLE concepts
- Testing **your own** networks, tags, and devices
- Authorized penetration testing with a signed scope of work
- Security awareness training in controlled environments

---

## Prohibited use

Do **not** use HackCard to:

- Access systems, networks, or data without authorization
- Clone payment cards, access badges, or credentials you do not own
- Deploy evil-twin or captive portals against public or third-party networks
- Send HID payloads to computers without the operator's knowledge
- Violate local laws (computer fraud, wiretap, RF regulations, etc.)

---

## Lab features

These features require the **lab PIN** and explicit authorization:

| Feature | Risk |
|---------|------|
| NFC clone / kill | Tag data integrity |
| Wi-Fi evil twin | Network impersonation |
| Wi-Fi deauth demo | Disrupts Wi-Fi sessions |
| USB HID payloads | Remote keystroke injection |
| Mifare Classic keyscan | Access credential research |

!!! danger "Change default PIN"
    Default lab PIN is `1234`. **Change it in `user_config.h` before any demo or shipment.**

---

## Regulatory notice

Wi-Fi and BLE transmission may be subject to regional regulations. Ensure your use complies with local RF and privacy laws.

---

## Disclaimer

HackCard hardware and software are provided **as-is** for educational purposes. The authors are not responsible for misuse. You are solely responsible for ensuring your activities are legal and authorized.

---

## Contact

For responsible disclosure or licensing questions, contact the project maintainers via GitHub Issues on the firmware repository.
