import React from 'react'; 
import { useParams } from 'react-router-dom';


const UserDetails = () => {

   const params = useParams();
   console.log(params,"....params");

  return (
    <div>
       Details of User {params.userId}
    </div>
  )
}

export default UserDetails
