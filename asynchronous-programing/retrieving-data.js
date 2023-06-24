const getUserData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();

    const getDataArray = userData.map(user => {
       return {id: user.id, name: user.name, email:user.email}; //output a new object with only id, name and Email
     });

    console.log(getDataArray);
}

getUserData();


//Please note you can do this with promises or async and to not more is that you MUST always read the Documentation of the API you are trying to consume, for more instructions. If possible test this API with tools like Postman to ensure the API is working fine.

async function getData(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer <your-token>',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      console.log(data); // Process the retrieved data
      // Do more operations with the retrieved data...
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
  
  // Example usage
  getData('https://api.example.com/data');