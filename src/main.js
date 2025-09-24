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



