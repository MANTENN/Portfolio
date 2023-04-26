import Link from "next/link";

export const ShareIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M9.25 14.523 23.25.75m0 7.871V.75h-8m-3.125 5h-10.5a.875.875 0 0 0-.875.875v15.75a.875.875 0 0 0 .875.875h15.75a.875.875 0 0 0 .875-.875v-10.5"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Article = (post) => {
  return (
    <div className="mb-2">
      <h3 className="text-2xl font-bold">
        {post.externalArticleLink ? (
          <a
            className="inline-block hover:bg-yellow-200 dark:hover:text-black"
            href={
              post.externalArticleLink +
              "?utm_source=nmaksymchuk&utm_medium=home&utm_content=articles"
            }
            target="_blank"
          >
            <span className="flex gap-2">
              <span>{post.title}</span>
              <ShareIcon
                className="w-4 h-4"
                style={{ marginTop: "5.7px" }}
                strokeWidth="1.5"
                stroke="currentcolor"
              />
            </span>
          </a>
        ) : (
          <Link href={post.slug}>
            <a className="hover:bg-yellow-200 dark:hover:text-black">
              {post.title}
            </a>
          </Link>
        )}
      </h3>
    </div>
  );
};
