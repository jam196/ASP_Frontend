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
              <div>Tổng đầu tư (tỷ)</div>
              <input
                v-model="formData.totalInvestment"
                type="number"
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
              <div class="mb-2">Đơn vị thiết kế</div>
              <select
                v-model="formData.designer"
                class="input w-full border flex-1"
              >
                <option
                  v-for="designer in designers"
                  :key="'designer_' + designer"
                  :value="designer"
                  >{{ designer }}</option
                >
              </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị thi công</div>
              <select
                v-model="formData.builder"
                class="input w-full border flex-1"
              >
                <option
                  v-for="builder in builders"
                  :key="'builder_' + builder"
                  :value="builder"
                  >{{ builder }}</option
                >
              </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị tư vấn giám sát</div>
              <select
                v-model="formData.supervisor"
                class="input w-full border flex-1"
              >
                <option
                  v-for="supervisor in supervisors"
                  :key="'supervisor_' + supervisor"
                  :value="supervisor"
                  >{{ supervisor }}</option
                >
              </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị quản lý</div>
              <select
                v-model="formData.manager"
                class="input w-full border flex-1"
              >
                <option
                  v-for="manager in managers"
                  :key="'manager_' + manager"
                  :value="manager"
                  >{{ manager }}</option
                >
              </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Địa điểm</div>
              <GmapAutocomplete
                :value="formData.location"
                class="input w-full border mt-2"
                @place_changed="setPlace"
              >
              </GmapAutocomplete>
              <GmapMap
                ref="mapRef"
                :center="center"
                :zoom="18"
                class="mt-3"
                map-style-id="roadmap"
                :options="mapOptions"
                style="height: 50vmin"
                @click="handleMapClick"
              >
                <GmapMarker
                  :position="marker.position"
                  :clickable="true"
                  :draggable="true"
                  @drag="handleMarkerDrag"
                  @click="panToMarker"
                />
              </GmapMap>
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
                @click="submitForm"
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
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";

export default {
  components: { LitePicker, TailSelect },
  props: ["test"],
  data() {
    return {
      place: false,
      marker: { position: { lat: 10, lng: 10 } },
      center: { lat: 10, lng: 10 },
      markers: [],
      mapOptions: {
        disableDefaultUI: false
      },
      date: "",
      designers: [
        "Chánh Nghĩa Group - Công Ty Cổ Phần Xây Dựng Chánh Nghĩa",
        "Thiết Kế Xây Dựng Nha Trang - Công Ty Cổ Phần Kiến Trúc Xây Dựng ACP",
        "Xây Dựng Seacons - Công Ty TNHH Đầu Tư Xây Dựng Seacons",
        "Xây Dựng DNC - Công Ty TNHH Thiết Kế Và Xây Dựng DNC",
        "Kiến Trúc & Xây Dựng AZ-GROUP",
        "Thiết Kế Xây Dựng Nhà Đỏ - Công Ty CP Thiết Kế Xây Dựng Thương Mại Trang Trí Nội Thất Nhà Đỏ"
      ],
      builders: [
        "Kiến Trúc Và Xây Dựng VIETSKY - Công Ty CP Kiến Trúc Và Xây Dựng VIETSKY",
        "Tư Vấn Thiết Kế & Xây Dựng Kiến Việt - Công Ty TNHH Tư Vấn Thiết Kế & Xây Dựng Kiến Việt",
        "Xây Dựng BIC - Công Ty CP Thiết Kế Và Xây Dựng BIC",
        "Thiết Kế Xây Dựng Minh Thịnh Phát - Công Ty TNHH Tư Vấn Thiết Kế Xây Dựng Minh Thịnh Phát",
        "Nhà Thầu Xây Dựng Bình An Lê - Công Ty TNHH Tư Vấn Thiết Kế Xây Dựng Bình An Lê",
        "MHT Construction - Công Ty TNHH Tư Vấn Xây Dựng Và Thương Mại Minh Hân Thịnh",
        "Thiết Kế Xây Dựng NAGOPA - Công Ty TNHH Tư Vấn Đầu Tư Xây Dựng NAGOPA",
        "Hoàng Thiên Design - Công Ty TNHH MTV Hoàng Thiên Design",
        "Xây Dựng Tân Cường Thịnh NT - Công Ty TNHH Tân Cường Thịnh NT"
      ],
      supervisors: [
        "Kiến Trúc Và Xây Dựng VIETSKY - Công Ty CP Kiến Trúc Và Xây Dựng VIETSKY",
        "Tư Vấn Thiết Kế & Xây Dựng Kiến Việt - Công Ty TNHH Tư Vấn Thiết Kế & Xây Dựng Kiến Việt",
        "Xây Dựng BIC - Công Ty CP Thiết Kế Và Xây Dựng BIC",
        "Thiết Kế Xây Dựng Minh Thịnh Phát - Công Ty TNHH Tư Vấn Thiết Kế Xây Dựng Minh Thịnh Phát",
        "Nhà Thầu Xây Dựng Bình An Lê - Công Ty TNHH Tư Vấn Thiết Kế Xây Dựng Bình An Lê",
        "MHT Construction - Công Ty TNHH Tư Vấn Xây Dựng Và Thương Mại Minh Hân Thịnh",
        "Thiết Kế Xây Dựng NAGOPA - Công Ty TNHH Tư Vấn Đầu Tư Xây Dựng NAGOPA",
        "Hoàng Thiên Design - Công Ty TNHH MTV Hoàng Thiên Design",
        "Xây Dựng Tân Cường Thịnh NT - Công Ty TNHH Tân Cường Thịnh NT"
      ],
      managers: [
        "Kiến Trúc Và Xây Dựng VIETSKY - Công Ty CP Kiến Trúc Và Xây Dựng VIETSKY",
        "Tư Vấn Thiết Kế & Xây Dựng Kiến Việt - Công Ty TNHH Tư Vấn Thiết Kế & Xây Dựng Kiến Việt",
        "Xây Dựng BIC - Công Ty CP Thiết Kế Và Xây Dựng BIC",
        "Thiết Kế Xây Dựng Minh Thịnh Phát - Công Ty TNHH Tư Vấn Thiết Kế Xây Dựng Minh Thịnh Phát",
        "Nhà Thầu Xây Dựng Bình An Lê - Công Ty TNHH Tư Vấn Thiết Kế Xây Dựng Bình An Lê",
        "MHT Construction - Công Ty TNHH Tư Vấn Xây Dựng Và Thương Mại Minh Hân Thịnh",
        "Thiết Kế Xây Dựng NAGOPA - Công Ty TNHH Tư Vấn Đầu Tư Xây Dựng NAGOPA",
        "Hoàng Thiên Design - Công Ty TNHH MTV Hoàng Thiên Design",
        "Xây Dựng Tân Cường Thịnh NT - Công Ty TNHH Tân Cường Thịnh NT"
      ],
      formData: {
        id: false,
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
        location: "",
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
    this.formData.designer = this.designers[0];
    this.formData.builder = this.builders[0];
    this.formData.supervisor = this.supervisors[0];
    this.formData.manager = this.managers[0];
    if (this.$route.params.formData) {
      this.formData = this.$route.params.formData;
    }
  },
  methods: {
    submitForm() {
      if (!this.formData.id) {
        let fakeFormData = { ...this.formData };
        delete fakeFormData.id;
        this.$axios
          .post("/bridge", fakeFormData)
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
      } else {
        this.$axios
          .put("/bridge/" + this.formData.id, this.formData)
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
      }
    },
    geoLocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.marker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.panToMarker();
      });
    },
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },
    panToMarker() {
      this.$refs.mapRef.panTo(this.marker.position);
      // this.$refs.mapRef.setZoom(18);
    },
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: this.marker.position }, response => {
        this.formData.location = response[0].formatted_address;
      });
    },
    setPlace(place) {
      this.formData.location = place.formatted_address;
      this.marker.position = place.geometry.location;
      this.panToMarker();
    }
  }
};
</script>
<style scoped>
.introInput {
  width: 100%;
  margin-top: 0.5rem;
  border-width: 1px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
