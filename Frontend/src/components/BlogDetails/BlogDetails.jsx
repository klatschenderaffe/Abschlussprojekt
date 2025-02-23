import './BlogDetails.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const BlogDetails = () => {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/BlogPosts/Boden_verlegen/${filename}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the blog post');
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((err) => setError(err.message));
  }, [filename]);

  return (
    <div className='details-container'>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
          {markdownContent}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default BlogDetails;
