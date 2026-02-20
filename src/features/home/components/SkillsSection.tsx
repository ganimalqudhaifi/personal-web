import { skills } from "../data/skills";
import { Skill } from "../types/skill";
import { PiCodeBold } from "react-icons/pi";

import Icon from "@/components/icon";

const SkillCard = ({ icon, name, isHidden = false }: Skill) => (
  <div
    className={`${isHidden && "hidden"} flex items-center space-x-2 rounded-full border border-zinc-800 p-2.5 pl-3.5 shadow`}
  >
    <Icon size={30} name={icon} />
    <p className="text-sm text-zinc-500">{name}</p>
  </div>
);

export default function SkillsSection() {
  return (
    <div>
      <div className="flex items-center space-x-2 text-zinc-200">
        <PiCodeBold size={24} />
        <h2 className="text-xl">Skills</h2>
      </div>
      <p className="mt-2 mb-6 text-zinc-400">My Programing Skills</p>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
