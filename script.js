document.addEventListener("DOMContentLoaded", () => {
    
    const paths = document.querySelectorAll("#logo path");
  
  
    paths.forEach((path, index) => {
        gsap.fromTo(
            path,
            { fill: "none" }, 
            {
              fill: path.classList.contains("st0") ? "#ffffff" : "#002198", 
              duration: 2, 
              delay: index * 0.5, 
              repeat: -1, 
              yoyo: true, 
              ease: "power1.inOut",
            }
          );
          
    });
  });
  