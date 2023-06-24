const myUsers = {
    userList:[]
}

const myCoolFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();
    return userData;
}


//This is another async function that waits results from the above for it to execute its operations
const anotherFunc = async () => { 
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList)
}

anotherFunc()

//More Details we can add to our async-await
// async function fetchUsers() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }
//       const users = await response.json(); // Parse response as JSON
//       console.log(users); // Process the fetched users data
//       // Do more operations with the users data...
//     } catch (error) {
//       console.error('Failed to fetch users:', error);
//     }
//   } 
  
//   fetchUsers();