// ----------------------------<<   Setting Box   >>------------------------------//
document.querySelector(".toggle .open-close").onclick = function () {
  //    this.classList.toggle('fa-spin');
  document.querySelector(".setting-box").classList.toggle("open");
};
document.querySelector(".icon-con").onclick = function () {
  document.querySelector(".all-contact").classList.toggle("open");
};
// fixed background
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-special");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
// ~~~~ --< Color's >-- ~~~~~ //
let mainColors = localStorage.getItem("Color_option");
if (mainColors !== null) {
  //    console.log('maincolors is not empty and you can change it now'); // test
  //    console.log(localStorage.getItem("Color_option")); //test
  document.documentElement.style.setProperty("--main-color", mainColors);
  // remove all active in local
  document.querySelectorAll(".colors li").forEach((element) => {
    element.classList.remove("active");
    // add active when click in color
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}
//--------------<< switch colors >>--------------------//

const colorsLi = document.querySelectorAll(".colors li"); // switch color

colorsLi.forEach((li) => {
  // loop on all list

  li.addEventListener("click", (e) => {
    // click in everyone li

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    ); // set color in root

    localStorage.setItem("Color_option", e.target.dataset.color); // set color in local

    // remove all active class for all " li "

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active"); // add class active when you click on it
  });
});

//--------------------------<<  Random Background >>-----------------------//

let backgroundoption = true;

let backgroundInterval;

let backgroundLocalStorage = localStorage.getItem("background_option");

if (backgroundLocalStorage !== null) {
  if (backgroundLocalStorage === "true") {
    backgroundoption = true;
  } else {
    backgroundoption = false;
  }

  //     remove active

  document.querySelectorAll(".or span").forEach((sp) => {
    sp.classList.remove("active");
  });

  // add active

  if (backgroundLocalStorage === "true") {
    document.querySelector(".or .yes").classList.add("active");
  } else {
    document.querySelector(".or .no").classList.add("active");
  }
}

const RandombackEl = document.querySelectorAll(".or span"); // switch span

RandombackEl.forEach((sp) => {
  // loop on all list

  sp.addEventListener("click", (e) => {
    // click in everyone span

    // remove all active class for all " span "

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active"); // add class active when you click on it

    if (e.target.dataset.background === "yes") {
      backgroundoption = true;
      randomImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundoption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// ----------------------------<<   Images Slider  >>------------------------------//

//
//let landingPage = document.querySelector('.landing-page');
//
//let imgArrays = ['01.jpg', '02.jpg' , '03.jpg' , '04.jpg' , '05.jpg'];
//
//
//
//
//function randomImgs(){
//
//    if (backgroundoption === true){
//
//        backgroundInterval = setInterval (() => {
//
//            let randomNumber = Math.floor(Math.random()*imgArrays.length);
//
//            landingPage.style.backgroundImage =  'url("../../../../draftSpecialtemp/'+ imgArrays[randomNumber] +'")';
//
//            },10000);
//
//    }
//}
//
//
//randomImgs();

// ----------------------------<<   Images Slider  >>------------------------------//

let landingPage = document.querySelector(".landing-page");

let imgArrays = [
  "www.teahub.io/photos/full/22-220999_web-developer-wallpaper-web-development.jpg",
  "miro.medium.com/max/3840/1*ee9Ji2ToUxeYfj3YUQ1xsA.jpeg",
  "miro.medium.com/max/3840/1*lmD7FIkUL4t5P-swMEPH7Q.jpeg",
  "www.itl.cat/pngfile/big/323-3231808_laptop-wallpaper-download-apple-laptop-pictures-download.jpg",
];
//https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?cs=srgb&dl=pexels-picjumbocom-196655.jpg&fm=jpg

function randomImgs() {
  if (backgroundoption === true) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgArrays.length);

      landingPage.style.backgroundImage =
        'url("https://' + imgArrays[randomNumber] + '")';
    }, 10000);
  }
}

randomImgs();

// ----------------------------<<  animation when arrive in progress skill  >>------------------------------//

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  let skillsOffsetTop = ourSkills.offsetTop;

  let skillsOffsetHeight = ourSkills.offsetHeight;

  let WindowsHeight = this.innerHeight;

  let WindowSrollTop = this.pageYOffset;

  if (WindowSrollTop > skillsOffsetTop + skillsOffsetHeight - WindowsHeight) {
    let allSkills = document.querySelectorAll(
      ".skills .skills-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// >>----------------------------<<  Create element for popup  >>--------------------------------<<

let ourGallery = document.querySelectorAll(
  ".gallery .image-box .box .img section .view"
);

ourGallery.forEach((ve) => {
  ve.addEventListener("click", (e) => {
    let Overlay = document.createElement("div");

    Overlay.className = "OverPoPuP";

    document.body.appendChild(Overlay);

    let ppbox = document.createElement("div");

    ppbox.className = "pp-box";

    //        let showimg = document.querySelector('.image-box .img img');

    //        console.log(showimg.src);

    //        if (img.alt !== null ){
    //
    //            let imgHeading = document.createElement('h3');
    //            let imgText = document.createTextNode(img.alt);
    //            imgHeading.appendChild(imgText);
    //            ppbox.appendChild(imgHeading);
    //        }

    let ppImage = document.createElement("img");
    //        ppImage.src = document.querySelector('.images img').src;
    ppImage.src = e.target.dataset.src;
    ppbox.appendChild(ppImage);
    document.body.appendChild(ppbox);

    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.className = "close-Button";
    closeButton.appendChild(closeButtonText);
    ppbox.appendChild(closeButton);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "close-Button") {
    e.target.parentNode.remove();

    document.querySelector(".OverPoPuP").remove();
  }
});

// >>----------------------------<<  Bullets  >>--------------------------------<<

// const allBullets = document.querySelectorAll(".all-bullets .bullet");

//allBullets.forEach( bullet => {
//
//    bullet.addEventListener("click", (e) => {
//
//        document.querySelector(e.target.dataset.section).scrollIntoView({
//
//            behavior : 'smooth'
//        });
//    });
//});

// >>----------------------------<<  links  >>--------------------------------<<

const allLinks = document.querySelectorAll(".links li");

//allLinks.forEach( link => {
//
//    link.addEventListener("click", (e) => {
//
//        e.preventDefault();
//
//        document.querySelector(e.target.dataset.section).scrollIntoView({
//
//            behavior : 'smooth'
//        });
//    });
//});

//---------------------<< helpers function >>-----------------------

function moveToNext(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// moveToNext(allBullets);
moveToNext(allLinks);

// --------------------------<< hadleActive >>------------------------

function hadleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  ev.target.classList.add("active");
}

//--------------------------------<<    bullet   >>------------------------

// let bulletsetting = document.querySelectorAll(".bullet span");

// let bulletcontainer = document.querySelector(".all-bullets");

// let bulletforlocal = localStorage.getItem("bullet_option");

// if (bulletforlocal !== null) {
//   bulletsetting.forEach((sp) => {
//     sp.classList.remove("active");
//   });

//   if (bulletforlocal === "block") {
//     bulletcontainer.style.display = "block";
//     document.querySelector(".bullet .yes").classList.add("active");
//   } else {
//     bulletcontainer.style.display = "none";
//     document.querySelector(".bullet .no").classList.add("active");
//   }
// }

// bulletsetting.forEach((sp) => {
//   sp.addEventListener("click", (e) => {
//     if (sp.dataset.display === "Show") {
//       bulletcontainer.style.display = "block";

//       localStorage.setItem("bullet_option", "block");
//     } else {
//       bulletcontainer.style.display = "none";

//       localStorage.setItem("bullet_option", "none");
//     }

//     hadleActive(e);
//   });
// });
// --------------------------<<  Reset  >>------------------------
document.querySelector(".toggle .res").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

document.querySelector(".setting-box .content .reset").onclick = function () {
  localStorage.clear();
  //    localStorage.removeItem("Color_option");
  //    localStorage.removeItem('background_option');
  //    localStorage.removeItem('bullet_option');

  window.location.reload();
};

// --------------------------<<  Toggle  >>------------------------

let togglemenu = document.querySelector(".con-links .toggle-menu");
let togglelinks = document.querySelector(".con-links .links");

togglemenu.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  togglelinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== togglemenu && e.target !== togglelinks) {
    if (togglelinks.classList.contains("open")) {
      togglemenu.classList.toggle("menu-active");
      togglelinks.classList.toggle("open");
    }
  }
});

togglelinks.onclick = function (e) {
  e.stopPropagation();
};

//---------------------<<  light & dark >>-------------------------//

let darkButton = document.querySelector(".theme-option .theme-box .dark-theme");
let lightButton = document.querySelector(
  ".theme-option .theme-box .light-theme"
);
let bodytheme = document.querySelector("body");
let settingtheme = document.querySelector(".setting-box");
let landingpage = document.querySelector(".landing-page");
let abouttheme = document.querySelector(".about-us");
let skillstheme = document.querySelector(".skills");
let gallerytheme = document.querySelector(".gallery");
let timelinetheme = document.querySelector(".timeline");
let featurestheme = document.querySelector(".features");
let contacttheme = document.querySelector(".contact");
// let bulletstheme = document.querySelector(".all-bullets");
let scrolltheme = document.querySelector(".scroll-top");
let landsvdark = document.querySelector(".svg-land");
let skillswave = document.querySelector(".wave-up");
let skillswavee = document.querySelector(".wave");

darkButton.onclick = function (e) {
  bodytheme.classList.add("dark");
  settingtheme.classList.add("dark");
  landingPage.classList.add("dark");
  abouttheme.classList.add("dark");
  skillstheme.classList.add("dark");
  timelinetheme.classList.add("dark");
  featurestheme.classList.add("dark");
  contacttheme.classList.add("dark");
  // bulletstheme.classList.add("dark");
  gallerytheme.classList.add("dark");
  scrolltheme.classList.add("dark");
  landsvdark.classList.add("dark");
  skillswave.classList.add("dark");
  skillswavee.classList.add("dark");
  hadleActive(e);
};
lightButton.onclick = function (e) {
  bodytheme.classList.remove("dark");
  settingtheme.classList.remove("dark");
  landingPage.classList.remove("dark");
  abouttheme.classList.remove("dark");
  skillstheme.classList.remove("dark");
  timelinetheme.classList.remove("dark");
  featurestheme.classList.remove("dark");
  contacttheme.classList.remove("dark");
  // bulletstheme.classList.remove("dark");
  gallerytheme.classList.remove("dark");
  scrolltheme.classList.remove("dark");
  landsvdark.classList.remove("dark");
  skillswave.classList.remove("dark");
  skillswavee.classList.remove("dark");
  hadleActive(e);
};

//---------------------<<  Toggle Remove/Add About-us >>-------------------------//

let visi = document.querySelector(".remove-about .visible-theme");
let hidi = document.querySelector(".remove-about .hidden-theme");
let ab = document.querySelector(".about-us");
let land = document.querySelector(".svg-land");
let skil = document.querySelector(".wave-up");

visi.onclick = function (e) {
  ab.classList.remove("diplaying");
  land.classList.remove("hidden-sv");
  skil.classList.remove("hidden-sk");
  hadleActive(e);
};

hidi.onclick = function (e) {
  ab.classList.add("diplaying");
  land.classList.add("hidden-sv");
  skil.classList.add("hidden-sk");
  hadleActive(e);
};

//---------------------<<  Blind-people >>-------------------------//

let blindoClick = document.querySelector(".blind .theme-box .on-blind");
let blindfClick = document.querySelector(".blind .theme-box .off-blind");
let settingBlind = document.querySelector(".setting-box");
let special = document.querySelector(".specialdesign");
let aboutBlind = document.querySelector(".about-us");
let skillsBlind = document.querySelector(".skills");
let galleryBlind = document.querySelector(".gallery");
let timelineBlind = document.querySelector(".timeline");
let featuresBlind = document.querySelector(".features");
let contactBlind = document.querySelector(".contact");
// let bulletsBlind  = document.querySelector(".all-bullets");
let testemoBlind = document.querySelector(".testemonial");
let footerBlind = document.querySelector(".footer");
let landBlind = document.querySelector(".landing-page");
let scroltoop = document.querySelector(".scroll-top");
let conxtact = document.querySelector(".all-contact");
let chatbox = document.querySelector(".chat-us");
let immersiv = document.querySelector(".immersive");
let pricooo = document.querySelector(".price-box");
let clientoo = document.querySelector(".clients-feedback");
let contentchat = document.querySelector(".content-cc");
let niceBlind = document.querySelector(".nicescroll-rails.nicescroll-rails-vr");

blindfClick.onclick = function (e) {
  aboutBlind.classList.remove("eyeblind");
  special.classList.remove("eyeblind");
  skillsBlind.classList.remove("eyeblind");
  galleryBlind.classList.remove("eyeblind");
  timelineBlind.classList.remove("eyeblind");
  featuresBlind.classList.remove("eyeblind");
  contactBlind.classList.remove("eyeblind");
  // bulletsBlind.classList.remove("eyeblind");
  testemoBlind.classList.remove("eyeblind");
  footerBlind.classList.remove("eyeblind");
  landBlind.classList.remove("eyeblind");
  scroltoop.classList.remove("eyeblind");
  settingBlind.classList.remove("eyeblind");
  niceBlind.classList.remove("eyeblind");
  conxtact.classList.remove("eyeblind");
  chatbox.classList.remove("eyeblind");
  immersiv.classList.remove("eyeblind");
  pricooo.classList.remove("eyeblind");
  clientoo.classList.remove("eyeblind");
  contentchat.classList.remove("eyeblind");
  hadleActive(e);
};
blindoClick.onclick = function (e) {
  aboutBlind.classList.add("eyeblind");
  special.classList.add("eyeblind");
  skillsBlind.classList.add("eyeblind");
  galleryBlind.classList.add("eyeblind");
  timelineBlind.classList.add("eyeblind");
  featuresBlind.classList.add("eyeblind");
  contactBlind.classList.add("eyeblind");
  // bulletsBlind.classList.add("eyeblind");
  testemoBlind.classList.add("eyeblind");
  footerBlind.classList.add("eyeblind");
  landBlind.classList.add("eyeblind");
  scroltoop.classList.add("eyeblind");
  conxtact.classList.add("eyeblind");
  chatbox.classList.add("eyeblind");
  immersiv.classList.add("eyeblind");
  pricooo.classList.add("eyeblind");
  clientoo.classList.add("eyeblind");
  contentchat.classList.add("eyeblind");
  settingBlind.classList.add("eyeblind");
  // niceBlind.classList.add("eyeblind");
  hadleActive(e);
};
//---------------------<<  nice-scroll >>-------------------------//

let niceeSroll = $("html").niceScroll({
  cursorcolor: "var(--main-color)",
  cursorwidth: "11px",
  cursorborder: "none",
  cursorborderradius: 0,
  background: "#d4d4d4",
  position: "relative",
  zindex: "999999999999999",
  filter: "grayscale(1)",
  autohidemode: false,
  horizrailenabled: true,
});
let lsss = $(".setting-box .content ").niceScroll({
  cursorcolor: "var(--main-color)",
  cursorwidth: "11px",
  cursorborder: "none",
  cursorborderradius: 0,
  background: "#d4d4d4",
  position: "relative",
  zindex: "99999999",
  filter: "grayscale(1)",
  autohidemode: false,
  horizrailenabled: true,
});

// $(".setting-box .content").getNiceScroll().resize();
$(".blind .off-blind").on("click", function () {
  //    console.log('you are clicked now');
  $(".nicescroll-rails.nicescroll-rails-vr").removeClass("eyeblind");
});

$(".blind .on-blind").on("click", function () {
  //    console.log('you are clicked now');
  $(".nicescroll-rails.nicescroll-rails-vr").addClass("eyeblind");
});

// -------------------------------------   Scroll to top  ------------------------------------

var scrolltop = $(".scroll-top");
$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {
    scrolltop.fadeIn();
  } else {
    scrolltop.hide();
  }
});

scrolltop.click(function () {
  $("html,body").animate({ scrollTop: 0 }, 600);
});

//------------------------- Change-font ----------------------------------------------

//const changeFont = document.querySelectorAll('.change-font span'); // switch span
//changeFont.forEach( fo => {   // loop on all list
//    fo.addEventListener('click',(e) =>{  // click in everyone span
//        hadleActive(e);
//    });
//});

//document.getElementById("font").onchange = function () {
//    document.querySelectorAll('h3 .heading').dataset.font = this.value;
//};

let allHeading = document.querySelectorAll(".heading");
document.getElementById("font").onchange = function () {
  allHeading.forEach((sp) => {
    sp.dataset.font = this.value;
  });
};

//---------------------<<  progress >>-------------------------//
$(function () {
  "use strict";
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop(),
      skillsOffset = $(".about-us").offset().top;
    if ($(this).scrollTop() >= 1070) {
      $(".chart").easyPieChart({
        scaleColor: "transparent",
        animate: 1600,
        lineWidth: 7,
        lineCap: "square", //Can be butt
        barColor: "#009CEF",
        trackColor: "#dddd",
        size: 120,
        rotate: 0,
        animate: 1200,
        // barColor: function (percent) {
        //   return percent < 50
        //     ? "#cb3935"
        //     : percent < 85
        //     ? "#f0ad4e"
        //     : "#5cb85c";
        // }
      });
    }
  });
});

//************************************** show 3 picture hidden *******************************************

$(".See-more").click(function () {
  //     $(".features").getNiceScroll().resize();
  $(".features .hidden").fadeIn(50, function () {
    $(".See-more").css({
      disabled: "disabled",
      background: "#2a2929",
      color: "#969292",
      cursor: "not-allowed",
      border: "none",
      display: "none",
    });
  });
});

// ****************************  chat with us *****************************
var chatus = $(".chat-us");
var chatcon = $(".content-cc");
var chatchange = $(".ch-message");
var chatminize = $(".content-cc .request i");
chatminize.click(function () {
  chatcon.hide();
  $("i", chatus).toggleClass("fa-comment-alt fa-times");
});
chatus.click(function () {
  chatcon.toggle();
  $("i", this).toggleClass("fa-comment-alt fa-times");
});
$(window).scroll(function () {
  if ($(this).scrollTop() >= 2000) {
    chatus.fadeIn();
  } else {
    chatus.hide();
    chatcon.hide();
  }
});
// ****************************  contact-box   *****************************
var contactbox = $(".all-contact");
$(window).scroll(function () {
  if ($(this).scrollTop() >= 400) {
    contactbox.fadeIn();
  } else {
    contactbox.hide();
  }
});
// ****************************  deal with tabs  *****************************
$(".clients-pic img").click(function () {
  // add selected class to active link
  $(this).addClass("selected").siblings().removeClass("selected");
  // hide all divs
  $(".clients-say .content > div").hide();
  // show div when i clicked
  $("." + $(this).data("class")).show();
});
// let popupchat = document.createElement('div');
// popupchat.className = "pp-chat";
// document.querySelector('.chat-us').appendChild(popupchat);

// $('editable').editableSelect();
