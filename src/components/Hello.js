import React from 'react'

const Hello = () => {
//     return (
//     <div>
//         <h1>hello Vishwas</h1>
//     </div>
//   )
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Vishwas'))
}

export default Hello