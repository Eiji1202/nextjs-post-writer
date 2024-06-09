"use client";

import { Post } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./partials/Callout";

type Props = {
  code: Post["body"]["code"];
};

const components = {
  Image,
  Callout,
};

export default function Mdx(props: Props) {
  const { code } = props;
  const ConvertedCode = useMDXComponent(code);
  return (
    <div className="prose prose-zinc max-w-full prose-sm md:prose-base lg:prose-lg dark:text-white">
      <ConvertedCode components={components} />
    </div>
  );
}
