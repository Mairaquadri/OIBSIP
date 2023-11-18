var input = document.getElementById("input")
var addbtn = document.getElementById("add")
var list = document.getElementById("ul")
var completelist = document.getElementById("completed_ul")



function myFunction() {
    document.getElementById("input").value = "";
}


function task() {

    if (input.value === "") {

        alert("please type something")
    } else {
        // Create a new list item when clicking on the "Add" button
        var li = document.createElement("li")
        li.classList.add("before")
        list.appendChild(li)

        li.innerHTML = input.value

        //empty the input field 
        document.getElementById("input").value = "";

        // Create a complete button
        var complete = document.createElement("button")
        complete.innerHTML = ("completed")
        li.appendChild(complete)
        complete.classList.add("cbtn")
        console.log(li)


        // Create a cross button
        var cross = document.createElement("span")
        cross.innerHTML = ("\u00D7")
        li.appendChild(cross)

        // Create a in process span
        var process = document.createElement("span")
        process.innerHTML = ("in process")
        li.appendChild(process)
        process.classList.add("processed_none")
            // process.style.color = "red"
        process.style.fontSize = "20px"
        process.style.width = "91px"
        process.style.right = "275px"




        // Create a function to cahnge uncheched to checked  and cross the task
        li.addEventListener("click", function() {
            li.classList.toggle("line");
            li.classList.toggle("checked");
            process.classList.toggle("processed_none")


        })


        // Create a function to  delete the task
        cross.addEventListener("click", function() {
            li.remove()


        })

        //create a function to shift completed task into complete task div
        complete.addEventListener("click", function() {
            var completedli = document.createElement("li")
            completelist.appendChild(li)

            // completelist.appendChild(completedli)
            // 
            completedli.innerHTML = li.innerHTML

            cross.remove()
            complete.remove()
            process.innerHTML = ""
            process.style.width = "400px"
            process.style.right = "0px"
            process.fontSize = "5px"
            li.classList.add("noline");
            li.classList.add("nomargin");
            li.classList.remove("before");
            li.classList.add("removedchecked")
        })

    }



}