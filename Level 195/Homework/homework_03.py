# 3) მოცემულია ორი სეტი: yesterday = {"Ana", "Nika", "Luka"}, today = {"Nika", "Saba", "Luka"}. იპოვე: ვინ დაემატა დღეს, ვინ დარჩა სიაში და ვინ ამოვარდა სიიდან


yesterday = {"Ana", "Nika", "Luka"}
today = {"Nika", "Saba", "Luka"}

# task 001
stay = []
for person_1 in yesterday:
    for person_2 in today:
        if person_1 == person_2:
            stay.append(person_1)

# task 002
def check_persons(list1, list2):
    result = []
    for person_1 in list2:
        is_found = False
        for person_2 in list1:
            if person_1 == person_2:
                is_found = True
        if not is_found:
            result.append(person_1)
    return result

# task 003

print(f"Yesterday: {set(check_persons(today, yesterday))}")
print(f'Stay: {set(stay)}')
print(f"Added: {set(check_persons(yesterday, today))}")