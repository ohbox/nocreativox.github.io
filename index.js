//homepage loader
window.onload = () => {

    $('.homepage-loader').delay(4800).fadeOut('slow', function () {
        $(this).attr('style', 'display: none !important');
        /// Ad this line below
        $('body').css("overflow-y", "auto");
    });
};


var indexInitiate = function () {

    //loading number
    let number = document.querySelector(".number");
    let counter = 15;
    setInterval(() => {
        if (counter == 100) {
            clearInterval();
        } else {
            counter += 5;
            number.innerHTML = counter + "%";
        }
    }, 230);




    //whenever freash window scroll to top  
    history.scrollRestoration = "manual";

    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });




    // scroll progress inficator 
    let scrollPercentage = () => {
        let scrollProgress = document.querySelector(".scroll-progress");
        let scrollValue = document.querySelector(".scroll-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let mathValue = Math.round(pos * 100 / calcHeight);
        console.log(mathValue);

        scrollProgress.style.background = `conic-gradient(#FFAC81 ${mathValue}%, #2E2E2E ${mathValue}%)`;

        scrollProgress.style.webkitTransform = 'rotate(' + mathValue * 2 + 'deg)';
    };

    window.onscroll = scrollPercentage;
    //GoToTop btn

    const toTop = document.querySelector('.topBtn');


    $(document).ready(function () {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 3600) {
                toTop.classList.add("active");
            } else {
                toTop.classList.remove("active");
            }
        });

        $('.topBtn').click(function () {
            $('html ,body').animate({
                scrollTop: 0
            }, 800);
        });
    });

    //skillset bar

    $('.skill-per').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 1000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });

    //aos
    AOS.init();

    //testimonial-slider

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrow: true,
        speed: 300,
        infinite: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        responsive: [

            {
                breakpoint: 568,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '34px',
                    slidesToScroll: 1
                }
                }
            ]
    });



    //detect browser, hide and show hero-img 
    var heroImgWrap = document.querySelector(".hero-img-wrap");
    var picture = document.querySelector(".picture");
    var SafariHeroImg = document.querySelector(".hero-mobile");
    var SafariAboutImg = document.querySelector(".pile-creature-mobile  ");
    var qq = document.querySelector("#qq");

    var i = document.createElement('iframe');
    i.setAttribute("src", "https://my.spline.design/portfoliocopy-345e0be9b85355cc867b40750a04189a/");
    i.setAttribute("frameborder", "0");
    i.setAttribute("height", "100%");
    i.setAttribute("width", "100%");

    var j = document.createElement('iframe');
    j.setAttribute("src", "https://my.spline.design/portfoliocopy-d8c32a5198ee00a3aeef0f1020c4beaf/");
    j.setAttribute("frameborder", "0");
    j.setAttribute("height", "100%");
    j.setAttribute("width", "100%");



    var browserName = (function (agent) {
        switch (true) {
            case agent.indexOf("edge") > -1:
                return "MS Edge";
            case agent.indexOf("edg/") > -1:
                return "Edge ( chromium based)";
            case agent.indexOf("opr") > -1 && !!window.opr:
                return "Opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome:
                return "Chrome";
            case agent.indexOf("trident") > -1:
                return "MS IE";
            case agent.indexOf("firefox") > -1:
                return "Mozilla Firefox";
            case agent.indexOf("safari") > -1:
                return "Safari";
            default:
                return "other";
        }
    })(window.navigator.userAgent.toLowerCase());

    console.log("This is " + browserName + " browser");

    function browserShowAndHide() {
        if (browserName != "Safari") {
            heroImgWrap.appendChild(i);
            picture.appendChild(j);

        } else if (browserName === "Safari") {
            SafariAboutImg.style.display = "block";
            SafariHeroImg.style.display = "block";
            qq.classList.remove("cursor");

        }
    }

    browserShowAndHide();



};




 