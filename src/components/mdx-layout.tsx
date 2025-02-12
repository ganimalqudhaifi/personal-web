export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert prose-slate max-w-none">{children}</div>
  );
}
