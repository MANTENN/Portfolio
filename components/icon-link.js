export const IconLink = ({
  icon: Icon,
  href,
  alt,
  title,
  onClick,
  ariaLabel,
  className: customClassName,
  ...props
}) => {
  const className =
    "flex w-8 p-2 h-8 items-center justify-center rounded-full hover:bg-yellow-200 dark:hover:text-yellow-600 focus:bg-yellow-200 focus:outline-green-800 focus:outline focus:outline-solid dark:hover:text-green-800 dark:focus:text-green-800 transition-all duration-300	ease-in-out";
  if (onClick) {
    return (
      <button
        aria-label={ariaLabel}
        type="button"
        className={[className, customClassName].join(" ")}
        onClick={onClick}
        {...props}
      >
        <Icon size={18} />
      </button>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      className={className}
      rel="ugc nofollow noreferrer noopener"
      alt={alt}
      title={title || alt}
    >
      <Icon size={22} />
    </a>
  );
};
