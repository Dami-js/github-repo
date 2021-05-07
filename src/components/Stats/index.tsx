import { PeopleIcon, StarIcon } from "components/icons";
import { useUserContext } from "contexts/user-context";
import React from "react";

const Stats = () => {
  const { user, loading, error } = useUserContext();

  if (loading && !user) {
    return <p>Loading...</p>;
  }

  if (!loading && error) {
    return <p>An Error Occurred</p>;
  }

  return (
    <div className="text-gray-600 flex items-center flex-wrap">
      <div className="flex items-center">
        <PeopleIcon className="fill-current" />
        <span className="font-bold text-gray-700 mx-1">
          {user?.followers}
        </span>{" "}
        <span className="text-sm">Followers</span>
      </div>
      <span className="mx-1.5 text-gray-400 text-xs">&#8226;</span>
      <div className="flex items-center">
        <span className="font-bold text-gray-700 mr-1">{user?.following}</span>{" "}
        <span className="text-sm">Following</span>
      </div>
      <span className="mx-1.5 text-gray-400 text-xs">&#8226;</span>
      <div className="flex items-center">
        <StarIcon className="fill-current" />
        <span className="font-bold text-gray-700 ml-1">4</span>{" "}
      </div>
    </div>
  );
};

export default Stats;
