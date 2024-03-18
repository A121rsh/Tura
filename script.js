var me = document.querySelector(".name-info")
var img = document.querySelector(".name-info img")

var cr = document.querySelector(".cursor")

var main = document.querySelector("#page-1")


main.addEventListener("mousemove", function(e){
    cr.style.top = e.y+"px"
    cr.style.left = e.x+"px"
})
    me.addEventListener("mouseenter",function(){
        img.style.opacity = 1
    })

    
    me.addEventListener("mouseleave",function(){
        img.style.opacity = 0
    })