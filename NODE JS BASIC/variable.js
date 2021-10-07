// 1. Let dan Const menganut sistem block scope, yang mana cakupan variabelnya hanya bisa diakses di dalam blocknya saja.
// 2. Var menganut sistem functional scope, yang mana variabelnya dapat diakses dari dalam maupun dari luar block kecuali di luar function.
// 3. Data pada Let dan Var bisa diubah.
// 4. Data pada Const tidak bisa diubah.
// 5. Selalu gunakan let atau const jika tidak ingin terjadi kerancuan data/nilai ketika kita mengakses variabel yang ternyata sudah ada di dalam block lain.
// 6. Gunakan const ketika datanya cenderung tetap.
var mahasiswa ='imam'
function mahasiswaBtn(){

    document.getElementById('demo').innerHTML = mahasiswa

} 
const greet = (name) => {
    console.log(`helo ${name}`);
}
    greet('kirno')