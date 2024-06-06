function findSpaceship(map) {
  let result = ""; // result Variable erstellt
  if (typeof map !== "string") {
    return "no String";
  }

  if (map.includes("X")) {
    result = "found X";
  } else {
    result = "Spaceship lost forever";
  }

  let rows = map.split("\n").reverse();
  console.log(rows);
  for (let i = 0; i < rows.length; i++) {
    const x = rows[i].indexOf("X");
    if (x !== -1) {
      result += `[${x},${i}]`;
    }
  }
  return result;
}
