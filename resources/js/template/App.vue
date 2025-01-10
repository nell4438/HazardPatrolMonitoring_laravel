<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
      width="250px"
      v-if="$route.name != 'login'"
      color="#FFEBB4"
    >
      <br /><br />
      <v-divider></v-divider>

      <v-list
        dense
        v-if="userInfo.value[0].UserLevel == 1 || userInfo.value[0].UserLevel == 3"
      >
        <v-list-group
          :value="false"
          prepend-icon="mdi-handshake"
          color="black"
          v-if="userInfo.value[0].CompanyCode == '002'"
        >
          <template v-slot:activator>
            <v-list-item-title>TRANSACTION </v-list-item-title>
          </template>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" color="black">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-handshake" color="black" v-else>
          <template v-slot:activator>
            <v-list-item-title>TRANSACTION </v-list-item-title>
          </template>
          <v-list-item v-for="(item, i) in items2" :key="i" :to="item.to" color="black">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-cog" color="black">
          <template v-slot:activator>
            <v-list-item-title style="font-size: 13px"
              >MASTER MAINTENANCE</v-list-item-title
            >
          </template>
          <v-list-item
            v-for="(item, i) in mastermains"
            :key="i"
            :to="item.to"
            color="black"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-list dense v-else>
        <!-- <v-subheader>LIST COMPONENTS:</v-subheader> -->
        <br /><br />
        <v-list-group
          :value="false"
          prepend-icon="mdi-handshake"
          color="black"
          v-if="userInfo.value[0].CompanyCode == '002'"
        >
          <template v-slot:activator>
            <v-list-item-title>TRANSACTION</v-list-item-title>
          </template>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" color="black">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-handshake" color="black" v-else>
          <template v-slot:activator>
            <v-list-item-title>TRANSACTION</v-list-item-title>
          </template>
          <v-list-item v-for="(item, i) in items2" :key="i" :to="item.to" color="black">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <!-- CHECK SHEET //2022-12-22 --><br />
      <v-btn
        block
        v-if="showChecksheet == true"
        style="border: 1px solid #232323; font-weight: bold"
        color="#FFD966"
        @click="printPDF()"
      >
        <v-icon>mdi-printer</v-icon> Check Sheet
      </v-btn>
    </v-navigation-drawer>

    <v-app-bar app height="48px" v-if="$route.name != 'login'" color="#FFEBB4">
      <v-toolbar-title>{{ getCompany }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-tooltip bottom transition="scroll-y-transition">
        <template v-slot:activator="{ on }">
          <v-list-item-avatar
            size="45"
            style="margin-right: 10px; border: 1px solid grey"
          >
            <img
              :src="`http://hrd-adminweb/photos/${userInfo.value[0].UserID}.jpg`"
              v-on="on"
            />
          </v-list-item-avatar>
        </template>
        <span style="font-family: Arial"> {{ userInfo.value[0].EmployeeName }} </span>
      </v-tooltip>
      {{ userInfo.value[0].EmployeeName }}
      <v-tooltip bottom transition="scroll-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn @click="out()" icon color="black" v-on="on">
            <v-icon size="30">mdi-logout</v-icon>
          </v-btn>
        </template>
        <span style="font-family: Arial"> Logout </span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import moment from "moment";
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    showChecksheet: false,
    drawer: null,
    items: [
      { text: "Hazard Patrol Monitoring", to: "HazardPatrolMonitoring" },
      { text: "SO Hazard Monitoring", to: "SOHazardMonitoring" },
    ],
    items2: [{ text: "Hazard Patrol Monitoring", to: "HazardPatrolMonitoring" }],
    mastermains: [
      { text: "Users", to: "users" },
      { text: "Email", to: "employeeEmail" },
      { text: "Hazard Areas", to: "hazardAreas" },
      { text: "Hazard Categories", to: "hazardCategories" },
      { text: "Safety Officers", to: "safetyOfficers" },
      { text: "Departments", to: "departments" },
    ],
    dateAndTimeToday: moment().format("MMMM DD, YYYY HH:mm:ss A"),
  }),

  computed: {
    ...mapState(["userInfo"]),
    userInfo() {
      return this.$store.state.userInfo;
    },
    getCompany() {
      const companyMapping = {
        "002": { name: "HTI Hazard Patrol Monitoring", showChecksheet: false },
        "003": { name: "HRD Hazard Patrol Monitoring", showChecksheet: true },
      };
      if (this.userInfo && this.userInfo.value[0]) {
        const company = companyMapping[this.userInfo.value[0].CompanyCode];
        if (company) {
          this.showChecksheet = company.showChecksheet;
          return company.name;
        }
      }

      return "";
    },
  },
  mounted() {
    setInterval(() => {
      this.dateAndTimeToday = moment().format("MMMM DD, YYYY HH:mm:ss A");
    }, 1000);
  },
  methods: {
    // ...mapActions([])
    ...mapActions(["getUserInfo"]),

    out() {
      this.allUsersLoaded = false;
      this.$store.commit("delete_level");
      this.$store.commit("logoutUser");
      this.$router.push("/login");
    },
    async printPDF() {
      var dd = {
        pageSize: "A4",
        pageOrientation: "portrait",
        pageMargins: [15, 15, 15, 30],
        content: [
          {
            table: {
              widths: ["21%", "58%", "21%"],
              body: [
                [
                  [
                    {
                      table: {
                        headerRows: 1,
                        widths: ["100%"],
                        body: [
                          ["\n"],
                          [{ text: "H.R.D. SINGAPORE PTE LTD", fontSize: 9, bold: true }],
                        ],
                      },
                      layout: "headerLineOnly",
                    },
                  ],
                  [
                    {
                      text: "HRD Singapore Pte., Ltd.",
                      fontSize: 13,
                      alignment: "center",
                      bold: true,
                    },
                    {
                      text: "FSE DEPARTMENT",
                      fontSize: 9,
                      alignment: "center",
                      bold: true,
                    },
                    {
                      text: "BLK. 3 ECO-ZONE II, GENERAL TRIAS, CAVITE",
                      fontSize: 10,
                      alignment: "center",
                    },
                    {
                      text: "FIRE & SAFETY CHECKLIST",
                      fontSize: 13,
                      alignment: "center",
                    },
                  ],
                  [
                    {
                      text: "Document No. : \n\u200B\t\u200B\t HFSxx-003-00",
                      italics: true,
                      color: "gray",
                      fontSize: 11,
                    },
                    {
                      text: "Revision Date : \n\u200B\t\u200B\t 2016/09/09",
                      italics: true,
                      color: "gray",
                      fontSize: 11,
                    },
                  ],
                ],
              ],
            },
          },
          {
            text: " ",
          },
          {
            table: {
              widths: ["100%"],
              body: [
                [
                  {
                    columns: [
                      { text: "AREA/LOCATION: _______________________", fontSize: 10 },
                      { text: "" },
                      { text: "Date: " + moment().format("MMMM DD, YYYY"), fontSize: 10 },
                    ],
                  },
                ],
              ],
            },
          },
          {
            text: " ",
          },
          {
            table: {
              widths: ["55%", "23%", "22%"],
              body: [
                [
                  { text: "" },
                  { text: "AREA WITHOUT FINIDNGS", fontSize: 10, bold: true },
                  { text: "AREA WITH FINDINGS", fontSize: 10, bold: true },
                ],
                [
                  { text: "1. Electrical", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.1 Seconday insulation is not expose",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.2 Wire has no expose or open copper",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 1.3 Cable is in good condition and not loosen connectors",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.4 Cable/Wire is protected from sharp edges",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.5 Cable/Wire has no tampered of electrical tape",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.6 Plug/Outlet has no crack or damage",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 1.7 No sign of sparked or burned in wire/cable/plug/outlet",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 1.8 Outlet/Plug has a socket cover when in not in use",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 1.9 Extension wire should not be connected to one another",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.10 Wires shall be properly arranged and lied",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 1.11 No unsecured wires running on the floor",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 1.12 Unobstructed control panel board (700mm distance)",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 1.13 No loose wires/cables", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "2. Evacuation Route", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 2.1 Free from any obstruction", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 2.2 No protruding/tripping hazard", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 2.3 Not slippery", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 2.4 With emergency lgiht", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "3. Inside Stairs", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 3.1 No obstruction", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 3.2 Anti-slip is Ok", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 3.3 Not slippery", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 3.4 No protruding/tripping hazard", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "4. Hallway/Exit Pathways", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 4.1 Free from any obstruction", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 4.2 Not slippery", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 4.3 No protruding/tripping hazard", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "5. Exit Doors", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 5.1 Exit sign is lighted", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 5.2 Panic mechanism is clean and easy to push",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 5.3 No obstruction", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 5.4 No damage in door handle and easy to open",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 5.5 No tipping hazard", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "6. Emergency Exit Stairs", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 6.1 No obstruction", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 6.2 Not slippery", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 6.3 No protruding/ tripping hazard", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 6.4 Emergency light installed", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "7. Command Post", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 7.1 No blocking", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 7.2 Free from dust", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 7.3 Posted is updated", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 7.4 Good condition (Flashlight,megaphone)",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 7.5 With signages", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "8. Evacuation Area", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 8.1 Department,Assembly,First Aid signages are not clearly readable and faded",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 8.2 Signage is placed at its designated area",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 8.3 Free from any abstruction", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "9. General", fontSize: 14, bold: true },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 9.1 Floors not slippery", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 9.2 Adequate illumination/no busted lamps",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 9.3 Secured cabinets/no fall hazard on its top",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 9.4 No protruding/fall hazard", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 9.5 No dusty area", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 9.6 No presence of hazardous chemicals inside the office",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 9.7 No undesignated/abandoned material in the area",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 9.8 Posted signage is visible and readable",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 9.9 AKHSS pressure gauge seal", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  { text: "\u200B\t 9.10 Genset Fuel Volume", fontSize: 10 },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text:
                      "\u200B\t 9.11 No presence of combustible materials inside the office",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
                [
                  {
                    text: "\u200B\t 9.12 No obstruction at fire fighting equipments",
                    fontSize: 10,
                  },
                  { text: "", fontSize: 10 },
                  { text: "", fontSize: 10 },
                ],
              ],
            },
          },
          {
            text: " ",
          },
          {
            table: {
              widths: ["55%", "23%", "22%"],
              body: [
                [
                  { text: "Others", fontSize: 14, bold: true },
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                ],
                [
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                ],
                [
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                ],
                [
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                ],
                [
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                  { text: " ", fontSize: 10 },
                ],
              ],
            },
          },
          {
            text: " ",
          },
          {
            table: {
              widths: ["100%"],
              body: [
                [
                  {
                    columns: [
                      {
                        text: "Inspected By: _________________________",
                        fontSize: 10,
                        bold: true,
                      },
                      { text: "" },
                      {
                        text:
                          "Noted By: _________________________\n \u200B\t\u200B\t\u200B\t\u200B\t\u200B\t FSE Department Head",
                        fontSize: 10,
                        bold: true,
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                fontSize: 11,
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
