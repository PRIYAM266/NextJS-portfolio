/**
 * Sets the CSS custom property "--doc-height" to the height of the window.
 * @function
 * @name documentHeight
 * @returns {void}
 **/

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener(`resize`, documentHeight);
documentHeight();
