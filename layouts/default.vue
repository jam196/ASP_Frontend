<template>
  <div>
    <DarkModeSwitcher />
    <MobileMenu />
    <div class="flex">
      <!-- BEGIN: Side Menu -->
      <nav class="side-nav">
        <!-- BEGIN: Logo -->
        <nuxt-link to="/" class="intro-x flex items-center pl-5 pt-4">
          <img
            alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
            class="w-6"
            src="@/assets/images/logo.svg"
          />
          <span class="hidden xl:block text-white text-lg ml-3">
            QL <span class="font-medium">Cầu Đường</span>
          </span>
        </nuxt-link>
        <!-- END: Logo -->
        <div class="side-nav__devider my-6"></div>
        <ul>
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <li
              v-if="menu === 'devider'"
              :key="menuKey"
              class="side-nav__devider my-6"
            ></li>
            <li v-else :key="menuKey">
              <SideMenuTooltip
                tag="a"
                :content="menu.title"
                href="javascript:;"
                class="side-menu"
                :class="{
                  'side-menu--active': menu.active,
                  'side-menu--open': menu.activeDropdown
                }"
                @click.native="linkTo(menu)"
              >
                <div class="side-menu__icon">
                  <component :is="menu.icon" />
                </div>
                <div class="side-menu__title">
                  {{ menu.title }}
                  <ChevronDownIcon
                    v-if="$h.isset(menu.subMenu)"
                    class="side-menu__sub-icon"
                    :class="{ 'transform rotate-180': menu.activeDropdown }"
                  />
                </div>
              </SideMenuTooltip>
              <!-- BEGIN: Second Child -->
              <transition @enter="enter" @leave="leave">
                <ul v-if="$h.isset(menu.subMenu) && menu.activeDropdown">
                  <li
                    v-for="(subMenu, subMenuKey) in menu.subMenu"
                    :key="subMenuKey"
                  >
                    <SideMenuTooltip
                      tag="a"
                      :content="subMenu.title"
                      href="javascript:;"
                      class="side-menu"
                      :class="{ 'side-menu--active': subMenu.active }"
                      @click.native="linkTo(subMenu)"
                    >
                      <div class="side-menu__icon">
                        <ActivityIcon />
                      </div>
                      <div class="side-menu__title">
                        {{ subMenu.title }}
                        <ChevronDownIcon
                          v-if="$h.isset(subMenu.subMenu)"
                          class="side-menu__sub-icon"
                          :class="{
                            'transform rotate-180': subMenu.activeDropdown
                          }"
                        />
                      </div>
                    </SideMenuTooltip>
                    <!-- BEGIN: Third Child -->
                    <transition @enter="enter" @leave="leave">
                      <ul
                        v-if="
                          $h.isset(subMenu.subMenu) && subMenu.activeDropdown
                        "
                      >
                        <li
                          v-for="(lastSubMenu,
                          lastSubMenuKey) in subMenu.subMenu"
                          :key="lastSubMenuKey"
                        >
                          <SideMenuTooltip
                            tag="a"
                            :content="lastSubMenu.title"
                            href="javascript:;"
                            class="side-menu"
                            :class="{ 'side-menu--active': lastSubMenu.active }"
                            @click.native="linkTo(lastSubMenu)"
                          >
                            <div class="side-menu__icon">
                              <ZapIcon />
                            </div>
                            <div class="side-menu__title">
                              {{ lastSubMenu.title }}
                            </div>
                          </SideMenuTooltip>
                        </li>
                      </ul>
                    </transition>
                    <!-- END: Third Child -->
                  </li>
                </ul>
              </transition>
              <!-- END: Second Child -->
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div class="content">
        <TopBar />
        <Nuxt />
      </div>
      <!-- END: Content -->
    </div>
    <div id="warning-modal" class="modal">
      <div class="modal__content">
        <div class="p-5 text-center">
          <xCircleIcon class="w-16 h-16 text-theme-12 mx-auto mt-3" />
          <div class="text-3xl mt-5">Có lỗi xảy ra...</div>
          <div class="text-gray-600 mt-2">Something went wrong!</div>
        </div>
        <div class="px-5 pb-8 text-center">
          <button
            type="button"
            data-dismiss="modal"
            class="button w-24 bg-theme-1 text-white"
          >
            Ok
          </button>
        </div>
        <div
          class="p-5 text-center border-t border-gray-200 dark:border-dark-5"
        >
          <a href="" class="text-theme-1 dark:text-theme-10"
            >Why do I have this issue?</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
import TopBar from "@/components/TopBar";
import MobileMenu from "@/components/MobileMenu";
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import SideMenuTooltip from "@/components/SideMenuTooltip";

export default {
  components: {
    DarkModeSwitcher,
    SideMenuTooltip,
    MobileMenu,
    TopBar
  },
  data() {
    return {
      formattedMenu: []
    };
  },
  computed: {
    sideMenu() {
      return this.nestedMenu(this.$store.state.sideMenu.menu);
    }
  },
  watch: {
    $route() {
      this.formattedMenu = this.$h.assign(this.sideMenu);
    }
  },
  mounted() {
    cash("body")
      .removeClass("login")
      .addClass("app");
    this.formattedMenu = this.$h.assign(this.sideMenu);
  },
  methods: {
    nestedMenu(menu) {
      menu.forEach((item, key) => {
        if (typeof item !== "string") {
          menu[key].active =
            (item.pageName === this.$route.name ||
              (this.$h.isset(item.subMenu) &&
                this.findActiveMenu(item.subMenu))) &&
            !item.ignore;
        }

        if (this.$h.isset(item.subMenu)) {
          menu[key].activeDropdown = this.findActiveMenu(item.subMenu);
          menu[key] = {
            ...item,
            ...this.nestedMenu(item.subMenu)
          };
        }
      });

      return menu;
    },
    findActiveMenu(subMenu) {
      let match = false;
      subMenu.forEach(item => {
        if (item.pageName == this.$route.name && !item.ignore) {
          match = true;
        } else if (!match && this.$h.isset(item.subMenu)) {
          match = this.findActiveMenu(item.subMenu);
        }
      });
      return match;
    },
    linkTo(menu) {
      if (this.$h.isset(menu.subMenu)) {
        menu.activeDropdown = !menu.activeDropdown;
      } else {
        this.$router.push({
          name: menu.pageName
        });
      }
    },
    enter(el, done) {
      Velocity(
        el,
        "slideDown",
        {
          duration: 300
        },
        {
          complete: done
        }
      );
    },
    leave(el, done) {
      Velocity(
        el,
        "slideUp",
        {
          duration: 300
        },
        {
          complete: done
        }
      );
    }
  }
};
</script>
