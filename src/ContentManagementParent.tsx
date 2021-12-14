import React, { useState, useEffect } from 'react';
import { HeSelect, HeOption, HeButton } from '@harmony/enablers/react'
import ContentManagementWidget from './ContentManagementWidget';
import { dropdownList, data, itemTypes } from './Assets/DummyData';

const ContentManagementParent = () => {
  const [isCard, showCards] = useState(false);
  const [rowsList, setRowsList] = useState<any>([]);

  useEffect(() => {
    // onGetOptionsData()
  }, []);

  const onChangeSelectOptions = (e: any) => {
    const value = JSON.parse(e.target.value);
    const arrShortedByPage = data.filter((item) => item.page === value.page);
    const arrShortedByProgram = arrShortedByPage.filter((item) => item.program === value.program);
    let tempArr: any = {};
    const selectedList = itemTypes.map((item) => {
      tempArr = {
        ...tempArr,
        title: item[0].toUpperCase() + item.slice(1),
        details: arrShortedByProgram.filter((i) => i.type === item)
      };
      return tempArr;
    });
    setRowsList(selectedList);
    showCards(false);
  }

  const handleViewDetails = () => {
    showCards(true);
  }
  return (
    <div className="container">
      <span className="contentmanagement-title">Insights page</span>
      <br />
      <HeSelect id="selectInputParent" onChange={onChangeSelectOptions} className="contentmanagement-dropdown">
        {
          Object.keys(dropdownList)?.map((option: string, i: number) => {
            return dropdownList[option].map((listItem: string, index: number) =>
              <HeOption
                id="selectInput"
                key={i * 10 + index}
                value={JSON.stringify({ 'page': option, 'program': listItem })}
              >
                {option + '- ' + listItem}
              </HeOption>)
          })
        }
      </HeSelect>
      <HeButton className="contentmanagement-button" appearance="outline" onClick={() => handleViewDetails()}> View details </HeButton>
      {(isCard && rowsList.length) ? <div style={{ paddingTop: 20 }}>
        {
          rowsList.map((list: any, i: number) => <ContentManagementWidget key={i} title={list.title} cardsList={list.details} />)
        }
      </div> : null}
    </div>
  )
}

export default ContentManagementParent;