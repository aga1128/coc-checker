
export default async function Home() {

  const response = await fetch("https://api.clashofclans.com/v1/clans/%23G0UUYP82", {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  if(!response.ok){
    throw new Error();
  }
  const data = await response.json();
  console.log(data)

  return (
    <>
      {data.memberList.map((member: any) => (
        <div key={member.tag}>
          {member.name}
        </div>
      ))}
    </>
  );
}
