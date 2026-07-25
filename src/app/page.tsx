"use client";
import { Button } from "@/components/ui/button";
import { ProjectsView } from "@/features/projects/components/projects-view";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


const Home = () => {
  return <ProjectsView/>
  
}
export default Home;