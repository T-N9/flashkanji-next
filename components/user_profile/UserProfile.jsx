import hook from "./hook"

import Image from "next/image";

const UserProfile = () => {

    const { userInfo } = hook();

    console.log({userInfo})

  return (
    <section className="min-h-screen flex justify-center items-center">
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <Image
        src={userInfo?.avatar}
        alt={`${userInfo?.name}'s avatar`}
        className="w-20 h-20 mx-auto rounded-full mb-4"
        width={80}
        height={80}
      />
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{userInfo?.name}</h2>
        <p className="text-gray-500">{userInfo?.email}</p>
      </div>
    </div>
    </section>
  )
}

export default UserProfile