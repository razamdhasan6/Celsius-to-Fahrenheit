let cls = document.querySelector(".celsius")
let far=document.querySelector(".fahrenheit")
let btn = document.querySelector(".btn")

function convertCelToFar(cls) {
    return (cls * 9 / 5) + 32;
}

function convertFarToCel(far) {
    return (far - 32) * 5 / 9;
}


btn.addEventListener('click', () => {
    const cels = parseFloat(cls.value);
    const farh = parseFloat(far);
    if (cels) {
        far.value = convertCelToFar(cels).toFixed(2);
    } else if (farh) {
        cls.value =convertFarToCel(farh).toFixed(2);
    } else {
        alert("please enter a valid number")
    }
});


// cls.addEventListener('input', ()=>{
//     const cls1 = parseFloat(cls.value);
//     if (cls1) {
//         far.value=convertCelToFar(cls1).toFixed(2)
//     } else {
//         far.value = ' ';
//     }
// })

// far.addEventListener('input', () => {
//     const far1 = parseFloat(far.value);
//     if (far1) {
//         cls.value = convertFarToCel(far1).toFixed(2);
//     } else {
//         cls.value = ' ';
//     }
// })