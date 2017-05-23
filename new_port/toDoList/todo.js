"use strict";
// using $ by itself causing a console error/clash with jquery
var  $id = function(id) { 
    return document.getElementById(id); 
};

var tasks = [];

// checks and displays tasks already in local storage
var displayTaskList = function() {
    var list = "";
    // if there are no tasks in tasks array, check to see if there are any in storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { 
            tasks = storage.split("|"); 
        }
    }
    
    // if there are tasks in array, do alpha sort and create tasks string
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n"); // put each task on new line
    }
    // display tasks string and set focus on task text box
     $id("taskList").value = list;
     $id("task").focus();
}

// Click event for Add button - check input and add to tasks array
var addToTaskList = function() {   
    var task =  $id("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {  
        // add task to array and local storage
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0; // clear array 
    localStorage.tasks = ""; // clear local storage
     $id("taskList").value = ""; // clear text box
     $id("task").focus();
}

// run everything when page loads
window.onload = function() {
     $id("addTask").onclick = addToTaskList;
     $id("clearTasks").onclick = clearTaskList;    
     displayTaskList();
}
