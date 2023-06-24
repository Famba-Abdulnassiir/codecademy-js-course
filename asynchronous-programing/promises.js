
fetch("https://jsonplaceholder.typicode.com/users")
    .then(repsonse => repsonse.json())
    .then(data => {
    console.log(data) 
    data.forEach(user => {
       //console.log(`User id is: ${user.id} User Name is: ${user.name}`)// here when you want to retrieve individual / specific data from the object  
       console.log(user)    
    })
}).catch((error) => {
    console.log(error)
});


// Deep version of how we can fetch API and handle errors using promises
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) { //at stage we can check the status/ HTTP msgs and return a message to the user.
//       throw new Error('Failed to fetch users');
//     }
//     return response.json(); // Parse response as JSON
//   })
//   .then(users => {
//     console.log(users); // Process the fetched users data
//     // Do more operations with the users data...
//   })
//   .catch(error => {
//     console.error('Failed to fetch users:', error);
//   });