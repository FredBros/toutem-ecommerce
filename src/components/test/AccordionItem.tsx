import React from 'react'
import {CategoriesSection} from "../../@types/data"
type Props = {
    data: CategoriesSection;
    // onToggle: (category: string) => void;
onToggle : any;
isActive: boolean
    }

const AccordionItem = ({data, onToggle, isActive}:Props) => {
  return (
    <div className="accordion-item">
      <button className="button" onClick={onToggle}>
        {data.title}
      </button>
      <div className={`answer_wrapper ${isActive ? "open" : ""}`}>
        <div className="answer">{data.text}</div>
      </div>
      <style jsx>{`
        .answer_wrapper {
         max-height: 0;
          overflow: hidden;
          transition: all ease 2s;
        }
        .answer_wrapper.open {
          max-height: 100px;
          transition: all ease 2s;
        }
      `}</style>
    </div>
  );
}

export default AccordionItem