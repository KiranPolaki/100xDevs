export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 bg-white text-black text-center">
      baner
      {children}
    </div>
  );
}
