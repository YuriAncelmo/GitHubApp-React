'use strict'

import React from 'react'

const Title = ({name, lastName}) => (
  <h1> Oi {name} {lastName} !</h1>
)


Title.defaultProps = {
    name:'Desconhecido',
    lastName: 'Sem sobrenome'
}
// const Title = React.createClass({
//     getDefaultProps: function () {
//         return {
//           name:"desconhecido",
//           lastName:"sem sobrenome",
//         }
//       },
//       render: function(){
//         return (
//             <h1>Olá {this.props.name} {this.props.lastName}!</h1>
//         )
//     }
// })

export default Title
