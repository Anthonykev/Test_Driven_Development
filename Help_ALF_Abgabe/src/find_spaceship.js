function findSpaceship(map) {
  if (typeof map !== "string") {
    return "no String";
  }

  if (map.includes("X")) {
    return "found X";
  } else {
    return map.length;
  }
}
