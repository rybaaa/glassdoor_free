chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const removeDiv = () => {
    const divToRemove = document.getElementsByClassName("gdGrid css-1xxrqhd e91w1dn4");
    if (divToRemove.length > 0) {
      for (const element of divToRemove) {
        element.remove();
      }
    } else {
      console.log("DIV NOT FOUND");
    }
    const body = document.body;
    body.style.overflow = null;
    document.addEventListener(
      "scroll",
      (event) => {
        event.stopPropagation();
      },
      true
    );
  };
  const { type, company } = obj;

  if (type === "new") {
    removeDiv();
  } else {
    console.log("NOT NEW TYPE");
  }
});
