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

  return result;
}
