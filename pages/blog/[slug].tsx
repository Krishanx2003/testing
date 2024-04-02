// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { getBlogData, getAllBlogSlugs } from '../../lib/blog'; // Import the function to get individual blog data

// Interface for Blog data
interface Blog {
  title: string;
  content: string;
}

// Props interface for the component
interface BlogProps {
  blog: Blog;
}

const BlogPage: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogSlugs(); // Function to get all blog slugs
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const blog = await getBlogData(slug); // Function to get blog data based on slug
  return {
    props: {
      blog,
    },
  };
};

export default BlogPage;
