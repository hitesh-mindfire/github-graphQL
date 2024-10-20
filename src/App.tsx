import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoList from "./components/RepoList";

const App: React.FC = () => {
  const [username, setUsername] = useState("octocat");
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(searchValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl text-gray-900">
        <h1 className="text-4xl p-2 font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          GitHub Repository Dashboard
        </h1>

        {/* Search Input and Button */}
        <form
          onSubmit={handleSearch}
          className="mb-6 flex flex-col md:flex-row md:gap-4"
        >
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub username (e.g., octocat)"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold p-2 rounded w-full md:w-1/6 transition duration-300 ease-in-out shadow-lg transform hover:scale-105 mt-4 md:mt-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Repo List */}
        <RepoList
          username={username}
          onSelectRepo={(repo) => {
            navigate(`/repo/${repo.owner}/${repo.name}`);
          }}
        />
      </div>
    </div>
  );
};

export default App;
