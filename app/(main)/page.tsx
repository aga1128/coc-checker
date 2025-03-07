import { auth } from "@/auth";
import Section from "../components/layouts/Section";
import SearchUser from "../components/SearchUser";
import SignOut from "../components/SignOut";
import VillageProgressForm from "../components/VillageProgressForm";
import { redirect } from "next/navigation";
import { getMaxQuantity } from "../utils/firestore/functions";



export default async function Main() {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }

  const getData = await getMaxQuantity(1);

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
      {getData?.buildings.cannon.maxQuantity}
      {getData?.buildings.cannon.upgrade_time.level2}
      <SignOut />
    </>
  );
}