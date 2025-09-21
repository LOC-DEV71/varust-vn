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
                { key: '1-1', label: 'Option 1' },
                { key: '1-2', label: 'Option 2' },
                { key: '1-3', label: 'Option 3' },
                { key: '1-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>PC</Link>,
            icon: <DesktopOutlined />,
            key: "2",
            children: [
                { key: '2-1', label: 'Option 1' },
                { key: '2-2', label: 'Option 2' },
                { key: '2-3', label: 'Option 3' },
                { key: '2-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Laptop</Link>,
            icon: <LaptopOutlined />,
            key: "3",
            children: [
                { key: '3-1', label: 'Option 1' },
                { key: '3-2', label: 'Option 2' },
                { key: '3-3', label: 'Option 3' },
                { key: '3-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Mainboard</Link>,
            icon: <ControlOutlined />,
            key: "4",
            children: [
                { key: '4-1', label: 'Option 1' },
                { key: '4-2', label: 'Option 2' },
                { key: '4-3', label: 'Option 3' },
                { key: '4-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Tai nghe</Link>,
            icon: <CustomerServiceOutlined/>,
            key: "5",
            children: [
                { key: '5-1', label: 'Option 1' },
                { key: '5-2', label: 'Option 2' },
                { key: '5-3', label: 'Option 3' },
                { key: '5-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Ghế</Link>,
            icon: <FireOutlined />,
            key: "6",
            children: [
                { key: '6-1', label: 'Option 1' },
                { key: '6-2', label: 'Option 2' },
                { key: '6-3', label: 'Option 3' },
                { key: '6-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Chuột</Link>,
            icon: <BugOutlined />,
            key: "7",
            children: [
                { key: '7-1', label: 'Option 1' },
                { key: '7-2', label: 'Option 2' },
                { key: '7-3', label: 'Option 3' },
                { key: '7-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>RAM</Link>,
            icon: <ClusterOutlined />,
            key: "8",
            children: [
                { key: '8-1', label: 'Option 1' },
                { key: '8-2', label: 'Option 2' },
                { key: '8-3', label: 'Option 3' },
                { key: '8-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Ổ cứng</Link>,
            icon: <HddOutlined />,
            key: "9",
            children: [
                { key: '9-1', label: 'Option 1' },
                { key: '9-2', label: 'Option 2' },
                { key: '9-3', label: 'Option 3' },
                { key: '9-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Tản nhiệt</Link>,
            icon: <FireOutlined />,
            key: "10",
            children: [
                { key: '10-1', label: 'Option 1' },
                { key: '10-2', label: 'Option 2' },
                { key: '10-3', label: 'Option 3' },
                { key: '10-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Bàn phím</Link>,
            icon: <FormOutlined />,
            key: "11",
            children: [
                { key: '11-1', label: 'Option 1' },
                { key: '11-2', label: 'Option 2' },
                { key: '11-3', label: 'Option 3' },
                { key: '11-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Nguồn</Link>,
            icon: <ThunderboltOutlined/>,
            key: "12",
            children: [
                { key: '12-1', label: 'Option 1' },
                { key: '12-2', label: 'Option 2' },
                { key: '12-3', label: 'Option 3' },
                { key: '12-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Case</Link>,
            icon: <ContainerOutlined />,
            key: "13",
            children: [
                { key: '13-1', label: 'Option 1' },
                { key: '13-2', label: 'Option 2' },
                { key: '13-3', label: 'Option 3' },
                { key: '13-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Loa</Link>,
            icon: <SoundOutlined/>,
            key: "14",
            children: [
                { key: '14-1', label: 'Option 1' },
                { key: '14-2', label: 'Option 2' },
                { key: '14-3', label: 'Option 3' },
                { key: '14-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Phụ Kiện</Link>,
            icon: <GiftOutlined/>,
            key: "15",
            children: [
                { key: '15-1', label: 'Option 1' },
                { key: '15-2', label: 'Option 2' },
                { key: '15-3', label: 'Option 3' },
                { key: '15-4', label: 'Option 4' },
            ],
        },
        {
            label: <Link to={"/"}>Sạc dự phòng</Link>,
            icon: <ThunderboltOutlined />,
            key: "16",
            children: [
                { key: '16-1', label: 'Option 1' },
                { key: '16-2', label: 'Option 2' },
                { key: '16-3', label: 'Option 3' },
                { key: '16-4', label: 'Option 4' },
            ],
        },
    ];

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


    