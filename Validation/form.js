var xmlDoc
var xmlFile = 'form.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            displayTable();
            myFunction();
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

function myFunction(xml) {
   
    document.getElementById("modulename").innerHTML =
    xmlDoc.getElementsByTagName("modulename")[0].childNodes[0].nodeValue;
    document.getElementById("caption").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

    document.getElementById("abt").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[1].childNodes[1].childNodes[0].nodeValue;

 document.getElementById("abb").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[3].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("abt2").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[3].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("abt3").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[5].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("abt4").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[5].childNodes[3].childNodes[0].nodeValue;




var btn = document.querySelector('button');

btn.addEventListener('click', function(){
  var hint = document.getElementById('dis');
  if(hint.style.display == 'none'){
    hint.style.display = 'block';
  }
  else{
    hint.style.display = 'none';
  }

});
   
    }

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Name</th><th>University</th><th>Phone</th><th>Email</th></tr>"

    var x = xmlDoc.getElementsByTagName("COMPUTER-SCIENCE")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("STU-NAME")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("STU-UNIVERSITY")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("STU-PHONE")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("STU-EMAIL")[0].childNodes[0].nodeValue + "</td><td>"
    }
    document.getElementById("table").innerHTML = table
}
