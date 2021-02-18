// import React from 'react';
// import { graphql, QueryRenderer } from 'react-relay';
// import { useParams } from 'react-router-dom';
// import { environment } from '../../relay';

// export const Artist1 = (props) => {
//   return (
//     <div>
//       <h1>{props.artist.name}</h1>
//       <h2>b. {props.artist.birthYear}</h2>
//     </div>
//   );
// };

// export const Artist1QueryRenderer: React.FC = () => {
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
