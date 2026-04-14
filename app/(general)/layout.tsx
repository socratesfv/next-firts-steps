import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      <h1>Layout childs</h1>
      <main className="flex felx-col items-center justify-center w-full p-24">
      {children}
    </main>
    </div>
  );
}