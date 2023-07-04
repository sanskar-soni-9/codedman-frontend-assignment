"use client";
import React from "react";
import {
  updateUserPortfolio,
  selectUserData,
  resetPortfolioData,
} from "@/redux/userData";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import PlaygroundCard from "@/app/components/PlaygroundCard";
import ProjectCard from "@/app/components/ProjectCard";
import PrimaryBtn from "@/app/components/button/PrimaryBtn";
import SecondaryBtn from "@/app/components/button/SecondaryBtn";
import CertificateCard from "@/app/components/CertificateCard";

const Page: React.FC = () => {
  const currentState = useAppSelector(selectUserData);
  const portfolioData = currentState.portfolio;
  const dispatch = useAppDispatch();

  const handleActivePlaygrounds = (id: number): void => {
    dispatch(updateUserPortfolio({ type: "playground", id }));
  };
  const handleActiveProjects = (id: number): void => {
    dispatch(updateUserPortfolio({ type: "project", id }));
  };
  const handleActiveCertificates = (id: number): void => {
    dispatch(updateUserPortfolio({ type: "certificate", id }));
  };
  const resetForm = (): void => {
    dispatch(resetPortfolioData());
  };

  const applyChanges = (): void => {
    localStorage.setItem("userData", JSON.stringify(currentState));
  };

  return (
    <div className="w-fit flex flex-col gap-10 mb-12">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Playgrounds</h1>
          <p className="text-base font-normal text-zinc-500">See all</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {portfolioData.playgrounds.map((playground) => {
            return (
              <PlaygroundCard
                key={playground.id}
                id={playground.id}
                title={playground.title}
                tech={playground.tech}
                time={playground.time}
                icon={playground.icon}
                sharedWith={playground.sharedWith}
                isActive={playground.show}
                imageUrls={playground.imageUrls}
                handleClick={handleActivePlaygrounds}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-base font-normal text-zinc-500">See all</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {portfolioData.projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                isActive={project.show}
                time={project.time}
                techStack={project.tech}
                image={project.image}
                contributors={project.contributors}
                contributorsImgs={project.contributorsImages}
                showBadge={currentState.profile.privacy.achievementBadges}
                handleClick={handleActiveProjects}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Certificates</h1>
          <p className="text-base font-normal text-zinc-500">See all</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {portfolioData.certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.id}
                id={certificate.id}
                title={certificate.title}
                icon={certificate.icon}
                issuedOn={certificate.issuedOn}
                isActive={certificate.show}
                forDisplay={false}
                handleClick={handleActiveCertificates}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <SecondaryBtn handleClick={resetForm}>Cancel</SecondaryBtn>
        <PrimaryBtn handleClick={applyChanges}>Save changes</PrimaryBtn>
      </div>
    </div>
  );
};

export default Page;
