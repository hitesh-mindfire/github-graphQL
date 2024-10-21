import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { GET_REPO_DETAILS } from "../services/Query";

const RepoDetails: React.FC = () => {
  const { owner, name } = useParams<{ owner: string; name: string }>();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_REPO_DETAILS, {
    variables: { owner, name },
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="text-red-500 text-center">
        Error loading details: {error.message}
      </p>
    );

  const { repository } = data;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 p-6">
      <div className="border p-6 rounded-lg shadow-lg bg-white text-gray-800 w-full max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-blue-500 hover:to-indigo-700 py-2 px-4 rounded-full mb-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <h2 className="text-4xl font-bold mb-2 p-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          {repository.name}
        </h2>
        <p className="text-lg text-center">
          {repository.description || "No description available"}
        </p>
        <p className="mt-2 text-center">
          <span className="text-yellow-500">
            ⭐ {repository.stargazerCount}
          </span>{" "}
          |<span className="text-green-500"> 🍴 {repository.forkCount}</span>
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2 text-center">
            Recent Issues:
          </h3>
          <ul className="space-y-2">
            {repository.issues.nodes.map((issue: any) => (
              <li key={issue.url} className="text-center">
                <a
                  href={issue.url}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {issue.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2 text-center">
            Recent Commits:
          </h3>
          <ul className="space-y-2">
            {repository.commits.target.history.nodes.map(
              (commit: any, index: number) => (
                <li key={index} className="text-center">
                  <p className="font-medium">{commit.message}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(commit.committedDate).toLocaleString()}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
