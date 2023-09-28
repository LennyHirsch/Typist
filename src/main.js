const { invoke } = window.__TAURI__.tauri;
// import { open } from '@tauri-apps/api/dialog';

// let greetInputEl;
// let greetMsgEl;
let textarea;
let button;
let file = "test.txt";
// let name;
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }
// async function openDialog() {
//     const selected = await open({
//       multiple: false
//     });
//     console.log(selected);
//     return selected;
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
  });

  // document.querySelector("#open").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   name = openDialog();
  //   document.getElementById("title").innerHTML = name;
  // });
});
