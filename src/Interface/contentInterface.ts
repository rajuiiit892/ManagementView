export interface ContentDetailProps{
    /**Indicates whether or not the Contyent-detail panel is open. You can use this in lieu of the show/hide methods. */
    isOpen: boolean,
    /** Callback on close */
    setIsOpen: ()=>void,
    /** custom property to set the Content-detail panel data */
    data?: any ,
    /**
     label as displayed in the header of the Content-detail panel. 
     */
    header: string
};

export interface ContentPanelDataProps {
    title: string,
    description: string,
    hyperlink: boolean,
    url: boolean,
    text: string,
    media: boolean,
    image: boolean,
    imageUrl: string,
    expired?: boolean
};

export interface ToolTipRef{
    current: {
        anchorElement: any 
    },
    getAnchor: any,
    anchorElement: any
};

export interface WidgetProps {
    title: string,
    cardsList: Array<CardProps>
};

export interface CardProps {
    title: String,
    description: string,
    imageUrl: string
};