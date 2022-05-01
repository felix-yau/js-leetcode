var twoSum = function (nums, target) {
  let s = {};
  nums.forEach((num, i) => (s[num] = i));

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (s.hasOwnProperty(complement) && i !== s[complement])
      return [i, s[complement]];
  }
};
