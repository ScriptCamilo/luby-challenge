// import React from 'react';
// import { useSelector } from 'react-redux';
// import { FiArrowRight } from 'react-icons/fi';

// import Header from '../../components/Header';
// import InfoCard from '../../components/InfoCard';

// import {
//   MainPage,
//   Log,
//   Image,
//   Line,
// } from './styles';

// function Followers() {
//   const { user: { followers: followersTotal }, followers } = useSelector((state) => state);
//   const followersCount = followers.length;

//   return (
//     <MainPage>
//       <Header
//         local="Seguidores"
//         count={followersTotal}
//       />

//       {followers.map(({ login, avatar_url }, index) => (
//         <>
//           <InfoCard alignItems="center">
//             <Image>
//               <img src={avatar_url} alt={login} />
//               <Log>
//                 <span>#{login}</span>
//                 <FiArrowRight size="1.5rem" />
//               </Log>
//             </Image>
//           </InfoCard>

//           {index + 1 === followersCount ? null : <Line />}
//         </>
//       ))}
//     </MainPage>
//   );
// }

// export default Followers;
