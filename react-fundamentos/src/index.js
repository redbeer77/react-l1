import React from 'react'
import ReactDom from 'react-dom'
//alert("hello react");



const name = 'Jon Doe'
const user = {
  name:'Jon Doe',
  age:13,
  country:'Andorra'
}

const user1 = {
  name:'Jon Doe',
  age:26,
  country:'Euskadi'
}
function getUserInfo(user){
  return  `hola mi nombre es ${user.name} y soy de ${user.country}`
}
//getUserInfo=(user)=> `hola mi nombre es ${user.name} y soy de ${user.country}`

//const App = <h1>Hola {name}</h1>
const App = <h1>Tengo {user.age} años, el doble sería {user.age * 2}, {getUserInfo(user1)}</h1>


ReactDom.render(App,document.getElementById('root'))