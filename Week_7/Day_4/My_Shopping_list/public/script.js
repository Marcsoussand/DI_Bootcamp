function sendData() {
  let item = document.getElementById('item').value;
  let quantity = document.getElementById('quantity').value;
  let itemdata = {
    item,
    quantity
  }
  fetch('http://localhost:3000/item',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(itemdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('root').innerHTML = `${data.message}`;
    getData();
  })
  .catch(err => {
    console.log(err);
  })
}

function getData() {
  fetch('http://localhost:3000/show')
  .then(res => res.json())
  .then(data => {
    showItems(data);
  })
}

function showItems(data) {
  let root = document.getElementById('root');
  root.innerHTML = "";
  data.forEach(item =>{
    let div = document.createElement('div');
    div.innerText= item.item+" : "+item.quantity;
    root.appendChild(div)
  })
}
