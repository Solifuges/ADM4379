var classes = [
    {
        code : "ADM4379",
        grade : "5",
        difficulty : "7",
        comment : "blah blah"
    },
    {
        code : "aweflwaefwa",
        grade : "sdfsadf",
        difficulty : "6846546",
        comment : "awefjiowae;jfaew"
    }
]

function addClass() {
    for (var i = 0; i < classes.length; i++){
        var hello = document.createElement("div");
        hello.classList.add("card");
        hello.innerHTML = classes[i].code;
        document.getElementById("card").appendChild(hello);
        console.log("hello world");
    }
}
