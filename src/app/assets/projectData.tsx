export interface ProjectData {
    id: number;
    featured: boolean;
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
                    featured: true,
                    title: "Book'd",
                    desc: "Making dining reservatios easier to track for restaurant employees",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 2,
                    featured: true,
                    title: "Money Sense",
                    desc: "Improving financial literacy from the convenience of your phone",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 3,
                    featured: true,
                    title: "Tracehealth",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 4,
                    featured: false,
                    title: "Ube & Sugar Bakery",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Development'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 5,
                    featured: false,
                    title: "AAA",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Development'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 6,
                    featured: false,
                    title: "BBB",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 7,
                    featured: false,
                    title: "CCC",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 8,
                    featured: false,
                    title: "DDD",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    image: "synestify_example.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
            ])
}