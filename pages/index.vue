<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
      <!-- BEGIN: General Report -->
      <div class="col-span-12 mt-8">
        <div class="intro-y flex items-center h-10">
          <h2 class="text-lg font-medium truncate mr-5">
            Xin chào {{ this.$auth.user.username }}
          </h2>
          <button
            type="button"
            class="ml-auto flex text-theme-1 dark:text-theme-10"
            @click="reloadData"
          >
            <RefreshCcwIcon class="w-4 h-4 mr-3" />
            Reload Dữ Liệu
          </button>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <MoveIcon class="report-box__icon text-theme-10" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="33% Higher than last month"
                    >
                      33% <ChevronUpIcon class="inline-block w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">
                  {{ siteData.bridgeCount }}
                </div>
                <div class="text-base text-gray-600 mt-1">
                  Cầu trong hệ thống
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <SunIcon class="report-box__icon text-theme-9" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-6 cursor-pointer"
                      content="2% Lower than last month"
                    >
                      12%
                      <ChevronDownIcon class="inline-block w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">
                  {{ siteData.bridgeGoodCount }}
                </div>
                <div class="text-base text-gray-600 mt-1">
                  Cầu hoạt động tốt
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <GitMergeIcon class="report-box__icon text-theme-12" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="12% Higher than last month"
                    >
                      7%
                      <ChevronUpIcon class="inline-block w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">
                  {{ siteData.bridgeBadCount }}
                </div>
                <div class="text-base text-gray-600 mt-1">Cầu cần nâng cấp</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <UserIcon class="report-box__icon dark:hover:text-theme-11" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="22% Higher than last month"
                    >
                      60%
                      <ChevronUpIcon class="inline-block w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">
                  {{ siteData.userCount }}
                </div>
                <div class="text-base text-gray-600 mt-1">
                  Người dùng trong hệ thống
                </div>
              </div>
            </div>
          </div>
          <!-- BEGIN: Weekly Top Seller -->
          <div class="col-span-12 sm:col-span-6 lg:col-span-4 mt-8">
            <div class="intro-y flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Biểu đồ chung
              </h2>
              <!--              <a-->
              <!--                href=""-->
              <!--                class="ml-auto text-theme-1 dark:text-theme-10 truncate"-->
              <!--                >See all</a-->
              <!--              >-->
            </div>
            <div class="intro-y box p-5 mt-5">
              <ReportPieChart
                :percent-data="percentData"
                :height="250"
                class="mt-3"
              />
              <div class="mt-8">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
                  <span class="truncate">Số cầu hoạt động tốt</span>
                  <div
                    class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                  ></div>
                  <span class="font-medium xl:ml-auto"
                    >{{ percentData.good }}%</span
                  >
                </div>
                <div class="flex items-center mt-4">
                  <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                  <span class="truncate">Số cầu cần theo dõi</span>
                  <div
                    class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                  ></div>
                  <span class="font-medium xl:ml-auto"
                    >{{ percentData.warning }}%</span
                  >
                </div>
                <div class="flex items-center mt-4">
                  <div class="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
                  <span class="truncate">Số cầu cần nâng cấp</span>
                  <div
                    class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                  ></div>
                  <span class="font-medium xl:ml-auto"
                    >{{ percentData.bad }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- END: Weekly Top Seller -->
          <!-- BEGIN: Weekly Top Products -->
          <div class="col-span-12 sm:col-span-6 lg:col-span-8 mt-8">
            <div class="intro-y block sm:flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Cầu đang cần nâng cấp
              </h2>
            </div>
            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
              <table class="table table-report sm:mt-2">
                <thead>
                  <tr>
                    <th class="text-center whitespace-no-wrap">TÊN CẦU</th>
                    <th class="text-center whitespace-no-wrap">
                      TỔNG VỐN ĐẦU TƯ
                    </th>
                    <th class="text-center whitespace-no-wrap">
                      NGÀY KHỞI CÔNG
                    </th>
                    <th class="text-center whitespace-no-wrap">
                      NGÀY HOÀN THÀNH
                    </th>
                    <th class="text-center whitespace-no-wrap">TRẠNG THÁI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="badBridge in siteData.badBridges"
                    :key="'badBridge_' + badBridge.id"
                    class="intro-x"
                  >
                    <td class="text-center font-medium whitespace-no-wrap">
                      {{ badBridge.name }}
                    </td>
                    <td class="text-center font-medium whitespace-no-wrap">
                      {{ badBridge.totalInvestment }} tỷ
                    </td>
                    <td class="text-center">{{ badBridge.startTime }}</td>
                    <td class="text-center">{{ badBridge.endTime }}</td>
                    <td class="w-40">
                      <div
                        class="flex items-center justify-center text-theme-6"
                      >
                        <PenToolIcon class="w-4 h-4 mr-2" />
                        Cần nâng cấp
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- END: Weekly Top Products -->
        </div>
      </div>
      <!-- END: General Report -->
    </div>
    <div
      class="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10"
    >
      <div class="xxl:pl-6 grid grid-cols-12 gap-6">
        <!-- BEGIN: Recent Activities -->
        <div
          class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3"
        >
          <div class="intro-x flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              Hoạt động gần đây trong hệ thống
            </h2>
            <nuxt-link
              to="history"
              class="ml-auto text-theme-1 dark:text-theme-10 truncate"
              >Xem tất cả</nuxt-link
            >
          </div>
          <div
            v-for="history in siteData.recentlyHistories"
            :key="'history_' + history.id"
            class="report-timeline mt-5 relative"
          >
            <div class="intro-x relative flex items-center mb-3">
              <div class="report-timeline__image">
                <div
                  class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                >
                  <img
                    alt="Admin Dashboard Quản Lý Cầu Đường - TNV"
                    :src="randomAvatar()"
                  />
                </div>
              </div>
              <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                <div class="flex items-center">
                  <div class="font-medium">
                    {{ history.ipAddress }}
                  </div>
                  <div class="text-xs text-gray-500 ml-auto">
                    {{
                      $moment(history.createdAt)
                        .locale("vi")
                        .format("LTS l")
                    }}
                  </div>
                </div>
                <div class="text-gray-600 mt-1">{{ history.content }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Recent Activities -->
        <!-- BEGIN: Important Notes -->
        <div
          class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3"
        >
          <div class="intro-x flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-auto">
              Ghi chú quan trọng
            </h2>
            <button
              class="slick-navigator button px-2 border border-gray-400 dark:border-dark-5 flex items-center text-gray-700 dark:text-gray-600 mr-2"
              @click="prevImportantNotes"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              class="slick-navigator button px-2 border border-gray-400 dark:border-dark-5 flex items-center text-gray-700 dark:text-gray-600"
              @click="nextImportantNotes"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </button>
          </div>
          <div class="mt-5 intro-x">
            <div class="box zoom-in">
              <VueSlickCarousel
                ref="important-notes"
                :arrows="false"
                :dots="false"
              >
                <div class="p-5">
                  <div class="text-base font-medium truncate">
                    Lorem Ipsum is simply dummy text
                  </div>
                  <div class="text-gray-500 mt-1">20 Hours ago</div>
                  <div class="text-gray-600 text-justify mt-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div class="font-medium flex mt-5">
                    <button
                      type="button"
                      class="button button--sm bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300"
                    >
                      View Notes
                    </button>
                    <button
                      type="button"
                      class="button button--sm border border-gray-300 dark:border-dark-5 text-gray-600 ml-auto"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
                <div class="p-5">
                  <div class="font-medium truncate">
                    Lorem Ipsum is simply dummy text
                  </div>
                  <div class="text-gray-500 mt-1">20 Hours ago</div>
                  <div class="text-gray-600 text-justify mt-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div class="font-medium flex mt-5">
                    <button
                      type="button"
                      class="button button--sm bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300"
                    >
                      View Notes
                    </button>
                    <button
                      type="button"
                      class="button button--sm border border-gray-300 dark:border-dark-5 text-gray-600 ml-auto"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
                <div class="p-5">
                  <div class="font-medium truncate">
                    Lorem Ipsum is simply dummy text
                  </div>
                  <div class="text-gray-500 mt-1">20 Hours ago</div>
                  <div class="text-gray-600 text-justify mt-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div class="font-medium flex mt-5">
                    <button
                      type="button"
                      class="button button--sm bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300"
                    >
                      View Notes
                    </button>
                    <button
                      type="button"
                      class="button button--sm border border-gray-300 dark:border-dark-5 text-gray-600 ml-auto"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
        <!-- END: Important Notes -->
        <!-- BEGIN: Schedules -->
        <div
          class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xl:col-start-1 xl:row-start-2 xxl:col-start-auto xxl:row-start-auto mt-3"
        >
          <div class="intro-x flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Ghi chú công việc</h2>
            <a
              href=""
              class="ml-auto text-theme-1 dark:text-theme-10 truncate flex items-center"
            >
              <PlusIcon class="w-4 h-4 mr-1" />
              Thêm công việc
            </a>
          </div>
          <div class="mt-5">
            <div class="intro-x box">
              <div class="p-5">
                <div class="flex">
                  <ChevronLeftIcon class="w-5 h-5 text-gray-600" />
                  <div class="font-medium mx-auto">April</div>
                  <ChevronRightIcon class="w-5 h-5 text-gray-600" />
                </div>
                <div class="grid grid-cols-7 gap-4 mt-5 text-center">
                  <div class="font-medium">Su</div>
                  <div class="font-medium">Mo</div>
                  <div class="font-medium">Tu</div>
                  <div class="font-medium">We</div>
                  <div class="font-medium">Th</div>
                  <div class="font-medium">Fr</div>
                  <div class="font-medium">Sa</div>
                  <div class="py-1 rounded relative text-gray-600">29</div>
                  <div class="py-1 rounded relative text-gray-600">30</div>
                  <div class="py-1 rounded relative text-gray-600">31</div>
                  <div class="py-1 rounded relative">1</div>
                  <div class="py-1 rounded relative">2</div>
                  <div class="py-1 rounded relative">3</div>
                  <div class="py-1 rounded relative">4</div>
                  <div class="py-1 rounded relative">5</div>
                  <div
                    class="py-1 bg-theme-18 dark:bg-theme-9 rounded relative"
                  >
                    6
                  </div>
                  <div class="py-1 rounded relative">7</div>
                  <div
                    class="py-1 bg-theme-1 dark:bg-theme-1 text-white rounded relative"
                  >
                    8
                  </div>
                  <div class="py-1 rounded relative">9</div>
                  <div class="py-1 rounded relative">10</div>
                  <div class="py-1 rounded relative">11</div>
                  <div class="py-1 rounded relative">12</div>
                  <div class="py-1 rounded relative">13</div>
                  <div class="py-1 rounded relative">14</div>
                  <div class="py-1 rounded relative">15</div>
                  <div class="py-1 rounded relative">16</div>
                  <div class="py-1 rounded relative">17</div>
                  <div class="py-1 rounded relative">18</div>
                  <div class="py-1 rounded relative">19</div>
                  <div class="py-1 rounded relative">20</div>
                  <div class="py-1 rounded relative">21</div>
                  <div class="py-1 rounded relative">22</div>
                  <div
                    class="py-1 bg-theme-17 dark:bg-theme-11 rounded relative"
                  >
                    23
                  </div>
                  <div class="py-1 rounded relative">24</div>
                  <div class="py-1 rounded relative">25</div>
                  <div class="py-1 rounded relative">26</div>
                  <div
                    class="py-1 bg-theme-14 dark:bg-theme-12 rounded relative"
                  >
                    27
                  </div>
                  <div class="py-1 rounded relative">28</div>
                  <div class="py-1 rounded relative">29</div>
                  <div class="py-1 rounded relative">30</div>
                  <div class="py-1 rounded relative text-gray-600">1</div>
                  <div class="py-1 rounded relative text-gray-600">2</div>
                  <div class="py-1 rounded relative text-gray-600">3</div>
                  <div class="py-1 rounded relative text-gray-600">4</div>
                  <div class="py-1 rounded relative text-gray-600">5</div>
                  <div class="py-1 rounded relative text-gray-600">6</div>
                  <div class="py-1 rounded relative text-gray-600">7</div>
                  <div class="py-1 rounded relative text-gray-600">8</div>
                  <div class="py-1 rounded relative text-gray-600">9</div>
                </div>
              </div>
              <div class="border-t border-gray-200 p-5">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                  <span class="truncate">UI/UX Workshop</span>
                  <div
                    class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                  ></div>
                  <span class="font-medium xl:ml-auto">23th</span>
                </div>
                <div class="flex items-center mt-4">
                  <div
                    class="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3"
                  ></div>
                  <span class="truncate">VueJs Frontend Development</span>
                  <div
                    class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                  ></div>
                  <span class="font-medium xl:ml-auto">10th</span>
                </div>
                <div class="flex items-center mt-4">
                  <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                  <span class="truncate">Laravel Rest API</span>
                  <div
                    class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                  ></div>
                  <span class="font-medium xl:ml-auto">31th</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Schedules -->
      </div>
    </div>
  </div>
</template>

<script>
// import ReportLineChart from "@/components/ReportLineChart";
// import ReportDonutChart from "@/components/ReportDonutChart";
import ReportPieChart from "~/components/ReportPieChart";
// import ReportMap from "@/components/ReportMap";
// import ReportDonutChart1 from "@/components/ReportDonutChart1";
// import SimpleLineChart1 from "@/components/SimpleLineChart1";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    // ReportLineChart,
    // ReportDonutChart,
    ReportPieChart,
    // ReportMap,
    // ReportDonutChart1,
    // SimpleLineChart1,
    VueSlickCarousel
  },
  async asyncData({ $axios }) {
    let siteData = await $axios.get("/statistic");
    siteData = siteData.data.data;
    let percentData = {
      good: (siteData.bridgeGoodCount / siteData.bridgeCount) * 100,
      warning: (siteData.bridgeWarningCount / siteData.bridgeCount) * 100,
      bad: (siteData.bridgeBadCount / siteData.bridgeCount) * 100
    };
    return { siteData, percentData };
  },
  data() {
    return {
      siteData: {},
      percentData: {
        good: 63,
        warning: 25,
        bad: 12
      },
      salesReportFilter: ""
    };
  },
  methods: {
    reloadData() {
      let siteData = this.$axios.get("/statistic").then(response => {
        siteData = response.data.data;
        this.siteData = siteData;
        this.percentData = {
          good: (siteData.bridgeGoodCount / siteData.bridgeCount) * 100,
          warning: (siteData.bridgeWarningCount / siteData.bridgeCount) * 100,
          bad: (siteData.bridgeBadCount / siteData.bridgeCount) * 100
        };
      });
    },
    randomAvatar() {
      let list = [
        "https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_05_27/98063209_246464859972800_5843071885427867648_n.jpg",
        "http://img.webtintuc.com/2019/11/hoai-linh-avatar.jpg"
      ];
      return list[Math.floor(Math.random() * list.length)];
    },
    prevImportantNotes() {
      this.$refs["important-notes"].prev();
    },
    nextImportantNotes() {
      this.$refs["important-notes"].next();
    }
  }
};
</script>
