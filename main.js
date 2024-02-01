var currentUrl = window.location.href;
let current = 0;
let target = 0;
let ease = window.innerWidth > 992 ? 0.02 : 0.04;
let maxScroll;

// if (!currentUrl.includes("projects")) {
const slider = document.querySelector(".slider_proj");
const sliderWrapper = document.querySelector(".slider_wrapper");
const sliderWrapperB = document.querySelector(".slider_block_wrapper");
var slider_proj_s = document.querySelector(".popup_projects_substrate");
var slider_proj_open = document.querySelectorAll("[popup_slider]");
var slider_proj = document.querySelector(".popup_projects");
var slider_proj_close = document.querySelectorAll(
  ".popup_projects_substrate, .popup_prolects_close"
);
var proj_name = document.querySelector(".popup_prolects_heading");
var linkStart = 'https://uploads-ssl.webflow.com/647325e0c1789b5891b42f7b';
var w = '.webp';

var slidesI = [
  [
    "uni380",
    [
      linkStart + "/65b13c445a277499c33c6bad_uni380_1" + w,
      linkStart + "/65b13c443b5512fbf5644800_uni380_2" + w,
      linkStart + "/65b13c446406ec786f8587e1_uni380_3" + w,
      linkStart + "/65b13c43324ed53601df70cf_uni380_4" + w,
      linkStart + "/65b13c4512d8050d1a5238e8_uni380_5" + w,
      linkStart + "/65b13c4346bc4006815fc106_uni380_6" + w,
      linkStart + "/65b13c445a277499c33c6b85_uni380_7" + w,
      linkStart + "/65b13c445518485de424d771_uni380_8" + w,
    ],
    [
      linkStart + "/65b2655989d20cec45465fda_uni380_mobile_1" + w,
      linkStart + "/65b265586da905b2bf5df6de_uni380_mobile_2" + w,
      linkStart + "/65b26559c98c8ca9e5251bd9_uni380_mobile_3" + w,
      linkStart + "/65b26559df39500040e8e8b9_uni380_mobile_4" + w,
      linkStart + "/65b26559f724110f2ced00e8_uni380_mobile_5" + w,
      linkStart + "/65b2655beac6b5b12a1322a4_uni380_mobile_6" + w,
      linkStart + "/65b26659d06a580e1b12c797_uni380_mobile_7" + w,
      linkStart + "/65b265598f7cebdf16edaed5_uni380_mobile_8" + w,
    ],
    ["n", "n", "w_339", "w_366", "n", "n", "w_487", "n"],
    "UNI380",
  ],
  [
    "encourage",
    [
      linkStart + "/65b8e61c823548a869e9b4ab_encourage_1" + w,
      linkStart + "/65b8e61dc6525317ce8dbe88_encourage_2" + w,
      linkStart + "/65b8e61d5c06bdbc389bded3_encourage_3" + w,
      linkStart + "/65b8e61c84359259d7a44301_encourage_4" + w,
      linkStart + "/65b8e61d8c4d645a25496ce9_encourage_5" + w,
      linkStart + "/65b8e61dd210360c8d23b861_encourage_6" + w,
      linkStart + "/65b8e61dd4c6306323509b9b_encourage_7" + w,
      linkStart + "/65b8e61e780d39878d0c8e23_encourage_8" + w,
    ],
    [
      linkStart + "/65b8e8be0cd934b734bcfc98_encourage_mobile_1" + w,
      linkStart + "/65b8e8be7a8e7ef8a1343c8b_encourage_mobile_2" + w,
      linkStart + "/65b8e8c01809e663c22d308f_encourage_mobile_3" + w,
      linkStart + "/65b8ebe93bd24abf9f644eb2_encourage_mobile_4" + w,
      linkStart + "/65b8ebf1c13eb986fcab3cbf_encourage_mobile_5" + w,
      linkStart + "/65b8e8be7bb74e67fbb19ee0_encourage_mobile_6" + w,
      linkStart + "/65b8e8be4b650da05404183d_encourage_mobile_7" + w,
      linkStart + "/65b8e8beee646fd181e48b0c_encourage_mobile_8" + w,
    ],
    ["n", "w_541", "w_460", "n", "w_640", "n", "n", "n"],
    "EN>>COURAGE",
  ],
  [
    "myedspace",
    [
      linkStart + "/65b90569f5b8b6e7ed189f8c_myedspace_1" + w,
      linkStart + "/65b9056808a406486dce56a3_myedspace_2" + w,
      linkStart + "/65b9056913eb39328a2e145b_myedspace_3" + w,
      linkStart + "/65b90569c24d53faf305c083_myedspace_4" + w,
      linkStart + "/65b90568238ffc23aa18ab84_myedspace_5" + w,
    ],
    [
      linkStart + "/65b90723f2fd57c88ebebc03_myedspace_mobile_1" + w,
      linkStart + "/65b907230d89101e9c72407a_myedspace_mobile_2" + w,
      linkStart + "/65b907235962e15fe9d1c81f_myedspace_mobile_3" + w,
      linkStart + "/65b9072364bd3aaddf557776_myedspace_mobile_4" + w,
      linkStart + "/65b9072349f82581bbb4b005_myedspace_mobile_5" + w,
    ],
    ["n", "n", "w_541", "n", "n"],
    "MyEdSpace",
  ],
  [
    "ras",
    [
      linkStart + "/65b91d2457822e1ed1276fa9_ras_1" + w,
      linkStart + "/65b91d24fad48c68e1cbd381_ras_2" + w,
      linkStart + "/65b91d24ae725b0381308e6e_ras_3" + w,
      linkStart + "/65b91d24e2016882f0ce86b3_ras_4" + w,
      linkStart + "/65b91d244756d2dbf52c12f6_ras_5" + w,
      linkStart + "/65b92313ae725b0381347faa_ras_6" + w,
      linkStart + "/65b91d242887f467135fce6e_ras_7" + w,
      linkStart + "/65b91d2419998e6dc389c70a_ras_8" + w,
    ],
    [
      linkStart + "/65b92148ef26962b667097b8_ras_mobile_1" + w,
      linkStart + "/65b92148dde49271ec220527_ras_mobile_2" + w,
      linkStart + "/65b9214837874adbd96b7bef_ras_mobile_3" + w,
      linkStart + "/65b921473873b89bc990fe32_ras_mobile_4" + w,
      linkStart + "/65b92147a31b72aaff689b19_ras_mobile_5" + w,
      linkStart + "/65b9214881299059da96c5a2_ras_mobile_6" + w,
      linkStart + "/65b9245557822e1ed12c925f_ras_mobile_7" + w,
      linkStart + "/65b921483f9cdc85ca87e59e_ras_mobile_8" + w,
      linkStart + "/65b9214884cc6229bb8f6027_ras_mobile_9" + w,
    ],
    ["n", "n", "n", "w_203", "n", "w_235", "w_235", "w_363", "w_235"],
    "Region Auto Service",
  ],
  [
    "skillspeak",
    [
      linkStart + "/65b9270aab255e62eb20e3b9_skillspeak_1" + w,
      linkStart + "/65b9270a0bd9d1bca02037d3_skillspeak_2" + w,
      linkStart + "/65b9270a538c89c9d7feb81e_skillspeak_3" + w,
      linkStart + "/65b9270ae0f51f5b9364fb1d_skillspeak_4" + w,
      linkStart + "/65b9270a4a49c529ae460224_skillspeak_5" + w,
      linkStart + "/65b9270aa7d4fb623e82fda5_skillspeak_6" + w,
      linkStart + "/65b9270aa72a2df10ed2df01_skillspeak_7" + w,
    ],
    [
      linkStart + "/65b927aea5975f4e6effd4f4_skillspeak_mobile_1" + w,
      linkStart + "/65b927aea72a2df10ed33904_skillspeak_mobile_2" + w,
      linkStart + "/65b927ae35dd2f5806487761_skillspeak_mobile_3" + w,
      linkStart + "/65b927aeab7df25bc915db70_skillspeak_mobile_4" + w,
      linkStart + "/65b927ad66b6d98c662e2d99_skillspeak_mobile_5" + w,
      linkStart + "/65b927addd76da585837498c_skillspeak_mobile_6" + w,
      linkStart + "/65b927ad478f6b5e3d0218cb_skillspeak_mobile_7" + w,
    ],
    ["n", "w_541", "w_460", "w_460", "n", "n", "n"],
    "Skill Speak",
  ],
    [
    "sphere",
    [
      linkStart + "/65b92a58222a7b1e53711c89_sphere_1" + w,
      linkStart + "/65b92a59e7c7203ec649acc6_sphere_2" + w,
      linkStart + "/65b92a58a14db0eb99273831_sphere_3" + w,
      linkStart + "/65b92a58003441b3f9cb34dd_sphere_4" + w,
      linkStart + "/65b92a58dc2e940700011c09_sphere_5" + w,
      linkStart + "/65b92a58f816cbe4df6ff6d8_sphere_6" + w,
      linkStart + "/65b92a5817f77a4a047babe5_sphere_7" + w,
    ],
    [
      linkStart + "/65b92b77bb01d5afcbecba45_sphere_mobile_1" + w,
      linkStart + "/65b92b77c7a8fcd641256335_sphere_mobile_2" + w,
      linkStart + "/65b92b77c61a1f6d8b75f208_sphere_mobile_3" + w,
      linkStart + "/65b92b77cb68e2a1b95e7e57_sphere_mobile_4" + w,
      linkStart + "/65b92b774bb9b05acec2bbe0_sphere_mobile_5" + w,
      linkStart + "/65b92b3917f77a4a047c2bff_sphere_mobile_6" + w,
      linkStart + "/65b92b7717bcc1ad30f82ff0_sphere_mobile_7" + w,
      linkStart + "/65b92b3a434501ed7e050768_sphere_mobile_8" + w,
      linkStart + "/65b92b7741d018bac5f79cbf_sphere_mobile_9" + w,
    ],
    ["n", "n", "w_200", "n", "n", "w_300", "n", "w_171", "n"],
    "Sphere Work",
  ],
  [
    "wiacargo",
    [
      linkStart + "/65bb7ba401ca796e82a3511b_wiacargo_1" + w,
      linkStart + "/65bb7ba3935d154c3a13621b_wiacargo_2" + w,
      linkStart + "/65bb7ba3a0ce27cc4db76320_wiacargo_3" + w,
      linkStart + "/65bb7ba343b671410e51288a_wiacargo_4" + w,
      linkStart + "/65bb7ba4c3d98256def42ba3_wiacargo_5" + w,
      linkStart + "/65bb7ba383d2d15fe0cd4237_wiacargo_6" + w,
      linkStart + "/65bb7ba434df4c62b7179cca_wiacargo_7" + w,
    ],
    [
      linkStart + "/65bb7f00c2080fd98addcc6d_wiacargo_mobile_1" + w,
      linkStart + "/65bb7eff7956428c69e59e5b_wiacargo_mobile_2" + w,
      linkStart + "/65bb7eff1bff93fe133d99c8_wiacargo_mobile_3" + w,
      linkStart + "/65bb7d5fd832e738e57adf05_wiacargo_mobile_4" + w,
      linkStart + "/65bb7f00b6776557d68dc74c_wiacargo_mobile_5" + w,
      linkStart + "/65bb7eff9f8546c978cde14f_wiacargo_mobile_6" + w,
      linkStart + "/65bb7f00b6776557d68dc74f_wiacargo_mobile_7" + w,
      linkStart + "/65bb7efff11cf0a5e3d1b7a5_wiacargo_mobile_8" + w,
    ],
    ["n", "w_441", "w_148", "w_211", "w_504", "n", "w_300", "w_324"],
    "WIACARGO",
  ],
  [
    "fyt",
    [
      linkStart + "/65bb827dfea2e6b4b87bcaa5_fyt_1" + w,
      linkStart + "/65bb827d90d6df3f1585942b_fyt_2" + w,
      linkStart + "/65bb827d5534b7ccf208e315_fyt_3" + w,
      linkStart + "/65bb827dad320344b091b007_fyt_4" + w,
      linkStart + "/65bb827d7743a54b97124176_fyt_5" + w,
      linkStart + "/65bb827d7b056707d521c8f2_fyt_6" + w,
    ],
    [
      linkStart + "/65bb83650519784bb6bc87ef_fyt_mobile_1" + w,
      linkStart + "/65bb8365c8f6de933798667d_fyt_mobile_2" + w,
      linkStart + "/65bb83656b017c277518b38c_fyt_mobile_3" + w,
      linkStart + "/65bb8366748c6729dd8d8341_fyt_mobile_4" + w,
      linkStart + "/65bb83666b7083cc1d6d98ee_fyt_mobile_5" + w,
      linkStart + "/65bb8366989476b40a290c8a_fyt_mobile_6" + w,
    ],
    ["n", "n", "w_541", "w_687", "n", "w_449"],
    "FOR YOU TRAVEL",
  ],
  [
    "uni380p",
    [
      linkStart + "/65bb827dfea2e6b4b87bcaa5_fyt_1" + w,
      linkStart + "/65bb827d90d6df3f1585942b_fyt_2" + w,
      linkStart + "/65bb827d5534b7ccf208e315_fyt_3" + w,
      linkStart + "/65bb827dad320344b091b007_fyt_4" + w,
      linkStart + "/65bb827d7743a54b97124176_fyt_5" + w,
      linkStart + "/65bb827d7b056707d521c8f2_fyt_6" + w,
    ],
    [
      linkStart + "/65bb83650519784bb6bc87ef_fyt_mobile_1" + w,
      linkStart + "/65bb8365c8f6de933798667d_fyt_mobile_2" + w,
      linkStart + "/65bb83656b017c277518b38c_fyt_mobile_3" + w,
      linkStart + "/65bb8366748c6729dd8d8341_fyt_mobile_4" + w,
      linkStart + "/65bb83666b7083cc1d6d98ee_fyt_mobile_5" + w,
      linkStart + "/65bb8366989476b40a290c8a_fyt_mobile_6" + w,
    ],
    ["n", "n", "w_541", "w_687", "n", "w_449"],
    "UNI380 PLATFORM",
  ],
  [
    "patscamp",
    [
      linkStart + "/65bb88f9a97183692be99b0f_patscamp_1" + w,
      linkStart + "/65bb88fa2e3dc6fc6b3b8b58_patscamp_2" + w,
      linkStart + "/65bb88fa7743a54b9715e102_patscamp_3" + w,
      linkStart + "/65bb88fcc8f6de93379ba68f_patscamp_4" + w,
      linkStart + "/65bb88fa54c7b4ccdf445bc6_patscamp_5" + w,
      linkStart + "/65bb88f9ee5e896619bca524_patscamp_6" + w,
    ],
    [
      linkStart + "/65bb8adf5534b7ccf20dcb90_patscamp_mobile_1" + w,
      linkStart + "/65bb89f2270088c9c0096752_patscamp_mobile_2" + w,
      linkStart + "/65bb89f30519784bb6c08bdc_patscamp_mobile_3" + w,
      linkStart + "/65bb89f3eeb2b12611642991_patscamp_mobile_4" + w,
      linkStart + "/65bb89f305a12478f6555ca3_patscamp_mobile_5" + w,
      linkStart + "/65bb89f37956428c69eceaf8_patscamp_mobile_6" + w,
      linkStart + "/65bb89f3a994831d98f2332e_patscamp_mobile_7" + w,
      linkStart + "/65bb89f3ee5e896619bd5882_patscamp_mobile_8" + w,
      linkStart + "/65bb89f3b33733af7cb8e238_patscamp_mobile_9" + w,
    ],
    ["w_290", "w_222", "w_246", "w_159", "w_150", "w_287", "w_193", "w_191", "w_280"],
    "PATSCAMP",
  ],
  [
    "drugoi",
    [
      linkStart + "/65bb8d949d64ac446677f0a2_drugoi_1" + w,
      linkStart + "/65bb8d94b60e47e4e2c57723_drugoi_2" + w,
      linkStart + "/65bb8d94d4234c61eb4ffe70_drugoi_3" + w,
      linkStart + "/65bb8d941bff93fe13475ad5_drugoi_4" + w,
      linkStart + "/65bb8d942e30ba368242b06d_drugoi_5" + w,
      linkStart + "/65bb8d94935d154c3a1e95e9_drugoi_6" + w,
      linkStart + "/65bb8d944f0936eca9622829_drugoi_7" + w,
      linkStart + "/65bb8d9474aa679683b850d7_drugoi_8" + w,
    ],
    [
      linkStart + "/65bb8e7543b671410e5d6492_drugoi_mobile_1" + w,
      linkStart + "/65bb8e75f11cf0a5e3db4835_drugoi_mobile_2" + w,
      linkStart + "/65bb8e766c3179c2e8a81187_drugoi_mobile_3" + w,
      linkStart + "/65bb8e75598d1a73cd8f5d98_drugoi_mobile_4" + w,
      linkStart + "/65bb8e7580abbd93c3ca41c3_drugoi_mobile_5" + w,
      linkStart + "/65bb8e753985a23ac0810ff4_drugoi_mobile_6" + w,
      linkStart + "/65bb8e76f11cf0a5e3db48c1_drugoi_mobile_7" + w,
      linkStart + "/65bb8e766c3179c2e8a81180_drugoi_mobile_8" + w,
      linkStart + "/65bb8e762e30ba3682434760_drugoi_mobile_9" + w,
      linkStart + "/65bb8e766492feee67ca8e83_drugoi_mobile_10" + w,
      linkStart + "/65bb8e76c38c0adfda0cf297_drugoi_mobile_11" + w,
      linkStart + "/65bb8e7654c7b4ccdf47ac6e_drugoi_mobile_12" + w,
      linkStart + "/65bb8e77b2debb66f6e4a8fb_drugoi_mobile_13" + w,
    ],
    ["n", "w_315", "w_280", "n", "w_280", "w_280", "w_210", "w_179", "w_280", "w_256", "w_256", "w_222", "w_222"],
    "DRUGOI TRAVEL",
    ['w_1358']
  ],
  [
    "karii",
    [
      linkStart + "/65bb97fac38c0adfda12d043_karii_1" + w,
      linkStart + "/65bb97f83985a23ac086bda3_karii_2" + w,
      linkStart + "/65bb97fa63e069cca4462db2_karii_3" + w,
      linkStart + "/65bb9868cd2756c48e2adfba_karii_4-2" + w,
      linkStart + "/65bb97f9f700bdf85527d1ca_karii_5" + w,
      linkStart + "/65bb97fb45898f5feb99e5fb_karii_6" + w,
      linkStart + "/65bb97fbab8587ea14222acc_karii_7" + w,
      linkStart + "/65bb97fa989476b40a371978_karii_8" + w,
      linkStart + "/65bb97fa3dcd04a35115eee1_karii_9" + w,
      linkStart + "/65bb97fb1c34a61f6cace306_karii_10" + w,
      linkStart + "/65bb97fbc030bbf1bfed09ce_karii_11" + w,
    ],
    [
      linkStart + "/65bb9e1bea1a00f37bb060f3_karii_mobile_1" + w,
      linkStart + "/65bb9e1bb9773189da9998bd_karii_mobile_2" + w,
      linkStart + "/65bb9e1bc99652b4b05a506c_karii_mobile_3" + w,
      linkStart + "/65bb9d66391f0ea3a241a6b5_karii_mobile_-3" + w,
      linkStart + "/65bb9e1b4de62280d4ab9bcd_karii_mobile_5" + w,
      linkStart + "/65bb9d6690cc33c57cde59ac_karii_mobile_-5" + w,
      linkStart + "/65bb9d661fe9a58477cf9549_karii_mobile_-6" + w,
      linkStart + "/65bb9d66124db108448bdc69_karii_mobile_-4" + w,
      linkStart + "/65bb9e1b18682d9b4c4c6e4d_karii_mobile_9" + w,
      linkStart + "/65bb9d668e1ba1f8664aa923_karii_mobile_-8" + w,
      linkStart + "/65bb9d666c3179c2e8b20826_karii_mobile_-7" + w,
    ],
    ["w_280", "w_280", "w_280", "w_280", "w_280", "w_280", "w_280", "w_280", "w_280", "w_280", "w_280"],
    "KARII OCZENIATA",
    ['w_680']
  ],
  [
    "defence",
    [
      linkStart + "/65bba5a3e081d228a804452a_defence_1" + w,
      linkStart + "/65bba5a3b4cccb546ad189c5_defence_2" + w,
      linkStart + "/65bba5a305a12478f6660881_defence_3" + w,
      linkStart + "/65bba5a3f79bfe477aacdee4_defence_4" + w,
      linkStart + "/65bba5a3e54611dba76bd2ab_defence_5" + w,
      linkStart + "/65bba5a363e069cca44e4289_defence_6" + w,
      linkStart + "/65bba5a345898f5feba20564_defence_7" + w,
    ],
    [
      linkStart + "/65bba8b2598d1a73cda0cfaf_defence_mobile_1" + w,
      linkStart + "/65bba8b29ef82cc9da0738c1_defence_mobile_2" + w,
      linkStart + "/65bba8b2a0ce27cc4dd4972e_defence_mobile_3" + w,
      linkStart + "/65bba8b2b25663b7f61870ae_defence_mobile_4" + w,
      linkStart + "/65bba8b27700cf594b6f7ee7_defence_mobile_5" + w,
      linkStart + "/65bba8b27743a54b972953ef_defence_mobile_6" + w,
      linkStart + "/65bbaa7b16ef09ee6a54e389_defence_mobile_7" + w,
    ],
    ["n", "n", "w_344", "w_260", "n", "w_264", "n"],
    "DK FOUNDATION",
  ],
  [
    "forukraine",
    [
      linkStart + "/65bbabc2e0e5d7afb55ecded_forukraine_1" + w,
      linkStart + "/65bbabc1f2901ad07693e88d_forukraine_2" + w,
      linkStart + "/65bbabc1310f48658c46759f_forukraine_3" + w,
      linkStart + "/65bbabc1bf2348a1e9272c5a_forukraine_4" + w,
      linkStart + "/65bbabc1f866c0c26eb975cc_forukraine_5" + w,
      linkStart + "/65bbabc104497b882a961d1a_forukraine_6" + w,
      linkStart + "/65bbabc1aa88625d1801cdda_forukraine_7" + w,
      linkStart + "/65bbabc1d4234c61eb6237a8_forukraine_8" + w,
    ],
    [
      linkStart + "/65bbace99d64ac44668c8c35_forukraine_mobile_1" + w,
      linkStart + "/65bbace8f34d74db5a2ce8aa_forukraine_mobile_2" + w,
      linkStart + "/65bbace9024dd10363ed2c60_forukraine_mobile_3" + w,
      linkStart + "/65bbace9ffe9bece9880d495_forukraine_mobile_4" + w,
      linkStart + "/65bbace87956428c69021517_forukraine_mobile_5" + w,
      linkStart + "/65bbace9ade30a5be6677b17_forukraine_mobile_6" + w,
      linkStart + "/65bbace8aae583dbd9ca2fe2_forukraine_mobile_7" + w,
      linkStart + "/65bbace8b2164a039580d5bb_forukraine_mobile_8" + w,
    ],
    ["n", "w_210", "n", "w_300", "w_327", "n", "w_191", "w_290"],
    "FORUKRAINE",
  ],
  ,
];

slider_proj_open.forEach((element) => {
  element.addEventListener("click", () => {
    body.style.overflow = "hidden";
    var attrVal = element.getAttribute("popup_slider");

    slidesI.forEach((element) => {
      if (element[0] === attrVal) {
        proj_name.innerHTML = element[4];
        var slideClasses = element[3];
        var slideClassesDesktop = element[5];
        var slideArray = window.innerWidth > 992 ? element[1] : element[2];
        slideArray.forEach((element, index) => {
          var slide = document.createElement("div");
          slide.className = "slide";
          if (window.innerWidth < 992) {
            if (slideClasses[index] !== "n") {
              slide.className = "slide " + slideClasses[index];
            }
          } else {
            if (index === 0 && attrVal === 'drugoi') {
              slide.className = "slide " + slideClassesDesktop[0];
            }
            if (attrVal === 'karii') {
              slide.className = "slide " + slideClassesDesktop[0];
            }
          }
          var img = document.createElement("img");
          img.className = "full_img cover";
          img.src = element;
          slide.appendChild(img);
          sliderWrapper.appendChild(slide);
        });
      }
    });
    ease = window.innerWidth > 992 ? 0.02 : 0.04;
    slider_proj.classList.add("active");
    setTimeout(() => {
      slider_proj_s.classList.add("active");
      setTimeout(() => {
        sliderWrapperB.classList.add("active");
      }, 100);
    }, 1);
    maxScroll = sliderWrapper.offsetWidth - slider.offsetWidth;
  });
});

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function update() {
  current = lerp(current, target, ease);
  gsap.set(".slider_wrapper", {
    x: -current,
  });
  let moveRatio = current / maxScroll;
  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  maxScroll = sliderWrapper.offsetWidth - slider.offsetWidth;
});
if (window.innerWidth > 992) {
  slider_proj.addEventListener("wheel", (e) => {
    target += e.deltaY;
    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
  });
} else {
  slider_proj.addEventListener("touchstart", (e) => {
    touchStart = e.touches[0].clientX;
  });

  slider_proj.addEventListener("touchmove", (e) => {
    e.preventDefault();
    let touchDelta = touchStart - e.touches[0].clientX;
    target += touchDelta * 3;
    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
    touchStart = e.touches[0].clientX;
  });
}

// slider_proj.addEventListener("touchend", (e) => {
//   // обробка кінця дотику, якщо потрібно
// });

update();

slider_proj_close.forEach((element) => {
  element.addEventListener("click", () => {
    body.style.overflow = "auto";

    sliderWrapperB.classList.remove("active");
    setTimeout(() => {
      slider_proj_s.classList.remove("active");
    }, 150);
    setTimeout(() => {
      slider_proj.classList.remove("active");
    }, 350);

    var allSlides = sliderWrapper.querySelectorAll(".slide");
    allSlides.forEach((element) => {
      element.remove();
    });
    maxScroll = 0;
    target = 0;
    current = 0;
    ease = 0;
  });
});
// }
// variables
let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
let counter = {
  value: 10,
};
// let loaderDuration = 5;
let loaderDuration = 1;

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") !== null) {
  // loaderDuration = 5;
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
    if (!currentUrl.includes("projects")) {
      $(".trigger").click();
      setTimeout(() => {
        $(".video_bottom video")[0].play();
      }, 1600);
    }
  }, 650);
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

document.addEventListener("DOMContentLoaded", function () {
  const preloadLogo = document.querySelector(".preload_logo");
  const preloadLogoWhite = document.querySelector(".preload_logo_white");
  const footerHead = document.querySelector(".heading.h1.footer");
  preloadLogo.insertAdjacentHTML(
    "beforeend",
    '<svg class="preload_logo_svg" width="100%" height="100%" viewBox="0 0 190 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.5348 32.0415C81.1117 30.4295 83.0527 29.6235 85.3584 29.6235C87.6642 29.6235 89.5969 30.4295 91.1566 32.0415C92.7333 33.6363 93.5216 35.9 93.5216 38.8326C93.5216 41.7651 92.7333 44.0374 91.1566 45.6493C89.5969 47.2442 87.6642 48.0417 85.3584 48.0417C83.0527 48.0417 81.1117 47.2442 79.5348 45.6493C77.9752 44.0374 77.1953 41.7651 77.1953 38.8326C77.1953 35.9 77.9752 33.6363 79.5348 32.0415ZM89.1476 33.9707C88.1473 32.8561 86.8843 32.2987 85.3584 32.2987C83.8326 32.2987 82.5611 32.8561 81.5439 33.9707C80.5436 35.0855 80.0435 36.7061 80.0435 38.8326C80.0435 40.9591 80.5436 42.5797 81.5439 43.6943C82.5611 44.809 83.8326 45.3663 85.3584 45.3663C86.8843 45.3663 88.1473 44.809 89.1476 43.6943C90.1649 42.5797 90.6734 40.9591 90.6734 38.8326C90.6734 36.7061 90.1649 35.0855 89.1476 33.9707Z" fill="#808080"/><path d="M111.68 35.0769L109.036 35.7457C108.578 34.5624 107.993 33.6964 107.281 33.1477C106.586 32.5817 105.654 32.2987 104.484 32.2987C102.907 32.2987 101.61 32.8647 100.593 33.9965C99.5926 35.1113 99.0925 36.7232 99.0925 38.8326C99.0925 40.9419 99.5926 42.5626 100.593 43.6943C101.61 44.809 102.907 45.3663 104.484 45.3663C105.654 45.3663 106.586 45.092 107.281 44.5433C107.993 43.9773 108.578 43.1027 109.036 41.9195L111.68 42.5883C111.223 44.3203 110.375 45.6666 109.137 46.6268C107.9 47.5701 106.348 48.0417 104.484 48.0417C102.195 48.0417 100.245 47.2357 98.6346 45.6236C97.0411 43.9944 96.2441 41.7307 96.2441 38.8326C96.2441 35.9343 97.0411 33.6793 98.6346 32.0672C100.245 30.4381 102.195 29.6235 104.484 29.6235C106.348 29.6235 107.9 30.1036 109.137 31.064C110.375 32.0071 111.223 33.3449 111.68 35.0769Z" fill="#808080"/><path d="M113.758 32.5044V29.8291H125.253V31.2183L117.242 45.1605H125.584V47.8357H113.377V46.4467L121.489 32.5044H113.758Z" fill="#808080"/><path d="M127.289 29.8291H130.264L133.774 37.3147L137.283 29.8291H140.258L135.172 40.1187V47.8357H132.375V40.1187L127.289 29.8291Z" fill="#808080"/><path d="M141.918 47.8357V29.8291H145.224L149.649 41.8164L154.073 29.8291H157.379V47.8357H154.582V35.6942L150.64 46.1894H148.657L144.716 35.6942V47.8357H141.918Z" fill="#808080"/><path d="M166.177 29.8291H168.822L175.001 47.8357H172.153L170.678 43.3598H164.321L162.846 47.8357H159.998L166.177 29.8291ZM167.499 33.4048L165.16 40.6846H169.839L167.499 33.4048Z" fill="#808080"/><path d="M81.5814 28.3478C82.7116 28.3478 83.6277 27.4211 83.6277 26.2779C83.6277 25.1347 82.7116 24.208 81.5814 24.208C80.4513 24.208 79.5352 25.1347 79.5352 26.2779C79.5352 27.4211 80.4513 28.3478 81.5814 28.3478Z" fill="#808080"/><path d="M89.3119 28.3478C90.442 28.3478 91.3582 27.4211 91.3582 26.2779C91.3582 25.1347 90.442 24.208 89.3119 24.208C88.1818 24.208 87.2656 25.1347 87.2656 26.2779C87.2656 27.4211 88.1818 28.3478 89.3119 28.3478Z" fill="#808080"/><g filter="url(#filter0_f_535_6707)"><path d="M36.6335 59.7661C48.5814 59.7661 58.267 49.9687 58.267 37.8831C58.267 25.7974 48.5814 16 36.6335 16C24.6856 16 15 25.7974 15 37.8831C15 49.9687 24.6856 59.7661 36.6335 59.7661Z" fill="#808080"/></g><mask id="mask0_535_6707" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="47" y="16" width="18" height="44"><path d="M64.756 16.0073H47.4492V59.7734H64.756V16.0073Z" fill="white" /></mask> <g mask="url(#mask0_535_6707)"><path d="M43.1237 59.77C55.0716 59.77 64.7572 49.9727 64.7572 37.887C64.7572 25.8013 55.0716 16.0039 43.1237 16.0039C31.1759 16.0039 21.4902 25.8013 21.4902 37.887C21.4902 49.9727 31.1759 59.77 43.1237 59.77Z" fill="#808080"/></g><defs><filter id="filter0_f_535_6707" x="2.28289" y="3.28289" width="68.7018" height="69.2003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="6.35856" result="effect1_foregroundBlur_535_6707"/></filter></defs></svg>'
  );
  preloadLogoWhite.insertAdjacentHTML(
    "beforeend",
    '<svg width="100%" height="100%" viewBox="0 0 190 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.5348 32.0415C81.1117 30.4295 83.0527 29.6235 85.3584 29.6235C87.6642 29.6235 89.5969 30.4295 91.1566 32.0415C92.7333 33.6363 93.5216 35.9 93.5216 38.8326C93.5216 41.7651 92.7333 44.0374 91.1566 45.6493C89.5969 47.2442 87.6642 48.0417 85.3584 48.0417C83.0527 48.0417 81.1117 47.2442 79.5348 45.6493C77.9752 44.0374 77.1953 41.7651 77.1953 38.8326C77.1953 35.9 77.9752 33.6363 79.5348 32.0415ZM89.1476 33.9707C88.1473 32.8561 86.8843 32.2987 85.3584 32.2987C83.8326 32.2987 82.5611 32.8561 81.5439 33.9707C80.5436 35.0855 80.0435 36.7061 80.0435 38.8326C80.0435 40.9591 80.5436 42.5797 81.5439 43.6943C82.5611 44.809 83.8326 45.3663 85.3584 45.3663C86.8843 45.3663 88.1473 44.809 89.1476 43.6943C90.1649 42.5797 90.6734 40.9591 90.6734 38.8326C90.6734 36.7061 90.1649 35.0855 89.1476 33.9707Z" fill="#FFFFFF"/><path d="M111.68 35.0769L109.036 35.7457C108.578 34.5624 107.993 33.6964 107.281 33.1477C106.586 32.5817 105.654 32.2987 104.484 32.2987C102.907 32.2987 101.61 32.8647 100.593 33.9965C99.5926 35.1113 99.0925 36.7232 99.0925 38.8326C99.0925 40.9419 99.5926 42.5626 100.593 43.6943C101.61 44.809 102.907 45.3663 104.484 45.3663C105.654 45.3663 106.586 45.092 107.281 44.5433C107.993 43.9773 108.578 43.1027 109.036 41.9195L111.68 42.5883C111.223 44.3203 110.375 45.6666 109.137 46.6268C107.9 47.5701 106.348 48.0417 104.484 48.0417C102.195 48.0417 100.245 47.2357 98.6346 45.6236C97.0411 43.9944 96.2441 41.7307 96.2441 38.8326C96.2441 35.9343 97.0411 33.6793 98.6346 32.0672C100.245 30.4381 102.195 29.6235 104.484 29.6235C106.348 29.6235 107.9 30.1036 109.137 31.064C110.375 32.0071 111.223 33.3449 111.68 35.0769Z" fill="#FFFFFF"/><path d="M113.758 32.5044V29.8291H125.253V31.2183L117.242 45.1605H125.584V47.8357H113.377V46.4467L121.489 32.5044H113.758Z" fill="#FFFFFF"/><path d="M127.289 29.8291H130.264L133.774 37.3147L137.283 29.8291H140.258L135.172 40.1187V47.8357H132.375V40.1187L127.289 29.8291Z" fill="#FFFFFF"/><path d="M141.918 47.8357V29.8291H145.224L149.649 41.8164L154.073 29.8291H157.379V47.8357H154.582V35.6942L150.64 46.1894H148.657L144.716 35.6942V47.8357H141.918Z" fill="#FFFFFF"/><path d="M166.177 29.8291H168.822L175.001 47.8357H172.153L170.678 43.3598H164.321L162.846 47.8357H159.998L166.177 29.8291ZM167.499 33.4048L165.16 40.6846H169.839L167.499 33.4048Z" fill="#FFFFFF"/><path d="M81.5814 28.3478C82.7116 28.3478 83.6277 27.4211 83.6277 26.2779C83.6277 25.1347 82.7116 24.208 81.5814 24.208C80.4513 24.208 79.5352 25.1347 79.5352 26.2779C79.5352 27.4211 80.4513 28.3478 81.5814 28.3478Z" fill="#FFFFFF"/><path d="M89.3119 28.3478C90.442 28.3478 91.3582 27.4211 91.3582 26.2779C91.3582 25.1347 90.442 24.208 89.3119 24.208C88.1818 24.208 87.2656 25.1347 87.2656 26.2779C87.2656 27.4211 88.1818 28.3478 89.3119 28.3478Z" fill="#FFFFFF"/><g filter="url(#filter0_f_535_6707)"><path d="M36.6335 59.7661C48.5814 59.7661 58.267 49.9687 58.267 37.8831C58.267 25.7974 48.5814 16 36.6335 16C24.6856 16 15 25.7974 15 37.8831C15 49.9687 24.6856 59.7661 36.6335 59.7661Z" fill="#FFFFFF"/></g><mask id="mask0_535_6707" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="47" y="16" width="18" height="44"><path d="M64.756 16.0073H47.4492V59.7734H64.756V16.0073Z" fill="white" /></mask> <g mask="url(#mask0_535_6707)"><path d="M43.1237 59.77C55.0716 59.77 64.7572 49.9727 64.7572 37.887C64.7572 25.8013 55.0716 16.0039 43.1237 16.0039C31.1759 16.0039 21.4902 25.8013 21.4902 37.887C21.4902 49.9727 31.1759 59.77 43.1237 59.77Z" fill="#FFFFFF"/></g><defs><filter id="filter0_f_535_6707" x="2.28289" y="3.28289" width="68.7018" height="69.2003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="6.35856" result="effect1_foregroundBlur_535_6707"/></filter></defs></svg>'
  );
  if (window.innerWidth > 991) {
    const footerBlock = document.getElementById("footer");
    const footerHB = document.querySelector("footer .heading_block");

    const computedStyle = window.getComputedStyle(footerBlock);
    const paddingBottom = computedStyle.paddingBottom;
    const roundedPaddingBottom = parseInt(paddingBottom, 10);

    marginTop = parseInt(
      (footerBlock.offsetHeight -
        roundedPaddingBottom -
        footerHB.offsetHeight) /
        2,
      10
    );
    marginLeft = parseInt((window.innerWidth - footerHead.offsetWidth) / 2, 10);

    // +

    const footerB = document.querySelector(".footer_button_wrapper_mag");
    const mag_button = document.querySelector("#magnetic_button");
    if (!footerB) {
      return;
    }
    let magButtonX = marginLeft;
    let magButtonY = marginTop;
    const easingFactor = 0.1; // Your easing factor
    const moveMagButton = () => {
      const deltaX = magButtonX - mag_button.offsetLeft;
      const deltaY = magButtonY - mag_button.offsetTop;

      mag_button.style.left = `${
        mag_button.offsetLeft + deltaX * easingFactor
      }px`;
      mag_button.style.top = `${
        mag_button.offsetTop + deltaY * easingFactor
      }px`;
      requestAnimationFrame(moveMagButton);
    };
    footerB.addEventListener("mouseenter", (event) => {
      footerB.addEventListener("mousemove", updateMagButtonPosition);
      updateMagButtonPosition(event);
    });
    footerB.addEventListener("mouseleave", (event) => {
      footerB.removeEventListener("mousemove", updateMagButtonPosition);
      updateMagButtonPosition(event, marginLeft, marginTop);
    });
    function updateMagButtonPosition(event, marginLeft, marginTop) {
      if (marginLeft !== "" && marginLeft !== undefined) {
        magButtonX = marginLeft;
        magButtonY = marginTop;
      } else {
        const { left, top } = footerB.getBoundingClientRect();
        magButtonX = event.clientX - left;
        magButtonY = event.clientY - top;
      }
    }
    requestAnimationFrame(moveMagButton);
  }
});

var elements = document.querySelectorAll('.projects_item_tag');
var counts = {
  'Design': 0,
  'Social Media': 0,
  'Creative': 0,
  'Support': 0
};

elements.forEach(element => {
  if (element.textContent.includes('/Web-design')) counts['Design']++; 
  if (element.textContent.includes('/Social Media')) counts['Social Media']++; 
  if (element.textContent.includes('/Creative')) counts['Creative']++; 
  if (element.textContent.includes('/Support')) counts['Support']++; 
});

function padValue(value) {
  return value < 10 ? '0' + value : value;
}

document.querySelectorAll('[web_numb]').forEach(element => {
  element.innerHTML = padValue(counts['Design']);
});
document.querySelector('[social_numb]').innerHTML = padValue(counts['Social Media']);
document.querySelector('[creative_numb]').innerHTML = padValue(counts['Creative']);
document.querySelector('[support_numb]').innerHTML = padValue(counts['Support']);
