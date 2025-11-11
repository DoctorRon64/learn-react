import SkillCard from "./SkillCard"

const skills = [
    { title:"C#" , img: "csharp.svg" },
    { title:"C++" , img: "c-plusplus.svg" },
    { title:"unity" , img: "unity-original-logo.svg" },
]

const SkillCat = () => {
  const items = skills;

  return (
     <div className="skill-cat">
      {items.map((item) => (
        <SkillCard
          title={item.title}
          img={"public/assets/icons/" + item.img}
        />
      ))}
    </div>
  );
};

export default SkillCat;