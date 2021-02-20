// Page 1 - The List:
// A todo list item should contain the following: --- DONE
// Name
// Description
// Start date and time- time should hour and 00/15/30/45 minutes
// End date and time- time should hour and 00/15/30/45 minutes
// Status - active/done
// Put your list on a webpage and show: ---DONE
// The name
// The starting date
// How many days left to finish this item.
// Note:
// if an item started yesterday and the end date is after 5 days, then there are 4 days to finish.
// if an item will start tommorow and the end date is after 5 days, then there are 6 days to finish.
// By clicking on an item it shows the description --- DONE
// Choose an event (for example double-clicking) or by checkbox, change the status of an item ---DONE without checkbox with editing a select
// Requirements:
// The List of items should be added to the page in ascending order according to the start date. ---DONE
// Show items that are done with different color.--- DONE You can edit or delete this item like others item ---DONE
// An item that is not done and end date passed, is showed in a different color. You can edit or delete this item like others item --- Done in orange
// The todo list should be stored in localStorage --- Not done
// Add more functionality to your item
// Delete an item (show a confirmation popup/modal) --- DONE
// Edit an item (show a save button). ---DONE



var toDoTable = document.getElementById("toDoTable");
var now = new Date();
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var editor = document.getElementById("editor");


var toDoList = [{
    name: "Learn HTML",
    description: "Basics HTML",
    start_date: new Date(2021, 0, 10, 9, 30),
    end_date: new Date(2021, 0, 15, 13, 30),
    status: "Done"
},
{
    name: "Workout",
    description: "100 pushups",
    start_date: new Date(2021, 1, 24, 9, 30),
    end_date: new Date(2021, 1, 24, 13, 30),
    status: "Active"
},
{
    name: "CSS",
    description: "Learn how to design your website, using CSS",
    start_date: new Date(2021, 0, 17, 9, 30),
    end_date: new Date(2021, 0, 24, 13, 30),
    status: "Active"
},
{
    name: "Learn JavaScript",
    description: "Learn how to code perfectly with Ziv",
    start_date: new Date(2021, 0, 24, 9, 30),
    end_date: new Date(2021, 3, 26, 13, 30),
    status: "Active"
}];

// console.log(toDoList.sort(function(a,b){return a.start_date-b.start_date;}));
toDoList.sort(function (a, b) { return a.start_date - b.start_date; })
// console.log(toDoList[0].end_date-now);

for (i = 0; i < toDoList.length; i++) {
    var row = toDoTable.insertRow();
    var nameCell = row.insertCell(0);
    var startDateCell = row.insertCell(1);
    var daysLeftCell = row.insertCell(2);
    var statusCell = row.insertCell(3);
    var description = toDoTable.insertRow();
    var descriptionCell = description.insertCell();
    row.setAttribute("id", "row" + i);
    description.setAttribute("id", "description" + i);
    statusCell.setAttribute("class", "statusCell");
    statusCell.setAttribute("id", "statusCell" + i);
    nameCell.setAttribute("id", "name" + i);
    startDateCell.setAttribute("id", "startDate" + i);
    daysLeftCell.setAttribute("id", "daysLeft" + i);
    console.log(description.getAttribute("id"));
    descriptionCell.colSpan = "4";
    // Didn't succeed to appendChild my checkbox into my table, so I will do it with text
    // var status = document.createElement('input');
    // status.type = "checkbox";
    // status.name = "stat";
    // // status.value = toDoList[i].status; 
    // status.value = "status";
    // status.id = "statusId";
    // var label = document.createElement('label');
    // label.htmlFor = "statusId";
    // label.appendChild(document.createTextNode('Active'));
    // var br = document.createElement('br');
    // var temp2 = "statusCell"+i;
    // document.getElementById(temp2).appendChild(status);
    // document.getElementById(temp2).appendChild(label);
    // // statusCell.appendChild(br)
    description.style.display = "none";
    descriptionCell.innerHTML = "Description: " + toDoList[i].description;
    nameCell.innerHTML = toDoList[i].name;
    startDateCell.innerHTML = toDoList[i].start_date.toString().slice(0, 15);
    statusCell.innerHTML = toDoList[i].status;

    row.style.backgroundColor = "#34A8A5";

    if (toDoList[i].end_date - now <= 0) {
        daysLeftCell.innerHTML = 0 + " Days";
        if(toDoList[i].status == "Active") {
            row.style.backgroundColor = "orange";
        }
    }
    else { daysLeftCell.innerHTML = Math.floor((toDoList[i].end_date - now) / (1000 * 60 * 60 * 24)) + " Days" }
    if (toDoList[i].status == 'Done') {
        row.style.backgroundColor = "#B03532";
    }



};

// function displayDescription(i) {
//     document.getElementById("description"+i).style.display="block";

// };


toDoTable.addEventListener("click", function (event) {
    e = event.target;
    rowIndex = e.parentElement.rowIndex;
    // console.log(rowIndex);
    var temp = Math.floor(rowIndex / 2);
    var desc = "description" + temp;
    var orange = false;
    if (document.getElementById(desc).style.display == "table-row") {
        document.getElementById(desc).style.display = "none";
    }
    else {
        document.getElementById(desc).style.display = "table-row";
    };
    editor.style.visibility = "visible";
    var editor1 = document.createElement("div");
    editor1.setAttribute("id", "editor1");
    editor.appendChild(editor1);
    // var nameTemp = "name"+ temp;
    // // var 
    // console.log(nameTemp);
    // Let's print the name input with the value that might be changed
    var printName = document.createElement("input");
    printName.type = "text"
    printName.id = "printName"
    printName.value = toDoList[temp].name;
    var labelName = document.createElement('label');
    labelName.htmlFor = "printName";
    labelName.appendChild(document.createTextNode('Name: '));
    editor1.appendChild(labelName);
    editor1.appendChild(printName);
    // Same for starting date, Because I didn't get to show the date from the element into the date input, it seems to me that I have created a monster... Or tried 
    // to crush a mosquito with a cannon... But it works
    var printDate = document.createElement("input");
    printDate.type = "datetime-local"
    printDate.id = "printDate"
    var sDate = toDoList[temp].start_date;
    var tempMonth = sDate.getMonth();
    var tempHours = sDate.getHours();
    var tempMinutes = sDate.getMinutes();
    tempMonth = tempMonth + 1;
    var monthDate = "";
    if (tempMonth < 10) {
        monthDate = "0" + tempMonth;
    }
    else { monthDate = tempMonth; }
    if (tempHours < 10) {
        tempHours = "0" + tempHours;
    }
    if (tempMinutes < 10) {
        tempMinutes = "0" + tempMinutes;
    }
    var tempDate = sDate.getFullYear() + "-" + monthDate + "-" + sDate.getDate() + "T" + tempHours + ":" + tempMinutes;
    // console.log(tempDate);
    printDate.value = tempDate;
    var labelDate = document.createElement('label');
    labelDate.htmlFor = "printDate";
    labelDate.appendChild(document.createTextNode('Starting Date: '));
    editor1.appendChild(labelDate);
    editor1.appendChild(printDate);
    var printDateTemp = sDate;
    printDate.addEventListener("change", function (event) {
        printDateTemp = new Date(event.target.value);
        console.log(printDateTemp);
    });
    // Same for ending date
    var printEndDate = document.createElement("input");
    printEndDate.type = "datetime-local"
    printEndDate.id = "printEndDate"
    var eDate = toDoList[temp].end_date;
    var temp1Month = eDate.getMonth();
    temp1Month = temp1Month + 1;
    var temp1Hours = eDate.getHours();
    var temp1Minutes = eDate.getMinutes();
    var month1Date = "";
    if (temp1Month < 10) {
        month1Date = "0" + temp1Month;
    }
    else { month1Date = temp1Month; }
    if (temp1Hours < 10) {
        temp1Hours = "0" + temp1Hours;
    }
    if (temp1Minutes < 10) {
        temp1Minutes = "0" + temp1Minutes;
    }
    var tempEndDate = eDate.getFullYear() + "-" + month1Date + "-" + eDate.getDate() + "T" + temp1Hours + ":" + temp1Minutes;
    printEndDate.value = tempEndDate;
    var labelEndDate = document.createElement('label');
    labelEndDate.htmlFor = "printEndDate";
    labelEndDate.appendChild(document.createTextNode('Ending Date: '));
    editor1.appendChild(labelEndDate);
    editor1.appendChild(printEndDate);
    var printEndTemp = eDate;
    printEndDate.addEventListener("change", function (event) {
        printEndTemp = new Date(event.target.value);
        console.log(printEndTemp);
    });
    // Description editor
    var printDescription = document.createElement("input");
    printDescription.type = "text"
    printDescription.id = "printDescription"
    printDescription.value = toDoList[temp].description;
    var labelDescription = document.createElement('label');
    labelDescription.htmlFor = "printName";
    labelDescription.appendChild(document.createTextNode('Description: '));
    editor1.appendChild(labelDescription);
    editor1.appendChild(printDescription);
    // Status editor
    var printStatus = document.createElement("select");
    // printStatus.type = "select";
    printStatus.id = "printStatus";
    var optionDone = document.createElement("option");
    optionDone.value = "Done";
    optionDone.text = "Done";
    printStatus.appendChild(optionDone);
    var optionActive = document.createElement("option");
    optionActive.value = "Active";
    optionActive.text = "Active";
    printStatus.appendChild(optionActive);
    printStatus.value = toDoList[temp].status;
    var labelStatus = document.createElement('label');
    labelStatus.htmlFor = "printStatus";
    labelStatus.appendChild(document.createTextNode('Status: '));
    editor1.appendChild(labelStatus);
    editor1.appendChild(printStatus);
    // Now we are creating the edit button
    var buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "Edit";
    editor1.appendChild(buttonEdit);
    buttonEdit.addEventListener("click", function () {
        if (confirm('Confirm Edit ?')) {
            toDoList[temp].name = printName.value;
            toDoList[temp].start_date = printDateTemp;
            toDoList[temp].end_date = printEndTemp;
            toDoList[temp].description = printDescription.value;
            toDoList[temp].status = printStatus.value;
            if (toDoList[temp].end_date - now <= 0) {
                document.getElementById("daysLeft" + temp).innerHTML = 0 + " Days";
                orange = true;
            }
            else { document.getElementById("daysLeft" + temp).innerHTML = Math.floor((toDoList[temp].end_date - now) / (1000 * 60 * 60 * 24)) + " Days" }

            document.getElementById("name" + temp).innerHTML = printName.value;
            document.getElementById("startDate" + temp).innerHTML = printDateTemp.toString().slice(0, 15);
            document.getElementById(desc).innerHTML = printDescription.value;
            document.getElementById("statusCell" + temp).innerHTML = printStatus.value;
            if (printStatus.value == "Done") { document.getElementById("row" + temp).style.backgroundColor = "#B03532"; }
            else if (orange){ document.getElementById("row" + temp).style.backgroundColor = "orange";}
               else { document.getElementById("row" + temp).style.backgroundColor = "#34A8A5"; }
            editor.removeChild(editor1);
        }
        else { console.log("No Change was made"); }
    });
    var buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Delete";
    editor1.appendChild(buttonDelete);
    buttonDelete.addEventListener("click", function () {
        if (confirm('Confirm Delete ?')) {
            toDoTable.deleteRow(rowIndex);
            toDoTable.deleteRow(rowIndex);
            toDoList.splice(temp,1);
        }

    })
});

