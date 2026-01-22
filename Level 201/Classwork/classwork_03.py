# 3) შექმენით ტექსტური ფაილი ამფაილში შეინახეთ სხვადასხვა სახელები, პითონიდან წაიკითხეთ ეს ფაილი საბოლოოდ დააბრუნეთ ტერმინალში შედეგას list სადაც იქნება თითოული სახელი ჩამატებული და გვერძე ექნება მიწერილი goa, გამოიყენეთ list comprehension

with open('Level 201/Classwork/file_01.txt', 'r') as file:
    print(' '.join([name+'goa' for name in file.read().split()]))