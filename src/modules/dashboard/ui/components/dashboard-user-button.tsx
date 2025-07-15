import { authClient } from "@/lib/auth-client";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();
  if (isPending || !data?.user) {
    return null;
  }
  return (
    <DropdownMenu>
      {JSON.stringify(data.user)}
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} />
          </Avatar>
        ) : null}
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default DashboardUserButton;
