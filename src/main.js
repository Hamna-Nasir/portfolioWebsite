const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  // Show/hide menu
  mobileMenu.classList.toggle("hidden");

  // Change icon
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});

const GetInTouchBtn = document.getElementById('GetInTouchBtn');
GetInTouchBtn.addEventListener("click", () => {
  GetInTouchBtn.classList.toggle('bg-purple-600');
})

const ViewMyWorkBtn = document.getElementById('ViewMyWorkBtn');
ViewMyWorkBtn.addEventListener("click", () => {
  GetInTouchBtn.classList.remove('bg-purple-600');
})

function clickEffect(Btn1) {
  Btn1.addEventListener("click", () => {
    Btn1.classList.add("click-scale");
    setTimeout(() => {
      Btn1.classList.remove("click-scale");
    }, 200); 
  });
};

clickEffect(ViewMyWorkBtn);
clickEffect(GetInTouchBtn);


const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("text-purple-500", "font-bold"));
      link.classList.add("text-purple-500", "font-bold");
    });
  });

const mblinks = document.querySelectorAll(".mb-nav-link");
mblinks.forEach(link => {
  link.addEventListener("click", () => {
    mblinks.forEach(l => {
      l.classList.remove("text-purple-300", "font-bold");
      l.classList.add("text-white");
    });
    link.classList.remove("text-white");
    link.classList.add("text-purple-300", "font-bold");
  });
});





