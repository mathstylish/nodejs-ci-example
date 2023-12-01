class Calculator {
  sum(...operators) {
    return operators.reduce((acc, curr) => acc + curr);
  }

  subtract(...operators) {
    return operators.reduce((acc, curr) => acc - curr);
  }
}

module.exports = Calculator;
