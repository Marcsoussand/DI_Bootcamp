const axios = require("axios");

const getUsers = async () => {
const robots = await axios.get("https://jsonplaceholder.typicode.com/users");
const users =await robots.data;
return users;
};

module.exports = {
    myRobot: getUsers
}

