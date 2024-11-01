import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Space Portfolio Assets/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Space Portfolio Assets/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Space Portfolio Assets/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />


      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Space Portfolio Assets/full stack app with nextjs.gif"
          title="Modern Next.js Full Stack App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Space Portfolio Assets/celebrityvoicesbot.png"
          title="Celebrity Voice Bot"
          description="User give any text to telegram bot and it will give the response on Voices."
        />


<ProjectCard
          src="/Space Portfolio Assets/completewebsiteworkchatbot.png"
          title="Complete Website Chatbot"
          description="A Website Chatbot that work on website its already develop and integrate on website where
          user ask their question and it will give response back to user"
        />
      </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Space Portfolio Assets/openai_assistant_development_websitedevelopment_and integration with website.png"
          title="Modern Next.js Full Stack App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Space Portfolio Assets/celebrityvoicesbot.png"
          title="OpenAI Assistant Website Development and Integration"
          description="This project showcases the development and integration of an OpenAI-powered assistant into a responsive website, enabling real-time interaction and support for users. The assistant is designed to handle a range of user queries and provide relevant information seamlessly, enhancing user engagement and experience. Key features include dynamic conversation handling, easy website integration, and a user-friendly interface. 
          The project involved frontend development for intuitive interaction and backend integration to ensure efficient communication with OpenAI's API."
        />


<ProjectCard
          src="/Space Portfolio Assets/completewebsiteworkchatbot.png"
          title="Complete Website Chatbot"
          description="A Website Chatbot that work on website its already develop and integrate on website where
          user ask their question and it will give response back to user"
        />
      </div>
    </div>
  );
};

export default Projects;
