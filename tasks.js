    //Задача №1

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    } 
};
//Что выведет консоль и почему? -SyntaxError(we need to put a close bracket on the 6 line)
               
               
    //Задача №2(1)

//Write a JavaScript program to display the current day and time in the following format.  
//Sample Output : 
//Today is : Friday. 
//Current time is : 4 PM : 50 : 22         

let {addEventListener} = document.getElementById('getCurrentDate');

addEventListener('click', function(){
    let today = new Date(), day = new Date().getDay(),
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daySpan = document.getElementById('day'), timeSpan = document.getElementById('time');
    daySpan.innerHTML = days[day];
    timeSpan.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
});
    
    //Задача №2(2)
    
// Write a JavaScript function that reverse a number. 
//Example x = 32243;
//Expected Output : 34223
    
const reverse_a_number = a => {
    a = a + "";
    return a.split("").reverse().join("");
};
console.log(reverse_a_number(32243));
    
    
    //Задача №2(3)
    
//Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial 
//of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
//For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
    
let factorialNum = document.getElementById('factorialBtn');
    factorialNum.addEventListener('click', function(){
        let n = +prompt(' Enter a number: '), numb = n, answer = 1, expression = '',
            span = document.getElementById('factorial');
        if (n === n) {
            for (n; n > 0; n--) {
                answer *= n;
                expression += n;
                if (n !== 1) {
                    expression += ' * ';
                }
            }
            span.innerHTML = `!${numb} = ${expression} = ${answer}`;
        } else {
            alert('Enter: ');
        }
    });
    
    
        //Задача №2(4)
 //Write a JavaScript program that accept two integers and display the larger.
    
let number1;
let number2;
number1 = window.prompt("Input the First integer", "0");
number2 = window.prompt("Input the second integer", "0");

if (parseInt(number1, 10) <= parseInt(num2, 10)) {
    if (parseInt(number2, 10) <= parseInt(number1, 10)) {
        console.log("The values are equal.");
    } else {
        console.log("The larger of is" + number2 + ".");
    }
} else {
    console.log("The larger of is " + number1 + ".");
}
    
    
      //Задача №2(5)
    //Write a simple JavaScript program to join all elements of the following array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"]; Expected Output : 
//"Red,Green,White,Black"
//"Red+Green+White+Black"
    
myColor = ["Red", "Green", "White", "Black"];
    let {log} = console;
    log(myColor.toString());
    log(myColor.join());
    log(myColor.join('+'));

    
    
     //Задача №2(6)
 //Write a JavaScript function to get the month name from a particular date. 
//Test Data :
//console.log(month_name(new Date("10/11/2009"))); 
//console.log(month_name(new Date("11/13/2014")));
//Output :
//"October" 
//"November" 
    
let month_name;
month_name = function (dt) {
    let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        mlistElement = mlist[dt.getMonth()];
    return mlistElement;
};
console.log(month_name(new Date('10/11/2009')));
console.log(month_name(new Date('11/13/2014')));

    
    //Задача №2(7)
 //Write a JavaScript program to test the first character of a string is uppercase or not
    
    let addEventListener;
({addEventListener} = document.getElementById('uppercaseBtn'));

addEventListener('click', function(){
    let isUppercase, str;
    isUppercase = document.getElementById('isUppercase');
    str = prompt();
    isUppercase["innerHTML"] = (str[0] === str[0].toUpperCase()) ? 'This is uppercase' : 'This isn\'t uppercase';
});
    
    
     //Задача №2(8)
//Write a JavaScript program to draw a smile	
    let drawBtn;
drawBtn = document.getElementById('drawBtn');

drawBtn.addEventListener('click', function(){
    let ctx;
    let smile;
    smile = document.getElementById('smile');
    ctx = smile.getContext('2d');

    for (let sElement of ctx.fillStyle = '#ffec42') {
    }
    ctx.beginPath();
    ctx.arc(0x32, 0x32, 0x32, Math.PI*2, 0x0);
    ctx.fill();

    for (let sElement of ctx.fillStyle = '#fff') {
    }
    ctx.beginPath();
    ctx.arc(0x23, 0x8, 0x23, Math.PI*2, 0x0);
    ctx.fill();

    for (let sElement of ctx.fillStyle = '#fff') {
    }
    ctx.beginPath();
    ctx.arc(0x46, 0x23, 0x8, Math.PI*2, 0x0);
    ctx.fill();

    for (let sElement of ctx.fillStyle = '#fff') {
    }
    ctx.beginPath();
    ctx.arc(0x32, 0x3c, 0x1e, Math.PI, 6.3); 
    ctx.fill();
});
    
    
    //Задание №1
    //Необходимо поочередно обратиться к каждому тэгу в нужном порядке, и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

let order;
    order = document.getElementById("showTwisterBtn");
    order.addEventListener('click', function(){
        let arrForTwister;
        arrForTwister = [3, 5, 2, 6, 4, 1];
        let a;
        for (a = 0; !(arrForTwister.length <= a); a++) console.log(document.getElementById(`string-${arrForTwister[a]}`));
    });    
    
    
    
    //Задание №2
  //С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.
    
    let color;
color = document.getElementById("paintElementsBtn");

color.addEventListener('click', () => {
    let element;
    for (let elementNodeListOfElement of element = document.querySelectorAll('.element')) {
        
    };
    for (let a = 0; element.length > a; a++) if (a < element.length / 2) {
        element[a].style.color = 'red'
    } else {
        element[a].style.color = 'green'
    }
});

    
    //Задание №3
    //На странице есть контейнер <ol id="todo-list"></ol>, необходимо с помощью цикла добавить в него пять задач (элементов <li>) 
    //с классом task и текстом, взятым из массива задач из пяти элементов: 
    
 let loops;
loops = document.getElementById('addTasksBtn'); 

loops.addEventListener('click', function(){
    let text, list;
    text = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    list = document.getElementById('list');
    const {length} = text;
    for (let a = 0; length > a; a++) {
        let word;
        word = document.createElement('li');
        for (let taskElement of word.className = 'words') {
        }
        list.appendChild(word);
        for (let sElement of word.innerHTML = text[a]) {
            
        }
    }
});

 
    
        //Задание №4
      //Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
    
 let hr;
hr = document.getElementById('hr');

const text = hr.text;
text('click', function(){
    let article;
    for (let htmlCollectionOfElement of article = document.getElementsByTagName('article')) {
    };
    let p;
    for (let htmlCollectionOfElement of p = article[0].getElementsByTagName('p')) {
    };
    for (let a = 0; a < p.length; a++) {
        p[a].insertAdjacentHTML("afterEnd", '<hr>')
    }
});

    
    
       //Задание №5
   //Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.
    
    
    
     //Задание №6
   //Напишите программу для создания списка задач, которые будет вводить пользователь:
    
let task = document.getElementById('task');

task.addEventListener('click', function(){
    let todoForUser = document.getElementById('forUser');
    let anotherTask = true;
    while (anotherTask) if (task) {
        let listItem = document.createElement('li');
        todoForUser.appendChild(listItem);
        listItem.innerHTML = task;
    } else {
        anotherTask = false;
        return ''
    }
});

