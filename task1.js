var page1 = document.getElementById("right")
var page2 = document.getElementById("screen2")
var a = document.getElementById("book")

  page2.style.display='none'
function book(){
    
     if(page2.style.display !== 'block'){
        page1.style.display='none'
        page2.style.display='block'
        a.style.backgroundColor='blue'
     }else{
        page1.style.display='block'
        page2.style.display='none'
        a.style.backgroundColor='white'
     }

}