# Banner 제작하기

// 설계
/\*
(1) prevBtn
내가 보여줘야하 하는 li(현재 li의 이전)을/를 제외하고 나머지 li는 투명화 시킬거고
내가 보여줘야하는 li는 실체화 시킬거다

(2) nextBtn
내가 보여줘야하 하는 li(현재 li의 다음)을/를 제외하고 나머지 li는 투명화 시킬거고
내가 보여줘야하는 li는 실체화 시킬거다

(3) 내가 보여줘야하는 li
유사배열객체 >> 특정한 li를 뽑을 수 있을 수 있는 방법
인덱스로 접근

prevBtn index -1
nextBtn index +1

(4) 예외상황
0 > -1(x) > 마지막
2 > 3(x) > 0
\*/

- 배너 제작하기

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /*glboal*/
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /*common*/
      .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /*banner*/
      .banner-box {
        width: 1080px;
        border: 1px solid #000;
        margin: 1rem auto;
        overflow: hidden;
      }

      .banner-item {
        min-width: 100%;
        height: 300px;
        background-color: red;
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
      }

      .banner-list > li:nth-of-type(2) {
        background-color: blue;
      }

      .banner-list > li:nth-of-type(3) {
        background-color: green;
      }

      /*shade*/
      #shade-banner > ul {
        width: 100%;
        height: 300px;
        position: relative;
      }

      #shade-banner > ul > li {
        position: absolute;
        transition: opacity 2s;
      }

      #shade-banner > ul > li:nth-of-type(1) {
        z-index: 300;
      }

      #shade-banner > ul > li:nth-of-type(2) {
        z-index: 200;
      }

      #shade-banner > ul > li:nth-of-type(3) {
        z-index: 100;
      }

      /*sldie*/
      #slide-banner > ul {
        width: 100%;
        display: flex;
        transition: transform 2s ease-in-out;
      }
    </style>

  </head>
  <body>
    <h2>Banner</h2>
    <!--shade banner -->
    <div id="shade-banner" class="banner-box">
      <ul class="banner-list">
        <li class="banner-item flex-center">1</li>
        <li class="banner-item flex-center">2</li>
        <li class="banner-item flex-center">3</li>
      </ul>
      <div>
        <button class="shade-prev-btn">prev</button>
        <button class="shade-next-btn">next</button>
      </div>
    </div>
    <!-- slide banner-->
    <div id="slide-banner" class="banner-box">
      <ul class="banner-list">
        <li class="banner-item flex-center">1</li>
        <li class="banner-item flex-center">2</li>
        <li class="banner-item flex-center">3</li>
      </ul>
      <div>
        <button class="slide-prev-btn">prev</button>
        <button class="slide-next-btn">next</button>
      </div>
    </div>
    <marquee>안녕하세요</marquee>
    <script>
      // shade
      const $shadebanner = document.querySelectorAll("#shade-banner > ul > li");
      const $shadebannerPrevBtn = document.querySelector(".shade-prev-btn");
      const $shadebannerNextBtn = document.querySelector(".shade-next-btn");

      let shadeBannerIndex = 0;
      function bannerPaint() {
        $shadebanner.forEach((banner, index) => {
          if (index === shadeBannerIndex) {
            banner.style.opacity = 1;
          } else {
            banner.style.opacity = 0;
          }
        });
      }

      function prevShadeBanner() {
        if (shadeBannerIndex <= 0) {
          shadeBannerIndex = $shadebanner.length - 1;
        } else {
          shadeBannerIndex--;
        }

        // for (let banner of $shadebanner) {
        //   banner.style.opacity = 0;
        // }
        // $shadebanner[shadeBannerIndex].style.opacity = 1;
        bannerPaint();
      }

      function nextShadeBanner() {
        if (shadeBannerIndex >= $shadebanner.length - 1) {
          shadeBannerIndex = 0;
        } else {
          shadeBannerIndex++;
        }
        bannerPaint();
      }

      $shadebannerPrevBtn.addEventListener("click", prevShadeBanner);
      $shadebannerNextBtn.addEventListener("click", nextShadeBanner);
    </script>

  </body>
</html>
