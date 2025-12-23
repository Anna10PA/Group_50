# 5) მოცემულია სტრინგი "abccdefee" მოაშორე ის ასოები რომლებიც არის უნიკალური სტრინგში

my_str = 'abccdefee'

result = set()

for e in my_str:
    if my_str.count(e) > 1:
        result.add(e)
print(''.join(set(result)))