import images from "../images";
import {Post1, Post2, Post3, Post4} from './Posts'

const publicArchive = [
    {
        title: 'Bartender Là Gì ? #8 Bước Để Trở Thành Một Bartender Chuyên Nghiệp',
        path: '/bartender',
        thumnail: images.newsThumnail1,
        time: '21 Tháng 12, 2020',
        component: Post1
    },
    {
        title: 'Uống nhiều cà phê hòa tan có tốt không? 3 tác hại bạn nên biết',
        path: '/tac-hai-cua-ca-phe-hoa-tan',
        thumnail: images.newsThumnail2,
        time: '21 Tháng 12, 2020',
        component: Post2
    },
    {
        title: '[Barista Là Gì] Tất tần tật những công việc của một Barista',
        path: '/barista-la-gi',
        thumnail: images.newsThumnail3,
        time: '20 Tháng 12, 2020',
        component: Post3
    },
    {
        title: '12+ Cách Làm Sinh Tố Xoài Tại Nhà Thơm Ngon Bổ Dưỡng',
        path: '/cach-lam-sinh-to-xoai/',
        thumnail: images.newsThumnail4,
        time: '19 Tháng 12, 2020',
        component: Post4
    },
];

export default publicArchive;