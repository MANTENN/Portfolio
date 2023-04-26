import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import { fetcher } from "../lib/graphqlUtils";
import { Article } from "../components/article";
import Sidebar from "../components/sidebar";

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

      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 md:col-span-3 md:order-2">
            <h2 className="text-xl font-bold mb-3">
              Posts<span className="text-base"> | Articles</span>
            </h2>
            {posts.items.map(Article)}
          </div>
          <Sidebar projects={projects} skills={skills} />
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
