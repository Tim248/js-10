let arr = [];

for(let i = 0; i < Infinity; i++) {
    let arrAdd = prompt('Введите команду: ')
    let splited = arrAdd.split(', ');
    if(splited[0] == 'add') {
        arr.push(splited[1])
    }
    else if(splited[0] == 'del') {
        for (let x = 0; x < arr.length; x++) {
            arr[x] == splited[1] ? arr.splice(x, 1) : '';
        }
    }
    else if(splited[0] == 'stop') {
        break;
    } 
    console.log(arr);
}