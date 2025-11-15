import SkillCard from "./SkillCard"
import '../scss/skills.css';

const SkillCat = (items) => {

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