import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>Kodiak Test site using Next.js on JAMstack servers.</h1>
    <h2>Here we will see information from the project and information from the repository.</h2>
    <h3>Information to be loaded in here can be found --> <a href="https://sites.google.com/basco.com/kodiak/kodiak?pli=1&authuser=1">Kodiak Google Site</a>!</h3>

    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
