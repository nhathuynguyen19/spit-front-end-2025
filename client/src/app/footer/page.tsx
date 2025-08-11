import React from "react";
import FooterDiv from "../components/FooterDiv";

function Footer() {
  return (
    <section className="w-full h-fit min-w-[342px] p-6 bg-[#3D365C]">
      <FooterDiv
        url="https://www.facebook.com/huefestival.official"
        title="Facebook"
      />
      <FooterDiv url="https://www.tiktok.com/@huefestival" title="Tiktok" />
      <FooterDiv url="https://huefestival.com" title="Website" />

      <FooterDiv
        url="https://maps.app.goo.gl/oXok9bgg5L4x5wzg8"
        title="Tam Tòa - 33 Tống Duy Tân, Phường Phú Xuân, thành phố Huế, Hue, Vietnam"
        titleIsShort={false}
      />
      <p className="flex font-playfair text-[8.5px] [@media(min-width:540px)]:text-[12px] w-fit mx-auto pt-4">© created by 82 ki lô bít trên giây</p>
    </section>
  );
}

export default Footer;
