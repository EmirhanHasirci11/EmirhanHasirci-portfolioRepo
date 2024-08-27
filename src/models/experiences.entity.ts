export class Experiences {
    data: Experience[] = [];

    constructor() {
        this.data = [
            new Experience(
                '1',
                'GDSC Turkey',
                'Led multiple projects',
                'Managed a portfolio of software projects, ensuring timely delivery and alignment with business goals. Facilitated communication between stakeholders and development teams, leading to a 20% improvement in project delivery times.',
                'Aug 2024',
                'Current',
                'Facilitator'
            ),
            new Experience(
                '2',
                'Data Analyst',
                'Analyzed datasets',
                'Performed data analysis to identify trends and insights, leading to data-driven decision-making. Developed automated reporting systems using Python and SQL, which reduced reporting time by 30%.',
                '2019-01-15',
                '2020-08-31',
                'Analyst'
            ),
            new Experience(
                '4',
                'UI/UX Designer',
                'Designed user interfaces',
                'Designed intuitive user interfaces for mobile and web applications, improving user engagement by 25%. Collaborated with developers to ensure design consistency across platforms and implemented user feedback into designs.',
                '2023-08-01',
                '2024-08-01',
                'Designer'
            ),
            new Experience(
                '3',
                'Software Engineer',
                'Developed web applications',
                'Worked on a team to design, develop, and deploy scalable web applications using Angular and Node.js. Improved application performance by optimizing SQL queries and reducing API response times.',
                '2022-05-01',
                '2023-07-30',
                'Engineer'
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
