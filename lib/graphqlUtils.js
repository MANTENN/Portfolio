import { GraphQLClient } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/qvcdc8xnoiup`;
export const graphQLClient = new GraphQLClient(endpoint);

export const fetcher = (query, variables, requestHeaders) =>
  graphQLClient.request(query, variables, {
    ...requestHeaders,
    authorization: `Bearer 6903553934db4e8e564b7b24c962ac66e3cf0f9cceb6312ecb6dded606d53c9e`,
  });
