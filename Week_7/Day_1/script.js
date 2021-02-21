const my_usr = require("./user.js");

console.log(my_usr);

// const my_usr = require('./user.js');
// my_usr.usrs()
// .then(data => console.log(data))
// .catch(e => console.log(e))
// const axios = require('axios');
// const getUsers = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       const users = await response.data;
//       return users;
//     } catch (error) {
//       console.error(error);
//     }
// }
// module.exports = {
//   usrs: getUsers
// }