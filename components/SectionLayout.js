const SectionLayout = ({ Classname, id, Title, children }) => {
  return (
    <section
      className={`section ${Classname} wow animate__animated animate__fadeInUp`}
      id={id}
      data-wow-duration="1s"
    >
      <div className="heading-container">
        <h1 className="title-shadow">{Title}</h1>
        <h2 className="section-title">{Title}</h2>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
