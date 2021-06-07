const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "index",
        title: "Dashboard"
      },
      "devider",
      {
        icon: "EditIcon",
        pageName: "side-menu-crud",
        title: "Quản lý",
        subMenu: [
          {
            icon: "",
            pageName: "bridge",
            title: "Quản lý cầu"
          },
          {
            icon: "",
            pageName: "user",
            title: "Quản lý người dùng"
          },
          {
            icon: "",
            pageName: "history",
            title: "Quản lý hoạt động"
          }
        ]
      },
      {
        icon: "UserIcon",
        pageName: "profile",
        title: "Thông tin tài khoản"
      }
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
