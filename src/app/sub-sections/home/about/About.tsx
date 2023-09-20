"use client"
import {motion} from 'framer-motion';
import Square from '../../../components/Square';
import '../home.css';


export default function About() {
    return (
        <div className='about-container'>
            <div className='about-col about-col-blurb'>
                <div className='textbox'>
                    <div className='text-heading-l about-title'>about me</div>
                    <div className='text-body-m about-text'>
                        Lorem ipsum dolor sit amet consectetur. Enim magna lacus euismod id cras. Porttitor sed at turpis eu faucibus blandit erat. Enim sit sed erat elit nam sem amet. Accumsan donec eget placerat ut quis suscipit neque in aliquet. Porta pharetra odio elit et dolor eu. Convallis ligula commodo amet elit amet lobortis aliquet arcu. Ac a vulputate lectus consequat faucibus nulla vitae vitae. Maecenas vitae vel maecenas suscipit faucibus. Tristique nunc interdum at mollis gravida.
                        <br></br>
                        <br></br>
                        Sit eget auctor at viverra odio orci amet. Neque cursus id varius dignissim vitae elementum. Orci scelerisque ac risus sit tincidunt vel aliquam. Elementum blandit in natoque ac massa tempor. Orci mattis aliquam enim tincidunt leo. Vitae molestie gravida feugiat quis duis id netus amet diam. Adipiscing senectus ullamcorper in sit ridiculus lectus lectus sagittis hendrerit. Amet purus turpis senectus in cursus eros euismod luctus diam. Feugiat id consequat suspendisse ut hac eros est. Venenatis mauris vitae et augue non nisl.
                        <br></br>
                        <br></br>
                        Nec et sit vitae cum. Et at elementum nibh laoreet dui diam. Erat sapien porttitor facilisi a condimentum scelerisque eget malesuada etiam. Cursus gravida ultrices suscipit sagittis iaculis eget et sed. Integer eros maecenas semper pretium lectus lectus pellentesque at.
                    </div>
                </div>
            </div>
            <div className='about-col about-col-media'>
                <Square extraClass="square-01" color="#515B6C" width={490} height={386} animated={true}></Square>
                <Square extraClass="square-02" color="#8D97A8" width={329} height={329} animated={true}></Square>
                <Square extraClass="square-03" color="#C4CEDF" width={184} height={361} animated={true}></Square>
            </div>
        </div>
    )
}