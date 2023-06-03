export default function Sidebar({
  projects = { items: [] },
  skills = { items: [] },
}) {
  return (
    <div className="col-span-4 md:col-span-1 md:order-1">
      <h2 className="text-base font-bold mb-4">Hustles | Side Projects</h2>
      {projects.items.map((hustle, i) => (
        <a
          target="_blank"
          href={hustle.link + "?utm_source=nmaksymchuk.com&utm_medium=projects"}
          key={i}
        >
          <div className="row grid grid-cols-4 gap-4 mb-2">
            <span className="col-span-4 text-2xl font-bold">
              <span className="hover:bg-yellow-200  dark:hover:text-black">
                {hustle.name}
              </span>
            </span>
          </div>
        </a>
      ))}
      <h2 className="text-base font-bold mt-14 mb-1">Technologies</h2>
      <span className="block text-xs mb-4 font-bold">Experience in Years</span>
      {skills.items.map((skill, i) => (
        <div className="row grid grid-cols-4 gap-4 mb-2" key={i}>
          <span className="col-span-3 font-bold text-2xl">{skill.name}</span>
          <span className="col-span-1">{skill.yearsOfExperience}</span>
        </div>
      ))}
    </div>
  );
}
