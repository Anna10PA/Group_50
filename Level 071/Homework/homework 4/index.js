// 4)შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ

let all = ['Ana Puturidze', 'Giorgi Puturidze', 'Saba Puturidze', 'Nini Puturidze']
let result = []
for (let element of all){
    let newArr = element.split(" ");
    result.push(newArr[0][0] +'.'+newArr[1][0])
}
console.log(result)
