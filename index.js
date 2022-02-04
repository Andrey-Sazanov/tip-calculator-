var check = document.getElementById('check');
var tip5 = document.getElementById('tip-5');
var tip10 = document.getElementById('tip-10');
var tip15 = document.getElementById('tip-15');
var tip25 = document.getElementById('tip-25');
var tip50 = document.getElementById('tip-50');
var total = document.getElementById('all');
var number_of_people = document.getElementById('amount-of-people')
var person = document.getElementById('for-person')
tip5.addEventListener('click',(e)=>{
    total.textContent = check.value * 0.05;
    var all = check.value * 0.05;
    person.textContent = (all/number_of_people.value);
})
tip10.addEventListener('click',(e)=>{
    total.textContent = check.value * 0.10;
    var all = check.value * 0.1;
    person.textContent = (all/number_of_people.value);
})
tip15.addEventListener('click',(e)=>{
    total.textContent = check.value * 0.15;
    var all = check.value * 0.15;
    person.textContent = (all/number_of_people.value);
})
tip25.addEventListener('click',(e)=>{
    total.textContent = check.value * 0.25;
    var all = check.value * 0.25;
    person.textContent = (all/number_of_people.value);
})
tip50.addEventListener('click',(e)=>{
    total.textContent = check.value * 0.5;
    var all = check.value * 0.5;
    person.textContent = (all/number_of_people.value);
})
