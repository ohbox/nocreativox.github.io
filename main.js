var mainInitiate = function(){
    

//project navbar shrink
var lastScrollTop;

        navbar = document.querySelector('.project-navbar-web');

        window.addEventListener('scroll', function() {
            //on every scroll this funtion will be called

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            //This line will get the location on scroll

            if (scrollTop > lastScrollTop) { //if it will be greater than the previous
                navbar.style.top = '-80px';
                

            } else {
                navbar.style.top = '0px';
            }

            lastScrollTop = scrollTop;
            
        });
    
    


//AOS effect

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


//skillset bar

        $('.skill-per').each(function() {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({
                animatedValue: 0
            }).animate({
                animatedValue: per
            }, {
                duration: 1000,
                step: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });

//hamburger menu

        const menuBtn = document.querySelector('.menu-btn');
	    const navMenu = document.querySelector('.nav-menu');
	
	    menuBtn.addEventListener("click", () => {
			menuBtn.classList.toggle("active");
			navMenu.classList.toggle("active");
		})

	    $('.nav-menu a').on("click", function () {
	    	menuBtn.classList.remove("active");
	    	navMenu.classList.remove("active");

	    });

	
	    


//???
        $(document).ready(function() {
			
			

            $("a").on('click', function(event) {


                if (this.hash !== "") {

                    event.preventDefault();


                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {

                        window.location.hash = hash;
                    });
                }
            });
        });
    
    //???
        $(document).ready(function() {

            $("a").on('click', function(event) {


                if (this.hash !== "") {

                    event.preventDefault();


                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {

                        window.location.hash = hash;
                    });
                }
            });
        });
    
    
    //mouse cursor anime
    var cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
         cursor.setAttribute("style", "top: "+(e.pageY -2)+"px; left: "+(e.pageX - 2)+"px")

    });
    
        document.addEventListener('mouseout', () => {
        cursor.style.display = "none";
    });
    
   $(".trigger").mouseover(function () {
    $(".cursor").addClass("cursorHover");
}).mouseleave(function () {
    $(".cursor").removeClass("cursorHover");
});

    
    
    
    
 //page transition image change 
         var image_array = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png']
  
  $("a").click(function(){
      random_index = Math.floor(Math.random() * image_array.length);
      
      selected_image = image_array[random_index];
      
      document.getElementById('randomimg').src = selected_image;
      
      console.log("change");
      
  });
    


};


         $(document).ready(function() {
             initiate();
            
        });
