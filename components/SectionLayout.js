const SectionLayout = ({ Classname, id, Title, children }) => {
  return (
    <section className={`section ${Classname}`} id={id}>
      <h2 className="section-title">{Title}</h2>
      {children}
    </section>
  );
};

export default SectionLayout;
