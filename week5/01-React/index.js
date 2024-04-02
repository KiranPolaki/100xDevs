let state = {
  count: 0,
};

/// * React State logic
function onButtonPress() {
  state.count++;
  buttonComponenetReRender();
}

function buttonComponenetReRender() {
  const btn = document.getElementById("btnParent");
  btn.innerHTML = "";
  const component = buttonComponent(state.count);
  btn.appendChild(component);
}

function buttonComponent(count) {
  const para = document.createElement("button");
  para.innerHTML = `Counter ${count}`;
  para.setAttribute("onClick", "onButtonPress()");
  return para;
}

buttonComponenetReRender();
