const SectionLayout = ({ Classname, Title, children }) => {
  return (
    <div className={`section ${Classname}`}>
      <h2 className="section-title">{Title}</h2>
      {children}
    </div>
  );
};

export default SectionLayout;
