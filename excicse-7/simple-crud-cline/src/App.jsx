import './App.css'

function App() {

  const handleSubmit = (even) => {
    even.preventDefault();
    const form = even.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }

    console.log(user);
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('Users added successfully');
          form.reset();
        }
      })

  }


  return (
    <>
      <h1>SIMPLE CURD</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="ADD USER" />

      </form>

    </>
  )
}

export default App
