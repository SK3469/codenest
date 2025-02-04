import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  if (!snippets) {
    return <h1 className="text-3xl text-red-700">No Snippets Found</h1>
  }
  return (
    <div className="border mt-5 p-3 rounded-lg shadow-xl ">
      <div className="flex justify-between mt-4  items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href={"/snippet/new"}><Button>New</Button></Link>
      </div>
     <div className=" mt-16">
     {
        snippets.map((snippet) => (
          <div key={snippet.id} className=" flex justify-between p-4 rounded-lg shadow-md my-3 items-center bg-gray-100">
            <h1>~ {snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={'link'}>View</Button></Link>
          </div>
        ))
      }
     </div>
    </div>
  );
}
