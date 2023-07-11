const Day = ({ Day, date, children }) => {
  return (
    <div id={Day}>
      <h3 className="schedule-title">{Day}</h3>
      <h5>{date}</h5>
      <div className="schedule-container">{children}</div>
    </div>
  );
};

export default Day;
