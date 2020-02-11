/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  let R1 = { x1: rec1[0], y1: rec1[1], x2: rec1[2], y2: rec1[3] };
  let R2 = { x1: rec2[0], y1: rec2[1], x2: rec2[2], y2: rec2[3] };
  let result;
  if (R1.x2 <= R2.x1 || R2.x2 <= R1.x1) {
    result = false;
  } else if (R1.y2 <= R2.y1 || R2.y2 <= R1.y1) {
    result = false;
  } else {
    result = true;
  }
  if (result === true) {
    R3 = {};
    R3.x1 = Math.max(R1.x1, R2.x1);
    R3.y1 = Math.max(R1.y1, R2.y1);
    R3.x2 = Math.min(R1.x2, R2.x2);
    R3.y2 = Math.min(R1.y2, R2.y2);
    let area = Math.abs(R3.x1 - R3.x2) * Math.abs(R3.y1 - R3.y2);
    return area;
  } else return 0;
};

isRectangleOverlap([-3, 0, 3, 4], [0, -1, 9, 2]);
