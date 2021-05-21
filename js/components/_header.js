class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        body {
          padding-top: 60px;
          padding-bottom: 40px;
        }

        .fixed-header {
          position: sticky;
          top: 0;
          width: 100%;
          position: fixed;
          padding: 10px 0;
          color: #FFFEF2;
        }

        .fixed-header {
          top: 0;
        }

        nav {
          height: 75px;
          position: fixed;
          display: absolute;
          text-align: center;
          align-items: center;
          padding-top: 15px;
          background-color: black;
          color: #FFFEF2;
        }

        nav a{
          color: #fff;
          text-decoration: none;
          padding: 7px 25px;
          display: inline-block;
      }

        ul li {
          list-style: none;
          display: inline;
          letter-spacing: 1px;
        }

        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
          display: inline;
        }

        a:hover {
          color: #ff0000;
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 red;
        }

        .container nav-container{
          max-width: 90%
          margin: 0 auto; /* Center the DIV horizontally */
        }

        #header-logo {
          height: 50px;
          width: auto;
        }

      </style>
      <div class="fixed-header">
        <div class="container nav-container">
          <header>
            <nav class="navbar navbar-expand-lg sticky-top">
              <li><a><img id="header-logo" src="assets/images/StephanieStrange_StephAndNina_Logo_Solid.png"></a></li>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                  <button class="navbar-inverse navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <li class="nav-item">
                    <a class="nav-link" href="about.html">Music</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="shows.html">Shows</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="stories.html">Stories</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="subscribe.html">Subscribe</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="bookings.html">Bookings</a>
                  </li>
                  <li class="nav-item">
                    <a class="btn btn-danger" href="merch.html">Merch</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      </div>
    `;
  }

}

customElements.define('header-component', Header);