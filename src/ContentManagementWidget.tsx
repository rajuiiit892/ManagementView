import {  HeIcon } from '@harmony/enablers/react';
import React from 'react';
import Card from './Card';

interface WidgetProps{
    title: string,
    cardsList: Array<CardProps>
}
interface CardProps{
    title: String,
    description: string,
    imageUrl: string,
}
const ContentManagementWidget=({title,cardsList}: WidgetProps)=>{
    return(
        <div style={{ borderTop: '1px solid #EDEBE9' }}>
        <div style={{ padding: "26px 0px" }}>
        <span className="contentmanagement-title font16">{title}</span>
        <span className="font14" style={{ marginLeft: 5 }} >
        <HeIcon 
          style={{
            color: "#0078D4", 
          fontSize: 14,
          marginRight:5,
          }} name="add" 
        />
        New item
      </span>
        </div>
        {
            cardsList.map(cardInfo=><Card {...cardInfo} />)
        }

    </div>)
}
export default ContentManagementWidget;