const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const inputText = document.querySelector("#msg-input").value;
  const encrypted = btoa(inputText);
  const link_msg = document.querySelector("#link-input");
  link_msg.value = `${window.location}#${encrypted}`;
  link_msg.select();
});
