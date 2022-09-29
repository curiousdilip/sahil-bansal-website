import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMail } from "react-icons/io5";
import BgImg from "./img/bgimg.jpg"

export const Experience=[
    {id:1,
    date:"2016-presnt",
iconsSrc:<IoCodeWorking/>,
title:"delhi,Qatar",
description:"lorem ajkshdhas ahsfkjhkjsadfh kjsadhgkjshdg h kjsdghs ldkjgh hkjasfdkjh kjhkaljshd flhakfljh ahfkj h",},
{id:2,
    date:"2016-presnt",
iconsSrc:<IoCodeWorking/>,
title:"delhi,Qatar",
description:"lorem ajkshdhas ahsfkjhkjsadfh kjsadhgkjshdg h kjsdghs ldkjgh hkjasfdkjh kjhkaljshd flhakfljh ahfkj h",}

]


export const Projects=[
    {
        id:1,
        name:"abc",
        imageSrc:BgImg,
        techs:"rectjs,redux,material ui",
        github:"#",
    },
    {
        id:2,
        name:"abc",
        imageSrc:BgImg,
        techs:"rectjs,redux,material ui",
        github:"#",
    },
]

export const SocialLinks=[
    {
        id:1,
        iconSrc:<IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>,
        name:"Github",
        link:"#",
    },
    {
        id:2,
        iconSrc:<IoLogoTwitter className="text-textBase text-3xl cursor-pointer"/>,
        name:"Twitter",
        link:"#",
    },
    {
        id:3,
        iconSrc:<IoLogoLinkedin className="text-textBase text-3xl cursor-pointer"/>,
        name:"LinkedIn",
        link:"#",
    },
    {
        id:4,
        iconSrc:<IoMail className="text-textBase text-3xl cursor-pointer"/>,
        name:"Mail",
        link:"#",
    },
]