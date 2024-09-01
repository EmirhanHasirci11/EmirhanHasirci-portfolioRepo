export class Experiences {
    data: Experience[] = [];

    constructor() {
        this.data = [
            new Experience(
                '1',
                'GDSC Turkey',
                'Contribute to community',
                'As a Facilitator in the GDSC Turkey team, I actively contribute by sharing my experiences with the new GDSC Leaders. I guide them in their roles and assist in various aspects of community management, ensuring the continued growth and success of the GDSC community.',
                'Aug 2024',
                'Current',
                'Facilitator/Marketing'
            ),            
            new Experience(
                '2',
                'Turkish Technology Team (T3)',
                'You are the future.',
                'As one of the 380 individuals selected for the Turkish Technology Team, I assist high school and middle school students in the Deneyap workshops, contributing to the growth of the technology ecosystem.',
                'Oct 2023',
                'Current',
                'Scholarship'
            ),
            new Experience(
                '3',
                'Game and Application Academy',
                'Unity game development',
                'As a Google Game and Application Academy Scholar, I gained foundational knowledge in game development with Unity, and by completing the Google Project Management Certificate program, I acquired valuable experience in project management.',
                'Dec 2023',
                'Aug 2024',
                'Trainee'
            ),
            new Experience(
                '4',
                'GDSC Founder Lead',
                'Led community',
                'In my recent role as the Founder Lead of Google Developer Student Clubs (GDSC) Bartın, I established and led a community dedicated to Google developer technologies. This experience enhanced my collaborative and leadership abilities, providing a platform for knowledge exchange among aspiring professionals.',
                'Aug 2023',
                'Aug 2024',
                'Lead/Marketing'
            )
        ];
    }
}

export class Experience {
    id: string;
    title: string;
    shortDesc: string;
    desc: string;
    startDate: string;
    endDate: string;
    type: string;

    constructor(
        id: string,
        title: string,
        shortDesc: string,
        desc: string,
        startDate: string,
        endDate: string,
        type: string
    ) {
        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.desc = desc;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}
