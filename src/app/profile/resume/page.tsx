"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData } from "@/redux/userData";
import ResumeCard from "@/app/components/ResumeCard";

const Resume: React.FC = () => {
  const currentState = useAppSelector(selectUserData);
  return (
    <div className="mb-20 flex flex-col gap-10">
      <div>
        <h1 className="text-center text-2xl font-bold mb-6">About me</h1>
        <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6">
          <p className="text-base font-medium mb-6">
            {currentState.profile.about}
          </p>
          <button className="py-2 px-4 rounded-lg text-sm font-semibold">
            Read more
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold mb-6">Work experience</h1>
        <div className="flex flex-col gap-5">
          {currentState.resume.workExp.map((work) => {
            return (
              <ResumeCard
                key={work.icon}
                icon={work.icon}
                title={work.title}
                location={work.location}
                company={work.company}
                duration={work.duration}
                description={work.description}
                responsibilities={work.responsibilities}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">Education</h1>
        <div className="flex flex-col gap-5">
          {currentState.resume.education.map((item) => {
            return (
              <ResumeCard
                key={item.icon}
                icon={item.icon}
                title={item.title}
                location={item.location}
                degree={item.degree}
                duration={item.duration}
                description={item.description}
                responsibilities={[]}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">Tech skills</h1>
        <div className="flex gap-5 flex-wrap">
          {currentState.resume.techSkills.map((skill) => {
            if (skill.show) {
              return (
                <div
                  key={skill.icon}
                  className="flex gap-2 items-center p-2 pr-3 border border-zinc-100 rounded-lg bg-zinc-50"
                >
                  <Image
                    src={`/${skill.icon}.svg`}
                    alt={`${skill.icon} icon`}
                    width={20}
                    height={20}
                  />
                  <strong className="text-base font-semibold">
                    {skill.title}
                  </strong>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">Interests</h1>
        <div className="flex gap-5 flex-wrap">
          {currentState.resume.interests.map((interest) => {
            return (
              <div
                key={interest}
                className="p-2 pr-3 border border-zinc-100 rounded-lg bg-zinc-50 text-base font-semibold"
              >
                {interest}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">Languages</h1>
        <div className="flex gap-5 flex-wrap">
          {currentState.resume.languages.map((language) => {
            return (
              <div
                key={language.icon}
                className="flex gap-2 p-2 pr-3 border border-zinc-100 rounded-lg bg-zinc-50 text-base font-semibold"
              >
                <Image
                  src={`/flags/${language.icon}.svg`}
                  alt={`${language.icon} icon`}
                  width={20}
                  height={15}
                />
                <p>{language.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
