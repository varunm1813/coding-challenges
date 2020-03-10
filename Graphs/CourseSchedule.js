var canFinish = function(numCourses, prerequisites) {
  let preqList = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    preqList[prerequisites[i][0]]++;
  }

  let stack = [];
  let count = 0;

  for (let i = 0; i < preqList.length; i++) {
    if (preqList[i] == 0) stack.push(i);
  }

  while (stack.length > 0) {
    let node = stack.pop();
    count++;

    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] == node) {
        preqList[prerequisites[i][0]]--;
        if (preqList[prerequisites[i][0]] == 0) stack.push(prerequisites[i][0]);
      }
    }
  }
  return numCourses == count;
};
