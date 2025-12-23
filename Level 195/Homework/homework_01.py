# 1) მოცემულია რიცხვების სია: nums = [1, 2, 3, 4, 5, 6]. იპოვე ყველა უნიკალური წყვილი (a, b), სადაც: a + b == 7

nums = [1, 2, 3, 4, 5, 6]

result = []

for num1 in nums:
    for num2_index in range(nums.index(num1), len(nums)):
        if num1 + nums[num2_index] == 7:
            result.append((num1, nums[num2_index]))

print(set(result))