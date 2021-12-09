// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let f1 = document.createElement('form');
// let inputName = document.createElement('input');
// let inputAge = document.createElement('input');
// let inputBtn = document.createElement('button');
// inputName.setAttribute('name', 'textName');
// inputAge.setAttribute('name', 'textAge');
// inputBtn.innerText = 'submit';
// f1.append(inputName, inputAge, inputBtn);
// document.body.appendChild(f1);
//
//
// inputBtn.addEventListener('click', () => {
//     localStorage.setItem(inputName.value, inputAge.value);
//
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let inputModel = document.createElement('input');
let inputType = document.createElement('input');
let inputVolume = document.createElement('input');
let inputBtn = document.createElement('button');
inputModel.setAttribute('name', 'textName');
inputType.setAttribute('name', 'textAge');
inputVolume.setAttribute('name', 'textVolume');
inputBtn.innerText = 'submit';
document.body.append(inputModel, inputType, inputVolume, inputBtn);
let item = 'key';
let car = (inputModel, inputType, inputVolume) => {
    let newArr = JSON.parse(localStorage.getItem(item)) || [];

    newArr.push({inputModel, inputType, inputVolume});
    localStorage.setItem(item, JSON.stringify(newArr));
}

inputBtn.addEventListener('click', () => {
    car(inputModel.value, inputType.value, inputVolume.value);
})