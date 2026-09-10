# Legal & Ethical Use

HackCard includes capabilities intended for **authorized security research, education, and testing**.

---

## Authorized use

- Learning embedded security, NFC, Wi-Fi, BLE, and USB concepts
- Testing **your own** networks, tags, credentials, and devices
- Authorized penetration testing with written scope
- Security awareness training in controlled environments

---

## Prohibited use

- Accessing systems or data without authorization
- Cloning payment cards, access badges, or credentials you do not own
- Evil-twin or captive portals on public or third-party networks
- HID payloads on computers without operator knowledge
- Violating applicable laws (computer fraud, privacy, RF regulations)

---

## Lab features (PIN gated)

| Feature | Risk |
|---------|------|
| NFC clone / kill | Tag integrity |
| Wi-Fi evil twin | Network impersonation |
| Wi-Fi deauth demo | Session disruption |
| USB HID payloads | Keystroke injection |
| Mifare keyscan | Credential research |

!!! danger "Change default PIN"
    Default: `1234` in `user_config.h`. Change before shipping or demoing.

---

## Disclaimer

Hardware and software provided **as-is** for educational purposes. Authors are not responsible for misuse. You are solely responsible for legal compliance.

---

## Contact

Responsible disclosure via GitHub Issues on the firmware repository.
