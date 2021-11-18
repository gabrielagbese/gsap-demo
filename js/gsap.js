gsap.timeline({scrollTrigger:{
    trigger:".tl",
	start:"top 0%",
	end:"bottom 50%",
	markers:true,
	scrub:1,
    pin:true
}}).to(".br", {y:-400, duration:5});