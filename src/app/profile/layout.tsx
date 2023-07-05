"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData } from "@/redux/userData";
import { usePathname } from "next/navigation";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const currentState = useAppSelector(selectUserData);
  const active = usePathname().slice(9);

  return (
    <div className="flex flex-col gap-10 mt-16 w-full lg:w-11/12 xl:w-3/4 overflow-hidden mx-auto">
      <div className="rounded-2xl border border-zinc-200">
        <div className="flex justify-center lg:justify-start rounded-t-2xl px-5 py-6 primary-gradient relative">
          <div className="relative w-fit">
            <Image
              loader={() => currentState.profile.imageUrl}
              src="abc"
              alt="profile picture"
              width={180}
              height={180}
              className="translate-y-[110px] rounded-full border-2 border-zinc-100 mx-auto lg:mx-0"
            />
            <div className="absolute -bottom-[168px] -right-5">
              <Image
                src="/polygon.svg"
                alt="level icon"
                width={31}
                height={33}
                className="w-24 h-40"
              />
              <p className="absolute top-[62px] left-10 w-fit text-white text-2xl font-bold">
                {currentState.profile.level}
              </p>
            </div>
          </div>
          <div className="bg-white/20 border border-white/25 absolute right-5 top-6 py-2 pl-2 pr-3 rounded-lg flex items-center gap-2 text-xs font-semibold text-white cursor-pointer backdrop-blur">
            <Image src="/edit.svg" alt="edit icon" width={16} height={16} />
            <p>Edit Cover</p>
          </div>
        </div>
        <div className="pt-32 pb-8 pr-6 pl-6 lg:pl-56 lg:pt-6 flex flex-col gap-8">
          <div>
            <div className="flex gap-3 items-center mb-2">
              <h1 className="text-3xl font-bold">
                {currentState.profile.name}
              </h1>
              {currentState.profile.isProMember ? (
                <div className="px-3 py-0.5 bg-lime-300 rounded-[4px]">Pro</div>
              ) : (
                ""
              )}
              {currentState.profile.lookingForJob ? (
                <div className="px-3 py-0.5 text-sky-800 bg-sky-100 rounded-[4px] text-sm font-semibold">
                  Looking for job
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-2 text-base font-normal text-zinc-500">{`${currentState.profile.job} | ${currentState.profile.graduation}`}</div>
            <div className="flex gap-0.5 text-base font-normal text-zinc-400">
              <Image
                src="/location.svg"
                alt="location icon"
                width={16}
                height={16}
              />
              <p>{currentState.profile.location}</p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {currentState.resume.techSkills.map((skill, index) => {
              if (skill.show) {
                return (
                  <div
                    key={index}
                    className="px-3 py-2 rounded-lg bg-zinc-100 text-xs font-semibold"
                  >
                    {skill.title}
                  </div>
                );
              }
            })}
          </div>
          <div className="h-[1px] bg-zinc-100" />
          <div className="flex flex-wrap justify-between gap-4 items-center">
            <div className="flex flex-wrap gap-4">
              {currentState.socials.map((social) => {
                if (social.value) {
                  return (
                    <Link
                      key={social.type}
                      href={`${social.type === "Email" ? "mailto:" : ""}${
                        social.value
                      }`}
                      className="shrink-0 p-2 rounded-lg border border-zinc-200"
                    >
                      <Image
                        key={social.type}
                        src={`/${social.type.toLowerCase()}.svg`}
                        alt={`${social.type} icon`}
                        width={20}
                        height={20}
                      />
                    </Link>
                  );
                }
              })}
            </div>
            <div className="flex gap-4 items-center">
              {active === "portfolio" ? (
                <>
                  <div className="shrink-0 cursor-pointer p-3 rounded-lg bg-zinc-100">
                    <Image
                      src="/bookmark.svg"
                      alt="bookmark icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <Link
                    href={`mailto:${currentState.socials[0].value}`}
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold"
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <div className="py-2 px-4 rounded-lg bg-zinc-100 text-sm font-semibold">
                  Follow
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-6 border border-zinc-200 rounded-xl flex gap-6">
        <Link
          href="/profile/portfolio"
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            active === "portfolio"
              ? "bg-indigo-50 text-indigo-700"
              : "bg-zinc-100 text-zinc-700"
          }`}
        >
          Portfolio
        </Link>
        <Link
          href="/profile/resume"
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            active === "resume"
              ? "bg-indigo-50 text-indigo-700"
              : "bg-zinc-100 text-zinc-700"
          }`}
        >
          Resume
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProfileLayout;
