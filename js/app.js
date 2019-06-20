$(document).ready(function() {
    let body = $(document)
    let nav = $("nav")
    let navburger = $(".navbar-burger")
    let navLinks = $(".navbar a, footer a")
    let navbarLinks = $(".navbar-menu a")

    if (body.scrollTop() > 10) {
        nav.addClass("nav-scrolled");
    } else {
        nav.removeClass("nav-scrolled");
    }
    body.on("scroll", function() {
        if (body.scrollTop() > 10) {
            nav.addClass("nav-scrolled");
        } else {
            nav.removeClass("nav-scrolled");
        }
    })

    $('.slider').slick({
        centerMode: true,
        centerPadding: '40px',
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    centerPadding: '60px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '20px',
                }
            }
        ]
    });

    navburger.on("click", function() {
        $('.navbar-menu').toggleClass("is-active")
    })

    navbarLinks.on('click', function() {
        $('.navbar-menu').removeClass("is-active")
    })

    navLinks.on("click", function(e) {
        e.preventDefault()
        let hash = this.hash
        $("body,html").animate({ scrollTop: $(hash).offset().top }, 900, () => window.location.hash = hash)
    })

})