<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Danh Sách Cầu Đã Thêm</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <nuxt-link to="/bridge/add">
          <button class="button text-white bg-theme-1 shadow-md mr-2">
            Thêm cầu
          </button>
        </nuxt-link>
        <div class="dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <i class="w-4 h-4" data-feather="plus"></i>
            </span>
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="file-plus" class="w-4 h-4 mr-2"></i> New
                Category
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="users" class="w-4 h-4 mr-2"></i> New Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <form class="xl:flex sm:mr-auto" @submit.prevent="onFilter">
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <input
              v-model="filter.value"
              type="text"
              class="input w-full sm:w-40 xxl:w-full mt-2 sm:mt-0 border"
              placeholder="Nhập từ muốn tìm..."
            />
          </div>
          <div class="mt-2 xl:mt-0">
            <button
              type="button"
              class="button w-full sm:w-32 bg-theme-1 text-white"
              @click="onFilter"
            >
              Tìm kiếm
            </button>
            <button
              type="button"
              class="button w-full sm:w-32 mt-2 sm:mt-0 sm:ml-1 bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300"
              @click="onResetFilter"
            >
              Reload dữ liệu
            </button>
          </div>
        </form>
        <div class="flex mt-5 sm:mt-0">
          <button
            class="button w-1/2 sm:w-auto flex items-center border text-gray-700 mr-2 dark:bg-dark-5 dark:text-gray-300"
            @click="onPrint"
          >
            <i data-feather="printer" class="w-4 h-4 mr-2"></i> In
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
            >
              <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Xuất dữ liệu
              <i
                data-feather="chevron-down"
                class="w-4 h-4 ml-auto sm:ml-2"
              ></i>
            </button>
            <div class="dropdown-box w-40">
              <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                <!--                <a-->
                <!--                  href="javascript:;"-->
                <!--                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"-->
                <!--                  @click="onExportCsv"-->
                <!--                >-->
                <!--                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Xuất-->
                <!--                  file CSV-->
                <!--                </a>-->
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportJson"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Xuất
                  file JSON
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportXlsx"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Xuất
                  file XLSX
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportHtml"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Xuất
                  file HTML
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto scrollbar-hidden">
        <div
          id="tabulator"
          ref="table"
          class="mt-5 table-report table-report--tabulator"
        ></div>
      </div>
      <!-- BEGIN: Delete Confirmation Modal -->
      <div id="delete-confirmation-modal" class="modal">
        <div class="modal__content">
          <div class="p-5 text-center">
            <xCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
            <div class="text-3xl mt-5">Bạn chắc chứ?</div>
            <div class="text-gray-600 mt-2">
              Thao tác này sẽ xóa vĩnh viễn dữ liệu và không thể khôi phục.
            </div>
          </div>
          <div class="px-5 pb-8 text-center">
            <button
              type="button"
              data-dismiss="modal"
              class="button w-32 border text-gray-700 mr-1"
            >
              Thế để từ từ
            </button>
            <button
              data-dismiss="modal"
              type="button"
              class="button w-24 bg-theme-6 text-white"
              @click="deleteData"
            >
              Chắc chắn!
            </button>
          </div>
        </div>
      </div>
      <!-- END: Delete Confirmation Modal -->
    </div>
    <!-- END: HTML Table Data -->
  </div>
</template>

<script>
import xlsx from "xlsx";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";

export default {
  data() {
    return {
      table: null,
      filter: {
        field: "name",
        type: "like",
        value: ""
      },
      dataToUpdate: {},
      selectedRow: null
    };
  },
  mounted() {
    this.table = new Tabulator(this.$refs.table, {
      ajaxURL: process.env.baseUrl + "/api/bridge",
      ajaxConfig: {
        headers: {
          Authorization: this.$auth.strategy.token.get()
        }
      },
      ajaxFiltering: true,
      ajaxSorting: true,
      printAsHtml: true,
      printStyled: true,
      pagination: "remote",
      paginationSize: 10,
      paginationSizeSelector: [10, 20, 30, 40],
      layout: "fitColumns",
      responsiveLayout: "collapse",
      placeholder: "Không tìm thấy bản ghi nào",
      columns: [
        {
          formatter: "responsiveCollapse",
          width: 40,
          minWidth: 30,
          align: "center",
          resizable: false,
          headerSort: false
        },

        // For HTML table
        {
          title: "TÊN CẦU",
          minWidth: 200,
          responsive: 0,
          field: "name",
          vertAlign: "middle",
          print: true,
          download: true,
          formatter(cell) {
            return `<div>
              <div class="font-medium whitespace-no-wrap">${
                cell.getData().name
              }</div>
            </div>`;
          }
        },
        // {
        //   title: "VỊ TRÍ XÂY DỰNG",
        //   minWidth: 200,
        //   field: "location",
        //   hozAlign: "center",
        //   vertAlign: "middle",
        //   print: true,
        //   download: true,
        //   formatter: "textarea"
        // },
        {
          title: "CHỦ ĐẦU TƯ",
          field: "investor",
          hozAlign: "center",
          vertAlign: "middle",
          print: true,
          download: true,
          formatter: "textarea"
        },
        {
          title: "TỔNG VỐN ĐẦU TƯ (TỶ)",
          field: "totalInvestment",
          hozAlign: "center",
          vertAlign: "middle",
          print: true,
          download: true
        },
        {
          title: "TẢI TRỌNG THIẾT KẾ (TẤN)",
          field: "designLoad",
          hozAlign: "center",
          vertAlign: "middle",
          print: true,
          download: true
        },
        {
          title: "ĐƠN VỊ THIẾT KẾ",
          field: "designer",
          hozAlign: "center",
          vertAlign: "middle",
          print: true,
          download: true,
          formatter: "textarea"
        },
        {
          title: "ĐƠN VỊ THI CÔNG",
          minWidth: 200,
          field: "builder",
          hozAlign: "center",
          vertAlign: "middle",
          visible: false,
          print: true,
          download: true
        },
        {
          title: "ĐƠN VỊ GIÁM SÁT",
          minWidth: 200,
          field: "supervisor",
          hozAlign: "center",
          vertAlign: "middle",
          visible: false,
          print: true,
          download: true
        },
        {
          title: "ĐƠN VỊ QUẢN LÝ",
          minWidth: 200,
          field: "manager",
          hozAlign: "center",
          vertAlign: "middle",
          visible: false,
          print: true,
          download: true
        },
        {
          title: "TÌNH TRẠNG",
          minWidth: 200,
          field: "status",
          headerHozAlign: "center",
          hozAlign: "center",
          vertAlign: "middle",
          print: true,
          download: true,
          formatter(cell) {
            return `<div class="flex items-center lg:justify-center ${
              cell.getData().status === "good"
                ? "text-theme-9"
                : cell.getData().status === "warning"
                ? "text-theme-11"
                : "text-theme-6"
            }">
              <i data-feather="check-square" class="w-4 h-4 mr-2"></i> ${
                cell.getData().status === "good"
                  ? "Hoạt động tốt"
                  : cell.getData().status === "warning"
                  ? "Cần theo dõi"
                  : "Xuống cấp nghiêm trọng"
              }
            </div>`;
          }
        },
        {
          title: "THAO TÁC",
          minWidth: 200,
          field: "actions",
          responsive: 1,
          headerHozAlign: "center",
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false,
          cellClick: (e, ceil) => {
            // console.log(ceil.getRow().getPosition(true));
            let elementClicked = e.toElement.outerHTML || "";
            this.dataToUpdate = ceil.getRow().getData();
            this.selectedRow = ceil.getRow();
            // console.log(elementClicked);
            if (elementClicked.match(/trash/gm)) {
              cash("#delete-confirmation-modal").modal("show");
            }
            if (elementClicked.match(/check-square/gm)) {
              this.$router.push({
                name: "bridge-add",
                params: { formData: this.dataToUpdate }
              });
            }
          },
          formatter() {
            return `<div class="flex lg:justify-center items-center">
              <a class="flex items-center mr-3" href="javascript:;">
                <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Sửa thông tin
              </a>
              <a class="flex items-center text-theme-6" href="javascript:;">
                <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Xóa
              </a>
            </div>`;
          }
        }
      ],
      renderComplete() {
        feather.replace({
          "stroke-width": 1.5
        });
      }
    });

    // Redraw table onresize
    window.addEventListener("resize", () => {
      this.table.redraw();
      feather.replace({
        "stroke-width": 1.5
      });
    });
  },
  methods: {
    // Filter function
    onFilter() {
      this.table.setFilter(
        this.filter.field,
        this.filter.type,
        this.filter.value
      );
    },

    // On reset filter
    onResetFilter() {
      this.filter.field = "name";
      this.filter.type = "like";
      this.filter.value = "";
      this.onFilter();
    },

    // Export
    onExportCsv() {
      this.table.download("csv", "data.csv");
    },
    onExportJson() {
      this.table.download("json", "data.json");
    },
    onExportXlsx() {
      window.XLSX = xlsx;
      this.table.download("xlsx", "data.xlsx", {
        sheetName: "Products"
      });
    },
    onExportHtml() {
      this.table.download("html", "data.html", {
        style: true
      });
    },

    // Print
    onPrint() {
      this.table.print();
    },

    deleteData() {
      this.$axios.delete("/Bridge/" + this.dataToUpdate.id).then(response => {
        this.selectedRow.delete();
        console.log(response);
      });
    }
  }
};
</script>
