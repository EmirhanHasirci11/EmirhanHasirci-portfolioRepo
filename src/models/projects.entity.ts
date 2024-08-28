export class Project {
    id: string;
    title: string;
    shortDesc: string;
    desc: string;
    thumbnail: string;
    images: string[];
    startDate: string;
    endDate: string;
    category:string;    

    constructor(
        id: string,
        title: string,
        shortDesc: string,
        desc: string,
        thumbnail: string,
        images: string[],
        startDate: string,
        endDate: string,
        category:string        
    ) {
        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.desc = desc;
        this.thumbnail = thumbnail;
        this.images = images;
        this.startDate = startDate;
        this.endDate = endDate;
        this.category=category;        
    }
}
export class Projects {
    data: Project[] = [];

    constructor() {
        this.data = [
           
            new Project(
                '1',
                'Project Title 1',
                'Short description 1',
                'Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 ',
                'https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/54226e76-3994-47cc-a372-4e1fe66eb433',
                ['image1.jpg', 'image2.jpg'],
                '2023-01-01',
                '2023-06-01',
                "Game"                
            ),
            new Project(
                '2',
                'Project Title 2',
                'Short description 2',
                'Detailed description of the project 2 Detailed description of the project 2 Detailed description of the project 2 Detailed description of the project 2 Detailed description of the project 2 ',
                'https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/531aa37d-0d1f-4118-af6a-f7fd93cbb1d2',
                ['image3.jpg', 'image4.jpg'],
                '2023-02-01',
                '2023-07-01',
                "Normal"            
            ),
            new Project(
                '1',
                'Project Title 1',
                'Short description 3',
                'Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 Detailed description of the project 1 ',
                'https://github.com/EmirhanHasirci11/Angular-Mini-E-commerce/assets/54208249/0718e7a4-b86f-444e-bd0f-f4a6ffc8f85e',
                ['image1.jpg', 'image2.jpg'],
                '2023-01-01',
                '2023-06-01',
                "Normal"            
            ),
            new Project(
                '2',
                'Project Title 2',
                'Short description 4',
                'Detailed description of the project 2 Detailed description of the project 2 Detailed description of the project 2 Detailed description of the project 2 Detailed description of the project 2 ',
                'https://github.com/EmirhanHasirci11/Angular-Mini-E-commerce/assets/54208249/3758f371-77f9-46ae-a560-709c69ed1b98',
                ['image3.jpg', 'image4.jpg'],
                '2023-02-01',
                '2023-07-01',
                "Normal"                
            )
            
        ];
    }
}