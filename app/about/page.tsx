import Head from "next/head";
import { gql } from "@apollo/client";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import { fetcher } from "../../lib/graphqlUtils";
import Sidebar from "../../components/sidebar";
import Contact from "../../components/contact";

const PORTFOLIO_QUERY = gql`
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

export default async function About() {
  const {
    blogPostCollection: posts = { items: [], total: 0 },
    skillCollection: skills = { items: [], total: 0 },
    projectCollection: projects = { items: [], total: 0 },
    workHistoryCollection: workHistory = { items: [], total: 0 },
  } = await fetcher(PORTFOLIO_QUERY);
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

      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 md:col-span-3 md:order-2">
            <h2 className="mt-4 text-xl font-bold mb-3 mt-14">Work History</h2>
            {workHistory.items.map((experience) => {
              const description: any = unified()
                .use(parse)
                .use(remark2react)
                .processSync(experience.description).result;
              return (
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
                  <p>{description}</p>
                </div>
              );
            })}
            <Contact />
          </div>
          <Sidebar projects={projects} skills={skills} />
        </div>
      </div>
    </>
  );
}
