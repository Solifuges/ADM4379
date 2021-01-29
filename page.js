var courseListTelfer = [
    {
        code : "ADM4379",
        grade : "grade = 5",
        difficulty : "difficulty = 7",
        comment : "blah blah"
    },
    {
        code : "SOC3116",
        grade : "grade = 3",
        difficulty : "difficulty = 8",
        comment : "comment comment comment"
    }
];

var courseListLaw = [
    {
        code : "DCC2120",
        grade : "grade = 5",
        difficulty : "difficulty = 7",
        comment : "LAW COMMENT"
    },
    {
        code : "DCC3103",
        grade : "grade = 3",
        difficulty : "difficulty = 8",
        comment : "COMMENT OF LAW"
    }
];

var courseListScience = [
    {
        code : "BIO1300",
        grade : "grade = 5",
        difficulty : "difficulty = 7",
        comment : "SCIENCE COMMENT"
    },
    {
        code : "CHM4118",
        grade : "grade = 3",
        difficulty : "difficulty = 8",
        comment : "COMMENT OF SCIENCE"
    }
];

var courseListEngineering = [
    {
        code : "CVG2140",
        grade : "grade = 5",
        difficulty : "difficulty = 7",
        comment : "ENG COMMENT"
    },
    {
        code : "CVG3116",
        grade : "grade = 3",
        difficulty : "difficulty = 8",
        comment : "COMMENT OF ENG"
    }
];

//// add course as cards ////
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
        var g1 = row.insertCell(1);
        g1.innerHTML = department[i].grade;

        var d1 = row.insertCell(2);
        d1.innerHTML = department[i].difficulty;

        var co1 = row.insertCell(3);
        co1.innerHTML = department[i].comment;
    }
}
