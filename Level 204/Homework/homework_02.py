# 2) შექმენი კლასი Product: რომელსაც ექნება name, price, quantity. შექმენი პროდუქტების სია და დაბეჭდე ყველაზე ძვირი და ყველაზე იაფი პროდუქტები


class Product():
    def __init__(self, price, quantity):
        self.Price = price,
        self.Quantity = quantity

product_list = [Product(200, 3).Price, Product(100, 2).Price, Product(300, 1).Price]
print(f"max price: {int(list(max(product_list))[0])}, min price: {int(list(min(product_list))[0])}")
