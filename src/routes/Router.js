import React from 'react';
import {
  Route as ReactDOMRoute,
} from 'react-router-dom';


const Route = ({ Component, Layout, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return  (
        <Layout>
          <Component />   
        </Layout>
        )
      }}
    />
  )
}


export default Route;