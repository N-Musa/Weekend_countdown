const btn = document.querySelector("button")
const p = document.querySelector("p")
const inputField = document.getElementById('input')
const weekendFunc = () => {
    const dayNum = moment().day();
    const weekDay = moment().format("dddd");
    let user = inputField.value;
    if(dayNum === 6 ||dayNum == 7){
        return p.innerText = `Today is ${weekDay}, and You've Earned Yourself a Weekend! Kudos`
    } else return p.innerText = `Hola ${user}, Today is ${weekDay}. Only ${6 - dayNum} days left until the weekend`
}
btn.addEventListener('click', weekendFunc);
inputField.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){ weekendFunc()}
})