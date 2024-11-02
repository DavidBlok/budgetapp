import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export const SidebarFooterUser = async () => {
  const user = await currentUser();

  if (!user) {
    return;
  }
  return (
    <SignedIn>
      <UserButton />
      {user.emailAddresses[0].emailAddress}
    </SignedIn>
  );
};
