import { auth } from "@/auth";
import SearchUser from "../components/SearchUser";
import SignOut from "../components/SignOut"
import { redirect } from "next/navigation";
import Image from 'next/image';

export default async function DashBoard() {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  console.log(session.user)

  return (
    <>
      <div className="flex items-center">
        {session.user.image && (
          <Image
            src={session.user.image}
            width={30}
            height={30}
            alt="サムネイル"
          />
        )}
        {session.user.name}
      </div>
      <SearchUser />
      <SignOut />
    </>
  );
}