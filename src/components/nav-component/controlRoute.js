import { ref, reactive } from "vue";
// 控制路由切换显示激活当前item
export function controlRoute() {
    let activeId = ref('')
    const navListItem = reactive([
        {
          id: "1",
          path: "/",
          name: "首页",
        },
        {
          id: "2",
          path: "/article",
          name: "文章",
        },
        {
          id: "3",
          path: "/archive",
          name: "归档",
        },
        {
          id: "4",
          path: "/project",
          name: "项目",
        },
        {
          id: "5",
          path: "/timeline",
          name: "历程",
        },
        {
          id: "6",
          path: "/message",
          name: "留言",
        },
        {
          id: "7",
          path: "/about",
          name: "关于",
        },
      ])

    function routeChange(nowPath) {
        for(const item of navListItem){
            if( item.path === nowPath.path ){
                activeId.value = item.id
            }
        }
    }

    return { activeId, navListItem, routeChange }
}