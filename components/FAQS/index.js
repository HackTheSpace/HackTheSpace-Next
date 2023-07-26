import SectionLayout from "../SectionLayout";
import QuestionComp from "./QuestionComp";
import { questionConfig } from "../../config/questions";
import { useState } from "react";
import Image from "next/image";

const ColComponent = ({ children }) => {
  return <div className="col">{children}</div>;
};

const FAQS = () => {
  const { data } = questionConfig;
  const [toggle, setToggle] = useState(null);

  return (
    <SectionLayout Classname={"faqs-section"} Title={"FAQs"} id="faqs">
      <div className="container">
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
      <div className="planet1">
        <Image
          src="/images/planet1.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>

      <div className="planet2">
        <Image
          src="/images/planet2.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default FAQS;
