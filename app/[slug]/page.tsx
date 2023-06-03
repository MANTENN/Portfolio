import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "../../components/link";
import { format } from "fecha";

import { fetcher } from "../../lib/graphqlUtils";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import { ChevronLeft, Star, X } from "react-feather";

import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { MDXRemote } from "next-mdx-remote";
import { compileMDX } from "next-mdx-remote/rsc";
import { Steps } from "../../components/steps";

const POST_QUERY = gql`
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

export async function generateMetadata({ params, searchParams }, parent?) {
  const { slug } = params;
  const data = await getBlogPost({ slug });
  return { title: data.title + " by Nazar Maksymchuk" };
}

const Paragraph = ({ children }) => <p className="mb-2">{children}</p>;

// const SyntaxHighlighter = dynamic(
//   () => import("react-syntax-highlighter").then((mod) => mod.Prism),
//   {
//     loading: ({ children }) => <pre>{children}</pre>,
//   }
// );

const Pre = ({ children }) => {
  return (
    <div style={dark}>
      {children.map(({ props: { children } }) => children).join("")}
    </div>
  );
};

async function getBlogPost({ slug }) {
  const matter = (await import("gray-matter")).default;
  // end of imports for staticProps

  function join(curDir, folder) {
    return curDir + "/" + folder;
  }

  const docsDirectory = join(process.cwd(), "docs");
  const fs = await import("fs");

  const fullPath = join(docsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data: markdownMetaData, content: markdownContent } =
      matter(fileContents);

    const serializedLocalMarkdownContent: any = await compileMDX({
      source: markdownContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
          format: "mdx",
        },
        scope: markdownMetaData,
      },
      components: { Star },
    });
    return {
      title:
        (serializedLocalMarkdownContent.title
          ? serializedLocalMarkdownContent.title
          : markdownMetaData.title) || null,
      publishDate:
        (serializedLocalMarkdownContent.publishDate
          ? serializedLocalMarkdownContent.publishDate
          : markdownMetaData.publishDate) || null,
      body: serializedLocalMarkdownContent.content,
    };
  } catch (e) {
    if (e.code !== "ENOENT") {
      console.log("[error]: ", e);
      return {
        title: "",
        publishDate: new Date().toISOString(),
        body: null,
      };
    }
  }
  const {
    blogPostCollection: {
      items: [contentfulBlogPost],
    },
  } = await fetcher(POST_QUERY, { slug: slug });

  const { result: contentfulBody } = (contentfulBlogPost || {}).body
    ? unified()
        .use(parse)
        .use(remark2react, {
          remarkReactComponents: { p: Paragraph, pre: Pre, Steps: Steps },
        })
        .processSync(contentfulBlogPost.body)
    : { result: "" };

  return {
    ...contentfulBlogPost,
    body: contentfulBody,
  };
}

export default async function Page({ params }) {
  const { title, publishDate, body } = await getBlogPost({ slug: params.slug });

  return (
    <>
      <Head>
        <title>Nazar Maksymchuk - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 lg:col-span-1" />
          <div className="col-span-4 lg:col-span-3">
            <Link
              href="/"
              className="flex items-center mb-2 hover:text-yellow-300"
            >
              <ChevronLeft size={18} className="mr-1" />
              Posts
            </Link>
            <h2 className="text-4xl font-bold mb-3">{title}</h2>
            <div className="attributes mb-3">
              <span className="text-xl font-bold mb-3 text-gray-700 dark:text-gray-400">
                {publishDate &&
                  "Published on " +
                    format(new Date(publishDate), "dddd MMMM Do, YYYY")}
              </span>
            </div>
            {body && (
              <div className="contents text-xl leading-relaxed">{body}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   function join(curDir, folder) {
//     return curDir + "/" + folder;
//   }
//   const docsDirectory = join(process.cwd(), "docs");
//   const fs = await import("fs");

//   const markdownPosts = await fs.readdirSync(docsDirectory);
//   const POSTS = gql`
//     query posts {
//       blogPostCollection {
//         items {
//           slug
//         }
//       }
//     }
//   `;
//   const data = await fetcher(POSTS);
//   const paths = data.blogPostCollection.items
//     .map(({ slug }) => "/" + slug)
//     .concat(markdownPosts.map((slug) => "/" + slug.replace(".md", "")));

//   return { paths, fallback: true };
// }
