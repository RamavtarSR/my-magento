 
(function  () {
    require(["jquery","owlcarousel"],function($) {
        $(document).ready(function() {
            
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:20,
                    nav:true,
                    dots:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        480:{
                            items:2
                        },
                        768:{
                            items:3
                        },
                        1024:{
                            items:5
                        }
                    }
                })

        });
    });
})();