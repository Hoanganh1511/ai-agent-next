"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const HomeView = () => {
  // const router = useRouter();
  // const { data: session } = authClient.useSession();

  // if (!session) {
  //   return <p>Loading...</p>;
  // }
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Antonio" }));
  console.log("Data from TRPC:", data);
  return (
    <div className="flex flex-col p-4 gap-y-4 text-black">
      {JSON.stringify(data)}
    </div>
  );
};

export default HomeView;
