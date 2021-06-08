<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Thông Tin Tài Khoản</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5">
          <div class="relative flex items-center p-5">
            <div class="w-12 h-12 image-fit">
              <img
                alt="TNV - 2021 - VUE ASP.NET CORE"
                class="rounded-full"
                :src="formData.avatar"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium text-base">
                {{ formData.name || formData.username }}
              </div>
              <div class="text-gray-600">{{ formData.role }}</div>
            </div>
            <div class="dropdown">
              <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
              </a>
              <div class="dropdown-box w-56">
                <div class="dropdown-box__content box dark:bg-dark-1">
                  <div
                    class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                  >
                    Export Options
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ActivityIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      English
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <BoxIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Indonesia
                      <div
                        class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                      >
                        10
                      </div>
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <LayoutIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      English
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <SidebarIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Indonesia
                    </a>
                  </div>
                  <div
                    class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                  >
                    <button
                      type="button"
                      class="button button--sm bg-theme-1 text-white"
                    >
                      Settings
                    </button>
                    <button
                      type="button"
                      class="button button--sm bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300 ml-auto"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a
              class="flex items-center text-theme-1 dark:text-theme-10 font-medium"
              href=""
            >
              <ActivityIcon class="w-4 h-4 mr-2" /> Thông tin cá nhân
            </a>
            <a
              class="flex items-center mt-5"
              href="#"
              @click="showChangePass = !showChangePass"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu
            </a>
            <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" /> Cài đặt tài khoản
            </a>
          </div>
          <div class="p-5 border-t flex dark:border-dark-5">
            <nuxt-link
              to="/"
              class="button button--sm block bg-theme-1 text-white"
            >
              Về trang chủ
            </nuxt-link>
            <nuxt-link
              to="/user"
              class="button button--sm border text-gray-700 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 ml-auto"
            >
              Quay lại trang trước
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Display Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Chỉnh sửa thông tin</h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-4">
                <div
                  class="border border-gray-200 dark:border-dark-5 rounded-md p-5"
                >
                  <div
                    class="w-40 h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                  >
                    <img
                      class="rounded-md"
                      alt="TNV - 2021 - VUE ASP.NET CORE"
                      :src="formData.avatar"
                    />
                    <Tippy
                      tag="div"
                      content="Gỡ avatar?"
                      class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                      @click="removeImage"
                    >
                      <xIcon class="w-4 h-4" @click="removeImage" />
                    </Tippy>
                  </div>
                  <div class="w-40 mx-auto cursor-pointer relative mt-5">
                    <button
                      type="button"
                      class="button w-full bg-theme-1 text-white"
                    >
                      Đổi avatar
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                      @change="onFileChange"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 xl:col-span-8">
                <div>
                  <label>Tên đăng nhập</label>
                  <input
                    v-model="formData.username"
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Tên đăng nhập"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Tên hiển thị</label>
                  <input
                    v-model="formData.name"
                    type="text"
                    class="input w-full border bg-white mt-2"
                    placeholder="Tên hiển thị"
                  />
                </div>
                <div class="mt-3">
                  <label>Email</label>
                  <input
                    v-model="formData.email"
                    type="text"
                    class="input w-full border bg-white mt-2"
                    placeholder="Email"
                  />
                </div>
                <div v-if="$auth.user.role === 'admin'" class="mt-3">
                  <label>Loại tài khoản</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="formData.role"
                      :options="{
                        search: true,
                        classNames: 'w-full'
                      }"
                    >
                      <option value="member">Tài khoản thường</option>
                      <option value="admin">Quản trị viên</option>
                    </TailSelect>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Ngày tham gia</label>
                  <input
                    :value="
                      $moment(formData.createdAt)
                        .locale('vi')
                        .format('LTS l')
                    "
                    disabled
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed
                  mt-2"
                    placeholder="Tên hiển thị"
                  />
                </div>
                <div v-if="showChangePass" class="mt-3">
                  <label>Đổi mật khẩu mới</label>
                  <input
                    v-model="formData.password"
                    type="password"
                    class="input w-full border bg-white mt-2"
                    placeholder="Mật khẩu mới"
                  />
                </div>
                <button
                  type="button"
                  class="button w-30 bg-theme-1 text-white mt-3"
                  @click="submitForm"
                >
                  Lưu thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Display Information -->
      </div>
    </div>
  </div>
</template>

<script>
import Toastify from "toastify-js";

export default {
  data() {
    return {
      showChangePass: false,
      formData: { ...this.$auth.user }
    };
  },
  beforeMount() {
    if (this.$route.params.formData) {
      this.formData = this.$route.params.formData;
    }
  },
  methods: {
    submitForm() {
      this.$axios
        .put("/user/" + this.formData.id, this.formData)
        .then(response => {
          Toastify({
            text: response.data.message,
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "#42ba96",
            stopOnFocus: true
          }).showToast();
        })
        .catch(e => {
          let responseData = e.response.data;
          Toastify({
            text: responseData[Object.keys(responseData)[0]],
            duration: 3500,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "#ffc107",
            stopOnFocus: true
          }).showToast();
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        vm.formData.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function() {
      this.formData.avatar = null;
    }
  }
};
</script>
