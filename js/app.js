// Simple navigation toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(toggle && navLinks){
        toggle.addEventListener('click', ()=>{
            navLinks.classList.toggle('open');
        });

        // Close nav when a link is clicked (mobile)
        navLinks.addEventListener('click', (e)=>{
            if(e.target.tagName === 'A') navLinks.classList.remove('open');
        });
    }

    // Smooth scrolling for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener('click', function(e){
            const href = this.getAttribute('href');
            if(href.length > 1){
                const target = document.querySelector(href);
                if(target){
                    e.preventDefault();
                    target.scrollIntoView({behavior:'smooth',block:'start'});
                }
            }
        });
    });
});
