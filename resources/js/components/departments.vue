<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <v-col cols="7">
          <v-card-subtitle style="font-size: 30px">Departments</v-card-subtitle>
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
                @click="AddDepartment()" 
                v-on="on"
                style="font-weight: bold; border: 1px solid black"
                >
                <v-icon> mdi-plus </v-icon>ADD
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add Department </span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-simple-table
        fixed-header
        style="border: 1px solid black; overflow-y: auto"
        :height="$vuetify.breakpoint.height - 150"
      >
        <thead>
          <tr>
            <th>COMPANY</th>
            <th>DEPARTMENT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingPatrol" :key="i">
            <td>
              {{
                item.FSECompanyCode == "002"
                  ? "HTI"
                  : item.FSECompanyCode == "003"
                  ? "HRD"
                  : ""
              }}
            </td>
            <td>{{ item.DepartmentName }}</td>
            <td>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon @click="toUpdateDepartment(item)" color="orange">
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
    </v-card>
    <!--=============================================================== ADD DEPARTMENT ===============================================================-->
    <v-dialog v-model="OpenAddDepartment" width="500px" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Add Department
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseAddDepartment()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="AddDeptObj.DepartmentCode"
                dense
                outlined
                label="Department Code"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="AddDeptObj.DepartmentName"
                dense
                outlined
                label="Department Name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn 
            type="submit"
            color="#FFD966"
            style="border: 1px solid grey"
            @click="SaveDept()"
            dense>
              <v-icon>mdi-plus</v-icon> Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================ UPDATE DEPARTMENT ===========================================================-->
    <v-dialog v-model="OpenUpdateDepartment" width="500px" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Update Department
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseUpdateDepartment()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.DepartmentName"
                dense
                outlined
                label="Department Name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              type="submit"
              color="#FFD966"
              @click="SaveUpdateDept()"
              style="border: 1px solid black"
              dense
            >
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================ DELETE DEPARTMENT ===========================================================-->
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
              @click="DeleteDepartment(toDelete)"
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
      DeptTable: [],
      Search: "",
      OpenAddDepartment: false,
      AddDeptObj: {},
      AddDeptArr: [],
      OpenUpdateDepartment: false,
      toUpdateObj: {},
      toDeleteObj: {},
      loadingdelete: false,
      deleteDialog: false,
    };
  },
  created() {
    this.DeptInfo();
  },
  computed: {
    ...mapState(["userInfo"]),
    SearchingPatrol() {
      return this.DeptTable.filter((r) => {
        if (this.Search) {
          let searchedQualReq = new RegExp(this.Search.toUpperCase(), "g");
          return JSON.stringify(Object.values(r)).toUpperCase().match(searchedQualReq);
        } else {
          return r;
        }
      });
    },
  },
  methods: {
    formatDate(item) {
      return moment(item).format("YYYY/MM/DD");
    },
    filterSearch(val) {
      axios.get(`${this.$url}/api/DeptInfo/${val}`).then((res) => {
        this.DeptTable = res.data;
      });
    },
    DeptInfo() {
      axios.get(`${this.$url}/api/DeptInfo`).then((res) => {
        this.DeptTable = res.data.filter((rec) => {
          return rec.FSECompanyCode == this.userInfo.value[0].CompanyCode;
        });
        // console.log('dep',this.DeptTable)
      });
    },
    AddDepartment() {
      this.OpenAddDepartment = true;
    },
    CloseAddDepartment() {
      this.OpenAddDepartment = false;
    },
   async SaveDept() {
      // console.log('kkkkk',this.AddDeptObj.DepartmentName)
      this.AddDeptObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddDeptObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddDeptObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddDeptObj.FSECompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddDeptObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddDeptObj.isOthers = this.userInfo.value[0].CompanyCode == "003" ? 0 : 1;
     await axios.post(`${this.$url}/api/AddDepartment`, this.AddDeptObj).then((res) => {
        this.OpenAddDepartment = false;
      });
      this.DeptInfo();
    },
    toUpdateDepartment(item) {
      this.toUpdateObj = { ...item };
      this.OpenUpdateDepartment = true;
    },
    CloseUpdateDepartment() {
      this.OpenUpdateDepartment = false;
    },
    async SaveUpdateDept() {
      this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
     await axios.post(`${this.$url}/api/UpdateDepartment`, this.toUpdateObj).then((res) => {
        this.OpenUpdateDepartment = false;
        this.DeptInfo();
      });
    },
    async DeleteDepartment(item) {
      this.loadingdelete = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios
        .post(`${this.$url}/api/softDeleteDepartment`, this.toDeleteObj)
        .then((res) => {
          this.DeptInfo();
          this.loadingdelete = false;
          this.deleteDialog = false;
        });
    },
  },
  watch: {
    OpenAddDepartment(val) {
      if (!val) {
        this.AddDeptObj.DepartmentCode = null;
        this.AddDeptObj.DepartmentName = null;
      }
    },
  },
};
</script>

<style scoped></style>
