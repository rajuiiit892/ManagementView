import React,{ useState, useEffect } from 'react';
import Card from './Card';
import {  HeSelect, HeOption, HeButton } from '@harmony/enablers/react'
import ContentManagementWidget from './ContentManagementWidget';

interface OptionsListTypes{
    id: number,
    name: string
}

const rowsList=[
  {
    title: "What's new",
    id: 1,
    details: [ {
      title: "Title of information",
      description: "Description of the information in not more than 3,4lines.Description of the information in not", 
      imageUrl: "https://image.shutterstock.com/image-photo/nature-picture-looking-beautiful-this-260nw-1552406618.jpg"
    },
    {
      title:"Title of information",
      description: "Description of the information in not more than 3,4lines",
      imageUrl:""
    },
    {
      title: "Title of information",
      description: "Description of the information in not more than 3,4lines.Description of the information in not", 
      imageUrl: "https://image.shutterstock.com/image-photo/nature-picture-looking-beautiful-this-260nw-1552406618.jpg"
    },
    {
      title:"Title of information",
      description: "Description of the information in not more than 3,4lines",
      imageUrl:""
    }
  ]
  },
  {
    title: "Annoucements",
    id: 2,
    details: [ {
      title: "Title of information",
      description: "Description of the information in not more than 3,4lines.Description of the information in not", 
      imageUrl: "https://image.shutterstock.com/image-photo/nature-picture-looking-beautiful-this-260nw-1552406618.jpg"
    },
    {
      title:"Title of information",
      description: "Description of the information in not more than 3,4lines",
      imageUrl:""
    },
    {
      title: "Title of information",
      description: "Description of the information in not more than 3,4lines.Description of the information in not", 
      imageUrl: "https://image.shutterstock.com/image-photo/nature-picture-looking-beautiful-this-260nw-1552406618.jpg"
    },
    {
      title:"Title of information",
      description: "Description of the information in not more than 3,4lines",
      imageUrl:""
    }
  ]
  },
  {
    title: "Recommendations",
    id: 3,
    details: []
  }
]

 const ContentManagementParent=()=>{
     const [optionsList, setOptionsList] =useState<Array<OptionsListTypes>>([]);
     const [selectedOption, setSelectedOption]=useState<number>(2);
     useEffect(()=>{
        onGetOptionsData()
     },[])

     const onGetOptionsData=()=>{
       let data=[{
           id: 1,
           name: "Marketplace offers - Summary",
       },
       {
        id: 2,
        name: "Marketplace offers - Order",
    }
    ]
       // setSelectedOption(1)
        setOptionsList(data)
     }

     const onChangeSelectOptions=(e:any)=>{
        setSelectedOption(e.target.value)
     }
     console.log("e", selectedOption)
    return(
        <div className="container">
            <span className="contentmanagement-title">Insights page</span>
            <br/>
            <HeSelect onChange={onChangeSelectOptions} className="contentmanagement-dropdown">
            {
                optionsList?.map(option=><HeOption key={option.id} value={option.id}>{option.name}</HeOption>)
            }
            </HeSelect>
            <HeButton className="contentmanagement-button" appearance="outline"> View details </HeButton>
            <div style={{ paddingTop: 20 }}>
              {
                rowsList.map(list=> <ContentManagementWidget key={list.id} title={list.title} cardsList={list.details} />)
              }
            </div>
        </div>
    )
}

export default ContentManagementParent;