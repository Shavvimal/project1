


// gsap.from('header', {duration: 0.6, ease: "power2. out", y:-69});
// gsap.from ('#slide-1-content-left', {duration: 0.6, ease: "power2. out", opacity:0, y:-40, delay: 1})
// gsap.from ('#illustration', {duration: 0.6, ease: "power2. out", opacity:0, delay: 1.7})

let tl = gsap.timeline({delay: 1});
tl.from('header', {duration: 0.6, ease: "power2. out", y:-69});
tl.from('#slide-1-content-left', {duration: 0.6, ease: "power2. out", opacity:0, y:-40});
// tl.from('#illustration', {duration: 0.6, ease: "power2. out", opacity:0});

let tlb1 = gsap.timeline({repeat: 200});
tlb1.to('#bubble1', {
    duration: 3,
    y:4,
    ease: "power1. inout", 
} );
tlb1.to('#bubble1', {
    duration:3,
    y:0,
    ease: "power1. inout", 
} )


let tlb2 = gsap.timeline({repeat: 200});
tlb2.to('#bubble2', {
    duration: 2.3,
    y:-5,
    ease: "power1. inout", 
} );
tlb2.to('#bubble2', {
    duration:2.3,
    y:0,
    ease: "power1. inout", 
} )

let tlb3 = gsap.timeline({repeat: 200});
tlb3.to('#bubble3', {
    duration: 2.5,
    y:4,
    ease: "power1. inout", 
} );
tlb3.to('#bubble3', {
    duration:2.5,
    y:0,
    ease: "power1. inout", 
} )

let tlb4 = gsap.timeline({repeat: 200});
tlb4.to('#bubble4', {
    duration: 2,
    y:3,
    ease: "power1. inout", 
} );
tlb4.to('#bubble4', {
    duration:2,
    y:0,
    ease: "power1. inout", 
} )

// Non Central Bubbles

let tlb5 = gsap.timeline({repeat: 200});
tlb5.to('#bubble5', {
    duration:0,
    y:250,
    ease: "none", 
} )
tlb5.to('#bubble5', {
    duration: 10,
    y:-100,
    ease: "none", 
} );

