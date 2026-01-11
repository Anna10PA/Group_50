# 3) მოცემულია words = ["hi", "hello", "world"], შექმენი lambda რომელიც აბრუნებს სტრინგების სიგრძეს

words = ["hi", "hello", "world"]

words_length = lambda word: [len(w) for w in word]
print(words_length(words))


