const check = function (login, pwd){
    const errors = [];
    if (login !== 'abc') {
        errors.push('bad login');
    }
    else if (pwd!=='123'){
        errors.push('bad pass');
    }

    const response = {};
    if (errors.length > 0 ){
        response.status = 'error';
        response.errors = errors;
    }
    else {
        response.status = 'ok';
    }
    return response;
} 
module.exports.check = check;
