const { invoke } = window.__TAURI__.tauri;

// let greetInputEl;
// let greetMsgEl;
let textarea;
let button;
let file = "test.txt";
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }

window.addEventListener("DOMContentLoaded", () => {
  // greetInputEl = document.querySelector("#greet-input");
  // greetMsgEl = document.querySelector("#greet-msg");

  textarea = document.querySelector("#content");
  button = document.querySelector("#save");
  invoke('get_content', {filename: file}).then((message) => {
    textarea.value = message;
  });
  document.getElementById("title").innerHTML = file;

  document.querySelector("#save").addEventListener("click", (e) => {
    e.preventDefault();
    invoke('save_content', {filename: "test.txt", content: textarea.value});
  })
});
