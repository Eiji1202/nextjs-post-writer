"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  buttonLabel: string;
};

export default function UserAuthForm(props: Props) {
  const { buttonLabel } = props;
  const [isLoadingSignInGitHub, setIsLoadingSignInGitHub] = useState(false);
  const [isLoadingSignInGoogle, setIsLoadingSignInGoogle] = useState(false);

  const signInGoogle = async () => {
    setIsLoadingSignInGoogle(true);
    await signIn("google");
    setIsLoadingSignInGoogle(false);
  };
  const signInGithub = async () => {
    setIsLoadingSignInGitHub(true);
    await signIn("github");
    setIsLoadingSignInGitHub(false);
  };
  return (
    <div>
      <form className="space-y-2">
        <div className="text-left space-y-1 md:space-y-2">
          <Label
            htmlFor="email"
            className="md:text-lg"
          >
            メールアドレス
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="off"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
        >
          {buttonLabel}
        </Button>
      </form>

      <div>
        <div className="flex items-center justify-center my-4 md:my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-2 md:mx-4 text-muted-foreground text-sm md:text-lg">
            または
          </span>
          <div className="flex-grow border-t"></div>
        </div>
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={signInGithub}
            disabled={isLoadingSignInGitHub}
          >
            <>
              {isLoadingSignInGitHub ? (
                <Image
                  src="loader.svg"
                  alt="loading"
                  width={20}
                  height={20}
                  className="animate-spin"
                />
              ) : (
                <Image
                  src="github.svg"
                  alt="github"
                  width={20}
                  height={20}
                />
              )}
              <span>GitHub</span>
            </>
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={signInGoogle}
            disabled={isLoadingSignInGoogle}
          >
            <>
              {isLoadingSignInGoogle ? (
                <Image
                  src="loader.svg"
                  alt="loading"
                  width={20}
                  height={20}
                  className="animate-spin"
                />
              ) : (
                <Image
                  src="google.svg"
                  alt="google"
                  width={22}
                  height={22}
                />
              )}
              <span>Google</span>
            </>
          </Button>
        </div>
      </div>
    </div>
  );
}
