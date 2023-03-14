import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StructuredText, type StructuredTextDocument } from 'react-datocms';

type Data = {
  datoCmsBlogpost: {
    title: string,
    id: string,
    coverimage: {
      url: string,
      alt: string,
    },
    description: string,
    content: StructuredTextDocument
  }
}

const BlogPost: React.FC<PageProps> = ({data}) => {
  const {
    datoCmsBlogpost: {
      title,
      id,
      coverimage: {
        url,
        alt,
      },
      description,
      content
    }
  } = data as Data;

  return (
    <Layout className='p-6'>
      <h1 className='text-4xl font-medium'>{title}</h1>
      <br />
      <img
        className='w-full rounded-3xl'
        src={url} 
        alt={alt} 
      />

      <StructuredText data={content} />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug(
    $slug: String!
  ) {
    datoCmsBlogpost(
      slug: {eq: $slug}
    ) {
      title
      id
      coverimage {
        alt
        url
      }
      description
      content {
        blocks
        links
        value
      }
    }
  }
`
