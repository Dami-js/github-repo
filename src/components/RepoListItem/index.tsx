import Button from "components/Button";
import { MitIcon, StarIcon, TreeIcon } from "components/icons";
import moment from "moment";
import React from "react";

interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
}

export interface RepoListItemProps {
  name: string;
  id: number;
  fork: boolean;
  html_url: string;
  description: string;
  forks: number;
  license: License;
  updated_at: Date;
}

const RepoListItem = (props: RepoListItemProps) => {
  return (
    <div className="flex items-center py-4 border-b">
      <div className="mr-auto">
        <a
          href={props?.html_url}
          className="text-primary font-bold text-xl hover:underline"
        >
          {props?.name}
        </a>
        {props?.fork && (
          <p className="text-xs text-gray-600 font-light mt-1 mb-2">Forked</p>
        )}
        {props?.description && (
          <p className="text-gray-800 text-sm font-light mb-3 pr-6 md:w-4/5">
            {props?.description}
          </p>
        )}
        <div className="flex items-center flex-wrap">
          <p className="flex items-center flex-wrap text-xs leading-6 mr-4 text-gray-600">
            <TreeIcon className="fill-current mr-1" /> {props?.forks}
          </p>
          <p className="flex items-center flex-wrap text-xs leading-6 mr-2 text-gray-600">
            <MitIcon className="fill-current mr-1" /> {props?.license?.name}
          </p>
          <p className="flex items-center flex-wrap text-xs leading-6 text-gray-600">
            Updated on {moment(props?.updated_at).format("MMM Do YYYY")}
          </p>
        </div>
      </div>
      <div className="ml-2">
        <Button>
          <StarIcon className="fill-current mr-1.5" />
          Star
        </Button>
      </div>
    </div>
  );
};

export default RepoListItem;
