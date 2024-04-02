import { IProject } from '@/lib/database/models/project.model';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CardProps = {
  project: IProject;
 
};

const Card = ({ project }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  if (!project) {
    // Handle the case where project is not available
    return <div>Error: Project not found</div>;
  }

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link href={`/projects/${project._id}`} 
          style={{ backgroundImage: `url(${project.imageUrl})` }}
          className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        >
          {/* Add fallback image here if needed */}
          <Image src={project.imageUrl} alt="Project Image" width={400} height={380} />
    
      </Link>
      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {project.category && (
          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
            {project.category.name}
          </p>
        )}
      
        <Link href={`/projects/${project._id}`} className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{project.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
