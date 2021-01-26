//Exercise 1 : Move the Box

function myMove() {
  var cube = document.getElementById("animate");
  var pos=0;
  let id = setInterval(function(){
      if (pos == 350) {
          clearInterval(id)
      }
      else {
          pos++;
          cube.style.left = pos + "px";
      }
  },10);
  }
  

// Exercise 2 : Drag & Drop


// let toDrop=document.getElementById("toDrop");
// let dropZone = document.getElementById("dropZone");
// toDrop.setAttribute('draggable', "true");
// toDrop.setAttribute('ondragstart','dragStart(event)');
// dropZone.setAttribute('ondragover','allowDrop(event)');
// dropZone.setAttribute('ondrop', 'dragDrop(event)');
// dropZone.setAttribute('ondragenter','allowEnter(event)');
// dropZone.setAttribute('ondragleave','allowLeave(event)');

function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
  }

  function allowEnter(event) {
    event.target.classList.add('over');
  }

  function allowLeave(event) {
    event.target.classList.remove('over');
  }

  function dragStart(event) {
    //set the data to be dragged
    console.log("target:",  event.target)
    console.log("id: ",  event.target.id ) // id: square1
    event.dataTransfer.setData("text", event.target.id);
    }

    function dragDrop(event) {
        // console.log("event.target:",event.target) 
        // "event.target:" "<div id='square3' ondrop='dragDrop(event)' ondragover='allowDrop(event)'>square3</div>"
        event.preventDefault();
        // retrieve the data dragged
          
        let data = event.dataTransfer.getData("text");
        console.log("data: ",  data) //data: square1 
          
        let box = document.getElementById(data)
        event.target.appendChild(box);
        }
 
    