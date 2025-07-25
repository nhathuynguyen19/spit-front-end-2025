import React from "react";

interface FooterDivProps {
  url: string;
  title: string;
  titleIsShort?: boolean;
}

function FooterDiv({ url, title, titleIsShort = true }: FooterDivProps) {
  return (
    <p className="flex font-playfair text-[8.5px] [@media(min-width:540px)]:text-[12px] w-fit mx-auto">
      {titleIsShort && <span>{title}:&nbsp;</span>}
      <a
        href={url}
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {titleIsShort && <span>{url}</span>}
        {!titleIsShort && <span>{title}</span>}
      </a>
    </p>
  );
}

export default FooterDiv;
