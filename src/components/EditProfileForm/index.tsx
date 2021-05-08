import Button from "components/Button";
import {
  AnchorLinkIcon,
  BuildingIcon,
  Mail,
  MapPointerIcon,
  TwitterIcon,
} from "components/icons";
import { Input, TextArea } from "components/TextField";
import { useUserContext } from "contexts/user-context";
import React, { FormEvent, useState } from "react";

interface EditProfileFormProps {
  handleCancel?: () => any;
}

interface FormValuea {
  bio?: string;
  company?: string;
  location?: string;
  email?: string;
  wesbsite?: string;
  twitter_username?: string;
}

const EditProfileForm = ({ handleCancel }: EditProfileFormProps) => {
  const { user, setUser } = useUserContext();
  const [values, setValues] = useState<FormValuea>({
    bio: user.bio ?? "",
    company: user.company ?? "",
    location: user.location ?? "",
    email: user.email ?? "",
    wesbsite: user.wesbsite ?? "",
    twitter_username: user.twitter_username ?? "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ ...user, ...values });
    handleCancel?.();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextArea
            placeholder="Add a bio"
            onChange={(e) => setValues({ ...values, bio: e.target.value })}
            value={values.bio}
          />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <BuildingIcon className="fill-current" />
          </span>
          <Input
            placeholder="Company"
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            value={values.company}
          />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <MapPointerIcon className="fill-current" />
          </span>
          <Input
            placeholder="Location"
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            value={values.location}
          />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <Mail className="fill-current" />
          </span>
          <Input
            placeholder="Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            value={values.email}
          />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <AnchorLinkIcon className="fill-current" />
          </span>
          <Input
            placeholder="Website"
            onChange={(e) => setValues({ ...values, wesbsite: e.target.value })}
            value={values.wesbsite}
          />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-gray-500">
            <TwitterIcon className="fill-current" />
          </span>
          <Input
            placeholder="Twitter username"
            onChange={(e) =>
              setValues({ ...values, twitter_username: e.target.value })
            }
            value={values.twitter_username}
          />
        </div>
        <div className="mt-3 flex items-center">
          <Button className="mr-1" variant="success" type="submit">
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
