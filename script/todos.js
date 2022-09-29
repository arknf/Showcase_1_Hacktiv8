// object init
let todos = [
    {
        name: "excavator",
        completed: true
    },
    {
        name: "Bulldozer",
        completed: false
    },
    {
        name: "container",
        completed: true
    }
];

// ternary functions
!window.localStorage.getItem("object") ? window.localStorage.setItem("object", JSON.stringify(todos)) : todos = window.localStorage.getItem("object"); todos = JSON.parse(todos);

todos_awal();

// implement html tag using foreachx
function todos_awal() {
    let todos_length = todos.length;

    // check if array length more than 0
    if(todos_length > 0) {

        // foreach loop
        todos.forEach((item,i) => {

            // checkbox clicked checking
            if(todos[i].completed === true){
                let tag = '<li class="d-flex" id="list'+i+'">' + 
                '<input type="checkbox" class="checkbox" id="checkbox'+i+'" checked onclick="todo_check('+i+')"><p style="margin-left: 30px; width: 300px;" class="checked" id="span'+i+'">' + item.name + '</p><button class="delete-button" onclick="remove_todo('+i+')">X</button>' +
            '</li>';

                // append tag to html
                document.getElementById("todos-list").innerHTML += tag;
            } else {
                tag = '<li class="d-flex" id="list'+i+'">' + 
                '<input type="checkbox" class="checkbox" id="checkbox'+i+'" null onclick="todo_check('+i+')"><p style="margin-left: 30px; width: 300px;" id="span'+i+'">' + item.name + '</p><button class="delete-button" onclick="remove_todo('+i+')">X</button>' +
            '</li>';

                // append tag to html
                document.getElementById("todos-list").innerHTML += tag;
            }      
        });
    }
};

// add to do
function add_todolist() {
    let todos_baru = document.getElementById("add_todo").value;

    // check todos_baru value
    if(todos_baru != "") {

        // push todos_baru to existing array
        let obj_baru = {name: todos_baru, completed: false};
        todos.push(obj_baru);

        // add to local storage
        window.localStorage.setItem("object", JSON.stringify(todos));

        // add tag to html
        let ids = "list"+todos.indexOf(obj_baru);
        let tag = '<li class="d-flex" id="'+ids+'">' + 
                    '<input type="checkbox" class="checkbox" id="checkbox'+todos.indexOf(obj_baru)+'" null onclick="todo_check('+todos.indexOf(obj_baru)+')"><p style="margin-left: 30px; width: 300px;" id="span'+todos.indexOf(obj_baru)+'">' + todos_baru + '</p><button class="delete-button" onclick="remove_todo('+todos.indexOf(obj_baru)+')">X</button>' +
                '</li>';
        document.getElementById("todos-list").innerHTML += tag;

    } else {
        alert("please fill the form!")
    }
}

// checkbox click function
function todo_check(todo) {
    // important variables declaration
    let id_checkbox = "checkbox"+todo;
    let id_todolist = "span"+todo;
    let checkbox = document.getElementById(id_checkbox);

    // check clicked true or false
    if (checkbox.checked === true) {
        // add class "checked" 
        let check_change = document.getElementById(id_todolist);
        check_change.classList.add("checked");

        // change completed when checked
        todos[todo].completed = true;
        console.log(todos[todo].completed)

        // add to local storage
        window.localStorage.clear();
        window.localStorage.setItem("object", JSON.stringify(todos));

    } else {
        // remove class checked
        let check_change = document.getElementById(id_todolist);
        check_change.classList.remove("checked");
        
        // change completed when unchecked
        todos[todo].completed = false;
        console.log(todos[todo].completed)

        // add to local storage
        window.localStorage.clear();
        window.localStorage.setItem("object", JSON.stringify(todos));
    }
}

// remove to do
function remove_todo(todo) {
    // remove todo from array
    todos.splice(todo, 1);
    let id_remove = "list"+todo;

    // remove html tag
    let element = document.getElementById(id_remove)
    element.remove();

    // refresh data so the index will be refreshed
    document.getElementById("todos-list").innerHTML = "";
    todos_awal();

    // local storage
    window.localStorage.clear();
    window.localStorage.setItem("object", JSON.stringify(todos));
}

// filter function //

// filtername
function filter_name(names) {
    let fil_nameok = document.getElementById("filtername").value;
    let temp_var = names.name

    if (temp_var.toLowerCase().includes(fil_nameok.toLowerCase())) {
        return temp_var;
    }
}

// todos filter
function filter_todo() {
    let fil_name = document.getElementById("filtername").value;
    
    // check if fil_name is blank
    if (fil_name != "") {
        // todos filter and referring to filter_name function
        result = todos.filter(filter_name);

        document.getElementById("todos-list").innerHTML = "";
        result_akhir(result);
        
    } else {
        document.getElementById("todos-list").innerHTML = "";
        todos_awal();
    }
};

// result akhir for filter function
function result_akhir(result) {
    let todos_length = result.length;

    // check if array length more than 0
    if(todos_length > 0) {

        // foreach loop
        result.forEach((item,i) => {

            // checkbox clicked checking
            if(result[i].completed === true){
                let tag = '<li class="d-flex" id="list'+i+'">' + 
                '<input type="checkbox" class="checkbox" id="checkbox'+i+'" checked onclick="todo_check('+i+')" disabled><p style="margin-left: 30px; width: 300px;" class="checked" id="span'+i+'">' + item.name + '</p><button class="delete-button" onclick="remove_todo('+i+')" disabled>X</button>' +
            '</li>';

                // append tag to html
                document.getElementById("todos-list").innerHTML += tag;

            } else {
                tag = '<li class="d-flex" id="list'+i+'">' + 
                '<input type="checkbox" class="checkbox" id="checkbox'+i+'" null onclick="todo_check('+i+')" disabled><p style="margin-left: 30px; width: 300px;" id="span'+i+'" >' + item.name + '</p><button class="delete-button" onclick="remove_todo('+i+')" disabled>X</button>' +
            '</li>';;

                // append tag to html
                document.getElementById("todos-list").innerHTML += tag;
            }      
        });
    }
};