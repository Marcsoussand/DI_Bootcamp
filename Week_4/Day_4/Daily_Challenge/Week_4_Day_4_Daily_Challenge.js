const video = {
    title: "Gladiator",
    uploader: "Russel",
    time: 8400 
};

function watch (object) {
    let {title,uploader,time} =object;
    return `${uploader} watched all ${time} of ${title}`;
}
const video1 = {
    title: "Titanic",
    uploader: "Jack",
    time: 10000 
};

console.log(watch(video));
console.log(watch(video1));


//Instantiate a new Video instance and call the watch() method.
// I'm not sure of the meaning of Instantiate in english and in javascript
// I will ask tomorrow to Ziv
