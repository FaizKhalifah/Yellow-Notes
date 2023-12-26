const ul = document.querySelector("#listTugas");

const formTambah=document.forms['formTambah'];
formTambah.addEventListener('submit',function(e){
    e.preventDefault();
    const masukanTugas = document.querySelector("#masukan").value;
    const tanggal = document.querySelector("#tanggal").value;
    console.log(masukanTugas);
    console.log(tanggal);

    //Create berbagai elemen
    const listTugas = document.createElement('li');
    const namaTugas=document.createElement('span');
    const deadline=document.createElement('span');
    const checkStatus = document.createElement('span');
    const labelStatus = document.createElement('label');
    const status = document.createElement('input');
    status.setAttribute('type','checkbox');
    status.setAttribute('id','check');

    //Menambahkan text pada berbagai elemen
    namaTugas.innerText=masukanTugas;
    deadline.innerText=tanggal;
    labelStatus.innerText="Status ";


    //Menambah elemen pada span status
    checkStatus.appendChild(labelStatus);
    checkStatus.appendChild(status);

    //Menambah elemen span pada li
    listTugas.appendChild(namaTugas);
    listTugas.appendChild(deadline);
    listTugas.appendChild(checkStatus);

    //Menambah li pada ul
    ul.appendChild(listTugas);

    //Status pada checkbox
    status.addEventListener('change',function(){
        if(status.checked){
            listTugas.style.backgroundColor="green";
            listTugas.style.color="white";
        }
        else{
            listTugas.style.backgroundColor="";
        }
    })
})

//Menambah fungsi Delete
const hapus = document.querySelector("#hapus");
hapus.addEventListener('click',function(){
    const kumpulanChecklist = document.querySelectorAll('#check');
    for(i=0;i<kumpulanChecklist.length;i++){
        if(kumpulanChecklist[i].checked){
            kumpulanChecklist[i].parentElement.parentElement.style.display='none';
        }
        
    }
})
