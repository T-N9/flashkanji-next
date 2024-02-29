import { useEffect } from "react";
import hook from "./hook";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const GoogleLogIn = () => {
  const {
    userInfo,

    handleLogin,
  } = hook();

  const router = useRouter();

  useEffect(() => {
    if (userInfo !== null) {
      router.push("/profile");
    }
  }, [userInfo]);

  return (
    <div>
      {!userInfo && <Button onClick={handleLogin}>Log in with Google</Button>}
    </div>
  );
};

export default GoogleLogIn;
