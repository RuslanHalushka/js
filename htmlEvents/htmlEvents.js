//
// let someDiv = document.createElement('div');
// someDiv.style.width = '400px';
// someDiv.style.height = '300px';
// someDiv.style.backgroundColor = 'pink';
//
// document.body.appendChild(someDiv);
//
// someDiv.setAttribute('id', 'text');
//
// let btn = document.createElement('button');
// btn.style.margin = '5px'
// btn.innerText = true;
// document.body.appendChild(btn);


// btn.onclick = () =>{
//     someDiv.style.display === '' ? someDiv.style.display = 'none' : someDiv.style.display = ''
//     btn.innerText === 'true' ? btn.innerText = false : btn.innerText = true
// }


// btn.onclick = () =>{
//     return btn.style.display = 'none'
// }


// let text = document.createElement('input');
// let btn = document.createElement('button');
// text.type = 'number';
// btn.innerText = 'click';
// btn.style.marginLeft = '5px';
//
// document.body.appendChild(text);
// document.body.appendChild(btn);
//
// btn.onclick = () =>{
//     if (text.value < 18){
//         alert('Go home!')
//     }
//     return alert('Welcome!')
// }



// let arrList = [
//     {title: 'lorem', body: 'Nijjoijaln fwiofssj iwejf.'},
//     {title: 'Hkjsid', body: 'wdpwd fwiofssj iwejf.'},
//     {title: 'NJN', body: 'Nijjwdokowdk'},
//     {title: 'JIJIij', body: 'Niwdokoiwejf.'},
//     {title: 'soosm', body: 'Nijjoiprrjf.'},
//     {title: 'wokkd', body: 'Niwejf.'}
// ];
//
// for (const i of arrList){
//     let div = document.createElement('div');
//     let btn = document.createElement('button');
//
//     div.style.margin = '15px';
//     div.innerHTML = `title: ${i.title}, body: ${i.body}`;
//     btn.innerText = 'Hide';
//     document.body.appendChild(div);
//     document.body.appendChild(btn);
//
//     btn.onclick = () =>{
//         div.innerHTML = 'title: ' + i.title
//     }
// }

// let btn = document.getElementById('btn');
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// let input3 = document.getElementById('input21');
// let input4 = document.getElementById('input22');
//
// btn.onclick = () =>{
//     console.log(input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }

// let div = document.createElement('div');
// document.body.appendChild(div);
// function createTable(tag, rows, columns){
//     let table = document.createElement('table');
//     for (let i = 0; i < rows; i++){
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++){
//             const td = document.createElement('td');
//
//             td.innerHTML = i +''+ j;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table)
// }
//
// createTable(div, 4, 5);





