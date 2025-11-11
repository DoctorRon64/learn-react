const Hero = (properties) => {
  return (
    <div className="hero"> 
      <h1>{properties.title}</h1>
      <h2>{properties.tagline}</h2>
      <p>{properties.desc}</p>
      <a href={properties.btn_work.href} >{properties.btn_work.title}</a>
      <a href={properties.btn_contact.href} >{properties.btn_contact.title}</a>
      <img src={properties.img} alt={properties.img_alt}></img>
    </div>
  );
};

export default Hero;