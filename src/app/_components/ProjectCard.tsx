import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  title: string;
  isActive: boolean;
  time: string;
  techStack: string[];
  image: string;
  contributors: number;
  contributorsImgs: string[];
  showBadge: boolean;
  handleClick?: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  isActive,
  time,
  techStack,
  image,
  contributors,
  contributorsImgs,
  showBadge,
  handleClick,
}) => {
  return (
    <div
      className={`p-4 flex flex-col gap-5 rounded-lg cursor-pointer ${
        isActive === true
          ? "bg-indigo-50 border-indigo-600 border-2"
          : "bg-zinc-50 border"
      }`}
      onClick={() => handleClick && handleClick(id)}
    >
      <div className="relative">
        <Image
          loader={() => image}
          src="afesf"
          alt="Project image"
          width={300}
          height={170}
          className="rounded-lg w-full h-full"
        />
        {showBadge && (
          <div className="absolute bottom-2 flex gap-3 left-2">
            <div className="bg-sky-200 text-sky-900 py-0.5 px-3 rounded text-xs font-medium">
              Badge
            </div>
            <div className="bg-sky-200 text-sky-900 py-0.5 px-3 rounded text-xs font-medium">
              Badge
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-semibold">{title}</h2>
          <div className="cursor-pointer text-2xl">···</div>
        </div>
        <div className="mb-3">
          <div className="flex gap-2 items-center text-sm font-normal text-zinc-500">
            {techStack.map((tech, index) => {
              return (
                <div className="flex gap-2 items-center" key={index}>
                  <p>{tech}</p>
                  <p className="font-bold text-xl">·</p>
                </div>
              );
            })}
            <p>{time}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex">
            {contributorsImgs.map((image, index) => {
              return (
                <Image
                  key={index}
                  loader={() => image}
                  src="afea"
                  alt="profile image"
                  width={24}
                  height={24}
                  className={`rounded-full -translate-x-${index}`}
                />
              );
            })}
          </div>
          <div>
            <p className="text-xs font-normal text-zinc-500">{`${contributors} contributors`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
