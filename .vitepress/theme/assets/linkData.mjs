import { availableMemory } from "process";

// 链接数据
const linkData = [
  // 推荐数据
  // {
  //   type: "rec",
  //   typeName: "推荐",
  //   typeDesc: "都是大佬，推荐关注",
  //   typeList: [
  //     {
  //       name: "阮一峰",
  //       avatar: "https://pic.imgdb.cn/item/653a8388c458853aefefcc58.png",
  //       desc: "阮老师，知名博主，大佬中的大佬",
  //       url: "https://www.ruanyifeng.com/blog/",
  //     }
  //   ],
  // },
  // 小伙伴们
  {
    type: "friends",
    typeName: "朋友们",
    typeDesc: "一起共同进步",
    typeList: [
      {
        name: "無名小栈",
        avatar: "https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png",
        desc: "分享技术与科技生活",
        url: "https://imsyy.top/",
      },
      {
        name: "阮一峰",
        avatar: "https://pic.imgdb.cn/item/653a8388c458853aefefcc58.png",
        desc: "阮老师，知名大佬博主",
        url: "https://www.ruanyifeng.com/blog/",
      },
      {
        name: "李寒的小窝",
        avatar: "https://pic.imgdb.cn/item/671684c8d29ded1a8cc594d8.png",
        desc: "Here is lihan's personal blog",
        url: "https://lihan3238.github.io",
      },
      {
        name: "Dale's Blog",
        avatar: "https://pic.imgdb.cn/item/653e45f4c458853aeff4d569.png",
        desc: "Wir müssen wissen ! Wir werden wissen !",
        url: "https://dalechu.cn/",
      }
    ],
  },
];

export default linkData;
