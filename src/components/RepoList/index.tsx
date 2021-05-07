import RepoListItem from "components/RepoListItem";
import { useUserContext } from "contexts/user-context";
import React, { PropsWithChildren } from "react";

interface RepoListProps {}

const RepoList = ({ children }: PropsWithChildren<RepoListProps>) => {
  const { repos, type, loading, sort, error } = useUserContext();

  if (loading && !repos) {
    return <p>Loading...</p>;
  }

  if (!loading && error) {
    return <p>An Error Occurred</p>;
  }
  return (
    <div>
      {repos && repos?.length === 0 && (
        <div className="">
          <div className="flex items-center border-b py-4 flex-wrap justify-between">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">0</span> results for{" "}
              <span className="font-semibold">{type}</span> repositories sorted
              by <span className="font-semibold">{sort}</span>
            </p>
            <button className="text-gray-600 text-sm">
              <span className="bg-gray-500 rounded-md text-base text-white py-0.5 px-1.5 mr-1">
                &times;
              </span>{" "}
              Clear filter
            </button>
          </div>
          <div className="mt-10">
            <p className="text-gray-800 font-semibold text-center text-lg">
              Dami-js doesn’t have any repositories that match.
            </p>
          </div>
        </div>
      )}
      {repos?.length !== 0 &&
        repos?.map((item: any, idx: number) => (
          <RepoListItem {...item} key={idx} />
        ))}
    </div>
  );
};

export default RepoList;
