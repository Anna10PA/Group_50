# 5) შექმენი კლასი Subscription: რომელსაც ექნება user_name, plan("free", "basic", "pro"), months_active. წესები: free -> max 1 month, basic -> max 6 months, pro -> unlimited. დაბეჭდე რომელ მომხმარებლებს აქვთ ვალიდური subscription. ლოგიკა დაწერე class-ის გარეთ


class Subscription():
    def __init__(self, user_name, plan, months_active):
        self.name = user_name
        self.plan = plan
        self.active = months_active

user = Subscription('Ana', 'basic', 15)
print("max 1 month" if user.plan == 'free' else "max 6 months" if user.plan == 'basic' else 'unlimited' if user.plan == 'pro' else 'not found')