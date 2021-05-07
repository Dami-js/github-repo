import Button from "components/Button";
import {
  AnchorLinkIcon,
  BuildingIcon,
  Mail,
  MapPointerIcon,
  TwitterIcon,
} from "components/icons";
import { Input, TextArea } from "components/TextField";
import React, { useState } from "react";

interface EditProfileFormProps {
  handleCancel?: () => any;
}

const EditProfileForm = ({ handleCancel }: EditProfileFormProps) => {
  const [bio, setBio] = useState("Software developer");
  return (
    <div>
      <form action="#!">
        <div className="mb-3">
          <TextArea
            placeholder="Add a bio"
            // value={bio}
          />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <BuildingIcon className="fill-current" />
          </span>
          <Input placeholder="Company" />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <MapPointerIcon className="fill-current" />
          </span>
          <Input placeholder="Location" />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <Mail className="fill-current" />
          </span>
          <Input placeholder="Email" />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <AnchorLinkIcon className="fill-current" />
          </span>
          <Input placeholder="Website" />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <TwitterIcon className="fill-current" />
          </span>
          <Input placeholder="Twitter username" />
        </div>
        <div className="mt-3 flex items-center">
          <Button className="mr-1" variant="success">
            Save
          </Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
