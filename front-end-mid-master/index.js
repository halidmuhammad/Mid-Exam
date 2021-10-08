const id = document.querySelector('#id')
const fullname = document.querySelector('#fullname')
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const btn = document.querySelector('.formulir')
const tabel = document.querySelector('tbody')
const gender = [male,female]
const faculty = document.querySelector('#fakultas')
const prodi = document.querySelector('#jurusan')
const form = document.querySelector('.formulir')
const filterfakultas = document.querySelector('#filterfakultas')
const filterprodi = document.querySelector('#filterprodi')

form.addEventListener('submit',addstudent);
const filtersearch = document.querySelector('.search')

//addstudent pada tabel
function addstudent(add){
    add.preventDefault()

    const kelamin = gender.reduce(x =>{
        if(x.checked){
            return x.value
        }
    })
    const insertRows = document.createElement('tr')
    const dataId = document.createElement('td')
    const datafullname = document.createElement('td')
    const datagender = document.createElement('td')
    const datafaculty = document.createElement('td')
    const dataprodi = document.createElement('td')
    const datadelete = document.createElement('button')

    dataId.innerHTML = id.value;
    datafullname.innerHTML = fullname.value;
    datagender.innerHTML = kelamin;
    datafaculty.innerHTML = faculty.value;
    dataprodi.innerHTML = prodi.value;

    datadelete.className='btn btn-danger';
    datadelete.classList.add('btn-sm');

    datadelete.innerHTML = 'delete';

    insertRows.appendChild(dataId)
    insertRows.appendChild(datafullname)
    insertRows.appendChild(datagender)
    insertRows.appendChild(datafaculty)
    insertRows.appendChild(dataprodi)
    insertRows.appendChild(datadelete)

    tabel.appendChild(insertRows)
    datadelete.addEventListener('click',function() {
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
      })
    }

function filterSearching(){
  var val = filtersearch.value.toUpperCase();
  var tr = tabel.getElementsByTagName('tr');
  console.log(val);
  for (var i = 0; i < tr.length; i++) {
    var listdata = tr[i].getElementsByTagName('td')[1];
    if (listdata.textContent.toUpperCase().includes(val)>0) {
      tr[i].style.display = ""
    } else{
      tr[i].style.display = "none"
    }
  }
}
function filter1(){
  var val = filterfakultas.value.toUpperCase();
  var tr = tabel.getElementsByTagName('tr');
  console.log(val);
  for (var i = 0; i < tr.length; i++) {
    var listdata = tr[i].getElementsByTagName('td')[3];
    if (listdata.textContent.toUpperCase().includes(val)>0) {
      tr[i].style.display = ""
    } else{
      tr[i].style.display = "none"
    }
  }
}
function filter2(){
  var val = filterprodi.value.toUpperCase();
  var tr = tabel.getElementsByTagName('tr');
  console.log(val);
  for (var i = 0; i < tr.length; i++) {
    var listdata = tr[i].getElementsByTagName('td')[4];
    if (listdata.textContent.toUpperCase().includes(val)>0) {
      tr[i].style.display = ""
    } else{
      tr[i].style.display = "none"
    }
  }
}
