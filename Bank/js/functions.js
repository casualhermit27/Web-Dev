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
    // from: from.value,
    // to: to.value,
    amt: amt.value
    
  });
});

rootRef.on('child_added', snapshot => {
  console.log('Child(s) added');  
});
rootRef.on('value', snapshot => {
  console.log('Done!');  
});

function getdata()
{
  var amt=getElementById('amt').value

  firebase.database().ref('amt/'+ amt).once('value').then(function (snapshot ) {
    var balance=snapshot.val().amt;

    document.getElementById("balance").innerHTML.amt;

  })
}