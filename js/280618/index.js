                                        /*****MAP */
let company = [
    {
        name : 'Vasya ',
        surname : ' Vasyandr    '
    },
    {
        name : ' S t a s ',
        surname : ' Stasovich     '
    }
]
console.log(company)

let a = company;
let newCompanyReduce = [];
newCompanyReduce = a.reduce (function(acc, elem) {
    elem.name = elem.name.trim();
    elem.surname = elem.surname.trim();
    return acc
},a)
console.log(newCompanyReduce);