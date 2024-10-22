import {Faq, Home, Offer, PrivacyPolicy} from "../pages";

export const qrRoutes = [
    {path: '/', component: <Home/>},
    {path: '/privacy-policy', component: <PrivacyPolicy/>},
    {path: '/offer', component: <Offer/>},
    {path: '/faq', component: <Faq/>},
]