type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
