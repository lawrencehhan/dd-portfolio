export interface DesignCardData {
    id: number,
    designProject: string,
    sub_id: number,
    image: string,
    title: string,
    text: string,
}[]

export default function DesignCardData() {
    return ([
                {
                    id: 1,
                    designProject: 'bookd',
                    sub_id: 1,
                    image: 'bookd_design_01.png',
                    title: 'Clutter-free',
                    text: 'Usability studies revealed that users found it troublesome to scroll horizontally and vertically to see the rest of the reservations placed for the same time slot. I revised the design so that only vertical scrolling was only necessary to see future reservations. I also added a filter option for users who found the calendar overwhelming.'
                },
                {
                    id: 2,
                    designProject: 'bookd',
                    sub_id: 2,
                    image: 'bookd_design_02.png',
                    title: 'Proximity',
                    text: 'The second usability study showed that users filled out information more quickly when the guest’s personal information was grouped together while the reservation information followed after.'
                },
                {
                    id: 3,
                    designProject: 'bookd',
                    sub_id: 3,
                    image: 'bookd_design_03.png',
                    title: 'Aesthetics',
                    text: 'The second usability study revealed that users responded better and had more positive first impressions with a more streamlined color palette. The darker call-to-action buttons also made it easier for some users to read text.'
                },
            ])
}
