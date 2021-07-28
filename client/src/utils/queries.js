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

export const GET_API_KEY = gql`
{
  apiKey {
  apiKey
}
}`