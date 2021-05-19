$(function(){ 
    $("#OK").click(ment);
    
    
    
});


var szovegJSON ='[{"nev":"Bodri","nem":"kan","allapot":"ivartalanitott","gazdaNeve":"Gipsz Jakab"},{"nev":"Morzsa","nem":"szuka","allapot":"kölyök","gazdaNeve":"Rózsi néni"}]';

var szemely = {
    vnev:"Gipsz",
    knev:"Jakab",
    szulDatum:"1996-02-21",
    nem:"Férfi",
    nev: function(){
        return this.vnev + " "+ this.knev;
    },
    kor:function(){
        var ma = new Date();//aktuális dátum
        var szD = new Date(this.szulDatum);
        return ma.getFullYear() - szD.getFullYear();
    }
};

var szemelyek = [
    {
        vnev:"Gipsz",
        knev:"Jakab",
        szulDatum:"1996-02-21",
        nem:"Férfi"
    },
    {
        vnev:"Nagy",
        knev:"Gizi",
        szulDatum:"1969-07-21",
        nem:"Nő"
    }
]

function szemelyKezelese() {
    $("article").append(szemely.nev()+" "+szemely.kor()+" éves"+"<br>"); 
    
    for (var item in szemely) {
        $("article").append(item+": "+szemely[item]+"<br>"); 
    }
    szemely.cslAllapot="nőtlen";
    console.log(szemely);
    var stringSzemely = JSON.stringify(szemely);
    $("article").append("A személyünk szövegesen: " + stringSzemely + "<br>");
    
    
    /*****************************************************/
    
    var szovegSzemelyek = JSON.stringify(szemelyek);
    $("article").append(szovegSzemelyek + "<br>");
    console.log(szovegSzemelyek);
    
    
    $("article").append(szovegJSON + "<br>");
    var szovegbolObjektum = JSON.parse(szovegJSON);
    $("article").append(szovegbolObjektum[0].nev + "<br>");
}

function ment(){
    var ujSzemely = {};
    
    ujSzemely.vnev = $("#vnev").val();
    ujSzemely.knev = $("#knev").val();
    ujSzemely.szulDatum = $("#szul").val();
    if($("input:radio[name=nem]:checked").val() === "f"){
        ujSzemely.nem = "Férfi";
    }else{
        ujSzemely.nem = "Nő";
    } 
    console.log(ujSzemely);
    szemelyek.push(ujSzemely);
    console.log(szemelyek);
}

function kiir(){
    
}
