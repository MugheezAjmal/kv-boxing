"use client";

import Script from "next/script";

export default function BookingWidget({ minHeight = 800 }: { minHeight?: number }) {
  return (
    <div style={{ width: "100%", minHeight }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/group/1cEzq5ABDvyVJ9JIY06i"
        style={{ width: "100%", border: "none", overflow: "hidden", display: "block" }}
        scrolling="no"
        id="1cEzq5ABDvyVJ9JIY06i_1778678373942"
        title="KV Boxing Group Booking Calendar"
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
