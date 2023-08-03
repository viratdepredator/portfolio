var crsr=document.querySelector("#cursor")
var blr_crsr=document.querySelector("#cursor_blr")
// document.addEventListener("mousemove",function(dets){
//     console.log(dets)
    
// })
document.addEventListener("mousemove",function(dets){
    // console.log(dets)
    crsr.style.top=dets.y+"px"
    crsr.style.left=dets.x+"px"
    blr_crsr.style.top=dets.y-140+"px"
    blr_crsr.style.left=dets.x-140+"px"
})
gsap.to("#nav",{
    backgroundColor:"rgba(0,0,0,0.6)",
    backdropFilter: "blur(5px)",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        // markers:true,
        scrub:2
    }

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

    })