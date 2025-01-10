<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <!-- {{AreasTable}} -->
        <v-col cols="7">
          <v-card-subtitle style="font-size: 30px">Hazard Area</v-card-subtitle>
        </v-col>
        <v-col cols="4" class="mt-1">
          <v-text-field
            dense
            outlined
            label="Search"
            v-model="SearchArea"
            color="black"
            append-icon="mdi-magnify"
            style="height: 50px"
          ></v-text-field>
        </v-col>
        <v-col cols="1" class="pt-2">
          <v-tooltip bottom transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
              <v-btn
                color="#e0ddd7"
                @click="OpenAddArea()"
                v-on="on"
                style="border: 1px solid black; font-weight: bold"
              >
                <v-icon> mdi-plus </v-icon>ADD
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add Area </span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-simple-table
        fixed-header
        :height="$vuetify.breakpoint.height - 150"
        style="border: 1px solid black; overflow-y: auto"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>AREA</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingArea" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.Area }}</td>
            <td>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon @click="OpenUpdateArea(item)" color="orange">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </template>
                <span style="font-family: Arial"> Edit </span>
              </v-tooltip>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    color="red"
                    v-on="on"
                    @click="
                      deleteDialog = true;
                      toDelete = { ...item };
                    "
                  >
                    <v-icon>mdi-delete-outline</v-icon>
                  </v-btn>
                </template>
                <span style="font-family: Arial"> Delete </span>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
    <!--=================================================================== ADD AREA ============================================================-->
    <v-dialog v-model="AddArea" width="500" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Add Area
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseAddArea()" color="red">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="AddAreaObj.Area"
                dense
                outlined
                label="Area"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn 
              dense
              type="submit"
              color="#FFD966"
              @click="SaveArea()" 
              style="border: 1px solid grey">
              <v-icon>mdi-plus</v-icon>Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================ UPDATE AREA ============================================================-->
    <v-dialog v-model="UpdateAreaDialog" width="500" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Update Area
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseUpdateArea()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.Area"
                dense
                outlined
                label="Area"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="#FFD966"
              @click="SaveUpdateArea()"
              style="border: 1px solid grey"
            >
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--=============================================================== DELETE AREA =============================================================-->
    <v-dialog width="300" v-model="deleteDialog" persistent>
      <v-card>
        <v-card-title>
          <span> Do you want to Delete? </span>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loadingdelete"
              color="error"
              text
              @click="DeleteSafetyOfficers(toDelete)"
              style="margin-top: 10px; margin-left: 35px"
              >Delete
            </v-btn>
            <v-btn text @click="deleteDialog = false" style="margin-top: 10px"
              >Cancel
            </v-btn>
          </v-card-actions>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      AllAreasTable: [],
      AreasTable: [],
      SearchArea: "",
      AddArea: false,
      AddAreaObj: {},
      AddAreaArr: [],
      UpdateAreaDialog: false,
      deleteDialog: false,
      loadingdelete: false,
      toUpdateObj: {},
      toDeleteObj: {},
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    // SearchingArea() {
    //     return this.AreasTable.filter((r) => {
    //         if(this.SearchArea){
    //         let searchedQualReq = new RegExp(this.SearchArea.toUpperCase(), "g");
    //         return JSON.stringify(Object.values(r))
    //             .toUpperCase()
    //             .match(searchedQualReq);
    //         }else{
    //         return r
    //         }
    //     })
    // },
    SearchingArea() {
      if (this.SearchArea) {
        return this.AreasTable.filter((item) => {
          return item.Area.toLowerCase().includes(this.SearchArea.toLowerCase());
        });
      } else {
        return this.AreasTable;
      }
    },
  },
  created() {
    this.AreasInfo();
  },
  methods: {
    formatDate(item) {
      return moment(item).format("YYYY/MM/DD");
    },
    filterSearchArea(val) {
      axios.get(`${this.$url}/api/AreasInfo/${val}`).then((res) => {
        this.AreasTable = res.data;
      });
    },
    getAllArea() {
      axios.get(`${this.$url}/api/AreasInfo`).then((res) => {
        this.AllAreasTable = res.data;
      });
    },
    AreasInfo() {
      axios.get(`${this.$url}/api/AreasInfo`).then((res) => {
        this.AreasTable = res.data.filter((rec) => {
          return (
            rec.CompanyCode == this.userInfo.value[0].CompanyCode &&
            rec.DeletedDate == null
          );
        });
      });
    },
    OpenAddArea() {
      this.AddArea = true;
      this.getAllArea();
    },
    CloseAddArea() {
      this.AddArea = false;
    },
    async SaveArea() {
      this.AddAreaObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddAreaObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddAreaObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddAreaObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddAreaObj.AreaID =
        this.AllAreasTable.filter((r) => {
          return r.AreaID;
        }).length + 1;
      await axios.post(`${this.$url}/api/AddAreas`, this.AddAreaObj).then((res) => {
        this.AddArea = false;
      });
      this.AreasInfo();
    },
    OpenUpdateArea(item) {
      this.toUpdateObj = { ...item };
      this.UpdateAreaDialog = true;
    },
    CloseUpdateArea() {
      this.UpdateAreaDialog = false;
    },
    async SaveUpdateArea() {
      this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
      await axios.post(`${this.$url}/api/UpdateAreas`, this.toUpdateObj).then((res) => {
        this.UpdateAreaDialog = false;
        this.AreasInfo();
      });
    },
    async DeleteSafetyOfficers(item) {
      this.loadingdelete = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios.post(`${this.$url}/api/softDeleteAreas`, this.toDeleteObj).then((res) => {
        this.AreasInfo();
        this.loadingdelete = false;
        this.deleteDialog = false;
      });
    },
  },
  watch: {
    AddArea(val) {
      if (!val) {
        this.AddAreaObj.Area = null;
      }
    },
  },
};
</script>

<style></style>
