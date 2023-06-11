let input = '';
async function onNumberClick(val) {
  if (val === "=") {
    await evaluateInput();
  } else if (!Number(val)) {
    let lastChar = input.charAt(input.length - 1);
    if (lastChar === "." || lastChar === "+" || lastChar === "."
      || lastChar === "*" || lastChar === "-" || lastChar === "/") {
      input = input.substring(0, input.length - 1) + val;
      document.getElementById('io_line').innerHTML = `<h3>${input}</h3>`;
    }else {
      input = input + val;
      document.getElementById('io_line').innerHTML = `<h3>${input}</h3>`;
    }
  } else {
    input = input + val;
    document.getElementById('io_line').innerHTML = `<h3>${input}</h3>`;
  }

}

async function clearData() {
  input = '';
  document.getElementById('io_line').innerHTML = `<h3></h3>`;
  document.getElementById('error').innerHTML = `<h3></h3>`;
}

async function evaluateInput() {
  let lastChar = input.charAt(input.length - 1);
  if (lastChar === "." || lastChar === "+" || lastChar === "."
    || lastChar === "*" || lastChar === "-" || lastChar === "/") {
    document.getElementById('error').innerHTML = `<h3>Invalid Input!</h3>`;
  } else {
    let result = eval(input);
    document.getElementById('io_line').innerHTML = `<h3>${result}</h3>`;
    document.getElementById('error').innerHTML = `<h3></h3>`;


  }
}