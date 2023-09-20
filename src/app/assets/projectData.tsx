export interface ProjectData {
    id: number;
    title: string;
    desc: string;
    image?: string;
    tag: string[];
    link?: string;
}[]

export const filterOptions = ['All', 'Design', 'Development']

export default function ProjectData() {
    return ([
                {
                    id: 1,
                    title: "Book'd",
                    desc: "Making dining reservatios easier to track for restaurant employees",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 2,
                    title: "Money Sense",
                    desc: "Improving financial literacy from the convenience of your phone",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 3,
                    title: "Tracehealth",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 4,
                    title: "Ube & Sugar Bakery",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Development'],
                    link: "https://www.synestify.com/",
                }
            ])
}
