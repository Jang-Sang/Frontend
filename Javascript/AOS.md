<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>aos</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .item {
        position: relative;
        margin: 20rem auto;
        width: 30%;
        height: 50vh;
        background-color: aquamarine;
        font-size: 3rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>

  </head>
  <body>
    <h2>Fade</h2>
    <div class="item" data-aos="fade-up">fade-up</div>
    <div class="item" data-aos="fade-down">fade-down</div>
    <div class="item" data-aos="fade-right">fade-right</div>
    <div class="item" data-aos="fade-left">fade-left</div>
    <div class="item" data-aos="fade-up-right">fade-up-right</div>
    <div class="item" data-aos="fade-up-left">fade-up-left</div>
    <div class="item" data-aos="fade-down-right">fade-down-right</div>
    <div class="item" data-aos="fade-down-left">fade-down-left</div>

    <h2>FILP</h2>
    <div class="item" data-aos="flip-left">flip-left</div>
    <div class="item" data-aos="flip-right">flip-right</div>
    <div class="item" data-aos="flip-up">flip-up</div>

    <h2>ZOOM</h2>
    <div class="item" data-aos="zoom-in">zoom-in</div>
    <div class="item" data-aos="zoom-out">zoom-out</div>
    <div class="item" data-aos="zoom-in-up">zoom-in-up</div>

    ANCHOR PLACEMENT
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="item"
    ></div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      class="item"
    ></div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      class="item"
    ></div>
    <script>
      AOS.init();
    </script>

  </body>
</html>
