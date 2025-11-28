// useReducer hook
/* 
useReducer ძალიან ჰგავს useState-ს. ოღონდ შეგვიძლია გადავცეთ ჩვენი ლოგიკა/ფუნქცია.
useReducer-ს გადაეცემა სამი არგუმენტი

სინტაქსი:
const [state, dicpatch] = useReducer(reducer, initialState, init)

------------------------------------------------------------------

reducer - არის ჩვენ მიერ შექმნილი ფუნქცია, ან ამ ფუნქციის სახელი ; 
initialState - საწყისი მნიშვნელობა
init - 


------------------------------------------------------------------
მაგალითი:

function reduction(state, action) {
    
}

// dicpatch - არის ფუნქცია რომელიც ეუბნება reducer ფუნქციას რა უნდა გააკეთოს
*/