/**
 * Get the value from the infix-expression input.
 *
 * @returns {string}
 */
function getInfixExpression() {
  return document.getElementById("infix-expression").value || "";
}

/**
 * Set the value of the prefix-expression input.
 *
 * @param {string} prefix
 */
function setPrefixExpression(prefix) {
  document.getElementById("prefix-expression").value = prefix || "";
}

/**
 * Set the value of the postfix-expression input.
 *
 * @param {string} postfix
 */
function setPostfixExpression(postfix) {
  document.getElementById("postfix-expression").value = postfix || "";
}

/**
 * Convert the infix value to prefix and postfix.
 */
function convert() {
  const infix = getInfixExpression();

  const prefix = infixToPrefix(infix || "");
  const postfix = infixToPostfix(infix || "");

  setPrefixExpression(prefix);
  setPostfixExpression(postfix);
}
