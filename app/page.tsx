import { gql } from "@apollo/client";
import { fetcher } from "../lib/graphqlUtils";
import { Article } from "../components/article";
import Sidebar from "../components/sidebar";

import { reviews } from "../data";
import { Review } from "../components/reviews";

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

export const metadata = {
  title: "Nazar Maksymchuk — Freelance Fullstack Developer",
};

export default async function Page() {
  const {
    blogPostCollection: posts = { items: [], total: 0 },
    skillCollection: skills = { items: [], total: 0 },
    projectCollection: projects = { items: [], total: 0 },
    workHistoryCollection: workHistory = { items: [], total: 0 },
  } = await fetcher(PORTFOLIO_QUERY);

  // const { loading, error, data = {} } = useQuery(PORTFOLIO_QUERY);

  return (
    <>
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-9 gap-4 mt-8">
          <div className="col-span-9 md:col-span-5 md:order-2">
            <h2 className="text-xl font-bold mb-3">
              Posts<span className="text-base"> | Articles</span>
            </h2>
            {posts.items.map(Article)}
            <h2 className="text-xl font-bold mt-6 mb-3">Reviews</h2>
            {reviews.map((review, i) => (
              <Review key={i} i={i} {...review} />
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
