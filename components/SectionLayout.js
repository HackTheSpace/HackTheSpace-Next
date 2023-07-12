const SectionLayout = ({ Classname, Title, children }) => {
  return (
    <section className={`section ${Classname}`}>
      <h2 className="section-title">{Title}</h2>
      {children}
    </section>
  );
};

export default SectionLayout;
