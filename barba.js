function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    
    tl.to(".loading-screen", {
        duration: 1,
        top:"-100%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 0.8,
        top:"-200%",
        ease: "Expo.easeIn",
        delay: 0.2,
    });
    
    
    tl.set(".loading-screen", { top:"0%" });

   
    
}

function imageTransition() {
    var tl = gsap.timeline();
    
    tl.to(".img-container", {
        duration: 0.2,
        opacity: "100%",
        top: "50%",
        ease: "Expo.easeInOut",
        delay: 0.2,
    });

    tl.to(".img-container", {
        duration: 0.1,
        opacity: "100%",
        top: "50%",
        ease: "Expo.easeIn",
        delay: 1.3,
    });

    tl.set(".img-container", { opacity: "0%" });
    
   
    
}


function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".barba-animate", { duration: 1, y: 40, opacity: 0, stagger: 0.4, delay: 0.2 });
}


    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    imageTransition();
                    await delay(1000);
                    done();
                    
                    
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });


barba.hooks.beforeEnter(() => {
    killEvents();
});

barba.hooks.enter(() => {
    $(window).scrollTop(0);
    console.log("ya! scroll to top!"); 

});

barba.hooks.afterEnter(() => {
 
setTimeout(() => {
            mainInitiate();
        }, 1200);    
console.log("hello! young man");     

});
