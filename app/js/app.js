$(function(){    
    /* slider */
    $("#slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        initialSlide: 2
    });

    /* fixed header */
    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let $this = $(this);
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset, introH);

    $(window).on("scroll", function(event){
        event.preventDefault();
        
        $this = $(this);
        scrollOffset = $this.scrollTop();

        checkScroll(scrollOffset, introH);
    });

    function checkScroll(scrollOffset, introH){

        if (scrollOffset >= introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }

    /* nav */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("showNav");
    });

    /* scroll */
    let scroll = $("[data-scroll]");
    scroll.on("click", function(event){
        event.preventDefault();

        $this = $(this);

        nav.removeClass("showNav");
        scroll.removeClass("active");

        let elementId = $this.data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset -80
        }, 500);

        $this.addClass("active");

    });

    /* modals */
    let modalCall = $("[data-modal]");
    modalCall.on("click", function(event){
        event.preventDefault();

        $this = $(this);

        let modalId = modalCall.data('modal');

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");
    });

    let close = $("[data-close]")
    close.on("click", function(){
        event.preventDefault();

        $this = $(this);

        $this.parents(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
    });

    $(".modal").on("click", function(event){
        event.preventDefault();

        $this = $(this);
        $this.removeClass("show");
        $("body").removeClass("no-scroll");
    });

    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    });

    /* see more */
    let more = $("[data-more]");
    more.on("click", function(event){
        event.preventDefault();

        $this = $(this);
        let text = $this.data('more');
        $(text).addClass("seeAll");

        $this.addClass("hidden");
    });
});
