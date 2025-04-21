// 1)შექმენით ცვლადი month ამ ცვლადში მომხმარებელს უნდა შემოატანინოთ თვე ოღონდ რიცხვების საშუალებით(მაგ. 1=იანვარი , 2=თებერვალი , 3 = მარტი) , ამ რიცხვების მეშვეობით დაადგინეთ რომელი თვეა და გამოსახეთ კონსოლში, ამისთვის აუცილებლად გამოიყენეთ switch , იმ შემთხვევაში თუ მომხმარებელმა შემოიყვანა სხვა სიტყვა ან 12 ზე მეტი რიცხვი console-ში გამოიტანოს რომ "ასეთი თვე არ არსებობს"

let monthNumber = Number(prompt('Enter Number: '))

switch(monthNumber){
    case 1:
        alert('იანვარი')
        break
    case 2:
        alert('თებერვალი')
        break
    case 3:
        alert('მარტი')
        break
    case 4:
        alert('აპრილი')
        break
    case 5:
        alert('მაისი')
        break
    case 6:
        alert('ივნისი')
        break
    case 7:
        alert('ივლისი')
        break
    case 8:
        alert('აგვისტო')
        break
    case 9:
        alert('სექტემბერი')
        break
    case 10:
        alert('ოქტომბერი')
        break
    case 11:
        alert('ნოემბერი')
        break
    case 12:
        alert('დეკემბერი')
        break
    default:
        alert('ასეთი თვე არ არსებობს')
}