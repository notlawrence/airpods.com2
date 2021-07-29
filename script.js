function start(){
    document.getElementById("question").style.display="none";
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="none";
    document.getElementById("button3").style.display="none";
    document.getElementById("image").style.display="none";
    document.getElementById("name").style.display="none";
}

document.addEventListener("load",alert("loading"));

console.log("ur bad")
var question=[


[
    ["How do you describe yourself be honest"],
    ["Smart","Dumb","Pessimistic"]
    
],
[
    ["Which of these jobs appeal to you the most"],
    ["High paying job","Teacher","baby sitter $1 per hour "]
],
[
    ["Which of these color appeal to you the most"],
    ["Gold","Brown","Red"]

],
[
    ["Which of these are more important to you"],
    ["Money","Family","Knowledge"]

],
[
    ["Which of these will you do in your free time"],
    ["Gaming","Netflix","Kill  half of the ant's colony"]
]

]
var questionNumber=0;
console.log(question[questionNumber][0])
var Captain =0;
var Ironman =0;
var tanos=0;

function addPoint(selected){
    if(selected==1){
        Captain+=1;

    }
    else if(selected==2){
        Ironman+=1
    }
    else if(selected==3){
        tanos+=1
    }
    setQuestion()
}


function setQuestion(){
    if (questionNumber==5){
        document.getElementById("question").style.display="none";
        document.getElementById("button1").style.display="none";
        document.getElementById("button2").style.display="none";
        document.getElementById("button3").style.display="none";
        document.getElementById("image").style.display="block";
        document.getElementById("name").style.display="block";
        var highest =Math.max(tanos,Ironman,Captain);
        if (highest==Captain){
            document.getElementById("name").innerHTML ="Captain a"
            document.getElementById("image").src="bald.png";
        }
        else if(highest==Ironman){
         document.getElementById("name").innerHTML ="Ironic man"
        document.getElementById("image").src="ironicman.png";
    }
        else{
            document.getElementById("name").innerHTML ="Thanos"
            document.getElementById("image").src="sdf.png";
        }
 
    }
    document.getElementById("question").innerHTML =question[questionNumber][0]
    document.getElementById("button1").innerHTML =question[questionNumber][1][0]
    document.getElementById("button2").innerHTML =question[questionNumber][1][1]
    document.getElementById("button3").innerHTML =question[questionNumber][1][2]
    
    document.getElementById("question").style.display="block";
    document.getElementById("button1").style.display="block";
    document.getElementById("button2").style.display="block";
    document.getElementById("button3").style.display="block";
    document.getElementById("description").style.display="none";
    document.getElementById("start").style.display="none";
    questionNumber=questionNumber+1;
}
