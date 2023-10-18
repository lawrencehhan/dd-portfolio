import Square from '../../../components/Square';
interface FeaturedProjectCard {
    id: number;
    title: string;
    text: string;
    image?: string;
    link?: string;
}

export default function FeaturedProjectCard(props:FeaturedProjectCard) {
    const {id, title, text} = props;
    return(
        <div className="project-card">
            <div className="card-image-container">
                <Square extraClass='card-image' color='#C4CEDF' width={266} height={258} animated={false} />
            </div>
            <div className='card-title'>{title}</div>
            <div className='card-text text-body-m'>{text}</div>
            <div></div>
        </div>
    )
}