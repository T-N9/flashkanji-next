import hook from "./hook";
import { Button } from "@material-tailwind/react";

const GoogleLogIn = () => {
  const {
    logInDone,
    userInfo,

    handleLogin,
  } = hook();

  return (
    <div>
      {logInDone ? (
        <div>
          <p>Name : {userInfo?.name}</p>
          <p>Email : {userInfo?.email}</p>
        </div>
      ) : (
        <Button onClick={handleLogin}>Log in with Google</Button>
      )}
    </div>
  );
};

export default GoogleLogIn;
