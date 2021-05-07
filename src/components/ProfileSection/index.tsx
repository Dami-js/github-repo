import Button from "components/Button";
import EditProfileForm from "components/EditProfileForm";
import { Mail, MapPointerIcon, SmileyFace } from "components/icons";
import Img from "components/Img";
import Stats from "components/Stats";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { API_URL } from "utils/constants";
import { useFetch } from "utils";
import { useUserContext } from "contexts/user-context";

interface ProfileSectionProps {
  setShowName?: Dispatch<SetStateAction<boolean>>;
}

const ProfileSection = ({ setShowName }: ProfileSectionProps) => {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const { user, loading, error } = useUserContext();
  const container = useRef<any>();

  const handleSetShow = (container: any) => {
    if (window.pageYOffset > container.current.offsetTop) {
      setShowName?.(true);
    } else {
      setShowName?.(false);
    }
  };

  useEffect(() => {
    if (container && container.current) {
      window.addEventListener("scroll", () => handleSetShow(container));
    }
    return () => {
      window.removeEventListener("scroll", () => handleSetShow(container));
    };
  }, [container, loading]);

  if (loading && !user) {
    return <p>Loading...</p>;
  }

  if (!loading && error) {
    return <p>An Error Occurred</p>;
  }

  return (
    <>
      {user && (
        <div>
          <div className="mt-4 md:-mt-10">
            <div className="flex items-center md:block">
              <div className="mr-5 w-16 md:w-full md:mb-4">
                <Img src={user?.avatar_url} size="full" />
              </div>
              <div className="">
                <p className="text-2.5xl text-gray-900 font-medium">
                  {user?.name}
                </p>
                <p className="text-gray-500 text-xl " ref={container}>
                  {user?.login}
                </p>
              </div>
            </div>
            <div className="set-status flex items-center border border-gray-300 rounded-md text-gray-600 p-2 mt-10 md:hidden">
              <SmileyFace className="fill-current" />
              <span className="text-xs ml-4">Set status</span>
            </div>

            {!showEditForm && (
              <>
                {/* ROLE */}
                {user?.bio && (
                  <div className="mt-2">
                    <p className="text-gray-800">{user?.bio}</p>
                  </div>
                )}
                {/* edit profile form */}
                {/* edit section */}
                <div className="my-5">
                  <Button onClick={() => setShowEditForm(true)} fullWidth>
                    Edit profile
                  </Button>
                </div>
                {/* user email */}
                <div className="mb-2 md:hidden">
                  <a
                    href="#!"
                    className="flex items-center text-gray-700 font-light"
                  >
                    <Mail className="fill-current mr-2" /> sewejed@gmail.com
                  </a>
                </div>
                {/* user stats */}
                <div className="">
                  <Stats />
                </div>
                <div className="mt-5 hidden md:block">
                  <a
                    href="#!"
                    className="flex items-center text-gray-700 font-light"
                  >
                    <MapPointerIcon className="fill-current mr-2" />{" "}
                    {user?.location}
                  </a>
                </div>
                <div className="hidden md:block">
                  <a
                    href="#!"
                    className="flex items-center text-gray-700 font-light"
                  >
                    <Mail className="fill-current mr-2" /> sewejed@gmail.com
                  </a>
                </div>
              </>
            )}
            {showEditForm && (
              <div className="mt-2">
                <EditProfileForm handleCancel={() => setShowEditForm(false)} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSection;
