<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Form Layout</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Form Layout -->
        <div class="intro-y box p-5">
          <div>
            <label>Tên cầu</label>
            <input
              v-model="formData.name"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Thời gian bắt đầu xây dựng</label>
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
          <div class="mt-3">
            <label>Thời gian hoàn thành xây dựng</label>
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
          <div class="mt-3">
            <label>Chủ đầu tư</label>
            <input
              v-model="formData.investor"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Tổng đầu tư</label>
            <input
              v-model="formData.totalInvestment"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Tải trọng thiết kế</label>
            <input
              v-model="formData.designLoad"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Đơn vị thiết kế</label>
            <input
              v-model="formData.designer"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Đơn vị thi công</label>
            <input
              v-model="formData.builder"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Đơn vị giám sát</label>
            <input
              v-model="formData.supervisor"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Đơn vị quản lý</label>
            <input
              v-model="formData.manager"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Quốc lộ</label>
            <input
              v-model="formData.nationalHighway"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <div class="mt-3">
            <label>Trạng thái</label>
            <input
              v-model="formData.status"
              type="text"
              class="input w-full border mt-2"
            />
          </div>
          <!-- BEGIN: Basic Select -->
          <!--          <div class="mt-3">-->
          <!--            <div>-->
          <!--              <label>Basic</label>-->
          <!--              <div class="mt-2">-->
          <!--                <TailSelect-->
          <!--                  v-model="select"-->
          <!--                  :options="{-->
          <!--                    search: true,-->
          <!--                    classNames: 'w-full'-->
          <!--                  }"-->
          <!--                >-->
          <!--                  <option value="1">Leonardo DiCaprio</option>-->
          <!--                  <option value="2">Johnny Deep</option>-->
          <!--                  <option value="3">Robert Downey, Jr</option>-->
          <!--                  <option value="4">Samuel L. Jackson</option>-->
          <!--                  <option value="5">Morgan Freeman</option>-->
          <!--                </TailSelect>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!-- END: Basic Select -->
          <div class="text-right mt-5">
            <nuxt-link nuxt-link-go-back to="/bridge">
              <button
                type="button"
                class="button w-24 border dark:border-dark-5 text-gray-700 dark:text-gray-300 mr-1"
              >
                Trở lại
              </button>
            </nuxt-link>
            <button
              type="button"
              class="button w-24 bg-theme-1 text-white"
              @click="save"
            >
              Lưu
            </button>
          </div>
        </div>
        <!-- END: Form Layout -->
      </div>
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

export default {
  components: { LitePicker, TailSelect },
  data() {
    return {
      date: "",
      formData: {
        name: "string",
        startTime: "2021-05-12T11:59:05.702Z",
        endTime: "2021-05-18T11:59:05.702Z",
        investor: "string",
        totalInvestment: 0,
        designLoad: 0,
        designer: "string",
        builder: "string",
        supervisor: "string",
        manager: "string",
        nationalHighway: "string",
        status: "string"
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
  methods: {
    save() {
      this.$axios.post("/bridge", this.formData).then(response => {
        console.log(response);
      });
    }
  }
};
</script>
