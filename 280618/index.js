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
let newCompanyMap = [];
newCompanyMap = company.map (function(elem)
     { return {
        name : elem.name.trim(),
        surname : elem.surname.trim()
     }       
    })  
console.log(newCompanyMap);


                                    /*****REDUCE ********/
let newCompanyReduce = [];
newCompanyReduce = newCompanyReduce.reduce (function(acc, elem) {
    console.log(elem.name)
    return acc.elem.name.trim()
},0)
console.log(newCompanyReduce)