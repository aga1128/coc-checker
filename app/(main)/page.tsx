import { auth } from "@/auth";
import Section from "../components/layouts/Section";
import SearchUser from "../components/SearchUser";
import SignOut from "../components/SignOut";
import VillageProgressForm from "../components/VillageProgressForm";
import { redirect } from "next/navigation";



export default async function Main() {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  console.log(session.user)

  return (
    <>
      <div className="mb-6">
        <Section title="プレイヤータグから適用">
          <SearchUser />
        </Section>
      </div>
      <div>
        <Section title="進捗状況管理">
          <VillageProgressForm />
        </Section>
      </div>
      <SignOut />
    </>
  );
}