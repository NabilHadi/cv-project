import React, { useState } from "react";
import "../styles/CV.css";
import EditableField from "./EditableField";
import Field from "./Field";
import Section from "./Section";

import About from "./About";
import Contact from "./Contact";

const CV = () => {
  const [education, setEducation] = useState({
    id: "education",
    schoolName: {
      content: "UNIVERSITY OF MINNESOTA",
      desc: "Enter your School Name",
      isEditing: false,
    },
    titleOfStudy: {
      content: "College of Design",
      desc: "Enter your title of study",
      isEditing: false,
    },
    dateOfStudy: {
      content: "May 2011",
      desc: "Enter your date of Study",
      isEditing: false,
    },
  });

  const [experience, setExperience] = useState({
    id: "experience",
    companyName: {
      content: "PLANET BEACH",
      desc: "Enter Your company Name",
      isEditing: false,
    },
    positionTitle: {
      content: "Spa Consultant",
      desc: "Enter Your position Title",
      isEditing: false,
    },
    startDate: {
      content: "July 2009",
      desc: "Enter Start Date",
      isEditing: false,
    },
    endDate: {
      content: "present",
      desc: "Enter End date",
      isEditing: false,
    },
    mainTasks: {
      content: ["Sell retail and memberships to meet company sales goals"],
      desc: "Enter your main tasks",
      isEditing: false,
    },
  });

  const getFields = (sectionObj, updateFunction) => {
    const sectionFields = [];
    for (const key in sectionObj) {
      if (key === "id" || sectionObj[key].ignore) continue;
      if (sectionObj[key].isEditing) {
        sectionFields.push(
          <EditableField
            key={key}
            className={"field " + key}
            placeHolder={sectionObj[key].desc}
            icon={sectionObj[key].icon}
            value={sectionObj[key].content}
            onFieldChange={(e) => {
              updateFunction({
                ...sectionObj,
                [key]: {
                  ...sectionObj[key],
                  content: e.target.value,
                },
              });
            }}
            onFieldSubmit={() => {
              updateFunction({
                ...sectionObj,
                [key]: {
                  ...sectionObj[key],
                  isEditing: false,
                },
              });
            }}
          />
        );
      } else {
        sectionFields.push(
          <Field
            key={key}
            className={"field " + key}
            onFieldClick={() => {
              updateFunction({
                ...sectionObj,
                [key]: {
                  ...sectionObj[key],
                  isEditing: true,
                },
              });
            }}
          >
            {sectionObj[key].icon}
            {sectionObj[key].content
              ? sectionObj[key].content
              : sectionObj[key].desc}
          </Field>
        );
      }
    }

    return sectionFields;
  };

  return (
    <div className="CV" id="CV">
      <About />
      <Contact />
      <Section className="section Education">
        <h2 className="sectionTitle">Education</h2>
        {getFields(education, setEducation)}
      </Section>
      <Section className="section Experience">
        <h2 className="sectionTitle">Experience</h2>
        {getFields(experience, setExperience)}
      </Section>
    </div>
  );
};

export default CV;
