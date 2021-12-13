import React, { useState } from 'react';
import { HeCard, HeIcon, HeTooltip, HeButton } from '@harmony/enablers/react';
import {ComponentDetail} from './ContentDetailComponent';
import { ContentPanelData } from './Assets/DummyData';
import { ToolTipRef } from './Interface/contentInterface';

interface CardProps{
    title: String,
    description: string,
    imageUrl: string,
}


const Card=({ title,description,imageUrl }: CardProps)=>{
    let button = React.useRef<HTMLParagraphElement>(null);
  let popover = React.useRef<ToolTipRef>(null);
    React.useEffect(() => {
        if(popover && popover.current)
        {
            popover.current.anchorElement=button.current;
        }
      }, []);
      const [isOpen, setIsOpen] =useState(false);
      // const removeCard = (i: number) => {
      //   console.log('index', i);
        
      // }
    return(
        <div className="display-view">
            <HeTooltip ref={popover} position="bottom">{description}</HeTooltip>
        <HeCard
  style={{
    '--card-width': '237px',
    '--card-height': '240px',
    padding: 10,
    paddingRight: 20,
    paddingTop:0,
    position: 'relative',
  }}
  >
    <h3 className="font14 card-header">{title}</h3>
    <p id="card-description-tooltip" ref={button} title={description} className="font12 card-description">{description}</p>
    <span className="font14 link">Hyperlink</span>
   <span className="link ml-5"> <HeIcon name="openinnewwindow" /></span>
    <br/>
    {imageUrl &&
    <img src={imageUrl} className="image-size" alt="test"  /> }
    <div className="footer">
      <HeButton
      className="footer-left"
      appearance="lightweight"
      onClick={()=>setIsOpen(true)}
      >
        <HeIcon 
          style={{
            color: "#0078d4", 
          fontSize: 14,
          marginRight:5,
          }} name="edit" 
        />
        Edit
      </HeButton>
      <HeButton
      appearance="lightweight"
      className="footer-right"
      // onClick={()=>removeCard(index)}
      >
        <HeIcon 
          style={{
            color: "#0078d4", 
          fontSize: 14,
          marginRight:5,
          }} name="delete" 
        />
        Delete
      </HeButton>
    </div>
  </HeCard>
  {isOpen ? <ComponentDetail 
            header="Edit your information" 
            isOpen={isOpen} 
            setIsOpen={()=>setIsOpen(false)}
            data={ContentPanelData}
      /> : null}
  </div>
    );
}
export default Card;