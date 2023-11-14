export interface ProjectData {
    id: number;
    featured: boolean;
    title: string;
    desc: string;
    thumbnail?: string;
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
                    thumbnail: "bookd_thumbnail.png",
                    tag: ['Design'],
                    link: "bookd",
                },
                {
                    id: 2,
                    featured: true,
                    title: "Money Sense",
                    desc: "Improving financial literacy from the convenience of your phone",
                    thumbnail: "moneySense_thumbnail.png",
                    tag: ['Design'],
                    link: "money-sense",
                },
                {
                    id: 3,
                    featured: true,
                    title: "Tracehealth",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    thumbnail: "bookd_thumbnail.png",
                    tag: ['Design'],
                    link: "tracehealth",
                },
                {
                    id: 4,
                    featured: false,
                    title: "Ube & Sugar Bakery",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    thumbnail: "ubeBakery_thumbnail.png",
                    tag: ['Development'],
                    link: "ube-&-sugar-bakery",
                },
                {
                    id: 5,
                    featured: false,
                    title: "AAA",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    thumbnail: "bookd_thumbnail.png",
                    tag: ['Development'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 6,
                    featured: false,
                    title: "BBB",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    thumbnail: "bookd_thumbnail.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 7,
                    featured: false,
                    title: "CCC",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    thumbnail: "bookd_thumbnail.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
                {
                    id: 8,
                    featured: false,
                    title: "DDD",
                    desc: "Streamlining EMRs to improve quality of patient care",
                    thumbnail: "bookd_thumbnail.png",
                    tag: ['Design'],
                    link: "https://www.synestify.com/",
                },
            ])
}
