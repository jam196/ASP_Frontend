<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
              class="w-6"
              :src="require(`@/assets/images/logo.svg`)"
            />
            <span class="text-white text-lg ml-3">
              Quản Lý <span class="font-medium">Cầu Đường</span>
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              Đăng nhập vào hệ thống.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              Nếu bạn chưa có tài khoản, hệ thống sẽ tự động tạo tài khoản mới
              cho bạn
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Đăng nhập
            </h2>
            <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div class="intro-x mt-8">
              <input
                v-model="form.username"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block"
                placeholder="Tên đăng nhập"
              />
              <input
                v-model="form.password"
                type="password"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                placeholder="Mật khẩu"
                @keyup.enter="login"
              />
            </div>
            <div
              class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4"
            >
              <!--              <div class="flex items-center mr-auto">-->
              <!--                <input-->
              <!--                  id="remember-me"-->
              <!--                  type="checkbox"-->
              <!--                  class="input border mr-2"-->
              <!--                />-->
              <!--                <label class="cursor-pointer select-none" for="remember-me"-->
              <!--                  >Lưu đăng nhập</label-->
              <!--                >-->
              <!--              </div>-->
              <!--              <a href="">Forgot Password?</a>-->
            </div>
            <div class="intro-x mt-3 xl:mt-3 text-center xl:text-left">
              <button
                class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top"
                @click="login"
              >
                Đăng nhập
              </button>
              <!--              <button-->
              <!--                class="button button&#45;&#45;lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"-->
              <!--              >-->
              <!--                Sign up-->
              <!--              </button>-->
            </div>
            <!--            <div-->
            <!--              class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left"-->
            <!--            >-->
            <!--              By signin up, you agree to our <br />-->
            <!--              <a class="text-theme-1 dark:text-theme-10" href=""-->
            <!--                >Terms and Conditions</a-->
            <!--              >-->
            <!--              &-->
            <!--              <a class="text-theme-1 dark:text-theme-10" href=""-->
            <!--                >Privacy Policy</a-->
            <!--              >-->
            <!--            </div>-->
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
    <div id="warning-modal" class="modal">
      <div class="modal__content">
        <div class="p-5 text-center">
          <xCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
          <div class="text-xl mt-5">{{ errorMessage }}</div>
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
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitcher from "../components/DarkModeSwitcher";

export default {
  layout: "empty",
  components: {
    DarkModeSwitcher
  },
  data() {
    return {
      errorMessage: null,
      form: {
        username: null,
        password: null
      }
    };
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  },
  methods: {
    login() {
      this.$auth
        .loginWith("laravelJWT", {
          data: {
            username: this.form.username,
            password: this.form.password
          }
        })
        .catch(e => {
          console.log(e);
          this.errorMessage =
            e.response && e.response.data.message
              ? e.response.data.message
              : "Lỗi không xác định. Mã lỗi: " + (e.status || 500);
          cash("#warning-modal").modal("show");
        });
    }
  }
};
</script>
