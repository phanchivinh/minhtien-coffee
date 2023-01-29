import {About, Home, Manufacture, Partner, Product, Sustainability} from '../pages';

const publicRoutes = [
    { title:'Trang chủ', path: '/', component: Home },
    { 
        title:'Giới thiệu', 
        path: '/gioi-thieu', 
        component: About,
        subContents: [
            {subTitle:'Câu chuyện', subPath: '/gioi-thieu/#cau-chuyen'},
            {subTitle:'Hành trình', subPath: '/gioi-thieu/#hanh-trinh'},
            {subTitle:'Cột mốc', subPath: '/gioi-thieu/#cot-moc'},
            {subTitle:'Tầm nhìn và giá trị cốt lõi', subPath: '/gioi-thieu/#tam-nhin'},
            {subTitle:'Chứng nhận', subPath: '/gioi-thieu/#chung-nhan'},
        ]
    },
    { 
        title:'Sản phẩm', 
        path: '/san-pham', 
        component: Product,
        subContents: [
            {subTitle: 'Coffilia Rang xay', subPath: '/san-pham/#coffilia-rang-xay'},
            {subTitle: 'Coffilia Hòa tan', subPath: '/san-pham/#coffilia-hoa-tan'},
        ]
    },
    { 
        title:'Bền vững', 
        path: '/ben-vung', 
        component: Sustainability,
        subContents: [
            {subTitle: 'Nguyên bản', subPath: '/ben-vung/#nguyen-ban'},
            {subTitle: 'Kinh tế', subPath: '/ben-vung/#kinh-te'},
            {subTitle: 'Xã hội', subPath: '/ben-vung/#xa-hoi'},
            {subTitle: 'Môi trường', subPath: '/ben-vung/#moi-truong'},
            {subTitle: 'Hoạt động', subPath: '/ben-vung/#hoat-dong'},
        ]
    },
    { 
        title:'Sản xuất', 
        path: '/san-xuat', 
        component: Manufacture,
        subContents: [
            {subTitle: 'Nhà xưởng', subPath: '/san-xuat/#nha-xuong'},
            {subTitle: 'Vùng trồng', subPath: '/san-xuat/#vung-trong'},
            {subTitle: 'Quy trình sản xuất', subPath: '/san-xuat/#quy-trinh-san-xuat'},
        ]
    },
    { 
        title:'Đối tác', 
        path: '/doi-tac', 
        component: Partner,
        subContents: [
            {subTitle: 'Nông Hộ', subPath: '/doi-tac/#nong-ho'},
            {subTitle: 'Xuất khẩu', subPath: '/doi-tac/#xuat-khau'},
            {subTitle: 'Phân phối', subPath: '/doi-tac/#phan-phoi'},
            {subTitle: 'Đăng ký', subPath: '/doi-tac/#dang-ky'},
        ]
    },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };