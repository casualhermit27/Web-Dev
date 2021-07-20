const id = document.getElementById('id');
const from = document.getElementById('from');
const to = document.getElementById('to');
const amt = document.getElementById('amt')
const addBtn = document.getElementById('addBtn');


const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  rootRef.child(id.value).set({  
    from: from.value,
    to: to.value,
    amt: amt.value
    
  });
});

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

