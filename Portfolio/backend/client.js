// Fetch all of the users
fetch("http://localhost:3000/api/users").then((response) => {return response.json()}).then((response) =>{req = response}).then(() => {console.log(req);});



// Make a new chick named Chiquita
fetch("http://localhost:3000/api/user", 
    {method:"POST", 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(
            {name: "Chiquita", points: "1"}) 
        }).then((response) => {console.log(response.json())})

// Update Chiquita to be older
fetch("http://localhost:3000/api/user/3", {method:"PUT", headers:{'Content-Type':'application/json'},body:JSON.stringify({name: "Chiquita", points: "2"}) }).then((response) => {console.log(response.json())})

// Fetch only Chiquita
fetch("http://localhost:3000/api/user/1").then((response) => {return response.json()}).then((response) =>{req = response}).then(() => {console.log(req);});

// Delete Chiquita
fetch("http://localhost:3000/api/user/68f11b5f87cab0fc369e5f07", {method:"DELETE"}).then((response) => {console.log(response.json())})

//Delete all users
fetch("http://localhost:3000/api/users", {method:"DELETE"}).then((response) => {console.log(response.json())})