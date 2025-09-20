import { Carousel } from 'antd';
function TopBar(){
    return(
        <>
            <Carousel autoplay autoplaySpeed={1900} dots={false} pauseOnHover={false}>
                <div className='layout__header-topbar-img'>
                    <img src='/illustration-1.webp' alt='img-bar' />
                </div>
                <div className='layout__header-topbar-img'>
                    <img src='/illustration-2.webp' alt='img-bar' />
                </div>
                <div className='layout__header-topbar-img'>
                    <img src='/illustration-3.webp' alt='img-bar' />
                </div>
            </Carousel>
        </>
    )
}

export default TopBar;