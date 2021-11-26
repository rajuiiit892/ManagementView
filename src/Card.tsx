import React from 'react';
import { HeCard, HeIcon, HeTooltip } from '@harmony/enablers/react';

interface CardProps{
    title: String,
    description: string,
    imageUrl: string,
}

interface ToolTipRef{
    current: {
        anchorElement: any 
    },
    getAnchor: any,
    anchorElement: any
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
      <span
      className="footer-left"
      >
        <HeIcon 
          style={{
            color: "#0078d4", 
          fontSize: 14,
          marginRight:5,
          }} name="edit" 
        />
        Edit
      </span>
      <span
      className="footer-right"
      >
        <HeIcon 
          style={{
            color: "#0078d4", 
          fontSize: 14,
          marginRight:5,
          }} name="delete" 
        />
        Delete
      </span>
    </div>
  </HeCard>
  </div>
    );
}
export default Card;