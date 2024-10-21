import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query ($login: String!) {
    user(login: $login) {
      repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          description
          stargazerCount
          forkCount
        }
      }
    }
  }
`;

export const GET_REPO_DETAILS = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      stargazerCount
      forkCount
      issues(first: 5) {
        nodes {
          title
          url
        }
      }
      commits: defaultBranchRef {
        target {
          ... on Commit {
            history(first: 5) {
              nodes {
                message
                committedDate
              }
            }
          }
        }
      }
    }
  }
`;
