const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal.
    console.log(bread)
    console.log(index)
      return (
        <Default>
        <h3>{bread.name}</h3>
        <a href={`/breads/${index}/edit`}><button>Edit</button></a>
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
        <h4>Ingridents</h4>
        <ul>
        {bread.ingridents.map(ingrident =><li key={index}>{ingridents}</li>)}
        </ul>
        <ol>
        {bread.directions.map(direction =><li key={index}>{directions}</li>)}
        </ol>
        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go home</a></li>
         </Default>
      )
  }
  
module.exports = Show