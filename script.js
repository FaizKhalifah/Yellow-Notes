const ul = document.querySelector("#listTugas");
const formTambah=document.forms['formTambah'];
formTambah.addEventListener('submit',function(e){
    e.preventDefault();
    const masukanTugas = document.querySelector("#masukan").value;
    const tanggal = document.querySelector("#tanggal").value;
    console.log(masukanTugas);
    console.log(tanggal);
})

