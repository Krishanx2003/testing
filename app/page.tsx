
import CategoryFilter from '@/components/project/CategoryFilter';
import Collection from '@/components/project/Collection';
import Search from '@/components/project/Search';
import { Button } from '@/components/ui/button';
import { getAllProjects } from '@/lib/actions/project.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const projects = await getAllProjects({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-primary"> happen - Where Every Click Unveils an Adventure!</h1>
            <p className="p-regular-20 md:p-regular-24 text-primary">Join us in discovering the unexpected. Explore, connect, and make every moment unforgettable with Happen!</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#project">Explore Now</Link>
            </Button>
          </div>
          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="project" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-primary">Trust by Thousands of project</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection 
          data={projects?.data} // Pass fetched projects data
          emptyTitle="No project Found"
          emptyStateSubtext="Come back later"
          limit={6}
          page={Number(searchParams?.page) || 1}
          totalPages={projects?.totalPages}
          collectionType= 'All_projects'
        />
      </section>
    </>
  );
}
