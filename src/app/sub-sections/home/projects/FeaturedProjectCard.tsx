import Image from 'next/image';
interface FeaturedProjectCard {
    id: number;
    title: string;
    text: string;
    image?: string;
    isMobile?: boolean;
    link?: string;
}

export default function FeaturedProjectCard(props:FeaturedProjectCard) {
    const {id, title, text, image} = props;
    return(
        <div className="project-card">
            <div className="card-image-container">
                <Image 
                    className='card-thumbnail'
                    src={`/${image}`}
                    alt={title}
                    width={266}
                    height={258}
                />
            </div>
            <div className='card-title'>{title}</div>
            <div className='card-text text-body-m'>{text}</div>
            <div></div>
        </div>
    )
}