<template>
  <v-container style="margin: 10px" fluid>
    <v-card flat>
      <v-row>
        <!-- {{ GetHazardTable2 }} -->
        <v-col cols="4">
          <v-autocomplete
            v-model="selectArea"
            dense
            outlined
            label="Area"
            :items="GetAreasTable"
            item-text="Area"
          ></v-autocomplete>
        </v-col>
        <v-col cols="1"></v-col>

        <v-col cols="2">
          <v-autocomplete
          label="Year"
            v-model="selectYear"
            @input="GetHazard2()"
            :items="year"
            dense
            outlined
          >
          </v-autocomplete>
        </v-col>
      </v-row>

      <v-simple-table
        fixed-header
        :height="$vuetify.breakpoint.height - 200"
        style="border: 1px solid black; overflow-y: auto"
      >
        <thead>
          <tr>
            <th style="background-color: #444444;color: white">EMPCODE</th>
            <th style="background-color: #444444;color: white">EMPLOYEE</th>
            <th style="background-color: #444444;color: white">JANUARY</th>
            <th style="background-color: #444444;color: white">FEBUARY</th>
            <th style="background-color: #444444;color: white">MARCH</th>
            <th style="background-color: #444444;color: white">APRIL</th>
            <th style="background-color: #444444;color: white">MAY</th>
            <th style="background-color: #444444;color: white">JUNE</th>
            <th style="background-color: #444444;color: white">JULY</th>
            <th style="background-color: #444444;color: white">AUGUST</th>
            <th style="background-color: #444444;color: white">SEPTEMBER</th>
            <th style="background-color: #444444;color: white">OCTOBER</th>
            <th style="background-color: #444444;color: white">NOVEMBER</th>
            <th style="background-color: #444444;color: white">DECEMBER</th>
            <th style="background-color: #444444;color: white">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in sortedData" :key="i">
            <td>{{ item.EmployeeCode }}</td>
            <td>{{ item.EmployeeName }}</td>
            <td>{{ item.January }}</td>
            <td>{{ item.February }}</td>
            <td>{{ item.March }}</td>
            <td>{{ item.April }}</td>
            <td>{{ item.May }}</td>
            <td>{{ item.June }}</td>
            <td>{{ item.July }}</td>
            <td>{{ item.August }}</td>
            <td>{{ item.September }}</td>
            <td>{{ item.October }}</td>
            <td>{{ item.November }}</td>
            <td>{{ item.December }}</td>
            <td>{{ item.TOTAL }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
    <v-toolbar style="border: 1px solid black" flat height="50px">
      <v-col cols="3">
        <p style="text-align: left; font-size: 20px; margin-top: 15px">
          Total Safety Officer:
          {{
            GetHazardTable2.map((rec) => {
              return rec.EmployeeCode;
            }).length
          }}
        </p>
      </v-col>

      <v-spacer></v-spacer>
      <v-btn icon small style="margin-right: 15px" @click="printPDF()">
        <v-icon size="30" color="black">mdi-printer</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      selectArea: "",
      selectYear: "",
      GetHazardTable: [],
      GetHazardTable2: [],
      year: ["2023", "2022", "2021", "2020", "2019"],
      GetAreasTable: [],
    };
  },
  created() {
    this.GetHazard2();
  },
  computed: {
    ...mapState(["userInfo"]),
    sortedData() {
      if (this.selectArea) {
        return this.GetHazardTable2.filter((r) => {
          return r.Area == this.selectArea;
        });
      }
      return this.GetHazardTable2;
    },
  },
  methods: {
    GetHazard() {
      axios.get(`${this.$url}/api/GetHazard`).then((res) => {
        this.GetHazardTable = res.data.filter((r) => {
          return r.DeletedDate == null;
        });
      });
    },
    async GetHazard2() {
      if (this.selectYear) {
        await axios
          .get(`${this.$url}/api/GetHazard2/${this.selectYear}/${this.selectArea}`)
          .then((res) => {
            this.GetHazardTable2 = res.data;
          });
      }

      this.GetHazard();
      this.getAreas();
    },
    getAreas() {
      axios.get(`${this.$url}/api/AreasInfo`).then((res) => {
        this.GetAreasTable = res.data.filter((rec) => {
          return (
            rec.CompanyCode == this.userInfo.value[0].CompanyCode &&
            rec.DeletedDate == null
          );
        });
      });
    },
    async printPDF() {
      function table(data, columns) {
        return {
          style: "alignmentCenter",
          table: {
            widths: [
              "8%",
              "15%",
              "6%",
              "6%",
              "6%",
              "6%",
              "6%",
              "6%",
              "6%",
              "6%",
              "7%",
              "6%",
              "6%",
              "6%",
              "4%",
            ],
            headerRows: 1,
            body: buildTableBody(data, columns),
            alignment: "center",
          },
        };
      }

      let DataTable = [...this.sortedData];
      // let DataTable1 = [ ...this.GetHazardTable2 ]

      function buildTableBody(data, columns) {
        var body = [];
        body.push(columns);

        data.forEach(function (row) {
          var dataRow = [];

          columns.forEach(function (column) {
            dataRow.push({
              text: row[column],
              fontSize: 13,
              alignment: "center",
            });
          });
          body.push(dataRow);
        });

        (columns[0] = {
          text: "Employee ID",
          alignment: "center",
          bold: true,
          fillColor: "#68B984",
          color: "black",
          fontSize: 13,
          padding: 10,
        }),
          (columns[1] = {
            text: "Employee Name",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[2] = {
            text: "January",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[3] = {
            text: "February",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[4] = {
            text: "March",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[5] = {
            text: "April",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[6] = {
            text: "May",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[7] = {
            text: "June",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[8] = {
            text: "July",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[9] = {
            text: "August",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[10] = {
            text: "September",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 12,
          }),
          (columns[11] = {
            text: "October",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[12] = {
            text: "November",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[13] = {
            text: "December",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          }),
          (columns[14] = {
            text: "Total",
            alignment: "center",
            bold: true,
            fillColor: "#68B984",
            color: "black",
            fontSize: 13,
          });
        return body;
      }
      var dd = {
        pageSize: "A3",
        pageOrientation: "landscape",
        pageMargins: [15, 15, 15, 30],
        content: [
          {
            table: {
              widths: ["100%"],
              body: [
                [
                  [
                    {
                      text: "Safety Officer Hazard Count Monitoring",
                      fontSize: 18,
                      alignment: "center",
                      bold: true,
                    },
                    {
                      text: this.selectArea + " " + " " + " " + this.selectYear,
                      fontSize: 20,
                      alignment: "center",
                      bold: true,
                    },
                  ],
                ],
              ],
            },
          },

          {
            text: " ",
          },

          table(DataTable, [
            "EmployeeCode",
            "EmployeeName",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
            "TOTAL",
          ]),
          {
            text: " ",
          },
          {
            columns: [
              {
                text:
                  "Total Member: " +
                  this.GetHazardTable2.map((rec) => {
                    return rec.EmployeeCode;
                  }).length,
                fontSize: 15,
              },
              {
                text: "Printed Date: " + moment().format("YYYY-MM-DD"),
                fontSize: 15,
                alignment: "right",
              },
            ],
          },
          {
            text: " ",
          },
        ],
        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                fontSize: 13,
                text: [
                  {
                    text: "Page " + currentPage.toString() + " of " + pageCount,
                  },
                ],
                alignment: "center",
              },
            ],
          };
        },
      };
      pdfMake.createPdf(dd).open();
    },
  },
};
</script>

<style></style>
