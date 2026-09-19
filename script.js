let toastTimer;

function showToast(message, type = "info") {
  let toast = document.getElementById("toast-notification");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `toast-notification ${type} is-visible`;
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3500);
}

function stopOtherAudioPlayers(currentAudio) {
  const allAudio = document.querySelectorAll("audio");
  allAudio.forEach((audio) => {
    if (audio !== currentAudio) {
      audio.pause();
    }
  });
}

function  Shownav() {
      var i = document.getElementById("navMenu");
      if(i.className === "nav-link") {
         i.className += " responsive";
           
      } else {
         i.className = "nav-link";
         
      } 
   }
   function toggleVisibilty() {
    const toggleIcon = document.getElementById("toggleIcon");
   const psw = document.getElementById("psw");
   toggleIcon.onclick = () => {
          if(psw.type === `password`)  {
            psw.type = `text`;
            toggleIcon.classList.remove(`fa-eye-slash`);
             toggleIcon.classList.add(`fa-eye`);
        } else {[]
            
            psw.type = `password`;
              toggleIcon.classList.add(`fa-eye-slash`);
             toggleIcon.classList.remove(`fa-eye`);
        }
   } 
   }
   window.onload = function() {
      const savedUsername = localStorage.getItem("savedUsername");
      if (savedUsername) {
        document.getElementById("chk").checked = true;
      }
   }
  
   document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll(".fade-in-section");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
});
}, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

  document.addEventListener("play", function(event) {
    if (event.target.tagName.toLowerCase() !== "audio") return;
    stopOtherAudioPlayers(event.target);
  }, true);
});
const yearElement = document.getElementById("years");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


   function Service() {
      const loader = document.getElementById("loader");
      loader.style.display = "flex";
      loader.style.opacity = 0.9;
      setTimeout(() => {
        window.location.href = "service.html";
      }, 2000)
  }
  function Contact() {
   const loader = document.getElementById("loader");
      loader.style.display = "flex";
      loader.style.opacity = 0.9;
      setTimeout(() => {
        window.location.href = "contact.html";
      }, 2000)
  }
  function Home() {
          const loader =  document.getElementById("loader");
          loader.style.opacity = 0.9;
          loader.style.display = "flex"
      setTimeout(() => {
        window.location.href = "main.html";
      }, 1500)
        }
          function servicer() {
         const loader =  document.getElementById("loader");
          loader.style.opacity = 0.9;
          loader.style.display = "flex"
      setTimeout(() => {
        window.location.href = "service.html";
      }, 1500)
        }
         function sendToWhatsApp() {
        const name = document.getElementById("name").value.trim();
         const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
          const phoneNumber = "2348165164319";
       const text = `Hello! My name is: ${name} Message: ${message} Email: ${email}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");


    }

     function Home() {
           const loader =  document.getElementById("loader");
          loader.style.opacity = 0.9;
          loader.style.display = "flex"
      setTimeout(() => {
        window.location.href = "main.html";
      }, 2000)
        }
         function Contact() {
          const loader =  document.getElementById("loader");
          loader.style.opacity = 0.9;
          loader.style.display = "flex"
      setTimeout(() => {
        window.location.href = "contact.html";
      }, 2000)
        }