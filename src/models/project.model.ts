export class Project {
    id: string;
    title: string;
    shortDesc: string;
    desc: string;
    thumbnail: string;
    images: string[];
    startDate: string;
    endDate: string;
    updatedDate: string;

    constructor(
        id: string,
        title: string,
        shortDesc: string,
        desc: string,
        thumbnail: string,
        images: string[],
        startDate: string,
        endDate: string,
        updatedDate: string
    ) {
        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.desc = desc;
        this.thumbnail = thumbnail;
        this.images = images;
        this.startDate = startDate;
        this.endDate = endDate;
        this.updatedDate = updatedDate;
    }
}