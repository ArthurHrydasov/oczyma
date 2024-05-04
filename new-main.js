if (window.innerWidth < 991) {
  let vhm = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vhm", `${vhm}px`);
  function vhCalc() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  vhCalc();
  document.addEventListener("scroll", () => {
    vhCalc();
  });
  var allVhClick = document.querySelectorAll('[menu_open]');
  allVhClick.forEach(function(elementVh) {
    elementVh.addEventListener("click", () => {
      vhCalc();
    });
  });
  const body = document.querySelector("body");
  const m_o = document.querySelector('[menu_open]');
  const m_w = document.querySelector('.mobile_menu_wrapper');
  const m_b = document.querySelector('.mobile_menu_block');
  const m_c_s = document.querySelector('.mobile_menu_close_substrate');

  function menuClose() {
    body.style.overflow = "auto";
    m_b.classList.remove('active');
    setTimeout(() => {
      m_c_s.classList.remove('active');
    }, 150);
    setTimeout(() => {
      m_w.classList.remove('active');
    }, 300);
  }
  function menuOpen() {
    body.style.overflow = "hidden";
    m_w.classList.add('active');
    setTimeout(() => {
      m_c_s.classList.add('active');
      m_b.classList.add('active');
    }, 1);
  }
  m_o.addEventListener('click', () => {
    menuOpen();
  });
  document.querySelectorAll('[menu_close]').forEach(function(elem_close) {
    elem_close.addEventListener('click', () => {
      menuClose();
    });
  });
} else {
  const dropdown = document.querySelectorAll("[dropdown]");
  var dropdownWrap = document.querySelector('.menu_dropdawn_wrap');

  window.addEventListener("mousemove", function(e){
    function isMouseOverElementOrChildren(element) {
      return element === e.target || element.contains(e.target);
    }
    dropdown.forEach(function(drop) {
      if (isMouseOverElementOrChildren(drop)) {
        var insideElHeight = dropdownWrap.querySelector('*').clientHeight;
        dropdownWrap.style.maxHeight = insideElHeight + 'px';
        document.querySelector('.header_drop_icon').style.transform = 'rotateX(180deg)';
      } else {
        dropdownWrap.style.maxHeight = '0px';
        document.querySelector('.header_drop_icon').style.transform = 'rotateX(0deg)';
      }
    });
  });
}

  let customEase = "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
  let counter = {
    value: 10,
  };
  let loaderDuration = 5;
  if (sessionStorage.getItem("visited") !== null) {
    loaderDuration = 1;
    counter = {
      value: 10,
    };
  }
  sessionStorage.setItem("visited", "true");

  function updateLoaderText() {
    let progress = Math.round(counter.value);
    $(".percent").text(progress);
  }
  function endLoaderAnimation() {
    $(".loader").addClass("load_none");
    setTimeout(() => {
      $("body").css("overflow", "auto");
    }, 870);
  }

  let tl = gsap.timeline({
    onComplete: endLoaderAnimation,
  });
  tl.to(counter, {
    value: 100,
    onUpdate: updateLoaderText,
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase),
  });
  tl.to(
    ".preload_logo_overlay",
    {
      height: "100%",
      duration: loaderDuration,
      ease: CustomEase.create("custom", customEase),
    },
    0
  );




