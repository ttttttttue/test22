const applicantForm = document.getElementById('mars-once');
const buttonReg = document.querySelector('.page__general__block__button');
const flipping = document.querySelector('.page__general__svg');
const headerNav = document.querySelectorAll('.header__nav');
const windowInnerWidth = document.documentElement.clientWidth;
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const swiperButtonNext = document.querySelector('.swiper-button-next');
const swiperButtonPrev = document.querySelector('.swiper-button-prev');
const pageGeneralRightImg = document.querySelector('.page__general__rightImg');

// use Form
function serializeForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;

      return { name, value };
    });

  console.log(data);
}
function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

applicantForm.addEventListener('submit', handleFormSubmit);

//use button
buttonReg.addEventListener('click', () => {
  const element = document.getElementById('mars-once');
  element.scrollIntoView(true);
});
flipping.addEventListener('click', () => {
  const element = document.getElementById('speak');
  element.scrollIntoView(true);
});

//Mobile and Tablet

if (windowInnerWidth <= 768) {
  for (let i = 0; i < headerNav.length; i++) {
    headerNav[i].style['display'] = 'none';
  }
  swiperButtonNext.style['display'] = 'none';
  swiperButtonPrev.style['display'] = 'none';
} else {
  menuBtn.style['display'] = 'none';
}

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   IOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad/i);
//   },
//   any: function () {
//     return isMobile.Android() || isMobile.IOS();
//   },
// };
//
// if (isMobile.any()) {
//   document.body.classList.add("_touch");
//   for (let i = 0; i < header__nav.length; i++) {
//     header__nav[i].style["display"] = "none";
//   }
//   swiper_button_next.style["display"] = "none";
//   swiper_button_prev.style["display"] = "none";
// } else {
//   document.body.classList.add("_pc");
//   menuBtn.style["display"] = "none";
// }

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

var swiper = new Swiper('.mySwiper', {
  removeClippedSubviews: false,
  slidesPerGroup: 2,
  rewind: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

// window.addEventListener(
//   'resize',
//   function (event) {
//     console.log(event.srcElement.innerWidth);
//   },
//   true,
// );
