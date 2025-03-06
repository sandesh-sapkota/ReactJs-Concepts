import Card from './components/Card'

function App() {
  let myObj={
    username:'sandy',
    age:21
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className="text-3xl font-bold text-orange-600 text mb-4 ml-7">
        Tailwind is in the phase of executing...
      </h1>

      <Card username='sandy11' image='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600' btnText='Click to Know More' />
    
      <Card username='shivaya77' image='https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=600' btnText='Hari OM' />
  
    </> 
  );
}

export default App;
