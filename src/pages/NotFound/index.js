import React from 'react'
import { useLocation} from 'react-router-dom'

function NotFound() {

  const location = useLocation()


  return (
    <h1>Sorry, {location.pathname} was not found :(</h1>
  );
}

export default NotFound;
