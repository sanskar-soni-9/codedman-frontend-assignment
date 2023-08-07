"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData } from "@/redux/userData";
import StatsCard from "@/app/_components/StatsCard";
import ProjectCard from "@/app/_components/ProjectCard";
import PlaygroundCard from "@/app/_components/PlaygroundCard";
import CertificateCard from "@/app/_components/CertificateCard";

const Portfolio: React.FC = () => {
  const currentState = useAppSelector(selectUserData);
  return (
    <div className="flex flex-col gap-10 mb-16 lg:mb-36">
      <div>
        <h1 className="text-2xl font-bold mb-6">Stats</h1>
        <div className="grid md:grid-cols-2 gap-5">
          <StatsCard
            src="/streak-2.svg"
            name="streak"
            value={currentState.profile.maxStreak}
            para="Longest streak"
          />
          <StatsCard
            src="/exp.svg"
            name="experience"
            value={currentState.profile.exp}
            para="Experience points"
          />
          <StatsCard
            src="/league.svg"
            name="league"
            value={currentState.profile.currentLeague}
            para="Current league"
          />
          <StatsCard
            src="/karma.svg"
            name="karma"
            value={currentState.profile.karmaPnts}
            para="Karma points"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-1 justify-between mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-base font-semibold text-indigo-600 cursor-pointer">
            Create new project
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {currentState.portfolio.projects.map((project) => {
            if (project.show) {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  isActive={false}
                  time={project.time}
                  techStack={project.tech}
                  image={project.image}
                  contributors={project.contributors}
                  contributorsImgs={project.contributorsImages}
                  showBadge={currentState.profile.privacy.achievementBadges}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-1 justify-between mb-6">
          <h1 className="text-2xl font-bold">Playgrounds</h1>
          <p className="text-base font-semibold text-indigo-600 cursor-pointer">
            Create new playground
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {currentState.portfolio.playgrounds.map((playground) => {
            if (playground.show) {
              return (
                <PlaygroundCard
                  key={playground.id}
                  id={playground.id}
                  title={playground.title}
                  tech={playground.tech}
                  time={playground.time}
                  icon={playground.icon}
                  sharedWith={playground.sharedWith}
                  isActive={false}
                  forDisplay={true}
                  imageUrls={playground.imageUrls}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-1 justify-between mb-6">
          <h1 className="text-2xl font-bold">Certificates</h1>
          <p className="text-base font-semibold text-indigo-600 cursor-pointer">
            Add new certificate
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {currentState.portfolio.certificates.map((certificate) => {
            if (certificate.show) {
              return (
                <CertificateCard
                  key={certificate.id}
                  id={certificate.id}
                  icon={certificate.icon}
                  title={certificate.title}
                  issuedOn={certificate.issuedOn}
                  forDisplay={true}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
