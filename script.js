const ul = document.querySelector("#listTugas");

const formTambah=document.forms['formTambah'];
formTambah.addEventListener('submit',function(e){
    e.preventDefault();
    const masukanTugas = document.querySelector("#masukan").value;
    const tanggal = document.querySelector("#tanggal").value;
    console.log(masukanTugas);
    console.log(tanggal);

    const listTugas = document.createElement('li');
    const namaTugas=document.createElement('span');
    const deadline=document.createElement('span');
    const checkStatus = document.createElement('span');
    const labelStatus = document.createElement('label');
    const status = document.createElement('input');
    status.setAttribute('type','checkbox')


    //Menambah elemen pada span status
    checkStatus.appendChild(labelStatus);
    checkStatus.appendChild(status);

    //Menambah elemen span pada li
    listTugas.appendChild(namaTugas);
    listTugas.appendChild(deadline);

    //Menambah li pada ul
    ul.appendChild(listTugas);
})

