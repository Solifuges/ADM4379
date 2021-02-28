var courseListTelfer = [
    {
        code : "ADM4379",
        title : "Management & Implementation of Web Technologies in Organizations",
        grade : "A+",
        difficulty : "7"        
    },
    {
        code : "ADM3760",
        title : "Business Law FR",
        grade : "B+",
        difficulty : "8"        
    },
    {
        code : "ADM3716",
        title : "Veille Concurentielle FR",
        grade : "A",
        difficulty : "3"        
    }
];

var courseListLaw = [
    {
        code : "DCC2120",
        title : "LAW COMMENT",
        grade : "grade = 5",
        difficulty : "difficulty = 7"
    },
    {
        code : "DCC3103",
        title : "COMMENT OF LAW",
        grade : "grade = 3",
        difficulty : "difficulty = 8"
    }
];

var courseListScience = [
    {
        code : "BIO1300",
        title : "SCIENCE COMMENT",
        grade : "grade = 5",
        difficulty : "difficulty = 7"
    },
    {
        code : "CHM4118",
        title : "COMMENT OF SCIENCE",
        grade : "grade = 3",
        difficulty : "difficulty = 8"
    }
];

var courseListEngineering = [
    {
        code : "CVG2140",
        title : "ENG COMMENT",
        grade : "grade = 5",
        difficulty : "difficulty = 7"
    },
    {
        code : "CVG3116",
        title : "COMMENT OF ENG",
        grade : "grade = 3",
        difficulty : "difficulty = 8"
    }
];


//// add courses as table ////
function addTable() {

    var table = document.getElementById("container"); //find table with id = container
    table.innerHTML = "";

    var select = document.getElementById("department");
    var value = select.value;
    
    if(value == "Telfer") {
        department = courseListTelfer;
    } else if(value == "Engineering") {
        department = courseListEngineering;
    } else if(value == "Law") {
        department = courseListLaw;
    } else if(value == "Science") {
        department = courseListScience;
    } 



    console.log(department[0].code)

    for (var i = 0; i < department.length; i++){ //loop through objects in array
        var table = document.getElementById("container"); //find table with id = container

        var row = table.insertRow(0); //create row in table

        var c1 = row.insertCell(0); //insert cell in row for course code
        // c1.innerHTML = courseList[i].code; //populate cell from array

        var link = document.createElement("a");
        link.setAttribute("href", department[i].code+".html");
        var linkText = document.createTextNode(department[i].code);
        link.appendChild(linkText);
        c1.appendChild(link);
        


        // populate table w/ course info //
        var co1 = row.insertCell(1);
        co1.innerHTML = department[i].title;

        var g1 = row.insertCell(2);
        g1.innerHTML = department[i].grade;

        var d1 = row.insertCell(3);
        d1.innerHTML = department[i].difficulty;
    }
}


//// add review as cards ////
// function addCourse() {
//     for (var i = 0; i < courseList.length; i++){
//         var hello = document.createElement("div"); //create div to put inside container
//         hello.classList.add("card"); //give div class
//         hello.id = "course"+i; //give div id

//         document.getElementById("container").appendChild(hello);
//         console.log("hello world");

//         var c1 = document.createElement("h2");  
//         hello.innerHTML = courseList[i].code;
//         c1.id = "c1";
//         document.getElementById("course"+i).appendChild(c1);

//         var g1 = document.createElement("p"); 
//         g1.innerHTML = courseList[i].grade;
//         g1.id = "g1";
//         document.getElementById("course"+i).appendChild(g1);

//         var d1 = document.createElement("p"); 
//         d1.innerHTML = courseList[i].difficulty;
//         d1.id = "d1";
//         document.getElementById("course"+i).appendChild(d1);

//         var co1 = document.createElement("p"); 
//         co1.innerHTML = courseList[i].comment;
//         co1.id = "co1";
//         document.getElementById("course"+i).appendChild(co1);

//     }
// }