# 6) დაწერე ფუნქცია is_unique(s), რომელიც აბრუნებს True-ს თუ სტრინგში ყველა სიმბოლო უნიკალურია.


def is_unique(s):
    return len(set(s.lower())) == len(s)

print(is_unique('TeST_209'))
print(is_unique('anA'))
print(is_unique('goa'))
print(is_unique('123'))