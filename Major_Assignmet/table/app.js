function callBack(){
    var naam = document.getElementById("names").value;
    var classIs = document.getElementById("classI").value;
    document.getElementById("names").value = "" ;
    document.getElementById("classI").value = "" ;
    console.log(naam, classIs)
    var table = document.getElementById("table")
    var row = document.createElement("tr")
    var colName = document.createElement("td")
    colName.appendChild(document.createTextNode(naam))
    row.appendChild(colName);
    var colClass = document.createElement("td")
    colClass.appendChild(document.createTextNode(classIs))
    row.appendChild(colClass);
    //delete btn
    var colBtn = document.createElement("td");
    var btn = document.createElement("button")
    btn.appendChild(document.createTextNode("Delete"))
    btn.setAttribute("class", "btn-delete")
    btn.setAttribute("onClick", "delFunc(this)")
    colBtn.appendChild(btn)
    row.appendChild(colBtn);
    table.appendChild(row)   
}

function delFunc(e){
    var firstParent = e.parentNode
    firstParent.parentNode.remove()
}