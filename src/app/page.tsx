import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <header className="bg-indigo-300 p-4 flex items-center justify-between">
        <div>
          <h1>Brand new Header</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/dashboard"}>Go to Dashboard</Link>
          <UserButton />
        </div>
      </header>
    </main>
  );
}
