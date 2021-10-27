const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y:'-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1}, '-=1');
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const bigText = document.querySelector('.big-text');
    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
                bigText.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                bigText.style.animation = `bigTextFade 0.2s ease forwards 0.2s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });
    

}

navSlide();

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".cup", 8, { y: -300 })
  .to(".pencil", 8, { x: -250 }, "-=8")
  .to(".notebook", 8, { y: -375 }, "-=8")
  .to(".big-text", 8, { x: 375 }, "-=8")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 8 }, "-=8")
  .to(".projects-content", 10, { top: "0%" }, "-=8")
  .fromTo(".content-cards", { opacity: 0 }, { opacity: 1, duration: 1.5 })

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "240%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);


function contactMeVisible() {
  var T = document.getElementById("contactme");
  T.style.display = "flex";
}

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  let name = document.querySelector(".form-name").value;
  let lastname = document.querySelector(".form-lastname").value;
  let fullname = name.concat(" ", lastname);
  let email = document.querySelector(".form-email").value;
  let phone = document.querySelector(".form-phone").value;
  let message = document.querySelector(".form-message").value;


  document.querySelector(".contact-form").reset();

  sendEmail(fullname, email, phone, message);
}

function sendEmail(fullname, email, phone, message){
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'rodriguez.terron.gonzalo@gmail.com',
    Password: "rdqyhbytnwuvbsrz",
    To: 'rodriguez.terron.gonzalo@gmail.com',
    From: 'rodriguez.terron.gonzalo@gmail.com',
    Subject: `${fullname} sent you a message`,
    Body: `Name 🙋‍♂️: ${fullname} <br/> Email 📩: ${email} <br/> Phone 📞: ${phone} <br/> Message 📝: ${message}`,
  }).then((message) => alert("Mail sent successfully!"));
}

function showMessageNotHosted(){
  alert("Website not hosted yet!");
}
