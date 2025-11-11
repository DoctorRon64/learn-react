const SkillCard = (properties) => (
  <div className="skill-card">
    <h1>{properties.title}</h1>
    <img src={properties.img} alt={properties.title} />
  </div>
);
export default SkillCard;
