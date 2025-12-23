# 2) მოცემულია სეტი და text ცვლადი: banned = {"bad", "ugly", "stupid"}, text = "This is a bad and ugly example". შეამოწმე: შეიცავს თუ არა ტექსტი აკრძალულ სიტყვებს, დაბეჭდე რომელი აკრძალული სიტყვაა ნაპოვნი


banned = {"bad", "ugly", "stupid"}
text = "This is a bad and ugly example"

for item in banned:
    if item.lower() in text.lower():
        print('აკრძალული სიტყვა ნაპოვნია:', item)