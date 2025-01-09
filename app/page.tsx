import SearchUser from "./components/SearchUser";

export default async function Home() {

  // const response = await fetch("https://api.clashofclans.com/v1/players/%23C8ULRCPR", {
  //   method: "GET",
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${process.env.API_KEY}`
  //   }
  // })
  // if(!response.ok){
  //   throw new Error();
  // }
  // const data = await response.json();
  // console.log(data);

  return (
    <>
      {/* <div className="flex w-full gap-8">
        <div>
          <div>name: {data.name}</div>
          <div>townHall: {data.townHallLevel}</div>
        </div>
        <div>
          <div className="text-xl">HeroEquipment</div>
          {data.heroEquipment.map((data: any) => (
            <div key={data.name}>
              {data.name}:{data.level}
            </div>
          ))}
        </div>
        <div>
          <div className="text-xl">troops</div>
          {data.troops.filter((object: any) => object.village === "home").map((data: any) => (
            <div key={data.name}>
              {data.name}:{data.level}
            </div>
          ))}
        </div>
      </div> */}
      <SearchUser />
    </>
  );
}
