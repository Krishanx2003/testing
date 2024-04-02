import Collection from "@/components/project/Collection";
import { getProjectById, getRelatedProjectsByCategory } from "@/lib/actions/project.actions";
import { SearchParamProps } from "@/types";
import Image from 'next/image';







const ProjectDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const project = await getProjectById(id);
  
    const relatedProjects = await getRelatedProjectsByCategory({
      categoryId: project.category._id,
      projectId: project._id,
      page: searchParams.page as string,
    })
  
    return (
    <>
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image 
          src={project.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='h2-bold'>{project.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {project.category.name}
                </p>
              </div>
            </div>
          </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
            <p className="p-medium-16 lg:p-regular-18">{project.description}</p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{project.url}</p>
          </div>
        </div>
     
    </section>

    {/* projectS with the same category */}
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Related projects</h2>

      <Collection 
          data={relatedProjects?.data}
          emptyTitle="No Projects Found"
          emptyStateSubtext="Come back later"
          collectionType= 'All_projects'
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedProjects?.totalPages}
        />
    </section>
    </>
  )
}

export default ProjectDetails