//
// let someText = document.getElementById('text1');
//
// someText.oninput = () =>{
//     localStorage.setItem('smth', someText.value)
// }
//
// someText.value = localStorage.getItem('smth')
//


// let form = document.forms.form1;
// getData(form)
//
// form.oninput = () =>{
//     for (let i = 0; i < form.length; i++) {
//         const tagElement = form[i];
//
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked ? tagElement.value = true : tagElement.value = false
//
//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
//
// }
//
// function getData(tag){
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id))
//             tag.children[i].value = localStorage.getItem(tag.children[i].id)
//             if (tag.children[i].value === 'true'){
//                 tag.children[i].setAttribute('checked', 'checked');
//         }
//     }
// }

//
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let text = document.getElementById('text');
// let save = document.getElementById('save');
// someBtn();
//
// save.onclick = () =>{
//     localStorage.setItem(localStorage.length + 1, text.value);
// }
//
// function someBtn(){
//     text.value = localStorage.getItem(localStorage.length);
//     let checkpoint = localStorage.length
//     left.onclick = () => {
//         if (checkpoint <= 1) {
//             checkpoint = localStorage.length + 1
//             text.value = localStorage.getItem(checkpoint);
//         }
//         text.value = localStorage.getItem(checkpoint - 1);
//         checkpoint -= 1;
//     }
//
//     right.onclick = () =>{
//         checkpoint += 1;
//         if (checkpoint > localStorage.length){
//             checkpoint = 1;
//             text.value = localStorage.getItem(checkpoint);
//         }
//         text.value = localStorage.getItem(checkpoint);
//     }
// }
















































































