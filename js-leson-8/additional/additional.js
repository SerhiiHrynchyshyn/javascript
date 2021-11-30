// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в
// окремий масив. масив вивести в консоль

let arr = [];
let reCall = (elem) => {
    for (let elements of elem.children) {
        if (elements.className !== '') {
            let classList = elements.className.split(/\s+/);
            for (let i = 0; i < classList.length; i++) {
                arr.push(classList[i]);
            }
        }
        reCall(elements);
    }
}


reCall(document.body);
console.log(arr)
