import _ from "lodash";
import { add } from "./calc";
import sample from "./img/sample.png";

function component() {
  var element = document.createElement("div");

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(["Hello", "webpack", add(2, 3)], " ");

  const myIcon = new Image();
  myIcon.src = sample;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
