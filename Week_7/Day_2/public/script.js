function sendData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    fetch('http://localhost:3000/login?u='+username+'&p='+password)
    .then(res => res.json())
    .then(data => {
        document.getElementById('root').innerHTML= `${data.message} ${data.user}`})
    .catch(e =>console.log(e))

}