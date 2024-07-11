'use client'
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";



export default function Home() {
  const documents = useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <ModeToggle />

      <Button onClick={() => {
        createDocument({title: "hello world"})
      }}>Click me</Button>

      {documents?.map((doc) => (
        <div key={doc._id}>{doc.title}</div>
      ))}
      </Authenticated>
    </main>
  );
}
