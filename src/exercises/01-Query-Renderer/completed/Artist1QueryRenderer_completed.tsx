// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Artist1 } from './Artist1';

// export const Artist1QueryRenderer = () => {
//   const { artistID } = useParams();

//   return (
//     <QueryRenderer<Artist1Query>
//       environment={environment}
//       query={graphql`
//         query Artist1Query($artistID: ID!) {
//           artist(id: $artistID) {
//             name
//             birthYear
//           }
//         }
//       `}
//       variables={{ artistID }}
//       render={({ props }) => {
//         if (!props || !props.artist) {
//           return <div>Loading</div>;
//         }
//         return <Artist1 artist={props.artist} />;
//       }}
//     />
//   );
// };
