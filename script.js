total = 1;

// adding or removing students

function addstudent() {
    if (document.getElementById(`student${total}name`).value != "") {
        // use create element so that problems arising like improper management can be handled. and appendchild

        total += 1;
        var node = document.createElement("div");
        node.id = `student${total}`;

        document.getElementById(`details`).appendChild(node)

        node.innerHTML += `<input onchange="addstudent()" type="text" placeholder="Student ${total} Name" id="student${total}name">
            <input type="text" placeholder="Student ${total} Marks" onchange="dpreview()"  id="student${total}marks">`

    }
    if (document.getElementById(`student${total - 1}name`).value == "") {

        document.getElementById(`student${total}`).remove()
        document.getElementById(`student${total - 1}marks`).value 
        total -= 1;
    }
    
    
}

function check(){
    document.getElementById("details-preview").innerHtml ="hello"
}

// preview system
function dpreview() {
    heading = document.getElementById("heading").value
    subheading = document.getElementById("sub-heading").value
    passing = eval(document.getElementById("pmarks").value)
    document.getElementById("details-preview").innerHTML= `<b>${heading}</b> <i>(${subheading})</i><br><ul>`
    for(let i=1; i<total;i++){
        document.getElementById("details-preview").innerHTML += 
        `
        <li> ${document.getElementById(`student${i}name`).value} ${document.getElementById(`student${i}marks`).value}
        ${checkresult(i,passing)}
        `

    }
}
            
function checkresult(i,passing){
    if (eval(document.getElementById(`student${i}marks`).value)<passing){
        return "<i>FAIL</i>";
    }
    else if (eval(document.getElementById(`student${i}marks`).value)>=passing)
    {return "<i><b>PASS</b></i>"}
    else{return ""}
}