export interface AchievementData {
    id: number;
    date: string;
    title: string;
}[]

export default function AchievementData() {
    return ([
                {
                    id: 1,
                    date: 'Nov 2019',
                    title: 'Certified ScrumMaster (CSM)'
                },
                {
                    id: 2,
                    date: 'Dec 2020',
                    title: 'Certified Scrum Product Owner (CSPO)'
                },
                {
                    id: 3,
                    date: 'Mar 2022',
                    title: 'Google UX Design Specialization through Coursera'
                },
                {
                    id: 4,
                    date: 'Dec 2022',
                    title: 'Amazon Web Services Cloud Practitioner'
                },
                {
                    id: 5,
                    date: 'Sep 2023',
                    title: 'General Assembly UX Design course'
                },
            ])
}
