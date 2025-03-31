'''4) შექმენით ფუნქცია რომელსაც არგუმენტად გადავცემთ სახელს შემდეგ კი ის გვესალმება hello name, გამოიძახეთ ფუნქცია რამდენჯერმე და გადაეცით არგუმენტად სხვადასხვა სახელები'''


names = input('Enter name: ')
def name(name):
    return 'Hello '+ name
print(name('Ana'))
print(name(names))