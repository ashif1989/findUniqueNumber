import "./styles.css";

let findUniqueNumber = (str) => {
  let count = {};
  let convertToArray = str.split("");

  for (let char of convertToArray) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  let uniqueStr = Object.keys(count)
    .filter((unstr) => count[unstr] === 2)
    .toString();

  console.log(uniqueStr);
};

findUniqueNumber("eesa");
