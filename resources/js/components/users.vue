<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <!-- {{GetEmployeeName}} -->
        <!-- {{GetRights}} -->
        <!-- {{UsersTable}} -->
        <v-col cols="7">
          <v-card-subtitle style="font-size: 30px">User Maintenance</v-card-subtitle>
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
                @click="OpenAddUser()"
                v-on="on"
                style="font-weight: bold; border: 1px solid black"
              >
                <v-icon> mdi-plus </v-icon> ADD
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add User </span>
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
            <th>USERS</th>
            <th>EMPLOYEE NAME</th>
            <th>EMPLOYEE CODE</th>
            <th>USER LEVEL</th>
            <th>AREA ASSIGN</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingPatrol" :key="i">
            <td>
              <v-list-item-avatar size="45">
                <div class="img-hover-zoom">
                  <img id="img" :src="`http://hrd-adminweb/photos/${item.UserID}.jpg`" />
                </div>
              </v-list-item-avatar>
            </td>
            <td>{{ item.EmployeeName }}</td>
            <td>{{ item.UserID }}</td>
            <td>{{ item.Users_Rights }}</td>
            <td>{{ item.Area ? item.Area : "NO AREA ASSIGNMENT" }}</td>
            <td>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn icon color="orange" v-on="on" @click="OpenUpdateUser(item)">
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
    <!--============================================================= ADD USER ==============================================================-->
    <v-dialog v-model="AddUserDialog" width="450" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Add User
            <v-spacer></v-spacer>
            <v-btn color="red" icon @click="CloseAddUser()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <!-- {{ infoData }} -->
            <v-col cols="12">
              <v-text-field
                v-model="AddUsersObj.UserID"
                dense
                outlined
                label="User ID"
                @keyup="EmployeeInfo()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="employeeInfo.EmployeeName"
                dense
                outlined
                label="Employee Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="AddUsersObj.AreaID"
                label="Area"
                dense
                outlined
                :items="GetAreasTable"
                item-text="Area"
                item-value="AreaID"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="employeeInfo.EmployeeCode"
                dense
                outlined
                label="Password"
                :type="(show = 'password')"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-autocomplete
                v-model="AddUsersObj.UserLevel"
                dense
                outlined
                :items="GetRights"
                item-text="Users_Rights"
                label="User Level"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              @click="SaveUsers()"
              color="#FFD966"
              style="border: 1px solid grey"
              dense
            >
              <v-icon>mdi-plus</v-icon>Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--============================================================ UPDATE USER ===========================================================-->
    <v-dialog v-model="UpdateUserDialog" width="450" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Update User
            <v-spacer></v-spacer>
            <v-btn color="red" icon @click="CloseUpdateUser()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.UserID"
                dense
                outlined
                label="User ID"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.EmployeeName"
                dense
                outlined
                label="Employee Name"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="toUpdateObj.AreaID"
                dense
                outlined
                :items="GetAreasTable"
                item-text="Area"
                item-value="AreaID"
                label="Area"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.Password"
                dense
                outlined
                label="Password"
                type="password"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="toUpdateObj.UserLevel"
                dense
                outlined
                :items="GetRights"
                item-text="Users_Rights"
                item-value="UserLevel"
                label="User Level"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#FFD966"
              style="border: 1px solid grey"
              dense
              type="submit"
              @click="SaveUpdateUser()"
            >
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--============================================================= DELETE USER ===========================================================-->
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
              @click="DeleteCat(toDelete)"
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
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tempPass: null,
      SearchArea: "",
      deleteDialog: false,
      loadingdelete: false,
      GetAreasTable: [],
      UsersTable1: ["Admin", "Encoder"],
      UsersTable: [],
      Search: "",
      AddUserDialog: false,
      DateToday: moment().format("YYYY-MM-DD"),
      AddUsersObj: {},
      UpdateUserDialog: false,
      toUpdateObj: {},
      toDeleteObj: {},
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4",
        },
      },
      show: false,
      getNameArray: [],
      gettingNameNew: [],
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      nameRules: [(v) => !!v || "This field is required"],
      infoData: {},
      employeeInfo: {},
      GetRights: [],
    };
  },
  computed: {
    ...mapState(["userInfo", "AreasInfo"]),
    // SearchingPatrol() {
    // return this.UsersTable.filter((r) => {
    //     if(this.Search){
    //     let searchedQualReq = new RegExp(this.Search.toUpperCase(), "g");
    //     return JSON.stringify(Object.values(r))
    //         .toUpperCase()
    //         .match(searchedQualReq);
    //     }else{
    //     return r
    //     }
    // })
    // },
    SearchingPatrol() {
      if (this.Search) {
        return this.UsersTable.filter((item) => {
          return (
            item.EmployeeName.toLowerCase().includes(this.Search.toLowerCase()) ||
            item.UserID.toString().includes(this.Search.toLowerCase()) ||
            item.Users_Rights.toLowerCase().includes(this.Search.toLowerCase()) ||
            (item.Area &&
              item.Area.toLowerCase().indexOf(this.Search.toLowerCase().trim()) > -1)
          );
        });
      } else {
        return this.UsersTable;
      }
    },
  },
  created() {
    this.usersInfo();
    this.getAreas();
    this.getuserRights();
    this.DateToday = moment().format("YYYY-MM-DD");
  },
  methods: {
    ...mapActions(["loginUser"]),
    // filterSearch(val){
    // axios.get(`api/usersInfo/${val}`).then(res=>{
    //     this.UsersTable = res.data.filter(r => {
    //         return r.CompanyCode == this.userInfo.value[0].CompanyCode
    //     })
    // })
    // },
    getuserRights() {
      axios.get(`${this.$url}/api/userRights`).then((res) => {
        this.GetRights = res.data;
      });
    },
    getAreas() {
      axios.get(`${this.$url}/api/AreasInfo`).then((res) => {
        this.GetAreasTable = res.data.filter((rec) => {
          return rec.CompanyCode == this.userInfo.value[0].CompanyCode;
        });
      });
    },
    usersInfo() {
      axios.post(`${this.$url}/api/usersInfo`).then((res) => {
        this.UsersTable = res.data.filter((rec) => {
          return rec.CompanyCode == this.userInfo.value[0].CompanyCode;
        });
      });
      this.getAreas();
      this.getuserRights();
    },
    OpenAddUser() {
      this.AddUserDialog = true;
    },
    CloseAddUser() {
      this.AddUserDialog = false;
    },
    SaveUsers() {
      if (this.AddUsersObj.UserLevel == "Admin") {
        this.AddUsersObj.UserLevel = 1;
      }
      if (this.AddUsersObj.UserLevel == "Encoder") {
        this.AddUsersObj.UserLevel = 2;
      }
      this.AddUsersObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddUsersObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddUsersObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddUsersObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddUsersObj.EmployeeName = this.employeeInfo.EmployeeName;
      this.AddUsersObj.Password = this.employeeInfo.EmployeeCode;

      axios.post(`${this.$url}/api/AddUsers`, this.AddUsersObj).then((res) => {
        this.AddUserDialog = false;
      });
      this.usersInfo();
    },
    OpenUpdateUser(item) {
      this.toUpdateObj = { ...item };
      this.UpdateUserDialog = true;
    },
    CloseUpdateUser() {
      this.UpdateUserDialog = false;
    },
    async SaveUpdateUser() {
      console.log("this.toUpdateObj", this.toUpdateObj);
      this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.toUpdateObj.Password = this.employeeInfo.EmployeeCode;
      await axios.post(`${this.$url}/api/UpdateUsers`, this.toUpdateObj).then((res) => {
        this.UpdateUserDialog = false;
        if (this.toUpdateObj.UserID === this.toUpdateObj.UpdatedBy) {
          this.$store.commit("setUserLevel", this.toUpdateObj.UserLevel);
        }
      });
      this.usersInfo();
    },
    async DeleteCat(item) {
      this.loadingdelete = true;
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios
        .post(`${this.$url}/api/softDeleteUsers`, this.toDeleteObj)
        .then(async (res) => {
          this.usersInfo();
          await new Promise((resolve) => setTimeout(resolve, 2000));
          this.loadingdelete = false;
          this.deleteDialog = false;
        });
    },
    EmployeeInfo() {
      axios
        .get(`${this.EmployeeInfoURL}/${this.AddUsersObj.UserID}`, this.HeadersConfig)
        .then((res) => {
          if (res.data[0]) {
            //pag may laman
            this.employeeInfo = res.data[0];
          }
        });
    },
  },
  watch: {
    AddUserDialog(val) {
      if (val) {
        this.AddUsersObj.UserID = null;
        this.AddUsersObj.AreaID = null;
        this.AddUsersObj.UserLevel = null;
        this.employeeInfo.EmployeeName = null;
        this.employeeInfo.EmployeeCode = null;
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
