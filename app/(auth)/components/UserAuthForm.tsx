import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function UserAuthForm() {
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
          ログイン
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
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <Image
            src="github.svg"
            alt="github"
            width={20}
            height={20}
          />
          <span>GitHub</span>
        </Button>
      </div>
    </div>
  );
}
