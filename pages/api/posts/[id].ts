// pages/api/posts/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

// Sample data for demonstration
const blogPosts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  const postId = parseInt(id as string, 10);
  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.status(200).json(post);
};
