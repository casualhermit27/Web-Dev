const from = document.getElementById('from');
const to = document.getElementById('to');
const addBtn = document.getElementById('addBtn');


const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  rootRef.child(from.value).set({
    to: to.value,
    
  });
});