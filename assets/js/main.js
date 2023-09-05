$(document).ready(function () {
    console.log("document ready!")
    //particle js
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function () {
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 500
                        }
                    },
                    "color": {
                        "value": "#fff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
        );

    });
    //particle js end

    //smooth scroll effect on anchors
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //smooth scroll end
    //tilt effect on hover
    /* Store the element in el */
    let el = document.getElementById('tilt')

    /* Get the height and width of the element */
    const height = el.clientHeight
    const width = el.clientWidth

    /*
      * Add a listener for mousemove event
      * Which will trigger function 'handleMove'
      * On mousemove
      */
    el.addEventListener('mousemove', handleMove)

    /* Define function a */
    function handleMove(e) {
        /*
          * Get position of mouse cursor
          * With respect to the element
          * On mouseover
          */
        /* Store the x position */
        const xVal = e.layerX
        /* Store the y position */
        const yVal = e.layerY

        /*
          * Calculate rotation valuee along the Y-axis
          * Here the multiplier 20 is to
          * Control the rotation
          * You can change the value and see the results
          */
        const yRotation = 20 * ((xVal - width / 2) / width)

        /* Calculate the rotation along the X-axis */
        const xRotation = -20 * ((yVal - height / 2) / height)

        /* Generate string for CSS transform property */
        const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

        /* Apply the calculated transformation */
        el.style.transform = string
    }

    /* Add listener for mouseout event, remove the rotation */
    el.addEventListener('mouseout', function () {
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })

    /* Add listener for mousedown event, to simulate click */
    el.addEventListener('mousedown', function () {
        el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })

    /* Add listener for mouseup, simulate release of mouse click */
    el.addEventListener('mouseup', function () {
        el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })
    //end tilt
    //start hover on anchor
    $('li.mynav').hover
    (
        function()
        {
            $(this).addClass('cyberpunk')
            $(this).addClass('active')
        },
        function()
        {
            $(this).removeClass('cyberpunk')
            $(this).removeClass('active')
        }
    )
    //end hover
})