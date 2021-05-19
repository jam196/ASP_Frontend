<template>
  <div>
    <div>
      <div class="flex items-center mt-8">
        <h2 class="intro-y text-lg font-medium mr-auto">Thêm cầu</h2>
      </div>
      <!-- BEGIN: Wizard Layout -->
      <div class="intro-y box py-10 sm:py-20 mt-5">
        <!--        <div class="flex justify-center">-->
        <!--          <button-->
        <!--            class="intro-y w-10 h-10 rounded-full button text-white bg-theme-1 mx-2"-->
        <!--          >-->
        <!--            1-->
        <!--          </button>-->
        <!--          <button-->
        <!--            class="intro-y w-10 h-10 rounded-full button bg-gray-200 dark:bg-dark-1 text-gray-600 mx-2"-->
        <!--          >-->
        <!--            2-->
        <!--          </button>-->
        <!--          <button-->
        <!--            class="intro-y w-10 h-10 rounded-full button bg-gray-200 dark:bg-dark-1 text-gray-600 mx-2"-->
        <!--          >-->
        <!--            3-->
        <!--          </button>-->
        <!--        </div>-->
        <div class="px-5 mt-10">
          <div class="font-medium text-center text-lg">Thêm cầu</div>
          <div class="text-gray-600 text-center mt-2">
            To start off, please enter your username, email address and
            password.
          </div>
        </div>
        <div
          class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        >
          <!--          <div class="font-medium text-base">Profile Settings</div>-->
          <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Tên cầu</div>
              <input
                v-model="formData.name"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Tổng đầu tư</div>
              <input
                v-model="formData.totalInvestment"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Thời gian bắt đầu xây dựng</div>
              <div class="relative mt-2">
                <LitePicker
                  v-model="formData.startTime"
                  :classes="'input pr-12 w-full border col-span-4'"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true
                    }
                  }"
                  class="input w-56 border block mx-auto"
                />
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Chủ đầu tư</div>
              <input
                v-model="formData.investor"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Thời gian hoàn thành xây dựng</div>
              <div class="relative mt-2">
                <LitePicker
                  v-model="formData.endTime"
                  :classes="'input pr-12 w-full border col-span-4'"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true
                    }
                  }"
                  class="input w-56 border block mx-auto"
                />
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Tải trọng thiết kế</div>
              <input
                v-model="formData.designLoad"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Đơn vị thiết kế</div>
              <input
                v-model="formData.designer"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Đơn vị thi công</div>
              <input
                v-model="formData.builder"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Đơn vị tư vấn giám sát</div>
              <input
                v-model="formData.supervisor"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Đơn vị quản lý</div>
              <input
                v-model="formData.manager"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Quốc lộ</div>
              <input
                v-model="formData.nationalHighway"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Trạng thái</div>
              <select
                v-model="formData.status"
                class="input w-full border flex-1"
              >
                <option value="good">Hoạt động tốt</option>
                <option value="bad">Yếu</option>
                <option value="very_bad">Rất yếu</option>
              </select>
            </div>
            <div
              class="intro-y col-span-12 flex items-center justify-center sm:justify-center mt-5"
            >
              <nuxt-link nuxt-link-go-back to="/bridge">
                <button
                  class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                >
                  Trở lại
                </button>
              </nuxt-link>
              <button
                class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                @click="save"
              >
                Lưu dữ liệu
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Wizard Layout -->
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import LitePicker from "../../components/LitePicker";
import TailSelect from "../../components/TailSelect";
import Toastify from "toastify-js";

export default {
  components: { LitePicker, TailSelect },
  data() {
    return {
      date: "",
      formData: {
        name: "Tên cầu",
        startTime: "",
        endTime: "",
        investor: "",
        totalInvestment: 0,
        designLoad: 0,
        designer: "",
        builder: "",
        supervisor: "",
        manager: "",
        nationalHighway: "",
        status: "good"
      },
      classicEditor: ClassicEditor,
      simpleEditorConfig: {
        plugins: [BoldPlugin, UnderlinePlugin, ItalicPlugin, LinkPlugin],
        toolbar: {
          items: ["bold", "italic", "underline", "link"]
        }
      },
      editorData: "<p>Content of the editor.</p>"
    };
  },
  mounted() {
    // cash("#warning-modal").modal("show");
  },
  methods: {
    save() {
      this.$axios.post("/bridge", this.formData).then(response => {
        Toastify({
          text: response.data.message,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#42ba96",
          stopOnFocus: true
        }).showToast();
      });
    }
  }
};
</script>
