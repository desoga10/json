
import axios from 'axios'


// Make request
axios.get('https://jsonplaceholder.typicode.com/todos/1')

  // Show response data
  .then(res => console.log(res.data))
  .catch(err => console.log(err))