# 4) შექმენი კლასი BankAccount: რომელსაც ექნება owner, balance, currency. შექმენი 2 ანგარიში და დაბეჭდე: რომელი ანგარიშია უფრო დიდი თანხით.

class BankAccount():
    def __init__(self, owner, balance, currency):
        self.owner = owner
        self.balance = balance
        self.currency = currency

user1 = BankAccount('name1', 2000, "GEL")
user2 = BankAccount('name2', 3000, "GEL")

print("user1" if user1.balance > user2.balance else 'user2' if user1.balance < user2.balance else 'They have same balance')

