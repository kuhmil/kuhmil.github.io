const windowContent = document.querySelector(".window-content");

function getLastLine () {
  const lines = document.querySelectorAll(".line");
  return lines[lines.length - 1]
}

function createContent(value) {
  const line = document.createElement("p");
  line.classList.add("line");
  line.textContent = "kuhmil@pop-os:~$ " + value;
  return line;
}



function render(value) {
  const content = createContent(value);
  windowContent.appendChild(content);
  const topPos = content.offsetTop;
  windowContent.scrollTop = topPos;
}


function initCommand() {
  const command = [..."ls Projects/ "];
  render("");
  const line = getLastLine();
  let timeout = false;
  command.forEach((char, i) => {
    timeout = setTimeout(() => {
      line.textContent += char;
      if (i === command.length - 2) {
        clearTimeout(timeout);
        timeout = false;
        timeout = setTimeout(() => {
          renderp("");
          loading();
        }, i * 50);
      }
    }, i * 150);
  });
}

function loading() {
  const command = [..."ls "];
  const line = "kuhmil@pop-os:~/Project$ "
}

//
//function loading() {
//  const command = [..."ls "];
//  const line = "kuhmil@pop-os:~/Project$ "
//  let timeout = false;
//  command.forEach((char, i) => {
//    timeout = setTimeout(() => {
//      line.textContent += char;
//      if (i === command.length - 2) {
//        clearTimeout(timeout);
//        timeout = false;
//        timeout = setTimeout(() => {
//          render("");
//        }, i * 50);
//      }
//    }, i * 150);
//  });
//}

initCommand();