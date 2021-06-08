<template>
  <div>
    <div>
      <div class="flex items-center mt-8">
        <h2 class="intro-y text-lg font-medium mr-auto">
          {{ !formData.id ? "Thêm cầu" : "Sửa thông tin " + formData.name }}
        </h2>
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
          <div class="font-medium text-center text-lg">
            {{ !formData.id ? "Thêm cầu" : "Sửa thông tin " + formData.name }}
          </div>
          <!--          <div class="text-gray-600 text-center mt-2">-->
          <!--            To start off, please enter your username, email address and-->
          <!--            password.-->
          <!--          </div>-->
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
                    format: 'YYYY-MM-DD',
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
              <div class="mb-2">Chủ đầu tư</div>
              <TailSelect
                v-model="formData.investor"
                class="input w-full border flex-1"
                :options="{
                  search: true,
                  classNames: 'w-full'
                }"
              >
                <option
                  v-for="investor in investors"
                  :key="'investor_' + investor"
                  :value="investor"
                  >{{ investor }}</option
                >
              </TailSelect>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div>Thời gian hoàn thành xây dựng</div>
              <div class="relative mt-2">
                <LitePicker
                  v-model="formData.endTime"
                  :classes="'input pr-12 w-full border col-span-4'"
                  :options="{
                    format: 'YYYY-MM-DD',
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
              <div>Tải trọng thiết kế (tấn)</div>
              <input
                v-model="formData.designLoad"
                type="text"
                class="input w-full border mt-2"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị thiết kế</div>
              <TailSelect
                v-model="formData.designer"
                :options="{
                  search: true,
                  classNames: 'w-full'
                }"
                class="input w-full border flex-1"
              >
                <option
                  v-for="designer in designers"
                  :key="'designer_' + designer"
                  :value="designer"
                  >{{ designer }}</option
                >
              </TailSelect>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị thi công</div>
              <TailSelect
                v-model="formData.builder"
                :options="{
                  search: true,
                  classNames: 'w-full'
                }"
              >
                <option
                  v-for="builder in builders"
                  :key="'builder_' + builder"
                  :value="builder"
                  >{{ builder }}</option
                >
              </TailSelect>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị tư vấn giám sát</div>
              <TailSelect
                v-model="formData.supervisor"
                :options="{
                  search: true,
                  classNames: 'w-full'
                }"
                class="input w-full border flex-1"
              >
                <option
                  v-for="supervisor in supervisors"
                  :key="'supervisor_' + supervisor"
                  :value="supervisor"
                  >{{ supervisor }}</option
                >
              </TailSelect>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">Đơn vị quản lý</div>
              <TailSelect
                v-model="formData.manager"
                :options="{
                  search: true,
                  classNames: 'w-full'
                }"
                class="input w-full border flex-1"
              >
                <option
                  v-for="manager in managers"
                  :key="'manager_' + manager"
                  :value="manager"
                  >{{ manager }}</option
                >
              </TailSelect>
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
                  :position="position"
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
                <option value="warning">Cần theo dõi</option>
                <option value="bad">Hỏng hóc, cần nâng cấp</option>
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
// eslint-disable-next-line no-unused-vars
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { LitePicker, TailSelect },
  data() {
    return {
      place: false,
      position: { lat: 10, lng: 10 },
      center: { lat: 10, lng: 10 },
      markers: [],
      mapOptions: {
        disableDefaultUI: false
      },
      investors: [
        "Tổng công ty Hoàng Anh - TNHH MTV",
        "Công ty Tập đoàn Thăng Long",
        "Sở Giao thông vận tải Hà Nội",
        "Tập đoàn Xây Dựng cầu đường",
        "Tổng CTCP Xuất nhập khẩu và Xây dựng Việt Nam",
        "Công ty CP Ecoba",
        "Công ty CP xây dựng Coteccons",
        "Tập đoàn CBRE",
        "Công ty tài chính cổ phần Điện lực",
        "Margaret Yang",
        "Tổng Công ty Đầu tư phát triển cầu đường UDIC",
        "Tập đoàn xây dựng Delta",
        "Tập Đoàn TIMA",
        "Lotte Finance",
        "Nhà thầu Fecon",
        "Công ty TNHH BHNT Prudential Việt Nam",
        "Benjamin Graham",
        "Công ty CP Đầu tư Xây dựng Newtecons",
        "Công ty CP Tập đoàn đầu tư cầu đường",
        "Công ty CP Xây dựng Phục Hưng Holdings",
        "Trần Đô Thành",
        "Cục Quản lý đường bộ Thăng Long",
        "Nhà thầu Becamex",
        "Công ty Tập đoàn Xây Dựng Hòa Bình",
        "Nhà Đỏ Group",
        "Tổng công ty thăm dò & khai thác cầu đường",
        "Công ty CP Tập đoàn Hòa Phát",
        "Tập đoàn Vingroup"
      ],
      designers: [
        "Xây Dựng Công Trình Hoàng Anh",
        "Xây Dựng - Công Ty Xây Dựng",
        "Bộ GTVT",
        "Xây Dựng tổng hợp Bản Việt",
        "Xây Lắp công trình COMA",
        "Xây Dựng Hiệp Phúc",
        "Xây Dựng Thắng Hòa Phát",
        "Cát Xây Dựng",
        "Xây Dựng CECICO579",
        "Kiến Trúc và xây dựng Hòa Bình",
        "Conteccons",
        "Xây dựng tổng hợp Ricons",
        "Vật liệu - Xây dựng Delta",
        "Unicons Designs",
        "Cường Thuận IDICO",
        "Fecon Designs",
        "Thi công xây lắp công trình Dân dụng",
        "Xây Dựng Số 18.3",
        "Quang Minh",
        "GoGo",
        "Kiến Trúc Đăng Phát",
        "CSAMCO",
        "Tcty Xây Dựng Cầu Thăng Long",
        "Bê Tông Becamex",
        "Xây Dựng Vương Trần",
        "Thiết Kế Xây Dựng Nhà Đỏ",
        "Xây Dựng Dân Dụng Nguyễn Nguyên Phát",
        "Hoàng Long An",
        "Thương Mại Hoàn Cầu"
      ],
      builders: [
        "Công Ty TNHH Kỹ Thuật Xây Dựng Công Trình Hoàng Anh",
        "Tổng Công Ty Thăng Long CTCP",
        "Tổng Công Ty Xây Dựng Công Trình Giao Thông 1",
        "Công Ty Cổ Phần Đầu Tư Và Phát Triển Bản Việt",
        "Công Ty Cổ Phần Xây Lắp Và Thương Mại COMA 25",
        "Công Ty TNHH Xây Dựng Và Thương Mại Dịch Vụ Hiệp Phúc 4",
        "Công Ty TNHH Thắng Hòa Phát",
        "Sand Resource Investment Co..,Ltd",
        "Công Ty Cổ Phần Đầu Tư & Xây Dựng 579",
        "Công ty CP Tập đoàn xây dựng Hoà Bình",
        "Công ty CP xây dựng Coteccons",
        "Công ty CP Đầu tư Xây dựng Ricons",
        "Công ty TNHH Tập đoàn xây dựng Delta",
        "Công ty TNHH Đầu tư Xây dựng Unicons",
        "Công Ty Cổ Phần Đầu Tư Phát Triển Cường Thuận IDICO",
        "Công ty CP Fecon",
        "Công ty TNHH Xây dựng tổng hợp Thắng Đạt",
        "Công Ty Cổ Phần Đầu Tư Và Xây Dựng Số 18.3",
        "Công Ty TNHH Quang Minh",
        "Công Ty Cổ Phần Tập Đoàn Liên Doanh Hồng Thái",
        "Công Ty TNHH Đầu Tư Xây Dựng",
        "Xí Nghiệp Đầu Tư Xây Dựng Đô Thành",
        "Công Ty Cổ Phần Cầu 5 Thăng Long",
        "Công Ty Cổ Phần Đầu Tư Và Xây Dựng Bình Dương ACC",
        "Công Ty TNHH Xây Dựng Thương Mại Và Dịch Vụ Vương Trần",
        "Công Ty CP Thiết Kế Xây Dựng Thương Mại Trang Trí Nội Thất Nhà Đỏ",
        "Công Ty TNHH Nguyễn Nguyên Phát",
        "Tổng Công Ty Tư Vấn Thiết Kế Giao Thông Vận Tải",
        "Công Ty TNHH Xây Dựng & Môi Trường Hoàng Long An",
        "Công Ty TNHH Xây Dựng Dịch Vụ"
      ],
      supervisors: [
        "Ứng dụng Bản đồ Việt",
        "Đơn Vị Tư Vấn Giám Sát TEXO",
        "Cục quản lý đường bộ khu vực",
        "Tư vấn đầu tư và thiết kế xây dựng CDC",
        "Tư vấn kiểm định xây dựng quốc tế ICCI",
        "Đơn vị Savills Việt Nam",
        "Giám sát Hòa Phát",
        "Monitoring department SRI",
        "Tư vấn quản lý xây dựng Delta",
        "Uỷ ban nhân dân tỉnh Hòa Bình",
        "Conteccons",
        "Monitoring department Ricons",
        "The Ascott Limited – Capitaland",
        "HANCIC USC",
        "Dịch vụ giám sát cầu đường Newtecons",
        "Đơn vị Fecon",
        "Công ty đầu tư phát triển nhà và đô thị HUD",
        "Cục Quản lý đường bộ",
        "Ứng dụng Tư vấn & Giám sát Bảo Sơn",
        "GoGo",
        "Đơn vị Vinhomes",
        "Công ty TNHH Artelia Việt Nam",
        "Công ty tư vấn giám sát xây dựng Nhà Phố Group",
        "Monitoring Home Red",
        "Giám sát xây dựng HUD",
        "Công ty cổ phần tư vấn xây dựng Nagecco"
      ],
      managers: [
        "Đầu tư TSG Việt Nam",
        "Quản lý Thăng Long",
        "Cục quản lý đường bộ khu vực",
        "VietSun",
        "Tư vấn Quản lý Xây dựng COMA 25",
        "Quản lý Xây Dựng và Thương Mại Hiệp Phúc",
        "Công ty phát triển dự án Song Nam",
        "Công ty quản lý xây dựng cao cấp CBRE",
        "Quản lý dự án & đầu tư CECICO",
        "Ủy ban nhân dân tỉnh Hòa Bình",
        "Công ty dịch vụ tiện ích quốc tế OCS",
        "Ricons Group",
        "Quản Lý và Khai thác Pan Services",
        "Tập đoàn xây dựng Newtecons",
        "Đơn vị Fencon",
        "Quản Lý Xây Dựng INPLY",
        "Cục Quản lý đường bộ",
        "Quản lý Bảo Sơn",
        "GoGo Group",
        "Đơn vị Vinhomes",
        "Ủy ban nhân dân cấp tỉnh Bình Dương ",
        "DV An ninh Phương Đông STC",
        "Nhà đỏ Group",
        "Quản lý và kiểm tra HUD",
        "Quản lý XD & MT HLA",
        "Vingroup"
      ],
      formData: {
        id: false,
        name: "",
        startTime: this.$moment().format("YYYY-MM-DD HH:mm:ss"),
        endTime: this.$moment().format("YYYY-MM-DD HH:mm:ss"),
        investor: "",
        totalInvestment: 1,
        designLoad: 1,
        designer: "",
        builder: "",
        supervisor: "",
        manager: "",
        location: "",
        latitude: 10,
        longitude: 10,
        status: "good"
      },
      classicEditor: ClassicEditor,
      simpleEditorConfig: {
        plugins: [BoldPlugin, UnderlinePlugin, ItalicPlugin, LinkPlugin],
        toolbar: {
          items: ["bold", "italic", "underline", "link"]
        }
      }
    };
  },
  watch: {
    position: function(val) {
      this.formData.latitude = val.lat;
      this.formData.longitude = val.lng;
    }
  },
  mounted() {
    this.formData.investor = this.investors[0];
    this.formData.designer = this.designers[0];
    this.formData.builder = this.builders[0];
    this.formData.supervisor = this.supervisors[0];
    this.formData.manager = this.managers[0];
    if (this.$route.params.formData) {
      this.formData = this.$route.params.formData;
      this.position = {
        lat: this.$route.params.formData.latitude,
        lng: this.$route.params.formData.longitude
      };
      this.center = {
        lat: this.$route.params.formData.latitude,
        lng: this.$route.params.formData.longitude
      };
      // this.panToMarker();
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
        this.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.panToMarker();
      });
    },
    handleMarkerDrag(e) {
      this.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },
    panToMarker() {
      this.$refs.mapRef.panTo(this.position);
      // this.$refs.mapRef.setZoom(18);
    },
    handleMapClick(e) {
      this.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      // eslint-disable-next-line no-undef
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: this.position }, response => {
        this.formData.location = response[0].formatted_address;
        this.position.lat = response[0].geometry.location.lat();
        this.position.lng = response[0].geometry.location.lng();
      });
    },
    setPlace(place) {
      this.formData.location = place.formatted_address;
      this.position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
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
