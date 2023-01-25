'use strict'

import React, { Component } from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input
        type="search"
        placeholder='digite o nome do usuário'
      />
    </div>
    <div className='user-info'>
      <img src='https://avatars.githubusercontent.com/u/22206310?v=4' />
      <h1>
        <a href='https://github.com/YuriAncelmo'>Yuri Ancelmo</a>
      </h1>
      <ul className='repos-info'>
        <li> Repositórios: 15</li>
        <li> Seguidores: 1</li>
        <li> Seguindo: 1</li>
      </ul>
      <div className='actions'>
        <button> Ver repositórios </button>
        <button> Ver favoritos </button>
      </div>
      <div className='repos'>
        <h2>Repositórios</h2>
        <ul className='repos'>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
      <div className='starred'>
        <h2> Favoritos </h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
