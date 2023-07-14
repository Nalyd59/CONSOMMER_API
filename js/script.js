window.onload =  function () {

   
    fetch('https://reqres.in/api/users?per_page=',{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => handleUsers(data))


    
    function handleUsers(data) {
        let ul = document.getElementById('list');
       
            data.data.forEach(users => {
    
                let p1 =  document.createElement("li");
                p1.innerHTML = users.first_name;
                ul.appendChild(p1);
    
                let p2 =  document.createElement("li");
                p2.innerHTML = users.last_name;
                ul.appendChild(p2);
    
    
                let li = document.createElement("li");
                li.innerHTML = users.email;
                ul.appendChild(li);
                
    
                let img =  document.createElement("img");
                img.src = users.avatar;
                ul.appendChild(img);
        });
    }
   
}

  
  






