# 3) შექმენი კლასი ExamResult: რომელსაც ექნება student_name, math, english, science. შექმენი 2 სტუდენტი და დაბეჭდე: ვის აქვს ჯამური ქულა მეტი.

class ExamResult():
    def __init__(self, student_name, math, english, science):
        self.name = student_name
        self.math = math
        self.english = english
        self.science = science
        
    def sum_score(self):
        return [self.math + self.english + self.science, self.name]


student_01 = ExamResult('name1', 100, 90, 95)
student_02 = ExamResult('name2', 80, 100, 65)
student_03 = ExamResult('name3', 100, 90, 85)

print(student_01.sum_score() if student_01.sum_score()[0] > student_02.sum_score()[0] and student_01.sum_score()[0] > student_03.sum_score()[0] else student_02.sum_score() if student_02.sum_score()[0] >  student_01.sum_score()[0] and  student_02.sum_score()[0] > student_03.sum_score()[0] else student_03.sum_score()[0])