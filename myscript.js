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

