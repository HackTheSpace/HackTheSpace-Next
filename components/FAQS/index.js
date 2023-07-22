import SectionLayout from "../SectionLayout";
import QuestionComp from "./QuestionComp";
import { questionConfig } from "../../config/questions";
import { useState } from "react";

const ColComponent = ({ children }) => {
  return <div className="col">{children}</div>;
};

const FAQS = () => {
  const { data } = questionConfig;
  const [toggle, setToggle] = useState(null);

  return (
    <SectionLayout Classname={"faqs-section"} Title={"Faqs"}>
      <div id="faqs" className="container">
        {data.map((q) => (
          <ColComponent key={q.id}>
            {q.Questions.map((quest) => (
              <QuestionComp
                Question={quest.Q}
                Answer={quest.A}
                key={quest.id}
                isOpen={toggle === quest.id}
                handleToggle={() =>
                  toggle === quest.id ? setToggle(null) : setToggle(quest.id)
                }
              />
            ))}
          </ColComponent>
        ))}
      </div>
    </SectionLayout>
  );
};

export default FAQS;
