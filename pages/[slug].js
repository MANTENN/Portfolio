import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { format } from "fecha";

import { fetcher } from "../lib/graphqlUtils";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";
import { Header } from "../components/header";
import { ChevronLeft } from "react-feather";
import dynamic from "next/dynamic";

import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

const Paragraph = ({ children }) => <p className="mb-2">{children}</p>;

const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  {
    loading: ({ children }) => <pre>{children}</pre>,
  }
);

const Pre = ({ children }) => {
  return (
    <SyntaxHighlighter wrapLongLines style={dark}>
      {children.map(({ props: { children } }) => children).join("")}
    </SyntaxHighlighter>
  );
};

export default function Page({ initialData }) {
  const { blogPostCollection } = initialData || {
    blogPostCollection: {
      items: [{ title: "", publishDate: new Date(), body: "" }],
    },
  };
  const body = unified()
    .use(parse)
    .use(remark2react, { remarkReactComponents: { p: Paragraph, pre: Pre } })
    .processSync(blogPostCollection.items[0].body).result;
  return (
    <>
      <Head>
        <title>Nazar Maksymchuk - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 lg:col-span-1" />
          <div className="col-span-4 lg:col-span-2">
            <Link href="/">
              <a className="flex items-center mb-2 hover:text-yellow-300">
                <ChevronLeft size={18} className="mr-1" />
                Posts
              </a>
            </Link>
            <h2 className="text-4xl font-bold mb-3">
              {blogPostCollection.items[0].title}
            </h2>
            <div className="attributes mb-3">
              <span className="text-xl font-bold mb-3 text-gray-700 dark:text-gray-400">
                {"Published on " +
                  format(
                    new Date(blogPostCollection.items[0].publishDate),
                    "dddd MMMM Do, YYYY"
                  )}
              </span>
            </div>
            <div className="contents text-xl leading-relaxed">{body}</div>
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
          <div className="col-span-4 lg:col-span-1">
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

  return {
    props: {
      initialData: data,
    },
    revalidate: 60,
    notFound: !data,
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

  return { paths, fallback: true };
}
