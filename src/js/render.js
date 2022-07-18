export function _renderGetyourAccountInputField() {
  const fields = document.querySelectorAll("div[class*='getyour-account-input-field'")

  if (fields.length === 0) return

  fields.forEach(field => {
    const input = document.createElement("input")

    input.setAttribute("type", "text")
    input.setAttribute("name", "accountId")
    input.setAttribute("pattern", "\\d.\\d.\\d{4,}")
    input.setAttribute("required", "true")
    input.setAttribute("title", "Geben Sie hier Ihre Hedera Account Id an.")

    input.setAttribute("style", `
      border: none;
      background-color: transparent;
      width: 100%;
      height: 100%;
      padding-left: 20px;
    `)

    input.addEventListener("keyup", (event) => {
      input.setAttribute("style", `
        border-radius: 15px;
        border-color: red;
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding-left: 20px;
      `)
      input.setAttribute("title", "Dieses Feld ist notwendig.")

      if (input.checkValidity()) {
        input.setAttribute("style", `
          border-radius: 15px;
          border-color: green;
          background-color: transparent;
          width: 100%;
          height: 100%;
          padding-left: 20px;
        `)
        input.setAttribute("title", "✅")
      }
    })

    field.appendChild(input)
  })
}
_renderGetyourAccountInputField()
