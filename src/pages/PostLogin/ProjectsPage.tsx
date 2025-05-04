
import React from "react";
import ProjectList from "@/components/PostLogin/ProjectsPage/ProjectList";

const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-2">Manage your marketing projects here.</p>
      </div>
      
      <ProjectList />
    </div>
  );
};

export default ProjectsPage;
