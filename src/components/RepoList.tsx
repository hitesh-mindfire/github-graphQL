import React from "react";
import { useQuery } from "@apollo/client";
import Loader from "./Loader";
import { RepoListProps } from "../types/RepoListTypes";
import { GET_REPOSITORIES } from "../services/Query";

const RepoList: React.FC<RepoListProps> = ({ username, onSelectRepo }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { login: username },
    skip: !username,
  });

  if (loading) return <Loader />;

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  if (!data?.user?.repositories?.nodes.length) {
    return (
      <p className="text-gray-600">No repositories found for "{username}".</p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.user?.repositories?.nodes?.map((repo: any) => (
        <li
          key={repo.name}
          className="border border-gray-300 p-3 rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white cursor-pointer hover:bg-gradient-to-l hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => onSelectRepo({ owner: username, name: repo.name })}
          style={{ height: "150px" }}
        >
          <h2 className="text-2xl font-semibold mb-1">{repo.name}</h2>
          <p className="text-gray-200">
            {repo.description || "No description available"}
          </p>
          <div className="mt-2 text-sm">
            <span className="inline-flex items-center bg-gray-800 bg-opacity-40 rounded-full px-2 py-1 text-xs font-medium text-white">
              ⭐ {repo.stargazerCount}
            </span>
            <span className="inline-flex items-center bg-gray-800 bg-opacity-40 rounded-full px-2 py-1 text-xs font-medium text-white ml-2">
              🍴 {repo.forkCount}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
