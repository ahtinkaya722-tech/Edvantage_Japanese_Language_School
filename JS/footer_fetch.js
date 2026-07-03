fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;

    // NOW footer exists → add scroll listener here
    const footer = document.querySelector('.footer-section');

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 10) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    });

})
.catch(error => console.error("Footer Load Error " + error));
