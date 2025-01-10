<template>
  <v-container fluid>
    <v-card flat>
      <v-row dense>
        <!-- {{CategoriesTable}} -->
        <v-col cols="7">
          <v-card-subtitle style="font-size: 30px">Hazard Categories</v-card-subtitle>
        </v-col>
        <v-col cols="4" class="mt-1">
          <v-text-field
            dense
            outlined
            label="Search"
            v-model="SearchCategories"
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
                @click="OpenAddCat()"
                v-on="on"
                style="font-weight: bold; border: 1px solid black"
              >
                <v-icon> mdi-plus </v-icon>ADD
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add Category </span>
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
            <th>CATEGORIES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingCategories" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.CatName }}</td>
            <td>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon @click="OpenUpdateCat(item)" color="orange">
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
    <!--================================================================== ADD CATEGORY ==============================================================-->
    <v-dialog v-model="AddCategories" width="500" persistent>
      <v-container style="background-color: white" fluid>
        <v-card flat>
          <v-card-title
            >Add Category
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseAddCat()" color="red">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="AddCatObj.CatName"
                dense
                outlined
                label="Category Name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              type="submit"
              color="#FFD966"
              @click="SaveCat()"
              style="border: 1px solid grey"
              dense
            >
              <v-icon>mdi-plus</v-icon>Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--=============================================================== UPDATE CATEGORY ==============================================================-->
    <v-dialog v-model="UpdateCategories" width="500" persistent>
      <v-container style="background-color: white">
        <v-card flat>
          <v-card-title
            >Update Category
            <v-spacer></v-spacer>
            <v-btn icon @click="CloseUpdateCat()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="toUpdateObj.CatName"
                dense
                outlined
                label="Category Name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn
              type="submit"
              color="#FFD966"
              @click="SaveUpdateCat()"
              style="border: 1px solid black"
              dense
            >
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================ DELETE CATEGORY =============================================================-->
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
import axios from "axios";
import moment from "moment";
import { mapState } from "vuex";
export default {
  data() {
    return {
      AllCatTable: [],
      CategoriesTable: [],
      SearchCategories: "",
      AddCategories: false,
      AddCatObj: {},
      AddCatArr: [],
      UpdateCategories: false,
      toUpdateObj: {},
      toDeleteObj: {},
      loadingdelete: false,
      deleteDialog: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    // SearchingCategories() {
    //     return this.CategoriesTable.filter((r) => {
    //         if(this.SearchCategories){
    //         let searchedQualReq = new RegExp(this.SearchCategories.toUpperCase(), "g");
    //         return JSON.stringify(Object.values(r))
    //             .toUpperCase()
    //             .match(searchedQualReq);
    //         }else{
    //         return r
    //         }
    //     })
    // },
    SearchingCategories() {
      if (this.SearchCategories) {
        return this.CategoriesTable.filter((res) => {
          return res.CatName.toLowerCase().includes(this.SearchCategories.toLowerCase());
        });
      } else {
        return this.CategoriesTable;
      }
    },
  },
  created() {
    this.CategoriesInfo();
  },
  methods: {
    formatDate(item) {
      return moment(item).format("YYYY/MM/DD");
    },
    filterSearchCategories(val) {
      axios.get(`${this.$url}/api/CategoriesInfo/${val}`).then((res) => {
        this.CategoriesTable = res.data;
      });
    },
    AllCatInfo() {
      axios.get(`${this.$url}/api/CategoriesInfo`).then((res) => {
        this.AllCatTable = res.data;
      });
    },
    CategoriesInfo() {
      axios.get(`${this.$url}/api/CategoriesInfo`).then((res) => {
        this.CategoriesTable = res.data.filter((rec) => {
          return (
            rec.CompanyCode == this.userInfo.value[0].CompanyCode &&
            rec.DeletedDate == null
          );
        });
        console.log();
      });
    },
    OpenAddCat() {
      this.AddCategories = true;
      this.AllCatInfo();
    },
    CloseAddCat() {
      this.AddCategories = false;
    },
  async  SaveCat() {
      this.AddCatObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddCatObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddCatObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddCatObj.CompanyCode = this.userInfo.value[0].CompanyCode;
      this.AddCatObj.CatID =
        this.AllCatTable.filter((r) => {
          return r.CatID;
        }).length + 1;
     await axios.post(`${this.$url}/api/AddCategories`, this.AddCatObj).then((res) => {
        this.AddCategories = false;
      });
      this.CategoriesInfo();
    },
    OpenUpdateCat(item) {
      this.toUpdateObj = { ...item };
      this.UpdateCategories = true;
    },
    CloseUpdateCat() {
      this.UpdateCategories = false;
    },
  async  SaveUpdateCat() {
      this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
     await axios.post(`${this.$url}/api/UpdateCategories`, this.toUpdateObj).then((res) => {
        this.UpdateCategories = false;
        this.CategoriesInfo();
      });
    },
    async DeleteCat(item) {
      this.loadingdelete = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios
        .post(`${this.$url}/api/softDeleteCategories`, this.toDeleteObj)
        .then((res) => {
          this.CategoriesInfo();
          this.loadingdelete = false;
          this.deleteDialog = false;
        });
    },
  },
  watch: {
    AddCategories(val) {
      if (!val) {
        this.AddCatObj.CatName = null;
      }
    },
  },
};
</script>

<style></style>
