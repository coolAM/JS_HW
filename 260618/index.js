let employer = {
    name : 'Vasya',
    surname : 'Pof',
    position : 'director',
    birthday : '1987',
    getFullName : () => {
        let fullname = document.querySelector('.name_el_2').value;
        return fullname = name +" "+ surname;
    },
    getAge : () => {
        let age = document.querySelector('.date_el_2').value;
        let a = new Date();
        return age = a-birthday
    }
}
let employer1 = {
    name : 'Chuchuka',
    surname : 'Chuchukovich',
    position : 'slave',
    birthday : '1990',
    getFullName : () => {
         return document.querySelector('.name_el_2').value = name +" "+ surname;
    },
    getAge : () => {
        let a = new Date();
        return document.querySelector('.date_el_2').value = a-document.querySelector('.date_el_2').value;
    }
}
let btn = document.querySelector('.btn');
btn.addEventListener('click',() =>{
    if (document.querySelector('.enter_position').value == 'director'){
        employer.getFullName;
        employer.getAge
    }
    employer1.getFullName;
    employer1.getAge
})