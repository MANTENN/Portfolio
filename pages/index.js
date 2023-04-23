import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { Header } from "../components/header";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import { fetcher } from "../lib/graphqlUtils";
import { Article } from "../components/article";
import { Star } from "../components/star";
import Sidebar from "../components/sidebar";

const reviews = [
  {
    text: "[Very] knowledgeable and professional. [Also] had further recommendations [and direction to take—] which are super useful.",
    orig: "very knowledgeable and professional. also had further recommendations which are super useful.",
    name: "Binit Pradhanang",
    country: "Netherlands",
    rating: 5,
    time: [1, "week"],
    source: 0,
  },
  {
    text: "[I will] be using [their services] again.",
    orig: "I’ll be using them again.",
    name: "Lee Howard",
    country: "United States",
    rating: 5,
    time: [1, "month"],
    source: 0,
  },
  {
    text: "Buyer was very considerate and gave detailed instructions.",
    orig: "Buyer was very considerate and gave detailed instructions.",
    name: "Holly Hofer",
    rating: 5,
    time: [],
    source: 0,
  },
];

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
            {/* <h2 className="mt-4 text-xl font-bold mb-3 mt-14">Work History</h2>
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
                  {
                    unified()
                      .use(parse)
                      .use(remark2react)
                      .processSync(experience.description).result
                  }
                </p>
              </div>
            ))} */}
            <h2 className="text-xl font-bold mt-6 mb-3">Reviews</h2>
            {reviews.map((review, i) => (
              <div key={i} className="italic text-xl mb-3">
                <div className="text-2xl">
                  {review.text}
                  <span className="text-xs -mb-2">{i}</span>
                </div>
                <div className="flex items-center gap-2">
                  {review.rating ? (
                    <div className="flex text-yellow-500 my-2">
                      {new Array(review.rating).fill(0).map((_) => (
                        <Star className="w-8 h-8 p-1 fill-current" />
                      ))}
                    </div>
                  ) : null}
                  <div>{review.name}</div>
                  {review.source == 0 ? <div>— Fiverr</div> : null}
                </div>
                {review.time.length >= 0 ? (
                  <div>
                    {review.time[0]} {review.time[1]} ago
                  </div>
                ) : null}
              </div>
            ))}
            <h3 className="text-xs font-bold mb-2">Original Review Text</h3>
            {reviews.map((review, i) => (
              <div key={i} className="text-xs">
                {i}. {review.orig}
              </div>
            ))}
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
