<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <a href class>Dashboard</a>
      <ChevronRightIcon class="breadcrumb__icon" />
      <a href class="breadcrumb--active">Quản lý cầu đường</a>
    </div>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative mr-3 sm:mr-6">
      <div class="search hidden sm:block">
        <input
          type="text"
          class="search__input input placeholder-theme-13"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <SearchIcon class="search__icon dark:text-gray-300" />
      </div>
      <a class="notification sm:hidden" href>
        <SearchIcon class="notification__icon dark:text-gray-300" />
      </a>
      <div class="search-result" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div class="search-result__content__title">Pages</div>
          <div class="mb-5">
            <a href class="flex items-center">
              <div
                class="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"
              >
                <InboxIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Mail Settings</div>
            </a>
            <a href class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"
              >
                <UsersIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Users & Permissions</div>
            </a>
            <a href class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"
              >
                <CreditCardIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Transactions Report</div>
            </a>
          </div>
          <div class="search-result__content__title">Users</div>
          <div class="mb-5">
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2"
            >
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
                  class="rounded-full"
                  :src="require(`@/assets/images/${faker.photos[0]}`)"
                />
              </div>
              <div class="ml-3">{{ faker.users[0].name }}</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                {{ faker.users[0].email }}
              </div>
            </a>
          </div>
          <div class="search-result__content__title">Products</div>
          <a
            v-for="(faker, fakerKey) in $_.take($f(), 4)"
            :key="fakerKey"
            href
            class="flex items-center mt-2"
          >
            <div class="w-8 h-8 image-fit">
              <img
                alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.images[0]}`)"
              />
            </div>
            <div class="ml-3">{{ faker.products[0].name }}</div>
            <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              {{ faker.products[0].category }}
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <div class="intro-x dropdown mr-auto sm:mr-6">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
      >
        <BellIcon class="notification__icon dark:text-gray-300" />
      </div>
      <div class="notification-content pt-2 dropdown-box">
        <div
          class="notification-content__box dropdown-box__content box dark:bg-dark-6"
        >
          <div class="notification-content__title">Thông báo</div>
          <div
            v-for="index in 10"
            :key="'noti_' + index"
            class="cursor-pointer relative flex items-center mt-5"
          >
            <div class="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
                class="rounded-full"
                src="https://pdp.edu.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg"
              />
              <div
                class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
              ></div>
            </div>
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a href="javascript:;" class="font-medium truncate mr-5">
                  ADMIN {{ index }}
                </a>
                <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  8/6/2021
                </div>
              </div>
              <div class="w-full truncate text-gray-600">
                Release
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
      >
        <img
          alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
          :src="this.$auth.user.avatar"
        />
      </div>
      <div class="dropdown-box w-56">
        <div
          class="dropdown-box__content box bg-theme-38 dark:bg-dark-6 text-white"
        >
          <div class="p-4 border-b border-theme-40 dark:border-dark-3">
            <div class="font-medium">
              {{ this.$auth.user.name || this.$auth.user.username }}
              <!--              {{ this.$auth.user.username || $f()[0].users[0].name }}-->
            </div>
            <div class="text-xs text-theme-41 dark:text-gray-600">
              {{
                this.$auth.user.role === "admin"
                  ? "Quản trị viên"
                  : "Thành viên hệ thống"
              }}
              <!--              {{ this.$auth.user.role === "" $f()[0].jobs[0] }}-->
            </div>
          </div>
          <div class="p-2">
            <nuxt-link
              to="/profile"
              href
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <UserIcon class="w-4 h-4 mr-2" />
              Thông tin tài khoản
            </nuxt-link>
            <!--            <a-->
            <!--              href-->
            <!--              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"-->
            <!--            >-->
            <!--              <EditIcon class="w-4 h-4 mr-2" />-->
            <!--              Add Account-->
            <!--            </a>-->
            <a
              href
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <LockIcon class="w-4 h-4 mr-2" />
              Đổi mật khẩu
            </a>
            <a
              href
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <HelpCircleIcon class="w-4 h-4 mr-2" />
              Hỗ trợ
            </a>
          </div>
          <div class="p-2 border-t border-theme-40 dark:border-dark-3">
            <a
              href="#"
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              @click="
                () => {
                  this.$auth.logout();
                }
              "
            >
              <ToggleRightIcon class="w-4 h-4 mr-2" />
              Đăng xuất
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
export default {
  data() {
    return {
      searchDropdown: false
    };
  },
  methods: {
    showSearchDropdown() {
      this.searchDropdown = true;
    },
    hideSearchDropdown() {
      this.searchDropdown = false;
    }
  }
};
</script>
