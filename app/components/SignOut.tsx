import { signOut } from "@/auth";
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="bg-red-300">Sign Out</button>
    </form>
  )
}