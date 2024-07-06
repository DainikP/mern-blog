import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  
  return (
    <div className="max-w-lg mx-auto p-3 w-full ">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="h-32 w-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="Profile"
            className="rounded-full w-full h-full border-8 object-cover border-light-blue"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="Password"
          defaultValue={"****************"}
        />
        <Button type="submit" gradientDuoTone={"purpleToBlue"}>Update</Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delate Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>

    </div>
  );
}
