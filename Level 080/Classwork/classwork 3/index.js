// 3) გააკეთეთ ისეთივე ფუნქციონალი Javascript-ის მეშვეობით რაც გაკვეთილზე გავაკეთეთ, თუმცა ამჯერად მომხმარებელს პირველი Input-ის ველში შემოატანინეთ სიტყვა. მეორე ინფუთის ველში კი თავიდან გაამეორებინეთ თავდაპირველად შემოტანილი სიტყვა. იმ შემთხვევაში თუ შემოტანილი ორი მნიშვნელობა არ ემთხვევა ერთმანეთს, console-ში გამოიტანეთ "The values should be equal and not blank". ხოლო თუ ემთხვევა - "The operation was successful".
 

let input1 = document.getElementById('word1')
let input2 = document.getElementById('word2')

function checkSubmit(){
    if(input1.value.trim() === input2.value.trim() && input1.value.trim() != ''){
        alert('The operation was successful')
    }else{
        alert('The values should be equal and not blank')
    }
}