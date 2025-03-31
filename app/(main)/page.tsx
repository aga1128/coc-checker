import { auth } from "@/auth";
import Progress from "../components/Progress";
import SignOut from "../components/SignOut";
import { redirect } from "next/navigation";


export default async function Main() {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <>
      <Progress />
      <SignOut />
    </>
  );
}