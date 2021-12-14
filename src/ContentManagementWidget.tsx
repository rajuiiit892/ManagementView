import { HeIcon, HeButton } from '@harmony/enablers/react';
import React, { useState } from 'react';
import Card from './Card';
import { ComponentDetail } from './ContentDetailComponent';
import { WidgetProps } from './Interface/contentInterface';

const ContentManagementWidget = ({ title, cardsList }: WidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeCard = (id:number) => {
    // const tempCard = cardsList;
    // tempCard[id] = {
    //   ...tempCard[id],
    //   expired : true
    // }
  }

  return (
    <div style={{ borderTop: '1px solid #EDEBE9' }}>
      <div style={{ padding: "26px 0px", display: "flex" }}>
        <span className="contentmanagement-title font16">{title}</span>
        <HeButton className="font14 footer-left" style={{ lineHeight: "20px", paddingLeft: "10px" }} onClick={() => setIsOpen(true)} appearance="lightweight">
          <HeIcon
            style={{
              color: "#0078D4",
              fontSize: 16,
              marginRight: 5,
            }} name="add"
          />
          New item
        </HeButton>
      </div>
      {
        cardsList.map((cardInfo, i) =>
          <Card key={i} {...cardInfo} />)
      }
      {isOpen ? <ComponentDetail
        header="What's new information"
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(false)}
        data={{}}
      /> : null}

    </div>)
}
export default ContentManagementWidget;