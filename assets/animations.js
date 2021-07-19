


// gsap.from('header', {duration: 0.6, ease: "power2. out", y:-69});
// gsap.from ('#slide-1-content-left', {duration: 0.6, ease: "power2. out", opacity:0, y:-40, delay: 1})
// gsap.from ('#illustration', {duration: 0.6, ease: "power2. out", opacity:0, delay: 1.7})

let tl = gsap.timeline({delay: 1});
tl.from('header', {duration: 0.6, ease: "power2. out", y:-69});
tl.from('#slide-1-content-left', {duration: 0.6, ease: "power2. out", opacity:0, y:-40});
tl.from('#illustration', {duration: 0.6, ease: "power2. out", opacity:0});

let tlb1 = gsap.timeline({repeat: 200});
tlb1.to('#bubble1', {
    duration: 3,
    y:4,
    ease: "power2. inout", 
} );
tlb1.to('#bubble1', {
    duration:3,
    y:0,
    ease: "power2. inout", 
} )

let tlbi1 = gsap.timeline({repeat: 200});
tlbi1.to('#PortfolioLI', {
    duration: 3,
    y:15,
    ease: "power2. inout", 
} );
tlbi1.to('#PortfolioLI', {
    duration:3,
    y:0,
    ease: "power2. inout", 
} )

let tlb2 = gsap.timeline({repeat: 200});
tlb2.to('#bubble2', {
    duration: 2.3,
    y:-5,
    ease: "power2. inout", 
} );
tlb2.to('#bubble2', {
    duration:2.3,
    y:0,
    ease: "power2. inout", 
} )

let tlb2i = gsap.timeline({repeat: 200});
tlb2i.to('#AboutMeLI', {
    duration: 2.3,
    y:-16,
    ease: "power2. inout", 
} );
tlb2i.to('#AboutMeLI', {
    duration:2.3,
    y:0,
    ease: "power2. inout", 
} )

let tlb3 = gsap.timeline({repeat: 200});
tlb3.to('#bubble3', {
    duration: 2.5,
    y:4,
    ease: "power2. inout", 
} );
tlb3.to('#bubble3', {
    duration:2.5,
    y:0,
    ease: "power2. inout", 
} )

let tlb3i = gsap.timeline({repeat: 200});
tlb3i.to('#ContactLI', {
    duration: 2.5,
    y:15,
    ease: "power2. inout", 
} );
tlb3i.to('#ContactLI', {
    duration:2.5,
    y:0,
    ease: "power2. inout", 
} )

let tlb4 = gsap.timeline({repeat: 200});
tlb4.to('#bubble4', {
    duration: 2,
    y:3,
    ease: "power2. inout", 
} );
tlb4.to('#bubble4', {
    duration:2,
    y:0,
    ease: "power2. inout", 
} )

let tlb4i = gsap.timeline({repeat: 200});
tlb4i.to('#StackLI', {
    duration: 2,
    y:15,
    ease: "power2. inout", 
} );
tlb4i.to('#StackLI', {
    duration:2,
    y:0,
    ease: "power2. inout", 
} )

// Non Central Bubbles

let tlb5 = gsap.timeline({repeat: 200});
tlb5.to('#bubble5', {
    duration:0,
    y:250,
    ease: "none", 
} )
tlb5.to('#bubble5', {
    duration: 11,
    y:-100,
    ease: "none", 
} );

let tlb6 = gsap.timeline({repeat: 200});
tlb6.to('#bubble6', {
    duration:0,
    y:250,
    ease: "none", 
} )
tlb6.to('#bubble6', {
    duration: 12,
    y:-100,
    ease: "none", 
} );

let tlb7 = gsap.timeline({repeat: 200, delay: 1});
tlb7.to('#bubble7', {
    duration:0,
    y:110,
    ease: "none", 
} )
tlb7.to('#bubble7', {
    duration: 14,
    y:-220,
    ease: "none", 
} );

let tlb8 = gsap.timeline({repeat: 200, delay: 3});
tlb8.to('#bubble8', {
    duration:0,
    y:200,
    ease: "none", 
} )
tlb8.to('#bubble8', {
    duration: 13,
    y:-130,
    ease: "none", 
} );

let tlb9 = gsap.timeline({repeat: 200, delay: 2});
tlb9.to('#bubble9', {
    duration:0,
    y:30,
    ease: "none", 
} )
tlb9.to('#bubble9', {
    duration: 10,
    y:-300,
    ease: "none", 
} );

let tlb10 = gsap.timeline({repeat: 200, delay: 5});
tlb10.to('#bubble10', {
    duration:0,
    y:50,
    ease: "none", 
} )
tlb10.to('#bubble10', {
    duration: 9,
    y:-300,
    ease: "none", 
} );

let tlb11 = gsap.timeline({repeat: 200, delay: 3});
tlb11.to('#bubble11', {
    duration:0,
    y:50,
    ease: "none", 
} )
tlb11.to('#bubble11', {
    duration: 10,
    y:-300,
    ease: "none", 
} );

let tlb12 = gsap.timeline({repeat: 200, delay: 4});
tlb12.to('#bubble12', {
    duration:0,
    y:300,
    ease: "none", 
} )
tlb12.to('#bubble12', {
    duration: 14,
    y:-50,
    ease: "none", 
} );



let tlb14 = gsap.timeline({repeat: 200, delay: 6});
tlb14.to('#bubble14', {
    duration:0,
    y:180,
    ease: "none", 
} )
tlb14.to('#bubble14', {
    duration: 17,
    y:-180,
    ease: "none", 
} );

let tlb15 = gsap.timeline({repeat: 200, delay: 0});
tlb15.to('#bubble15', {
    duration:0,
    y:300,
    x: -40,
    ease: "none", 
} )
tlb15.to('#bubble15', {
    duration: 9,
    y:-50,
    ease: "none", 
} );

