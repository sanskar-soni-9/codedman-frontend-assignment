import React from "react";
import Image from "next/image";

interface PlaygroundCardProps {
  id: number;
  title: string;
  tech: string;
  time: string;
  icon: string;
  sharedWith: string[];
  isActive: boolean;
  imageUrls: string[];
  handleClick?: (id: number) => void;
  forDisplay?: boolean;
}

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({
  id,
  title,
  tech,
  time,
  icon,
  sharedWith,
  isActive,
  imageUrls,
  forDisplay,
  handleClick,
}) => {
  return (
    <div
      className={`relative flex gap-3 w-full p-4 rounded-lg cursor-pointer ${
        isActive
          ? "border-indigo-600 border-2 bg-indigo-50"
          : "border bg-zinc-50"
      }`}
      onClick={() => handleClick && handleClick(id)}
    >
      <div>
        <Image src={`/${icon}.svg`} alt="html-5 icon" width={40} height={40} />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm font-normal text-zinc-500">
            {`${tech} · ${time}`}
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex">
            {imageUrls.map((image, index) => {
              if (index >= 2) return "";
              return (
                <Image
                  key={index}
                  loader={() => image}
                  className={`rounded-full w-6 h-6 -translate-x-${index}`}
                  src="asf"
                  alt="profile image"
                  width={24}
                  height={24}
                />
              );
            })}
          </div>
          <div>
            {sharedWith.length && (
              <p className="text-xs font-normal text-zinc-500">
                Shared with
                <strong>{` ${sharedWith[0]}, ${
                  sharedWith.length >= 2 && sharedWith[1]
                }..`}</strong>
                {sharedWith.length > 2 && ` ${sharedWith.length - 2} more`}
              </p>
            )}
          </div>
        </div>
      </div>
      {!forDisplay && (
        <div
          className={`absolute rounded-full w-4 h-4 right-4 flex justify-center items-center ${
            isActive ? "border-2 bg-indigo-600" : "border border-zinc-200 bg-white"
          }`}
        >
          <div className="rounded-full bg-white w-1.5 h-1.5" />
        </div>
      )}
    </div>
  );
};

export default PlaygroundCard;
