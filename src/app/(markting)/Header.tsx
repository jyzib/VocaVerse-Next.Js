import React from "react";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton
} from "@clerk/nextjs";
const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 px-3 flex justify-between items-center">
      Heading


      <div className="">
      <ClerkLoading>
        <Loader className="animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
  <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/button">
    <Button  >
      Login
    </Button>
  </SignInButton>
        </SignedOut>
      </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
