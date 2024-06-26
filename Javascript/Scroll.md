<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      li {
        list-style: none;
      }

      .flex-align-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      header {
        width: 100%;
        height: 100px;
        background-color: #000;
        color: #fff;
        position: relative;
      }

      header .logo {
        min-width: 100px;
        font-size: 2rem;
        font-weight: bold;
      }

      header .sign-list {
        display: flex;
        max-width: 140px;
      }

      header > nav {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 3rem;
        align-items: center;
        justify-content: space-between;
      }

      header > nav > ul > li {
        margin-left: 1rem;
      }

      header menu {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
      }

      header menu .main-menu {
        min-width: 680px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }

      header menu .main-menu li {
        margin: 0 4rem;
      }

      header menu .hide-menu {
        position: absolute;
        top: 100px;
        display: flex;
        justify-content: center;
        width: 680px;
        overflow: hidden;
        color: #000;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transition: all 1s ease-in-out;
      }

      header menu .hide-menu ul li {
        margin: 0 4rem;
      }
      header menu .hide-menu h4 {
        text-align: center;
        margin: 1rem 0;
      }

      main {
        height: 300vh;
      }
    </style>

  </head>
  <body>
    <header class="flex-align-center">
      <nav>
        <div class="logo">LOGO</div>
        <menu>
          <ul class="main-menu">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <div class="hide-menu">
            <div>
              <ul>
                <li>CONTENT</li>
                <li>CONTENT</li>
                <li>CONTENT</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>CONTENT</li>
                <li>CONTENT</li>
                <li>CONTENT</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>CONTENT</li>
                <li>CONTENT</li>
                <li>CONTENT</li>
                <h4>SUBJECT</h4>
                <li>CONTENT</li>
                <li>CONTENT</li>
                <li>CONTENT</li>
              </ul>
            </div>
          </div>
        </menu>
        <ul class="sign-list">
          <li>sign-in</li>
          <li>sign-up</li>
        </ul>
      </nav>
    </header>
    <main></main>
    <script>
      //
      const $header = document.querySelector("header");
      const $menu = document.querySelector("menu");
      const $hideMenu = document.querySelector(".hide-menu");
      const padding = 64;
      const hideMenuHeight = $hideMenu.offsetHeight;

      //
      $hideMenu.style.height = 0;
      $menu.addEventListener("mouseover", () => {
        $hideMenu.style.padding = "32px";
        $hideMenu.style.height = `${hideMenuHeight + padding}px`;
      });

      $menu.addEventListener("mouseout", () => {
        $hideMenu.style.height = 0;
        $hideMenu.style.padding = 0;
      });

      // scroll
      document.addEventListener("scroll", (e) => {
        console.log(e);
        console.log(document.documentElement.scrollTop);

        if (document.documentElement.scrollTop < 100) {
          $header.style.position = "relative";
          $header.style.backgroundColor = "#000";
          $header.style.color = "#fff";
        } else {
          $header.style.position = "sticky";
          $header.style.backgroundColor = "#fff";
          $header.style.color = "#000";
          $header.style.top = "0";
        }
      });
    </script>

  </body>
</html>
