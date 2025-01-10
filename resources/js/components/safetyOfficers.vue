<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <v-col cols="7">
          <v-card-subtitle style="font-size: 30px">Safety Officers</v-card-subtitle>
        </v-col>
        <v-col cols="4" class="mt-1">
          <v-text-field
            dense
            outlined
            label="Search"
            v-model="Search"
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
                @click="clickADD()"
                v-on="on"
                style="font-weight: bold; border: 1px solid black"
              >
                <v-icon> mdi-plus </v-icon>ADD
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add Officer </span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-simple-table
        style="border: 1px solid black; overflow-y: auto"
        fixed-header
        :height="$vuetify.breakpoint.height - 170"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>PICTURE</th>
            <th>CODE</th>
            <th>EMPLOYEE NAME</th>
            <th>AREA ASSIGNMENT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingPatrol" :key="i">
            <td>{{ i + 1 }}</td>
            <td>
              <v-list-item-avatar size="45">
                <div class="img-hover-zoom">
                  <img
                    id="img"
                    :src="`http://hrd-adminweb/photos/${item.EmployeeCode}.jpg`"
                  />
                </div>
              </v-list-item-avatar>
            </td>
            <td>{{ item.EmployeeCode }}</td>
            <td>{{ item.EmployeeName }}</td>
            <td>{{ item.Area }}</td>
            <td>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    icon
                    @click="toUpdateSafetyOfficers(item)"
                    color="orange"
                  >
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </template>
                <span style="font-family: Arial"> Edit </span>
              </v-tooltip>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    icon
                    @click="
                      deleteDialog = true;
                      toDelete = { ...item };
                    "
                    color="red"
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
      <p style="font-size: 21px; text-align: center" class="pt-3">
        Total Safety Officers: {{ SafetyOfficerTable.length }}
      </p>
    </v-card>
    <!--================================================================= ADD OFFICER =============================================================-->
    <v-dialog v-model="AddDialog" width="400px" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Add Saftety Officer
            <v-spacer></v-spacer>
            <v-btn icon @click="closeADD()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="AddOfficerObj.EmployeeCode"
                label="Employee Code"
                dense
                outlined
                @keyup="EmployeeInfo()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="employeeInfo.EmployeeName"
                label="Employee Name"
                dense
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="AddOfficerObj.AreaID"
                label="Area"
                dense
                outlined
                :items="GetAreasTable"
                item-text="Area"
                item-value="AreaID"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn 
              type="submit"
              color="#FFD966" 
              dense
              @click="SaveOfficers()"
              style="border: 1px solid grey"
            >
              <v-icon>mdi-plus</v-icon>Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================ UPDATE OFFICER ===========================================================-->
    <v-dialog v-model="UpdateDialog" width="400px" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Update Safety Officer
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseUpdateSafetyOfficers()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="toUpdateObj.EmployeeCode"
                label="Employee Code"
                dense
                outlined
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.EmployeeName"
                label="Employee Name"
                dense
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="toUpdateObj.AreaID"
                label="Area"
                dense
                outlined
                :items="GetAreasTable"
                item-text="Area"
                item-value="AreaID"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              type="submit"
              color="#FFD966"
              @click="SaveUpdateSafetyOfficers()"
              style="border: 1px solid black"
              dense
            >
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>

            <!-- <v-btn color="#3D8361" dark @click="SaveUpdateSafetyOfficers()">
              <v-icon>mdi-content-save</v-icon>save
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================ DELETE OFFICER ===========================================================-->
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
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      GetAreasTable: [],
      SafetyOfficerTable: [],
      Search: "",
      AddDialog: false,
      AddOfficerObj: {},
      toUpdateObj: {},
      UpdateDialog: false,
      toDeleteObj: {},
      deleteDialog: false,
      loadingdelete: false,
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4",
        },
      },
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      employeeInfo: {},
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    SearchingPatrol() {
      return this.SafetyOfficerTable.filter((r) => {
        if (this.Search) {
          let searchedQualReq = new RegExp(this.Search.toUpperCase(), "g");
          return JSON.stringify(Object.values(r)).toUpperCase().match(searchedQualReq);
        } else {
          return r;
        }
      });
    },
  },
  created() {
    this.SafetyOfficerInfo();
  },
  methods: {
    formatDate(item) {
      return moment(item).format("YYYY/MM/DD");
    },
    filterSearch(val) {
      axios.get(`${this.$url}/api/SafetyOfficerInfo/${val}`).then((res) => {
        this.SafetyOfficerTable = res.data;
      });
    },
    SafetyOfficerInfo() {
      axios.get(`${this.$url}/api/SafetyOfficerInfo`).then((res) => {
        this.SafetyOfficerTable = res.data.filter((rec) => {
          return rec.CompanyCode == this.userInfo.value[0].CompanyCode;
        });
        // console.log('itoooooo',this.SafetyOfficerTable)
      });
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
    clickADD() {
      this.AddDialog = true;
      this.getAreas();
      // console.log('kkkkk',this.AddOfficerObj)
    },
    closeADD() {
      this.AddDialog = false;
    },
    SaveOfficers() {
      // console.log('kkkkk',this.userInfo.value[0].UserID)
      // console.log('sdff', this.AddOfficerObj.AreaID)
      this.AddOfficerObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddOfficerObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddOfficerObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddOfficerObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddOfficerObj.EmployeeName = this.employeeInfo.EmployeeName;
      axios.post(`${this.$url}/api/AddSafetyOfficers`, this.AddOfficerObj).then((res) => {
        // this.SafetyOfficerTable.push(this.AddOfficerObj)
        this.AddDialog = false;
      });
      this.SafetyOfficerInfo();
    },
    toUpdateSafetyOfficers(item) {
      this.getAreas();
      this.toUpdateObj = { ...item };
      this.UpdateDialog = true;
    },
    CloseUpdateSafetyOfficers() {
      this.UpdateDialog = false;
    },
    async SaveUpdateSafetyOfficers() {
      // console.log('this.toUpdateObj',this.toUpdateObj)
      this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;

      await axios
        .post(`${this.$url}/api/UpdateSafetyOfficers`, this.toUpdateObj)
        .then((res) => {
          this.UpdateDialog = false;
        });
      this.SafetyOfficerInfo();
    },
    async DeleteSafetyOfficers(item) {
      this.loadingdelete = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios
        .post(`${this.$url}/api/softDeleteSafetyOfficers`, this.toDeleteObj)
        .then((res) => {
          this.SafetyOfficerInfo();
          this.loadingdelete = false;
          this.deleteDialog = false;
        });
    },
    EmployeeInfo() {
      axios
        .get(
          `${this.EmployeeInfoURL}/${this.AddOfficerObj.EmployeeCode}`,
          this.HeadersConfig
        )
        .then((res) => {
          if (res.data[0]) {
            //pag may laman
            this.employeeInfo = res.data[0];
          }
        });
    },
  },
  watch: {
    AddDialog(val) {
      if (val) {
        this.AddOfficerObj.EmployeeCode = null;
        this.AddOfficerObj.AreaID = null;
        this.employeeInfo.EmployeeName = null;
      }
    },
  },
};
</script>

<style>
.img-hover-zoom img {
  transition: transform 0.5s ease;
}
.img-hover-zoom:hover img {
  transform: scale(1.4);
}
#img {
  height: 35px;
  width: 35px;
  border: 3px solid #eeeeee;
  border-radius: 50%;
}
</style>
