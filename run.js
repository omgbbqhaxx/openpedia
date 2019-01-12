var x = document.getElementsByTagName("a");
var i;
for (i = 0; i < x.length; i++) { 
    var myurl = x[i].href
    //console.log(myurl);
    var n = myurl.search("https://wikipedia.org");
    var j = myurl.search("https://tr.wikipedia.org");
    if(n != -1 || j != -1) {
        console.log(myurl);
        newurl = myurl.split("wikipedia");
        var fullurl = newurl[0]+"0wikipedia"+newurl[1]
        console.log(fullurl);
        x[i].setAttribute('href', fullurl)

    }
    //console.log(n);


}

