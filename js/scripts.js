window.onload = () => {
   //HEADER STICKY
   const header = document.querySelector("header")

   header.classList.toggle("sticky", scrollY > 0)
   window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", scrollY > 0)
   });

   // VALIDAD EMAIL
   const input = document.getElementById("txtEmail");
   const btnSubmit = document.getElementById("btn-submit");
   const msgError = document.querySelector("label.error");
   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   btnSubmit.addEventListener("click", () => {
      regex.test(input.value)
         ? (msgError.style.opacity = "0")
         : (msgError.style.opacity = "1");
      setTimeout(() => {
         msgError.style.opacity = "0";
      }, 3000);
   });

   //ANIMACIONES PARA MOSTRAR EL CONTENIDO
   const banner = document.querySelector('section.banner')
   const features = document.querySelector('section.features')
   const works = document.querySelector('section.works')
   const sigIn = document.querySelector('section.sig-in .container')
   const team = document.querySelector('section.team')
   const footer = document.querySelector('footer .footer__content')
   const showContent = (entries, observer)=>{
      entries.forEach(entry => {
         entry.isIntersecting ? entry.target.classList.add('visible') : ''
      });
   }

   const observer = new IntersectionObserver(showContent, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
   })

   observer.observe(banner)
   observer.observe(features)
   observer.observe(works)
   observer.observe(sigIn)
   observer.observe(team)
   observer.observe(footer)

};
