export default function HeroSection() {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-extrabold">
        Hi, I&apos;m Alqi{" "}
        <span className="inline-block animate-wiggle">👋</span>
      </h2>
      <ul className="mb-6 list-disc list-inside text-zinc-400 lg:flex lg:space-x-8">
        <li>Front-End Developer</li>
        <li>
          Based in Depok <span className="text-sm">ID</span>
        </li>
      </ul>
      <p className="text-zinc-300">
        I have a strong passion for coding, with a keen focus on architectural
        design, maintainability, and the art of crafting clean code. I am
        dedicated to developing websites that not only function efficiently but
        are also designed for ease of comprehension and long-term maintenance.
      </p>
      <p className="mt-4 text-zinc-300">
        My primary objective is to engineer elegant solutions that tackle
        intricate problems, while upholding a superior standard of code quality
        and readability.
      </p>
    </div>
  );
}
