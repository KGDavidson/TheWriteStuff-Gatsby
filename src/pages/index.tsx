import * as React from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const {
    datoCmsHomepage: {
      featuredpost: {
        id,
        slug,
        title,
        description,
        coverimage: {
          url,
          alt,
        }
      }
    }
  } = data as any;

  return (
    <Layout>
      <Link 
        to={`/blog/${slug}`}
        className="text-white bg-cover overflow-hidden group rounded-none sm:rounded-3xl h-[66vh] sm:h-featured flex items-end justify-center relative"
      >
        <img
          className="absolute inset-0 h-full w-full transition-all group-hover:scale-110 object-cover"
          src={url ? url : "https://www.datocms-assets.com/96180/1678690614-samsung-uk-pv9qqfdb5w8-unsplash.jpg"} 
          alt={alt} 
        />
        <div className="w-full px-4 py-10 sm:pl-12 sm:pr-80 sm:pb-16 sm:pt-8 relative bg-gradient-to-t from-black group-hover:via-black/[0.6]">
          <h3 className="font-bold text-lg hidden sm:block">Featured</h3>
          <h2 className="text-3xl sm:text-[3rem] font-semibold sm:leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light text-ellipsis overflow-hidden line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>The Write Stuff.</title>

export const query = graphql`
  query HomeQuery {
    datoCmsHomepage {
      id
      featuredpost {
        id
        slug
        title
        description
        coverimage {
          url
          alt
        }
      }
    }
  }
`
