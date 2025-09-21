import './index.scss';
function Updating(){
    return(
        <>
            <div className="updating">
                <div className="updating__title">
                    <h1>🚧 Trang đang được cập nhật 🚧</h1>
                    <p>Chúng tôi đang hoàn thiện tính năng này, vui lòng quay lại sau!</p>
                </div>
                <div className="updating__img">
                    <img src="/updating.png" alt="updating"/>
                </div>
            </div>
        </>
    )
}

export default Updating;