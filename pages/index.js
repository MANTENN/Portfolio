import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

import { fetcher } from "../lib/graphqlUtils";

export const PORTFOLIO_QUERY = gql`
  query Portfolio {
    blogPostCollection {
      items {
        title
        slug
        publishDate
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
    projectCollection {
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

      <header className="container mx-auto block py-4 grid grid-cols-5 gap-4">
        <h1 className="block col-span-5 md:col-span-1 text-2xl font-bold cursor-pointer">
          <Link href="/">
            <a className="hover:bg-yellow-200">Nazar Maksymchuk</a>
          </Link>
        </h1>
        <div className="col-span-3">Links</div>
        <div className="col-span-1 text-right">GITHUB</div>
      </header>
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4">
          <div className="col-span-4 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Hustles</h2>
            {projects.items.map((hustle) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-4 text-2xl font-bold">
                  {hustle.name}
                </span>
                <span className="col-span-4">{"<Image /> here"}</span>
                <span className="col-span-4">{hustle.description}</span>
              </div>
            ))}
            <h2 className="text-base font-bold mb-4">Skills</h2>
            {skills.items.map((skill) => (
              <div className="row grid grid-cols-4 gap-4 mb-2">
                <span className="col-span-3 text-xl">{skill.name}</span>
                <span className="col-span-1">{skill.yearsOfExperience}</span>
              </div>
            ))}
          </div>
          <div className="col-span-4 md:col-span-3">
            <h2 className="text-xl font-bold mb-3">
              Posts<span className="text-base"> | Articles</span>
            </h2>
            {posts.items.map((post) => (
              <div className="mb-2">
                <h3 className="text-2xl font-bold">
                  <Link href={post.slug}>
                    <a className="hover:bg-yellow-200">{post.title}</a>
                  </Link>
                </h3>
              </div>
            ))}
            <h2 className="mt-4 text-xl font-bold mb-3">Work History</h2>
            {workHistory.items.map((skill) => (
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
