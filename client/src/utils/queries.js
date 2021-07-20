import gql from "graphql-tag";

export const GET_ALIAS = gql`
  {
    alias {
      _id
      username
      email
    }
  }
`;