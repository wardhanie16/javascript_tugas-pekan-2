const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function akarPangkatDua(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    } else {
      return Math.sqrt(x);
    }
  }
  
  readline.question("Masukkan angka: ", input => {
    const x = parseInt(input);
    const hasil = akarPangkatDua(x);
    console.log(hasil);
    readline.close();
  });