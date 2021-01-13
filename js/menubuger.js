const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');
    const navLinks = document.querySelectorAll('.link li');
    // toggle nav
    burger.addEventListener('click', function () {

            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {

                if (link.style.animation){
                    link.style.animation = '';

                } else {
                    link.style.animation = `navLinkfade 0.5s ease forwards ${index /7 + 0.3}s`;
                }
            });

            //burger
            burger.classList.toggle('toggle');
        
        });
 
    //animate links 

    
    }

    navSlide();
