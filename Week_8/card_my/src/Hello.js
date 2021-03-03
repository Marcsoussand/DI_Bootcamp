import React from 'react';

// const Hello = (props) => {
//   const {username,email} = props
//   return (
//     <>
//       <div>
//         Hello, {username}
//       </div>
//       <div>
//         Your email is {email}
//       </div>
//     </>
//   )
// }
const Hello = (props) => {
 const {param} =props
 if(param=="1") {
   return(
     <div>param={param}</div>
   )}
   else {
  return (
   props.children
  )}
}

export default Hello;
