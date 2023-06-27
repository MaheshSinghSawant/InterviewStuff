import "./styles.css";

// Excel

// Implement a spreadsheet. The spreadsheet can be represented by a data type of your choosing, but it should be easy to get/update individual cells as well as display the entire spreadsheet.
// Each cell in the spreadsheet can have one of the following:
//   - a string such as "Name" in A1 or "John Doe" in A2
//   - a number such as 263 in B1 or 75 in B2
//   - a formula linking other items in the spreadsheet. Ex: "=C1*C2" in D2 or "=C1+C2" in D3
//     - cells that reference other cells with formulas are said to have dependencies. If the value in C1 or C2 changes, D2 will also need to be updated since it depends on those inputs.

// In the language of your choosing, implement the following functions:
// - 'initSpreadsheet', initialize the data structure storing your spreadsheet
// - 'addCell', to add a cell to your spreadsheet
// - 'getCell', to get the value inside of a spreadsheet cell
// - depending on your code, you might also implement 'parseCell' to handle all relevant formula parsing

// Assumptions:
// - assume the spreadsheet is initialized with 26 columns, 100 rows
// - assume valid input (no error checking needed on input, particularly formulas)
// - assume that if a string begins with a '=', it's a valid formula
// - assume we just want to handle basic arithmetic operations for now (+-*/) between two cells like '=B1*B2' or '=A1+A2'

class Spreadsheet {
  constructor() {
    this.sheet = this.initSpreadsheet();
  }

  initSpreadsheet() {
    const rows = 100;
    let result = new Array(rows);

    const alphabets = 26;
    for (let i = 0; i < result.length; i++) {
      result[i] = new Array(alphabets);
    }

    const aNum = "A".charCodeAt(0);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < alphabets; j++) {
        let key = `${String.fromCharCode(aNum + j)}${i + 1}`;

        result[i][j] = { key, value: null, dependencies: [], expression: "" };
      }
    }
    return result;
  }

  getCell(key) {
    const aNum = "A".charCodeAt(0);
    let alpha = key.charCodeAt(0) - aNum;
    let num = Number(key.substring(1)) - 1;
    return this.sheet[num][alpha];
  }

  addCell(key, value) {
    let cell = this.getCell(key);

    if (typeof value === "string" && value.charAt(0) === "=") {
      const { cell1, cell2, value: fvalue } = this.parseCell(
        value.substring(1)
      );
      cell.expression = value;
      cell.value = fvalue;
      this.getCell(cell1).dependencies.push(key);
      this.getCell(cell2).dependencies.push(key);
    } else {
      cell.value = value;
      if (cell.dependencies.length) {
        const dependentKey = cell.dependencies.shift();
        const dependent = this.getCell(dependentKey);
        this.addCell(dependentKey, dependent.expression);
      }
    }
  }

  parseCell(formula) {
    const regex = new RegExp("[*+-/]");
    let opIndex = formula.search(regex);
    let cell1 = formula.substring(0, opIndex);
    let cell2 = formula.substring(opIndex + 1);
    let opFinal = formula.substring(opIndex, opIndex + 1);

    let value = eval(
      `${this.getCell(cell1).value}${opFinal}${this.getCell(cell2).value}`
    );
    return { cell1, cell2, opFinal, value };
  }

  printCell(key) {
    console.log(this.getCell(key).value);
  }
}

let spreadsheet = new Spreadsheet();
spreadsheet.addCell("A1", 1);
spreadsheet.addCell("A4", "John doe");
spreadsheet.addCell("A2", 4);
spreadsheet.addCell("B1", "=A1+A2");
spreadsheet.addCell("B2", "=A1+A2");
spreadsheet.printCell("B1");
spreadsheet.addCell("A1", 2);
spreadsheet.printCell("A1");
spreadsheet.printCell("B1");

// console.log(spreadsheet.getCell("B1"));
// console.log(spreadsheet.getCell("A4"));
