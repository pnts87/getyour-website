function _onLoginButtonClick() {
  const buttons = document.querySelectorAll("div[class*='getyour-login-button']")

  if (buttons.length === 0) return


  buttons.forEach(button => button.addEventListener("click", () => {
      console.log("hi");

    }))
  console.log(buttons);
}
_onLoginButtonClick()
