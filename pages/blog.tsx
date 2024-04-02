// pages/index.tsx

import Link from 'next/link';
import { getAllBlogSlugs } from '../lib/blog'; // Import the function to get all blog slugs

const Blog = ({ blogSlugs }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogSlugs.map(({ params: { slug } }) => ( // Destructure params and extract slug
          <li key={slug}>
            {/* Use the correct path with the dynamic segment included */}
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              {/* Render the slug text directly */}
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const blogSlugs = getAllBlogSlugs(); // Fetch all blog slugs
  return {
    props: {
      blogSlugs,
    },
  };
};

export default Blog;
