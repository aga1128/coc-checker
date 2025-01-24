import { auth } from "@/auth";
import SearchUser from "../components/SearchUser";

export default async function DashBoard() {

  const session = await auth();
  if (!session?.user) return null

  return (
    <>
      {session.user.name}
      <SearchUser />
    </>
  );
}