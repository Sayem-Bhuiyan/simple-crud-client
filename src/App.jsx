import './App.css'

function App() {

  const handleAddUser = e => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const email = from.email.value;
    const user = {name, email}
    console.log("new users", user);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('user added');
        from.reset()
      }
    })


   
  }

  return (
    <>
      
      <h2>Simple CRUD</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add" />
      </form>
      
    </>
  )
}

export default App
