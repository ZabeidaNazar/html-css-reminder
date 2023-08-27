document.addEventListener("DOMContentLoaded", () => {
  
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.html_img-pagination',
      bulletClass: "html_img-dot",
      bulletActiveClass: "html_img-dot-active",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    keyboard: {
      onlyInViewport: true,

    }
  });
});
