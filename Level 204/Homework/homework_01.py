# 1) შექმენი კლასი Player: რომელსაც ექნება name, score, level. შექმენი 3 მოთამაშე და დაბეჭდე: რომელი მოთამაშეა ყველაზე მაღალი score-ით


class Player():
    def __init__(self, name, score, level):
        self.Name = name,
        self.Score = score,
        self.Level = level

player1 = Player('name1', 200, 208)
player2 = Player('name2', 300, 100)
player3 = Player('name3', 305, 100)

print(int(list(max([player1.Score, player2.Score, player3.Score]))[0]))

