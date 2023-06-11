// import React from 'react';
// import { SvgIcon } from "@mui/material";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import Stack from "@mui/material/Stack";
// import styled from '@emotion/styled';
// import { useState } from 'react';
// import { keyframes } from '@emotion/react';

// const pulseAnimation = keyframes `
//         0% {
//           opacity: 1;
//           transform: scale(1);
//         }
//         50% {
//           opacity: 0.5;
//           transform: scale(1.2);
//         }
//         100% {
//           opacity: 1;
//           transform: scale(1);
//         }
//       `;

// const AboutUs = () => {
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const handleMouseEnter = (index) => {
//       setHoveredItem(index);
//     };
  
//     const handleMouseLeave = () => {
//       setHoveredItem(null);
//     };
//     const photos = [
//         {
//             icon: DirectionsRunIcon,
//             image: require('../Assets/AvatarImages/Avatar5.png').default,
//             link: 'https://example.com/photo1',
//           },
//           {
//             icon: DirectionsRunIcon,
//             image: require('../Assets/AvatarImages/Avatar6.png').default,
//             link: 'https://example.com/photo1',
//           },
//           {
//             icon: DirectionsRunIcon,
//             image: require('../Assets/AvatarImages/Avatar7.png').default,
//             link: 'https://example.com/photo1',
//           },
//           {
//             icon: DirectionsRunIcon,
//             image: require('../Assets/AvatarImages/Avatar8.png').default,
//             link: 'https://example.com/photo1',
//           },
//           {
//             icon: DirectionsRunIcon,
//             image: require('../Assets/AvatarImages/Avatar9.png').default,
//             link: 'https://example.com/photo1',
//           },
//     ]
    
//     const PulseIcon = styled(SvgIcon)`
//     animation: ${pulseAnimation} 1.5s infinite;
//     `
//     const PopUpDiv = styled.div`
//     position: absolute;
//     top: -120px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 200px;
//     background-color: white;
//     border: 1px solid gray;
//     visibility: hidden;
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
    
//     ${Stack}:hover & {
//       visibility: visible;
//       opacity: 1;
//     }
//   `;
//   const PopUpImage = styled.img`
//   width: 100%;
//   height: auto;
// `;
      
    
//       const hideAnimationStyle = `@media (max-width: 768px) {
//         .hide-animation {
//           display: none;
//         }
//       }`;

//     return (
//         <div>
//       <Stack direction="row">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <PulseIcon
//               component={photo.icon}
//               viewBox="0 0 24 24"
//               color="primary"
//             />
//           </div>
//         ))}
//         {hoveredItem !== null && (
//     <PopUpDiv>
//     <a href={photos[hoveredItem].link} target="_blank" rel="noopener noreferrer">
//       <img src={photos[hoveredItem].image} alt="Pop-up Image" />
//     </a>
//   </PopUpDiv>
//         )}
//       </Stack>
//       <style>

// </style>
//     </div>
//   );
// };
// export default AboutUs;