<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <!-- {{EmailsTable}} -->
        <v-col cols="7"
          ><v-card-subtitle style="font-size: 30px">Emails</v-card-subtitle>
        </v-col>
        <v-col cols="4" class="mt-1">
          <v-text-field
            dense
            outlined
            label="Search"
            v-model="SearchEmail"
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
                style="font-weight: bold; border: 1px solid black"
                @click="OpenAddEmail()"
                v-on="on"
              >
                <v-icon> mdi-plus </v-icon>ADD
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add Email </span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-simple-table
        fixed-header
        :height="$vuetify.breakpoint.height - 150"
        style="border: 1px solid black"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>EMPLOYEE NAME</th>
            <th>COMPANY</th>
            <th>MAIL ADDRESS</th>
            <th>ADVISER EMAIL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingEmail" :key="i">
            <td>{{ item.EmployeeID }}</td>
            <td>{{ item.EmployeeName }}</td>
            <td>
              {{
                item.CompanyCode == "002" ? "HTI" : item.CompanyCode == "003" ? "HRD" : ""
              }}
            </td>
            <td>{{ item.MailAddress }}</td>
            <td style="text-align: center">
              {{ item.JapaneseAdviserEmail == null ? "――――" : item.JapaneseAdviserEmail }}
            </td>
            <td>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" @click="OpenUpdateEmails(item)" color="orange">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </template>
                <span style="font-family: Arial"> Edit </span>
              </v-tooltip>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    v-on="on"
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
    <!--============================================================== ADD EMAIL ===========================================================-->
    <v-dialog v-model="AddEmails" width="500" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Add Emails
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseAddEmail()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="AddEmailsObj.EmployeeID"
                dense
                outlined
                label="ID"
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
              <v-text-field
                v-model="AddEmailsObj.MailAddress"
                dense
                outlined
                label="Mail Address"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="AddEmailsObj.JapaneseAdviserEmail"
                dense
                outlined
                label="Japanese Adviser Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              dense
              style="border: 1px solid grey"
              color="#FFD966"
              type="submit"
              @click="SaveEmail()"
            >
              <v-icon>mdi-plus</v-icon>Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--=========================================================== UPDATE EMAIL =========================================================-->
    <v-dialog v-model="UpdateEmails" width="500" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Update Emails
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseUpdateEmails()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.EmployeeID"
                dense
                outlined
                label="ID"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.EmployeeName"
                dense
                outlined
                label="Employee Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.MailAddress"
                dense
                outlined
                label="Mail Address"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.JapaneseAdviserEmail"
                dense
                outlined
                label="Japanese Adviser Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              dense
              color="#FFD966"
              style="border: 1px solid grey"
              type="submit"
              @click="SaveUpdateEmails()"
            >
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--=============================================================== DELETE EMAIL =====================================================-->
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
              @click="DeleteEmails(toDelete)"
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
      deleteDialog: false,
      loadingdelete: false,
      EmailsTable: [],
      SearchEmail: "",
      AddEmails: false,
      AddEmailsObj: {},
      UpdateEmails: false,
      toUpdateObj: {},
      toDeleteObj: {},
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
    SearchingEmail() {
      return this.EmailsTable.filter((r) => {
        if (this.SearchEmail) {
          let searchedQualReq = new RegExp(this.SearchEmail.toUpperCase(), "g");
          return JSON.stringify(Object.values(r)).toUpperCase().match(searchedQualReq);
        } else {
          return r;
        }
      });
    },
  },
  created() {
    this.EmailsInfo();
  },
  methods: {
    filterSearchEmails(val) {
      axios.get(`${this.$url}/api/EmailsInfo/${val}`).then((res) => {
        this.EmailsTable = res.data.filter((r) => {
          return r.CompanyCode == this.userInfo.value[0].CompanyCode;
        });
      });
    },
    EmailsInfo() {
      axios.get(`${this.$url}/api/EmailsInfo`).then((res) => {
        this.EmailsTable = res.data.filter((rec) => {
          return rec.CompanyCode == this.userInfo.value[0].CompanyCode;
        });
      });
    },
    OpenAddEmail() {
      this.AddEmails = true;
    },
    CloseAddEmail() {
      this.AddEmails = false;
    },
    SaveEmail() {
      this.AddEmailsObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddEmailsObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddEmailsObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddEmailsObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddEmailsObj.EmployeeName = this.employeeInfo.EmployeeName;

      axios.post(`${this.$url}/api/AddEmails`, this.AddEmailsObj).then((res) => {
        this.AddEmails = false;
      });
      this.EmailsInfo();
    },
    OpenUpdateEmails(item) {
      this.toUpdateObj = { ...item };
      this.UpdateEmails = true;
    },
    CloseUpdateEmails() {
      this.UpdateEmails = false;
    },
    SaveUpdateEmails() {
      this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
      axios.post(`${this.$url}/api/UpdateEmails`, this.toUpdateObj).then((res) => {
        this.UpdateEmails = false;
        this.EmailsInfo();
      });
    },
    async DeleteEmails(item) {
      this.loadingdelete = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios.post(`${this.$url}/api/SoftDeleteEmails`, this.toDeleteObj).then((res) => {
        this.EmailsInfo();
        this.loadingdelete = false;
        this.deleteDialog = false;
      });
    },
    EmployeeInfo() {
      axios
        .get(
          `${this.EmployeeInfoURL}/${this.AddEmailsObj.EmployeeID}`,
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
    AddEmails(val) {
      if (!val) {
        this.AddEmailsObj.EmployeeID = null;
        this.employeeInfo.EmployeeName = null;
        this.AddEmailsObj.MailAddress = null;
        this.AddEmailsObj.JapaneseAdviserEmail = null;
      }
    },
  },
};
</script>

<style></style>
