# 7) დაწერე ფუნქცია pair_sum(nums, target), რომელიც აბრუნებს ყველა უნიკალურ წყვილს (a, b) სადაც a + b == target. pair_sum([1,2,3,4,5,6], 7) დააბრუნე სეტში ტუპლების წყვილები რომლის დროსაც პირობა შესრულდება


def pair_sum(nums, target):
    result = []
    for number_1 in nums:
        for number_2_index in range(nums.index(number_1), len(nums)):
            if number_1 + nums[number_2_index] == target:
                result.append((number_1, nums[number_2_index]))
    return result

print(pair_sum([1, 2, 3, 4, 5, 6], 7))
print(pair_sum([2, 3, 4, 5, 6, 10], 15))
print(pair_sum([12, 23, 5, 15, 16, 20], 35))