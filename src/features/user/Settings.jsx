import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { updateUser } from "../../services/apiUsers";
import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import { BiSave } from "react-icons/bi";
import { uploadFile } from "../../services/apiStorage";
import { getUser } from "../../services/auth";
import LoadSpinner from "../../ui/LoadSpinner";

function Settings() {
  const { uid } = useAuth();
  const { id: userId } = useParams();

  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", uid],
    queryFn: () => getUser(uid),
  });

  const [updatedUser, setUpdatedUser] = useState({});
  const [photoURL, setPhotoURL] = useState("");
  const [photo, setPhoto] = useState("");

  const saveMutation = useMutation({
    mutationFn: (prop) => updateUser(prop.userId, prop.newUser),
  });

  useEffect(() => {
    if (user) {
      setUpdatedUser({ id: undefined, ...user });
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhotoURL(URL.createObjectURL(event.target.files[0]));
      setPhoto(event.target.files[0]);
      setUpdatedUser((u) => ({ ...u, photoURL: "new" }));
    }

    event.target.value = "";
  };

  const modifyUpdatedUser = (location, value) => {
    console.log(value);
    setUpdatedUser((u) => {
      if (location.startsWith("contacts")) {
        if (location === "contacts/email/public") {
          // Handle boolean value for the email switch
          return {
            ...u,
            contacts: {
              ...u.contacts,
              email: {
                ...u.contacts.email,
                public: !u.contacts.email.public,
              },
            },
          };
        } else {
          return {
            ...u,
            contacts: {
              ...u.contacts,
              [location.split("/")[1]]: value,
            },
          };
        }
      } else {
        return {
          ...u,
          [location]: value,
        };
      }
    });
  };

  const saveUserSettings = async (e) => {
    e.preventDefault();

    const newUser = { ...user, contacts: { ...user.contacts } };

    if (updatedUser.displayName !== user.displayName)
      newUser.displayName = updatedUser.displayName;

    if (updatedUser.contacts.email.public !== user.contacts.email.public)
      newUser.contacts.email.public = updatedUser.contacts.email.public;

    if (updatedUser.contacts.github !== user.contacts.github)
      newUser.contacts.github = updatedUser.contacts.github;

    if (updatedUser.contacts.instagram !== user.contacts.instagram)
      newUser.contacts.instagram = updatedUser.contacts.instagram;

    if (updatedUser.contacts.linkedIn !== user.contacts.linkedIn)
      newUser.contacts.linkedIn = updatedUser.contacts.linkedIn;

    if (updatedUser.contacts.twitter !== user.contacts.twitter)
      newUser.contacts.twitter = updatedUser.contacts.twitter;

    if (photo) {
      const name = uid + "." + photo.name.split(".")[1];
      newUser.photoURL = await uploadFile(name, photo);
    }

    saveMutation.mutate({ userId, newUser });
  };

  if (uid !== userId) return <p>You don&apos;t have access to this page!</p>;

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  return (
    <form className="p-2">
      <div className="flex flex-col gap-6">
        <span className="text-3xl font-bold block">General Settings</span>

        <div className="sm:flex gap-20">
          <span className="text-xl mb-4 block">Profile picture: </span>
          <div className="flex justify-around items-center gap-6">
            <img className="rounded-full w-16 h-16" src={photoURL} />
            <label
              className="text-lg border-2 px-2 py-1 border-violet-500 text-violet-500"
              htmlFor="file-input"
            >
              Choose Image
            </label>
            <input
              className="hidden"
              type="file"
              id="file-input"
              name="file-input"
              onChange={onImageChange}
              accept="image/*"
            />
          </div>
        </div>

        <div>
          <label htmlFor="displayName" className="text-lg">
            Display name:{" "}
          </label>
          <input
            className="bg-neutral-800 outline-none px-2 py-1 focus:ring-2 ring-violet-500"
            type="text"
            id="displayName"
            value={updatedUser.displayName || ""}
            onChange={(e) => {
              modifyUpdatedUser("displayName", e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-lg">
            Email:{" "}
          </label>
          <input
            className="bg-neutral-800 disabled:text-neutral-500 outline-none px-2 py-1 focus:ring-2 ring-violet-500"
            type="text"
            id="email"
            value={updatedUser.email || ""}
            disabled
          />
        </div>

        <span className="text-3xl font-bold block mt-8">Contact settings</span>

        <div>
          <label htmlFor="github" className="text-lg">
            Github:{" "}
          </label>
          <input
            className="bg-neutral-800 outline-none px-2 py-1 focus:ring-2 ring-violet-500"
            type="text"
            id="github"
            value={updatedUser.contacts?.github || ""}
            onChange={(e) =>
              modifyUpdatedUser("contacts/github", e.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="instagram" className="text-lg">
            Instagram:{" "}
          </label>
          <input
            className="bg-neutral-800 outline-none px-2 py-1 focus:ring-2 ring-violet-500"
            type="text"
            id="instagram"
            value={updatedUser.contacts?.instagram || ""}
            onChange={(e) =>
              modifyUpdatedUser("contacts/instagram", e.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="linkedIn" className="text-lg">
            LinkedIn:{" "}
          </label>
          <input
            className="bg-neutral-800 outline-none px-2 py-1 focus:ring-2 ring-violet-500"
            type="text"
            id="linkedIn"
            value={updatedUser.contacts?.linkedIn || ""}
            onChange={(e) =>
              modifyUpdatedUser("contacts/linkedIn", e.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="twitter" className="text-lg">
            Twitter:{" "}
          </label>
          <input
            className="bg-neutral-800 outline-none px-2 py-1 focus:ring-2 ring-violet-500"
            type="text"
            id="twitter"
            value={updatedUser.contacts?.twitter || ""}
            onChange={(e) =>
              modifyUpdatedUser("contacts/twitter", e.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="email" className="text-lg">
            Email:{" "}
          </label>
          <Switch
            checked={updatedUser.contacts?.email?.public || false}
            onChange={(val) => modifyUpdatedUser("contacts/email/public", val)}
            className={`${
              updatedUser.contacts?.email?.public
                ? "bg-violet-500"
                : "bg-neutral-800"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                updatedUser.contacts?.email?.public
                  ? "translate-x-6"
                  : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div>
          <Button type="primary" click={saveUserSettings}>
            <BiSave /> Save
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Settings;
