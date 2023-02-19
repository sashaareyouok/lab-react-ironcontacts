import './App.css';
import peopleContacts from './contacts.json'
import { useState } from 'react';

function App(props) {
  const { peoples } = props;
 
  
  const [contacts, setContacts] = useState(peopleContacts);


  //3 iteration add random person is not done idk what method 

  // const addContact = (randomContact) => {
  //   const addRandomPerson = contacts.length;
  //    setContacts(Math.floor(Math.random() * addRandomPerson));
  

  //iteration 5 - all Delete btnS removing everyone, but should delete just one person, Idk how to fix
   const deletePeople = (pepId) => {
    const filteredContacts = contacts.filter((people) => {
      return people._id !== pepId;
    });
    setContacts(filteredContacts);
  };


// iteration 4
  function sortName(){
    const sortedArray = [...contacts]
    sortedArray.sort((a,b)=>{
        if(a.name<b.name){
            return -1
        }
        else if(b.name<a.name){
            return 1
        }
        return 0
    })
    setContacts(sortedArray)
  }


  function sortPop(){
    const sortedArray = [...contacts]
    sortedArray.sort((a,b)=>{
        if(a.popularity<b.popularity){
            return 1
        }
        else if(b.popularity<a.popularity){
            return -1
        }
        return 0
    })
    setContacts(sortedArray)
  }

  
  return (
    
    <div className="App">

       
    
      <h1>IronContacts</h1>

      <button className="btn">Add Random Contact</button>
      
      
      
      <button onClick={sortName} className="btn">Sort by name</button>

      <button onClick={sortPop} className="btn"> Sort by popularity </button>


      <table>
        <tr>
          <th className='line'>Picture</th>
          <th className='line'>Name</th>
          <th className='line'>Popularity</th>
          <th className='line'>Won Oscar</th>
          <th className='line'>Won Emmy</th>
          <th className='line'>Actions</th>
        </tr>

        {contacts.map((people) => {
          return(
            <tr>
            <td><img src = {people.pictureUrl} className= "pic"/></td>
            <td>{people.name}</td>
            <td>{people.popularity}</td>

            <td> 
           {people.wonOscar && <p> 🏆</p>}
           {!people.wonOscar && <p> No Oscar</p>}
            </td> 

            <td> 
           {people.wonEmmy && <p>⭐️</p>}
           {!people.wonEmmy && <p>No Emmy</p>}
            </td> 

            <td>
            
          <button onClick={ () => deletePeople (people._id) } className="btn">
            Delete 
          </button>

            </td>

            </tr>
             )
        })}
        
      </table>
    </div>
  )
}


export default App;
