const template = document.createElement("template")
template.innerHTML = /*html*/`

  <style>
    :host {
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 0;
      bottom: 0;
      background: transparent;
      padding: min(5vw, 8px);
      background: white;
    }

    [data-test="horizontal-flex"] {
      display: flex;
      justify-content: space-around;
      padding: min(5vw, 8px);
    }

    [data-test="info-text"] {
      font-size: 3vw;
    }

    [data-test="disagree"] {
      text-align: center;
      width: 30vw;
      color: grey;
      font-weight: bold;
      border: none;
      outline: none;
      cursor: pointer;
      padding: min(4vw, 8px);
      font-size: 3vw;
      transition: color 1s;
    }

    [data-test="disagree"]:hover {
      color: red;
    }

    [data-test="agree"] {
      text-align: center;
      width: 30vw;
      padding: min(4vw, 8px);
      background-color: #4caf50;
      color: black;
      font-weight: bold;
      font-size: 3vw;
      cursor: pointer;
      box-shadow: 0 1px 4px grey;
      border-radius: 5px;
      transition: background-color 1s;
    }

    [data-test="agree"]:hover {
      background-color: #81c784;
    }

    @media screen and (min-width: 767px) {
      [data-test="agree"],
      [data-test="disagree"] {
        font-size: 1vw;
      }

      [data-test="info-text"] {
        font-size: 1vw;
      }

      :host {
        width: 30vw;
        margin: min(2vw, 5px);
        border-radius: 5px;
        box-shadow: 0 1px 4px #d8c890;
      }
    }
  </style>

  <p data-test="info-text">Damit wir Ihnen einen angenehmen und sicheren Internetauftritt bieten können, verwendet diese Webseite Cookies.</p>
  <div data-test="horizontal-flex">
    <div data-test="agree">OK</div>
    <div data-test="disagree">Nein, Danke</div>
  </div>

`

export class GetyourCookiesBox extends HTMLElement {

  connectedCallback() {
    if (window.sessionStorage.getItem("cookies")) this.remove()
  }

  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const agreeButton = this.shadowRoot.querySelector("div[data-test='agree']")
    const disagreeButton = this.shadowRoot.querySelector("div[data-test='disagree']")

    agreeButton.addEventListener("click", () => {
      window.sessionStorage.setItem("cookies", true)
      this.remove()
    })

    disagreeButton.addEventListener("click", () => {
      window.sessionStorage.setItem("cookies", false)
      this.remove()
    })
  }

  appendToBody() {
    document.querySelector("body").append(this)
    return this
  }

  // setGoogleAnalyticsTag(gaTag) {
  //   const head = document.querySelector("head")
  //   console.log(head);

  //   const script1 = document.createElement("script")
  //   script1.async = true
  //   script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaTag}`
  //   console.log(script1);

  //   const script2 = document.createElement("script")
  //   script2.innerHTML = `
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', '${gaTag}');
  //   `
  //   console.log(script2);

  //   return this
  // }
}

window.customElements.define("getyour-cookies-box", GetyourCookiesBox)
