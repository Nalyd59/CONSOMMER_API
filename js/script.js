window.onload =  function () {

    let nb = 12;
    fetch('https://reqres.in/api/users?per_page='+nb,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => handleUsers(data))
    .catch(error => console.log(error));
    
    function handleUsers(data) {
        
        let div = document.getElementById('list');
       
            data.data.forEach(users => {
    
                const card = document.createElement('div');
                card.addEventListener('click', () => openModal(user));

                let p1 =  document.createElement("p");
                let p2 = document.createElement("p");
                let img =  document.createElement("img");
                p1.innerHTML = users.first_name +' '+ users.last_name;
                p2.innerHTML = users.email;
                img.src = users.avatar;
                card.appendChild(img);
                card.appendChild(p1);
                card.appendChild(p2);
                div.appendChild(card);
        });
    }
}

  
  






