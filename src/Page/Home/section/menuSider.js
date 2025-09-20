import { Link } from "react-router-dom";
import {Menu} from "antd";
import { DesktopOutlined, LaptopOutlined, ClusterOutlined, CustomerServiceOutlined, BugOutlined, ControlOutlined, HddOutlined, FireOutlined, FormOutlined, ThunderboltOutlined, ContainerOutlined, SoundOutlined, GiftOutlined } from "@ant-design/icons";

function MenuSider(){

    const items = [
        {
            label: <Link to={"/"}>Màn hình</Link>,
            icon: <DesktopOutlined/>,
            key: "1",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],

        },
        {
            label: <Link to={"/"}>PC</Link>,
            icon: <DesktopOutlined />,
            key: "2",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Laptop</Link>,
            icon: <LaptopOutlined />,
            key: "3",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Mainboard</Link>,
            icon: <ControlOutlined />,
            key: "4",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Tai nghe</Link>,
            icon: <CustomerServiceOutlined/>,
            key: "5",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Ghế</Link>,
            icon: <FireOutlined />,
            key: "6",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Chuột</Link>,
            icon: <BugOutlined />,
            key: "7",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>RAM</Link>,
            icon: <ClusterOutlined />,
            key: "8",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Ổ cứng</Link>,
            icon: <HddOutlined />,
            key: "9",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Tản nhiệt</Link>,
            icon: <FireOutlined />,
            key: "10",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Bàn phím</Link>,
            icon: <FormOutlined />,
            key: "11",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Nguồn</Link>,
            icon: <ThunderboltOutlined/>,
            key: "12",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Case</Link>,
            icon: <ContainerOutlined />,
            key: "13",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Loa</Link>,
            icon: <SoundOutlined/>,
            key: "14",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>Phụ Kiện</Link>,
            icon: <GiftOutlined/>,
            key: "15",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
        {
            label: <Link to={"/"}>sạc dự phòng</Link>,
            icon: <ThunderboltOutlined />,
            key: "16",
            children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
            ],
        },
    
    ]
    return(
        <>
            <Menu
                mode="vertical"
                items={items}
                // triggerSubMenuAction={"hover"}
            />


        </>
    )
}
export default MenuSider;