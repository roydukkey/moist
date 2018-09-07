'use strict';

// Inputs
const map = [
  [7, 5, 11, 1, 2, 2, 3, 1],
  [8, 9, 10, 2, 1, 1, 1, 1],
  [1, 2, 1,  2, 2, 1, 1, 2],
  [0, 3, 4,  5, 4, 2, 1, 1],
  [1, 2, 3,  6, 7, 9, 0, 1]
];
const start = [0, 1];
const moves = 1;

// Execute
let curElevation = getElevation(map, start);

if (curElevation < 0) {
  console.log(`You seem to have traveled off the map bases on the coordinates [${start}].`);  
}
else {
  console.log(`Your current position is [${start}] with an elevation of ${getElevation(map, start)}.`);

  let extractAt =  getExtractionPoint(map, start, moves);

  if (extractAt === start) {
    console.log(`You are currently at the highest available extraction point. Stay there!`);
  }
  else {
    console.log(`Move to the coordinates [${extractAt}] for extraction at an elevation of ${getElevation(map, extractAt)}`);
  }
}

/**
 * Gets the coordinates of the highest extraction point within the specified number of moves.
 * 
 * @param {number[][]} elevationMap - The map the describes the elevation of an area
 * @param {number[]} currentCoordinates - The position on the map to navigate from
 * @param {number} moves - The number of movements that can be taken in any direction
 */
function getExtractionPoint(elevationMap, currentCoordinates, moves) {
  let [x, y] = currentCoordinates;
  let curElevation = getElevation(elevationMap, currentCoordinates);
  moves = Math.max(0, moves);

  let extractAt = currentCoordinates;

  for (let iY = Math.max(0, y - moves); iY < Math.min(elevationMap.length, y + moves + 1); iY++) {
    let yMap = elevationMap[iY];

    for (let iX = Math.max(0, x - moves); iX < Math.min(yMap.length, x + moves + 1); iX++) {
      if(iY == y && iX == x) continue;

      if (curElevation < yMap[iX]) {
        curElevation = yMap[iX];
        extractAt = [iX, iY];
      }
    }
  }

  return extractAt;
}

/**
 * Get the elevation of the specified coordinate according to a given map. 
 * 
 * @param {number[][]} elevationMap - The map the describes the elevation of an area 
 * @param {number[]} coordinates - The position on the map to query for an elevation
 */
function getElevation(elevationMap, coordinates) {
  if(coordinates[1] < elevationMap.length) {
    elevationMap = elevationMap[coordinates[1]]

    if(coordinates[0] < elevationMap.length) {
      return elevationMap[coordinates[0]];
    }
  }

  return -1;
}
