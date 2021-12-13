import React, { useState, useEffect, useRef } from 'react';
import { HeFlyInPanel, HeText, HeTextField, HeSwitch, HeIcon, HeTooltip, HeButton } from '@harmony/enablers/react';
import { ContentDetailProps, ToolTipRef } from './Interface/contentInterface';
import './logo.svg';

ComponentDetail.defaultProps = {
    data: []
};

export function ComponentDetail({ isOpen, data, header, setIsOpen }: ContentDetailProps) {
    // const imgInfo = React.useRef<ToolTipRef>(string);
    const [isHyperlink, setHyperlink] = useState(data?.hyperlink);
    const [isMedia, setMedia] = useState(data?.media);
    const [isExpiry, setIsExpiryDate] = useState(data?.expiry);
    const [imgData, setImgData] = useState('');
    const [isDateFieldNotValid, setDateFieldNotValid] = useState(false);
    const [mappingData, setMappingData] = useState({
        title: '',
        description: '',
        isHyperlink: false,
        url: '',
        text: '',
        isMedia: false,
        imageUrl: '',
        isExpiry: false,
        expiryDate: ''
    });
    const imgInfo = useRef(null);
    const tooltip = useRef<ToolTipRef>(null);
    const [createDissableState, setCreateState] = useState(true);
    const invalidMSG : any = {
        expiryDate: "Date should be greater than today's date"
    };
    let validationCondition : boolean = true;

    useEffect(() => {
        if (tooltip?.current) {
            (tooltip.current as ToolTipRef).anchorElement = imgInfo.current;
        }
        if (Object.keys(data).length) {
            const mappingData = {
                title: data.title || '',
                description: data.description || '',
                isHyperlink: data.hyperlink || false,
                url: data.url || '',
                text: data.text || '',
                isMedia: data.media || false,
                imageUrl: data.imageUrl || '',
                isExpiry: data.expiry || false,
                expiryDate: data.expiryDate || ''
            }
            setMappingData(mappingData);
        } else {
            // console.log('new data===>>>', data);
        }
    }, []);
    const previewImage = (e: any) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const imgData: string = reader.result as string;
                imgData && setImgData(imgData);

            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const validate = (field: any) => {
        const fieldName = field.name;
        // if(validation){
            
            if (fieldName === 'expiryDate') {
                console.log('within validate with key ', fieldName, mappingData);
                
                const dateVar = new Date();
                const currDate = new Date(dateVar.toLocaleDateString());
                const changedDate = new Date(field.value);
                console.log('changed data ==>', changedDate, currDate);
                
                validationCondition = (changedDate.getTime() - currDate.getTime()) > 0;
                console.log('validation condition', validationCondition, mappingData);
                
            }else if (fieldName === '') {
    
            }

            if (validationCondition) {
                console.log('when validation condition true', mappingData);
                
                field.setCustomValidity("");
                setDateFieldNotValid(false);
                // canCreate();
            } else {
                console.log('when validation condition false', mappingData);
                
                // canCreate();
                setDateFieldNotValid(true);
                field.setCustomValidity(invalidMSG[fieldName]);
                
            }
        // }
        canCreate();
    }
    const canCreate = () => {
        console.log('within canCreate');
        
        if(isDateFieldNotValid){
            console.log('setting button disability true', mappingData);
            
            setCreateState(true);
            // setMappingData(tempObj);
        }else{
            console.log('setting button disability false', mappingData);
            
            setCreateState(false);
            // setMappingData(tempObj);
        }
    }
    const handleOnChange = (field: any, needValidation: boolean) => {
        let name = field.name;
        let tempObj = {
            ...mappingData,
            [name]: field.value
        }
        console.log('temp obj', tempObj);
        
        // setMappingData(tempObj);
        setMappingData(()=>tempObj);
        
        if(needValidation){
            console.log('within needValidation', mappingData);
            
            validate(field);
        }else{
            canCreate();
        }
    }

    // useEffect(()=>{
    //     if(needValidation){
    //         console.log('within needValidation', mappingData);
            
    //         validate(field);
    //     }else{
    //         canCreate();
    //     }
    // }, [mappingData]);

    const handleCreate = () => {
        
    }
    
    return (
        <HeFlyInPanel
            heading={header}
            style={{ '--size': 'small', '--header-padding': '20px 24px 8px 24px', '--body-padding': '0px 24px 20px 24px' }}
            onHeRequestClose={setIsOpen}
            open={isOpen}
        >{mappingData && <>
            {mappingData.title ? <HeTextField style={{ marginTop: '25px' }} required type="text" value={mappingData.title}>
                Title
            </HeTextField> : <HeTextField style={{ marginTop: '25px' }} placeholder="Type here" required type="text">
                Title
            </HeTextField>}
            {mappingData.description ? <HeTextField style={{ marginTop: '25px' }} value={mappingData.description}>
                Description
            </HeTextField> : <HeTextField style={{ marginTop: '25px' }} placeholder="Helper text">
                Description
            </HeTextField>}
            <HeText
                className={"font14"}
                style={{ marginTop: '25px' }}
                appearance="heading-6"
            >
                Hyperlink available
            </HeText>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <HeSwitch checked={isHyperlink} onClick={() => setHyperlink(!isHyperlink)}></HeSwitch>
                <HeText style={{ paddingLeft: '8px' }}>{isHyperlink ? 'Yes' : 'No'}</HeText>
            </div>
            {isHyperlink ? <>
                {mappingData.url ? <HeTextField required style={{ marginTop: '25px' }} value={mappingData.url}>
                    Hyperlink url
                </HeTextField> : <HeTextField required style={{ marginTop: '25px' }} placeholder="Type here">
                    Hyperlink url
                </HeTextField>}
                {mappingData.text ? <HeTextField style={{ marginTop: '25px' }} value={mappingData.text}>
                    Hyperlink text
                </HeTextField> : <HeTextField style={{ marginTop: '25px' }} placeholder="Type here">
                    Hyperlink text
                </HeTextField>}</>
                : null}
            <HeText
                className={"font14"}
                style={{ marginTop: '25px' }}
                appearance="heading-6"
            >
                Media available
            </HeText>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <HeSwitch checked={isMedia} onClick={() => setMedia(!isMedia)}></HeSwitch>
                <HeText style={{ paddingLeft: '8px' }}>{isMedia ? 'Yes' : 'No'}</HeText>
            </div>
            {isMedia ? <> <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px', alignItems: 'center' }}>
                <HeText
                    className={"font14"}
                    appearance="heading-6"
                >
                    Image/Gif
                </HeText>

                <HeIcon
                    className={'font12'}
                    style={{ fontSize: '10px', paddingLeft: '5px', cursor: 'pointer' }}
                    name="info"
                    id="imageInfo"
                    ref={imgInfo}
                />
                <HeTooltip anchor="imageInfo" ref={tooltip}>This is a tooltip!</HeTooltip>
            </div>
                <div style={{ minHeight: '100px', width: '100%', background: '#f2f2f2', display: 'flex', alignItems: 'center', textAlignLast: 'center', flexDirection: 'column', justifyContent: 'center', paddingTop: '10px' }}>
                    <div id="img-preview"></div>
                    <input type="file" style={{ cursor: 'pointer' }} accept="image/*" id="uploadImage" name="myPhoto" onChange={previewImage}></input>
                    {imgData ? <img id="uploadPreview" style={{ width: '100px', height: '100px', marginTop: '10px' }} src={imgData} /> : null}
                </div></> : null}
            <HeText
                className={"font14"}
                style={{ marginTop: '25px' }}
                appearance="heading-6"
            >
                Expiry date
            </HeText>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <HeSwitch checked={isExpiry} onClick={() => setIsExpiryDate(!isExpiry)}></HeSwitch>
                <HeText style={{ paddingLeft: '8px' }}>{isExpiry ? 'Yes' : 'No'}</HeText>
            </div>
            {isExpiry && <HeTextField name='expiryDate' type="date" required style={{ flex: '1 0 40%', minWidth: '250px', marginTop: '25px' }} onChange={(e: any) => handleOnChange(e.target, true)} value={mappingData.expiryDate} showValidity={isDateFieldNotValid}>
                Expiry date
                {/* <HeIcon slot="end" name="calendar"/> */}
            </HeTextField>}
            <div slot="footer" style={{ display: 'flex' }}>
                <HeButton appearance="outline" style={{ marginRight: '10px' }} disabled={createDissableState} onClick={() => handleCreate()}>Create</HeButton>
                <HeButton appearance="outline" onClick={() => setIsOpen()} >Cancel</HeButton>
            </div>
        </>}

        </HeFlyInPanel>
    );
}
