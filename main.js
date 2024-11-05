function hitungDiskon(harga, diskon) {
    let jumlahDiskon = harga * (diskon / 100);
    let hargaSetelahDiskon = harga - jumlahDiskon;
    return hargaSetelahDiskon;
  }
  
  let hargaSetelahDiskon = hitungDiskon(200000, 50);
  console.log(hargaSetelahDiskon);