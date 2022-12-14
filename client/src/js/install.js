const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// TODO: Implement a click event handler on the `butInstall` element
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  butInstall.addEventListener("click", async () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
});
