const React = require('react')
const Default = require('./layouts/Default')

function Index () {
    const breads = props.breads;
    return (
      <Default>
          <ul>
          {breads.map(bread => {
              return (
                  <li key={index}>
                      <a href={`/breads/${index}`}>
                          {bread.anme}
                      </a>
                  </li>
              )
          })}
          </ul>
      </Default>
    )
}

module.exports = Index