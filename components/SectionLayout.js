const SectionLayout = ({ Classname, id, Title, children }) => {
  return (
    <section
      className={`section ${Classname} wow animate__animated animate__fadeInUp`}
      id={id}
      data-wow-duration="1s"
    >
      <h2 className="section-title">{Title}</h2>
      {children}
    </section>
  );
};

export default SectionLayout;
