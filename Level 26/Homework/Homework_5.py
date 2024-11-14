'''5) იმუშავეთ  .extend  გუნქციაზე და დაწერეთ 5-5 მაგალითი'''

list = [1, 2, 3, 4, 'Ana', True, 10.2]
list2 = [20, 40]
list3 = ["ANA", True]

list2.extend(list)
list.extend(list2)
list3.extend(list)
list.extend(list)
list.extend(list3)

print(list)