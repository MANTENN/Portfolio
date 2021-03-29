import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { format } from "fecha";

import { fetcher } from "../lib/graphqlUtils";

export const POST_QUERY = gql`
  query post($slug: String) {
    blogPostCollection(where: { slug: $slug }) {
      items {
        title
        slug
        publishDate
        heroImage {
          url
          width
          height
        }
        body
      }
    }
  }
`;

export default function Page({ initialData }) {
  // const { loading, error, data = {} } = useQuery(PORTFOLIO_QUERY);
  // const {
  //   blogPostCollection: posts = { items: [], total: 0 },
  //   skillCollection: skills = { items: [], total: 0 },
  //   projectCollection: projects = { items: [], total: 0 },
  //   workHistoryCollection: workHistory = { items: [], total: 0 },
  // } = initialData;
  const { blogPostCollection } = initialData;

  return (
    <>
      <Head>
        <title>Nazar Maksymchuk - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto block py-4 grid grid-cols-5 gap-4">
        <h1 className="inline col-span-5 md:col-span-1 text-2xl font-bold hover:bg-yellow-200 cursor-pointer">
          <Link href="/">
            <a>Nazar Maksymchuk</a>
          </Link>
        </h1>
        <div className="col-span-3">Links</div>
        <div className="col-span-1 text-right">GITHUB</div>
      </header>
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4">
          <div className="col-span-4 md:col-span-1">
            {/* <h2 className="text-xl font-bold mb-4">Hustles</h2>
            {projects.items.map((skill) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-4 text-2xl font-bold">
                  {skill.name}
                </span>
                <span className="col-span-4">{skill.description}</span>
              </div>
            ))}
            <h2 className="text-base font-bold mb-4">Skills</h2>
            {skills.items.map((skill) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-3 text-xl">{skill.name}</span>
                <span className="col-span-1">{skill.yearsOfExperience}</span>
              </div>
            ))} */}
          </div>
          <div className="col-span-4 md:col-span-2">
            <h2 className="text-4xl font-bold mb-3">
              {blogPostCollection.items[0].title}
            </h2>
            <div className="attributes mb-3">
              <span className="text-xl font-bold mb-3 text-gray-700 ">
                {"Published on " +
                  format(
                    new Date(blogPostCollection.items[0].publishDate),
                    "dddd MMMM Do, YYYY"
                  )}
              </span>
            </div>
            <div
              className="contents text-xl leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blogPostCollection.items[0].body,
              }}
            ></div>
            {/* {posts.items.map((post) => (
              <div className="mb-2">
                <h3 className="text-2xl font-bold">
                  <Link href={post.slug}>
                    <a className="hover:bg-yellow-200">{post.title}</a>
                  </Link>
                </h3>
              </div>
            ))} */}
            {/* {workHistory.items.map((skill) => (
              <div className="mb-2">
                <h1 className="text-2xl font-bold">
                  {skill.website ? (
                    <a
                      href={skill.website}
                      className="text-blue-900"
                      target="_blank"
                    >
                      {skill.company}
                    </a>
                  ) : (
                    skill.company
                  )}
                </h1>
                <p>{skill.description}</p>
              </div>
            ))} */}
          </div>
          <div className="col-span-4 md:col-span-1">
            {/* <h2 className="text-xl font-bold mb-4">Hustles</h2>
            {projects.items.map((skill) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-4 text-2xl font-bold">
                  {skill.name}
                </span>
                <span className="col-span-4">{skill.description}</span>
              </div>
            ))}
            <h2 className="text-base font-bold mb-4">Skills</h2>
            {skills.items.map((skill) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-3 text-xl">{skill.name}</span>
                <span className="col-span-1">{skill.yearsOfExperience}</span>
              </div>
            ))} */}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await fetcher(POST_QUERY, { slug: params.slug });
  // console.log("data", data);
  // when no typee of page is not found return 404 page
  return {
    props: {
      initialData: data,
    },
    revalidate: 60,
    // notFound: true
  };
}

export async function getStaticPaths() {
  const POSTS = gql`
    query posts {
      blogPostCollection {
        items {
          slug
        }
      }
    }
  `;
  const data = await fetcher(POSTS);
  const paths = data.blogPostCollection.items.map(({ slug }) => "/" + slug);

  return { paths, fallback: false };
}
