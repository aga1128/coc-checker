import { auth } from "@/auth";
import Section from "../components/layouts/Section";
import SearchUser from "../components/SearchUser";
import SignOut from "../components/SignOut"
import { redirect } from "next/navigation";


export default async function Main() {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  console.log(session.user)

  return (
    <>
      <Section>
        <SearchUser />
      </Section>
      <SignOut />
    </>
  );
}