import { ReactNode } from "react";

export const metadata = {
  title: "Festival Huế 2025",
  decription: "Landing page Festival Huế 2025 - Làng nghề, Ẩm thực, Nghệ thuật",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-[#f9f7f1] font-sans scroll-smooth">
        {/* Có thể thêm Navbar ở đây nếu muốn */}
        {children}
        {/* Footer cố định hoặc dynamic */}
      </body>
    </html>
  );
}
