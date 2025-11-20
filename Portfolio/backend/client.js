fetch("http://localhost:5000/api/test-cookie", 
    {
        method: "GET",
        credentials: "include",
    })
  .then(res => res.json())
  .then(data => console.log("Cookie test:", data))
  .catch(err => console.error(err));


// Fetch all of the users
fetch("http://localhost:5000/api/users").then((response) => {return response.json()}).then((response) =>{req = response}).then(() => {console.log(req);});



// Make a new user named Chiquita
fetch("http://localhost:5000/api/user", 
    {method:"POST", 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(
            {name: "Chiquita"}) 
        }).then((response) => {console.log(response.json())})

//Give user an emerald
fetch("http://localhost:3000/api/user/68f1d17f70b9925d72a2acd6/emeralds", 
    {method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            { emerald: "green" })
        }).then(res => res.json()).then(data => console.log("Updated user:", data))


// Fetch only Chiquita
fetch("http://localhost:3000/api/user/68f11b5f87cab0fc369e5f07").then((response) => {return response.json()}).then((response) =>{req = response}).then(() => {console.log(req);});

// Delete a user
fetch("http://localhost:3000/api/user", {method:"DELETE"}).then((response) => {console.log(response.json())})

//Delete all users
fetch("http://localhost:5000/api/users", {method:"DELETE"}).then((response) => {console.log(response.json())})




fetch("http://localhost:5000/api/user", {
    method:"POST",
    headers:{ 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Chiquita" })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


const user = await fetch("http://localhost:5000/api/init", {
  credentials: "include",
}).then(r => r.json());

console.log("Current user:", user);