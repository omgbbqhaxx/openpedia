var x = document.getElementsByTagName("a");
var i;
for (i = 0; i < x.length; i++) { 
    var myurl = x[i].href
    //console.log(myurl);
    var orj = myurl.search("https://wikipedia.org");
    var turk = myurl.search("https://tr.wikipedia.org");
    var esp = myurl.search("https://es.wikipedia.org");
    var fr = myurl.search("https://fr.wikipedia.org");
    var eng = myurl.search("https://en.wikipedia.org");
    var az = myurl.search("https://az.wikipedia.org");

    
    if(orj != -1 || turk != -1 || esp != -1|| fr != -1|| eng != -1|| az != -1) {
        console.log(myurl);
        newurl = myurl.split("wikipedia");
        var fullurl = newurl[0]+"0wikipedia"+newurl[1]
        console.log(fullurl);
        x[i].setAttribute('href', fullurl)

    }
    //console.log(n);


}

