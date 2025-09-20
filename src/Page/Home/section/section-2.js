import { ThunderboltOutlined } from "@ant-design/icons";
import './section-2.scss';
function SectionTwo(){
    return(
        <>
            <div className="section2">
                <h3> <ThunderboltOutlined/> Deal Hời Tuần Này</h3>
                <div className='section2__main'>
                    <div className="section2__main-left">
                        <img src='/sale.webp' alt='img sales'/>
                    </div>
                    <div className="section2__main-right">
                        <div>
                            sp1
                        </div>
                        <div>
                            sp2
                        </div>
                        <div>
                            sp3
                        </div>
                        <div>
                            sp4
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionTwo;