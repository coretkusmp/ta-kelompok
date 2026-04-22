

const banyak_produk = document.getElementById("inp_banyak_produk");
function tambah_value(){
    banyak_produk.value = parseInt(banyak_produk.value) + 1;
}

function kurang_value(){
    if(banyak_produk.value > 1){
        banyak_produk.value -= 1;
    }

}