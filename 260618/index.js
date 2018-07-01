let employer = {
    name : 'Vasya',
    surname : 'Pof',
    position : 'director',
    birthday : '1987',
    getFullName : function() {
        let fullname = document.querySelector('.name_el_2').textContent;
        return fullname = this.name +" "+ this.surname;
    },
    getAge : function() {
        let age = document.querySelector('.date_el_2').textContent;
        let a = new Date();
        return age = a.getFullYear()-this.birthday
    }
}
let employer1 = {
    name : 'Chuchuka',
    surname : 'Chuchukovich',
    position : 'slave',
    birthday : '1990',
    getFullName : function() {
        let fullname = document.querySelector('.name_el_2').textContent;
        return fullname = this.name +" "+ this.surname;
    },
    getAge : function() {
        let age = document.querySelector('.date_el_2').textContent;
        let a = new Date();
        return age = a.getFullYear()-this.birthday
    }
}
let btn = document.querySelector('.btn');
btn.addEventListener('click',() =>{
    if (document.querySelector('.position').value == 'director'){
        document.querySelector('.name_el_2').textContent = employer.getFullName();
        document.querySelector('.date_el_2').textContent = employer.getAge()
    }
    document.querySelector('.name_el_2').textContent = employer1.getFullName();
    document.querySelector('.date_el_2').textContent = employer1.getAge()
})
console.log(document.querySelector('.position').textContent);





