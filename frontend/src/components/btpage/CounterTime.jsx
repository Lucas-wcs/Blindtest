// import Answers from '@components/btpage/Answers';
// import React, { useEffect } from 'react';
// import { useState } from 'react';

// const CounterTime = () => {
//     const startingSecondes = 30
//     const [secondes,setSecondes] = useState(true);
//     useEffect(()=> {
//         console.log('timer started!');

//         const interval = setInterval(() => {
//           console.log('timer is décrementing');
//           if (secondes > 0) {
//           setSecondes((prevState) => prevState - 1);
//           // prend la valeur précedente et décrémente de 1
//         }}, 1000);
//         if ( secondes === 0) return false
//         // la fonction interval effectue l'action toutes les 1s

//         return () => clearInterval(interval)
//         // le return sera exécutée avant le démontage du composant.
//       }, [Answers]);

//     return (
//         <div className='timer'>
//          <button>{secondes}</button>
//         </div>
//     );
// };

// export default CounterTime;
