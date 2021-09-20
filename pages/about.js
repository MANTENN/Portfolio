import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import { fetcher } from "../lib/graphqlUtils";
import { Header } from "../components/header";
import { Article } from "../components/article";

export const PORTFOLIO_QUERY = gql`
  query Portfolio {
    blogPostCollection {
      items {
        title
        slug
        publishDate
        externalArticleLink
      }
    }
    workHistoryCollection {
      items {
        company
        startDate
        endDate
        website
        position {
          name
        }
        description
      }
    }
    skillCollection {
      items {
        name
        confidence
        yearsOfExperience
      }
      total
    }
    projectCollection(where: { workType_contains_all: ["hustle"] }) {
      items {
        name
        heroImageCollection {
          items {
            title
            description
            url
          }
          total
        }
        link
        description
      }
      total
    }
  }
`;

export default function Home({ initialData }) {
  // const { loading, error, data = {} } = useQuery(PORTFOLIO_QUERY);
  const {
    blogPostCollection: posts = { items: [], total: 0 },
    skillCollection: skills = { items: [], total: 0 },
    projectCollection: projects = { items: [], total: 0 },
    workHistoryCollection: workHistory = { items: [], total: 0 },
  } = initialData;

  const links = [
    { href: "posts", text: "Posts" },
    { href: "about", text: "About" },
  ];

  return (
    <>
      <Head>
        <title>Nazar Maksymchuk - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 md:col-span-3 md:order-2">
            <h2 className="text-xl font-bold mb-3">
              Posts<span className="text-base"> | Articles</span>
            </h2>
            {posts.items.map(Article)}
            <h2 className="mt-4 text-xl font-bold mb-3 mt-14">Work History</h2>
            {workHistory.items.map((experience) => (
              <div className="mb-4">
                <h1 className="text-2xl font-bold">
                  {experience.website ? (
                    <a
                      href={experience.website}
                      className="text-blue-900 dark:text-blue-500"
                      target="_blank"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </h1>
                <p>
                  {" "}
                  {
                    unified()
                      .use(parse)
                      .use(remark2react)
                      .processSync(experience.description).result
                  }
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-4 md:col-span-1 md:order-1">
            <h2 className="text-base font-bold mb-4">
              Hustles | Side Projects
            </h2>
            {projects.items.map((hustle) => (
              <a
                target="_blank"
                href={
                  hustle.link +
                  "?utm_source=nmaksymchuk.com&utm_medium=projects"
                }
              >
                <div className="row grid grid-cols-4 gap-4 mb-2">
                  <span className="col-span-4 text-2xl font-bold">
                    <span className="hover:bg-yellow-200  dark:hover:text-black">
                      {hustle.name}
                    </span>
                  </span>
                  {/* <span className="col-span-4">{"<Image /> here"}</span> */}
                  {/* <span className="col-span-4">{hustle.description}</span> */}
                </div>
              </a>
            ))}
            <h2 className="text-base font-bold mt-14 mb-1">Technologies</h2>
            <span className="block text-xs mb-4 font-bold">
              Experience in Years
            </span>
            {skills.items.map((skill) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-3 font-bold text-2xl">
                  {skill.name}
                </span>
                <span className="col-span-1">{skill.yearsOfExperience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetcher(PORTFOLIO_QUERY);

  // when no typee of page is not found return 404 page
  return {
    props: {
      initialData: data,
    },
    revalidate: 60,
  };
}
