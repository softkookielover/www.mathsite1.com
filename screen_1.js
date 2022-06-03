var score = 0;

function updatescore(){
    score= score + 1 ;
    document.getElementById("Score1").innerHTML = "score : " + score ;
}

function savescore(){
    localStorage.setItem("SCOREPLAY" , score );                                                                                                                     
}

function nextpage(){
    window.location= "screen2.html";
}