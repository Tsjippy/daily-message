import {
  copyFormInput,
  fixNumbering,
  removeNode,
} from "@tsjippy/form_exports";

document.addEventListener("click", function (event) {
  let target = event.target;

  //add block
  if (target.matches(".add")) {
    copyFormInput(target.closest(".clone-div"));

    fixNumbering(target.closest(".clone-divs-wrapper"));

    target.remove();
  }

  //remove block
  if (target.matches(".remove")) {
    //Remove node clicked
    removeNode(target);
  }
});
