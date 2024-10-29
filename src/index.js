import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_BACKEND_URL || 'https://certamen-quizzer-graphql-server.vercel.app/graphql', 
  })
});



const query = gql`
query {
  questionCount
}
`

client.query({ query })
  .then((response) => {
    console.log(response.data)
  })

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )