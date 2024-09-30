// Menu open and close animation
const openSidebar = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};

const allSidebar = () =>{
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "500px";
}

const hideSidebar = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};




// FoodTo Scroller

const Scrollers = document.querySelectorAll(".PhotoScroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation(){
  
  Scrollers.forEach((PhotoScroller) => {
    PhotoScroller.setAttribute("data-animated", true);

    const ScrollerInner = PhotoScroller.querySelector(".scroller_inner");
    const ScrollerContent = Array.from(ScrollerInner.children);

    ScrollerContent.forEach((item) =>{
      const duplicatedItem = item.cloneNode(true);

      duplicatedItem.setAttribute("aria-hidden", true);
      ScrollerInner.appendChild(duplicatedItem);
    });
  });
}

