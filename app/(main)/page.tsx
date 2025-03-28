import { auth } from "@/auth";
import Progress from "../components/Progress";
import SignOut from "../components/SignOut";
import { redirect } from "next/navigation";
import { getMaxQuantity } from "../utils/firestore/functions";




export default async function Main() {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  const getData = await getMaxQuantity(1);
  console.log(getData)
  console.log(session.user)

  return (
    <>
      <Progress />
      <SignOut />
    </>
  );
}