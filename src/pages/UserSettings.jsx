import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/user/AuthContext";
import { Switch } from "@headlessui/react";
import { useUser, useUserMutation } from "../services/apiUsers";
import Button from "../ui/Button";
import { BiSave } from "react-icons/bi";
import { useStorageMutation } from "../services/apiStorage";
import LoadSpinner from "../ui/LoadSpinner";

function UserSettings() {
  const { uid } = useAuth();
  const navigate = useNavigate();

  const { isPending, error, user } = useUser(uid);
  const userMutation = useUserMutation(uid);
  const storageMutation = useStorageMutation();

  async function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const photo = event.target.files[0];
      const name = uid + ".png";
      const path = uid + "/" + name;
      const photoURL = await storageMutation.mutateAsync({ path, file: photo });
      userMutation.mutate({ photoURL });
    }
  }

  function updateContacts(e) {
    const type = e.target.id;
    const value = e.target.value;

    userMutation.mutate({
      contacts: { ...user.contacts, [type]: value },
    });
  }

  function updateEmailContact(e) {
    userMutation.mutate({
      contacts: {
        ...user.contacts,
        email: { ...user.contacts.email, public: e },
      },
    });
  }

  const saveUserSettings = async (e) => {
    e.preventDefault();

    navigate(`/user/${uid}`);
  };

  if (error) return <p>There was an error: {error.message}</p>;

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
            {storageMutation.isPending && <LoadSpinner />}
            {!storageMutation.isPending && (
              <img
                className="rounded-full object-cover w-16 h-16"
                src={user.photoURL}
              />
            )}
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
            defaultValue={user.displayName}
            onBlur={(e) => {
              userMutation.mutate({ displayName: e.target.value });
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
            defaultValue={user.email}
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
            defaultValue={user.contacts?.github}
            onBlur={updateContacts}
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
            defaultValue={user.contacts?.instagram}
            onBlur={updateContacts}
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
            defaultValue={user.contacts?.linkedIn}
            onBlur={updateContacts}
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
            defaultValue={user.contacts?.twitter}
            onBlur={updateContacts}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-lg">
            Email:{" "}
          </label>
          <Switch
            id="email"
            checked={user.contacts?.email.public || false}
            onChange={updateEmailContact}
            className={`${
              user.contacts?.email.public ? "bg-violet-500" : "bg-neutral-800"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                user.contacts?.email.public ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div>
          <Button
            type="primary"
            disabled={userMutation.isPending}
            click={saveUserSettings}
          >
            <BiSave /> {userMutation.isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UserSettings;
