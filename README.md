# COMMON Token

Solidity smart contract token ERC20 bernama **COMMON** dengan berbagai fitur tambahan dari OpenZeppelin Contracts v5.0.0.

---

## Deskripsi

Kontrak `COMMON` adalah token ERC20 standar dengan fitur:

- Burnable (bisa membakar token)
- Flash Mint (flash loan token)
- Permit (gasless approval via signature, EIP-2612)
- ERC1363 (transfer + callback)
- Ownable (kepemilikan kontrak)

Saat deploy, token langsung mint 1 miliar COMMON ke alamat penerima yang ditentukan.

---

## Spesifikasi

- **Nama Token:** COMMON  
- **Simbol:** COMMON  
- **Initial Supply:** 1,000,000,000 COMMON  
- **Decimal:** 18  
- **Pemilik:** alamat yang ditentukan saat deploy  

---

## Fungsi Utama

### mint(address to, uint256 amount)
- Mint token baru ke alamat `to`  
- Hanya bisa dipanggil oleh pemilik kontrak (`onlyOwner`)

---

## 📣 Connect With Me

- 🐦 Twitter (X): [@kridopratomo90](https://twitter.com/kridopratomo90)  
- 💬 Telegram: [@KridoPratomo](https://t.me/KridoPratomo)  
- 💻 Discord: `zxw_`  
- ▶️ YouTube: [kridopratomo](https://www.youtube.com/@kridopratomo)


## Contoh Deploy

```solidity
constructor(address recipient, address initialOwner)
