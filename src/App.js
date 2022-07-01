/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'hong gil dong',
  'birthday': '961222',
  'gender': 'men',
  'job': 'student'  
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'hong ',
    'birthday': '951222',
    'gender': 'women',
    'job': 'police'  
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'dong',
    'birthday': '761222',
    'gender': 'men',
    'job': 'fire fighter'  
  }
]

class App extends Component {
  render() {
    return(
      <div className='gray-background'>
        {
          customers.map(c =>{
            return(
              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
            )
          })
        }
      </div>  
    );
    
  }
}

export default App;
