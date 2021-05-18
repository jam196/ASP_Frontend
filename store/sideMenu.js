const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "index",
        title: "Dashboard"
      },
      {
        icon: "EditIcon",
        pageName: "bridge",
        title: "Quản lý cầu"
      },
      {
        icon: "BoxIcon",
        pageName: "side-menu-menu-layout",
        title: "Menu Layout",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-dashboard",
            title: "Side Menu",
            ignore: true
          },
          {
            icon: "",
            pageName: "simple-menu-dashboard",
            title: "Simple Menu",
            ignore: true
          },
          {
            icon: "",
            pageName: "top-menu-dashboard",
            title: "Top Menu",
            ignore: true
          }
        ]
      },
      "devider",
      {
        icon: "EditIcon",
        pageName: "side-menu-crud",
        title: "Crud",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-crud-data-list",
            title: "Data List"
          },
          {
            icon: "",
            pageName: "side-menu-crud-form",
            title: "Form"
          }
        ]
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
