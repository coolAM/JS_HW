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
    return acc.trim(elem.name)
},0)
console.log(newCompanyReduce)