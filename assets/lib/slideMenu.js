$(document).ready(() => {
    $('.menu-btn').click(() => {
        const menu = $('#slide-menu');
        if (menu.attr('class').split(/\s+/).includes('shown-menu')) {
            menu.removeClass('shown-menu');
        }
        else {
            console.log("else")
            menu.addClass('shown-menu');
            gsap.from('.btn', {
                x: 100,
                stagger: .1
            })
        }
    })
})