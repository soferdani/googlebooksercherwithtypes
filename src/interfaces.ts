export interface book {
    accessInfo: object;
    etag: string;
    id: string;
    saleInfo: object;
    searchInfo: object;
    selfLink: string;
    volumeInfo: volumeInfo;
}

export interface volumeInfo {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: imageLinks;
    industryIdentifiers: object[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: object;
    subtitle: string;
    title: string;
}

export interface imageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface CardbookProps { 
    title?: string;
    imageUrl?: string;
    description?: string;
    
}


export interface SearchProps {
    submit: () => void ;
    setSearch: (searchVal: string) => void;
    search: string ;
}
