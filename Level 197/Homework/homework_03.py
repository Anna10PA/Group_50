# 3. https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

def persistence(n):
    count = 0
    while n >= 10:
        sum = 1   
        for i in str(n):
            sum *= int(i)
        count += 1   
        n = sum
    return count