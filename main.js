document.addEventListener("DOMContentLoaded", () => {

const headerContent =  `<header>
    <div class="nav-container">
        <div class="logo">
            <div class="logo-image">
                <img src='../assets/images/erma_logo.PNG'" height="50" width="50">
            </div>
            <div class="logo-description">
                <h1>ERMA Engineering Consultancy</h1>
                <p>"We provide innovative Facade Design and Engineering solutions"</p>
            </div>        
        </div>
        <nav>
            <div class="hamburger" id="hamburger">
              &#9776;
            </div>
            <ul class="nav-menu" id="nav-menu">
               <li><button class="close-menu" id="close-menu">&times;</button></li>
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="#">Services</a>
                    <ul class="submenu">
                        <li>
                            <a href="#">Facade Engineering</a>
                            <ul class="submenu">
                                <li><a href="quantity-take-off.html">Quantity Take off</a></li>
                                <li><a href="shop-drawing.html">Shop Drawing</a></li>
                                <li><a href="fabrication-drawing.html">Fabrication Drawings</a></li>
                            </ul>
                        </li>
                        <li><a href="facade-design.html">Facade Design Consultancy</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Projects</a>
                    <ul class="submenu">
                        <li>
                            <a href="#">List of Completed Projects</a>
                            <ul class="submenu">
                                <li><a href="new-zealand.html">New Zealand</a></li>
                                <li><a href="usa.html">USA</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                 <li><a href="team.html">Team</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact-us.html">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>`;

const footerContent = `<footer>
    <p>Copyright @ 2024 by ERMA Engineering Consultancy Philippines</p>
</footer>`;


document.getElementById('header-placeholder').innerHTML = headerContent;
document.getElementById('footer-placeholder').innerHTML = footerContent;

document.getElementById('hamburger').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    menu.classList.remove('active');
});
});


function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_gnmot3p', 'template_o0j7ltr', templateParams)
        .then(res=> {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
            alert('Message sent successfully!', res.status, res.text);
        })
        .catch(err=>console.log(err));
}

