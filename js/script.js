// Votre code Javascript ici

window.onload = function () {
    let requestGET = async function(url){
        const requestGET = new Request(url,{
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
            },
            body: {
                /*
                
                */
            }
        });
    }
}
const res = await fetch(requestGET);
console.log(res);
let liste = [];
if (!res) {
    console.log('error');
}else {
    /*
    if (condition) {
        
    }else{

    }
    */
}

/*
fetch('http://reqres.in/api/users?per_page=+12')
    .then(r => r.json())
    .then(data => console.log(data.data[0].id))*/
