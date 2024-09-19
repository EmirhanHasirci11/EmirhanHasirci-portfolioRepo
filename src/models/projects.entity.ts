export class Project {
    id: string;
    title: string;
    shortDesc: string;
    desc: string[];
    thumbnail: string;
    images: string[];
    startDate: string;
    endDate: string;
    category: string;

    constructor(
        id: string,
        title: string,
        shortDesc: string,
        desc: string[],
        thumbnail: string,
        images: string[],
        startDate: string,
        endDate: string,
        category: string
    ) {
        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.desc = desc;
        this.thumbnail = thumbnail;
        this.images = images;
        this.startDate = startDate;
        this.endDate = endDate;
        this.category = category;
    }
}
export class Projects {
    data: Project[] = [];

    constructor() {
        this.data = [

            new Project(
                '1',
                'Personal Portfolio',
                'My personal portfolio site, developed using Angular.',
                [` My personal portfolio site, developed using Angular, showcases my experiences and projects. It features a responsive design and utilizes Angular's component structure to effectively present my work.`],
                'https://github.com/user-attachments/assets/0b714235-4d01-43e5-84e6-6ed4d792605b',
                ['https://github.com/user-attachments/assets/0b714235-4d01-43e5-84e6-6ed4d792605b', 'https://github.com/user-attachments/assets/7f04f7cb-c1e1-45bc-ab0b-b159a91eb900', 'https://github.com/user-attachments/assets/18942c98-1524-4290-8b59-2ed31660578d', 'https://github.com/user-attachments/assets/fa7e7c84-24de-4eb1-a297-8719340fcb37'],
                'Aug 2024',
                'Aug 2024',
                "Normal"
            ),
            new Project(
                '2',
                'Disaster Dispatch',
                'Disaster Dispatch (DDispatch) is a website that matches and coordinates skilled volunteer personnel with teams working in authorized institutions according to the needs in large-scale disaster scenarios, facilitating their deployment.',
                [`Disaster Dispatch (DDispatch) is a website that matches and coordinates skilled volunteer personnel with teams working in authorized institutions according to the needs in large-scale disaster scenarios, facilitating their deployment.`,'In this project, an API was developed on .NET 7 using a layered architecture. Model objects were created using the code-first approach with Entity Framework. Error handling was performed with the Fluent Validation library. The necessary DTO classes were created separately, and distribution was easily managed through APIs using AutoMapper.'],
                'https://github.com/user-attachments/assets/96871623-ba61-4368-a476-39e01ecbd8e6',
                ['https://github.com/user-attachments/assets/8e90d7cc-eec4-423e-a719-2041219ae08f','https://github.com/user-attachments/assets/7d708456-7a5a-4d92-99d1-442b0b674fef','https://github.com/user-attachments/assets/4f84c211-0922-43d4-ad0b-8e2cb0bde2e5','https://github.com/user-attachments/assets/112b9fb5-aa91-4168-8035-aed5ab9ab2e8','https://github.com/user-attachments/assets/96871623-ba61-4368-a476-39e01ecbd8e6','https://github.com/user-attachments/assets/47e891fa-01df-4d56-853e-9efb24c868dd','https://github.com/user-attachments/assets/6d984e81-15d0-4eb6-9b5f-046dfe50052a','https://github.com/user-attachments/assets/df8ac305-3bd2-4228-a4d1-7b3c76ee4454','https://github.com/user-attachments/assets/f4f32545-3345-4fc0-bebd-8dafbdaf3be4','https://github.com/user-attachments/assets/978af068-f1de-4aaa-b8d2-b9478ae882d1'],
                'Jan 2023',
                'Feb 2024',
                "Normal"
            ),
            new Project(
                '6',
                'Turkiye-City-Guesser-Game',
                'City Name Guesser on a Map of Turkey',
                ['A game designed to find city names on the relevant areas of a map of Turkey.','Used Technologies HTML, CSS, Bootstrap, JavaScript','Playable on site: https://emirhanhasirci11.github.io/Turkiye-City-Guesser-Game/'],
                'https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/531aa37d-0d1f-4118-af6a-f7fd93cbb1d2',
                ['https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/54226e76-3994-47cc-a372-4e1fe66eb433', 'https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/531aa37d-0d1f-4118-af6a-f7fd93cbb1d2','https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/ce856641-50ee-4cfe-9230-72ca6423198f','https://github.com/EmirhanHasirci11/Map-Guesser-Game/assets/54208249/444b2131-3d0e-4032-9176-0e79186c1c37'],
                'May 2023',
                'May 2023',
                "Game"
            ),
            new Project(
                '5',
                'Js-QuizApp',
                'Quiz App',
                ['You can take a quiz and test yourself by selecting from different categories and numbers of options.','Used Technologies: HTML, CSS, Bootstrap, JavaScript','Playable on site: https://emirhanhasirci11.github.io/Js-QuizApp/'],
                'https://github.com/user-attachments/assets/0444dd5c-71ae-4d8c-9cfa-bffc6706c07c',
                ['https://github.com/user-attachments/assets/0444dd5c-71ae-4d8c-9cfa-bffc6706c07c', 'https://github.com/user-attachments/assets/42fd786b-9067-4a5b-99e4-b11327ecb40f','https://github.com/user-attachments/assets/456434f8-98f1-4737-b738-7ff2cb2bc8e7','https://user-images.githubusercontent.com/54208249/224195136-e15ba6e0-0538-4d70-a89d-1a7a3263747d.png','https://user-images.githubusercontent.com/54208249/224207364-93b8e404-d264-4c89-a539-232e6fb6dd9f.png'],
                'Feb 2023',
                'Mar 2023',
                "Game"
            ),
            new Project(
                '3',
                'Twitter Angular Clone',
                'A simple Twitter (X) clone project using Angular and Bootstrap libraries.',
                ['A simple Twitter (X) clone project using Angular and Bootstrap libraries.'],
                'https://github.com/user-attachments/assets/ef1500ed-621e-42d3-829d-4bacef209372',
                ['https://github.com/user-attachments/assets/ef1500ed-621e-42d3-829d-4bacef209372','https://github.com/user-attachments/assets/b6968003-6366-4160-9d9f-87396f674026','https://github.com/user-attachments/assets/df315311-308a-4e20-bb07-952336404eeb','https://github.com/user-attachments/assets/c36bce86-bbba-4636-9a8e-dfeb3de288bc','https://github.com/user-attachments/assets/9ad89d09-f8d9-49c7-8af4-e9d887dc57bd'],
                'Aug 2023',
                'Aug 2023',
                "Normal"
            )            ,
            new Project(
                '4',
                'Real-time-chatting-app',
                'A real-time messaging infrastructure designed with SignalR, developed with .NET 7, and featuring user authentication using the Identity library.',
                ['A real-time messaging infrastructure designed with SignalR, developed with .NET 7, and featuring user authentication using the Identity library.','Online users can see each other and start messaging with one another.','If you spoke to someone in the past, this interaction is saved in the database, and you can read your previous messages.',`If you are in another user's chat and someone else sends you a message, you can see that notification in the bottom right corner. Newly joined users are shown in the top right corner. `,'You can send offline messages to clients that they will receive when they open the app.','Used Technologies: .NetCore 7.0, Miscrosoft Identity, MSSQL, Bootstrap CSS, SignalR'],
                'https://github.com/user-attachments/assets/15f6dce7-6845-4a7b-9f37-1ca5ff4d2df5',
                ['https://github.com/user-attachments/assets/15f6dce7-6845-4a7b-9f37-1ca5ff4d2df5','https://github.com/user-attachments/assets/d036f1f8-1e5a-43b0-8417-982c0fc3c615','https://github.com/user-attachments/assets/e285074c-922d-4ba4-a96c-4dd85eca1b39'],
                'Dec 2023',
                'Jan 2024',
                "Normal"
            )

        ];
    }
}