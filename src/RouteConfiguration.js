import Top from './containers/TopScreen';
import Top_Night from './component/Top/LargeScreen/Top_Night_Main';
import About from './component/About/LargeScreen/AboutScreen';
import Works from './component/Works/LargeScreen/WorksScreen';
import Service from './component/Service/LargeScreen/ServiceScreen';
import Selling from './component/Service/SellingPlan/LargeScreen/SellingPlanScreen';
import LogColle from './component/Service/Logcolle/LargeScreen/LogColleScreen';
import LineStamp from './component/Service/LineStamp/LargeScreen/LineStampScreen';
import Access from './component/Access/Access';



const routes = [

    {
        path: '/',
        component: Top,
    },
    {
        path: '/about',
        component: About,
    },
    {    
        path: '/works',
        component: Works
    },
    {
        path: '/service',
        component: Service,
        routes: [
            {
                path: '/service/selling',
                component: Selling
            },
            {
                path: '/service/logcolle',
                component: LogColle
            },
            {
                path: '/service/lineStamp',
                component: LineStamp
            }
        ]
    },
    {
        path: '/access',
        component: Access
    },
    
]

export default routes;