<template>
  <v-container fluid>
    <!-- LOADER -->
    <v-overlay :value="isLoading" z-index="9999">
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </v-overlay>
    <!-- END LOADER -->

    <v-card flat>
      <v-row dense>
        <!-- {{ deptList }} -->
        <v-col>
          <v-autocomplete
            dense
            v-model="SearchArea"
            outlined
            clearable
            :items="AreasTable"
            item-text="Area"
            item-value="AreaID"
            label="Area"
            style="height: 50px"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            dense
            v-model="SearchCategory"
            :items="CategoriesTable"
            item-text="CatName"
            item-value="CatID"
            label="Hazard Categories"
            outlined
            style="height: 50px"
            clearable
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            dense
            v-model="SearchDepartment"
            :items="deptList"
            item-text="DepartmentName"
            item-value="DepartmentCode"
            label="Department"
            outlined
            style="height: 50px"
            clearable
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            dense
            v-model="SearchStatus"
            outlined
            :items="StatusTable"
            item-text="Status"
            item-value="StatusID"
            label="Status"
            style="height: 50px"
            clearable
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-menu
            v-model="vmod_date"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="200px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dense
                v-model="dateConfirm"
                v-bind="attrs"
                v-on="on"
                outlined
                clearable
                label="Confirmed Date"
                style="height: 50px"
              >
              </v-text-field>
            </template>
            <v-date-picker
              v-model="dateConfirm"
              @input="vmod_date = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row dense>
        <!-- {{PatrolTable.map(r=>{
          return r.AreaID
        })}} -->
        <v-col cols="4">
          <div style="display: flex; justify-content: center">
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 30px;
              "
            >
              <small style="text-align: center; font-weight: bold">ALL</small>
              <div
                style="
                  width: 50px;
                  height: 50px;
                  text-align: center;
                  background-color: #c0c0c0;
                  padding: 10px 0;
                "
              >
                {{ PatrolTable.length }}
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 30px;
              "
            >
              <small style="text-align: center; font-weight: bold">PENDING</small>
              <div
                style="
                  width: 50px;
                  height: 50px;
                  text-align: center;
                  background-color: #dfe5f5;
                  padding: 10px 0;
                "
              >
                {{
                  PatrolTable.filter((res) => {
                    return res.Status == "Pending";
                  }).length
                }}
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 30px;
              "
            >
              <small style="text-align: center; font-weight: bold">ONGOING</small>
              <div
                style="
                  width: 50px;
                  height: 50px;
                  text-align: center;
                  background-color: #fada5e;
                  padding: 10px 0;
                "
              >
                {{
                  PatrolTable.filter((res) => {
                    return res.Status == "On-Going";
                  }).length
                }}
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center">
              <small style="text-align: center; font-weight: bold">CLOSED</small>
              <div
                style="
                  width: 50px;
                  height: 50px;
                  text-align: center;
                  background-color: #d21404;
                  padding: 10px 0;
                "
              >
                {{
                  PatrolTable.filter((res) => {
                    return res.Status == "Closed";
                  }).length
                }}
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3" align="right">
          <v-text-field
            dense
            outlined
            label="Search"
            v-model="Search"
            color="black"
            append-icon="mdi-magnify"
            style="margin-top: 20px"
          ></v-text-field>
        </v-col>
        <v-col cols="1" align="left">
          <v-tooltip bottom transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
              <v-btn icon small @click="printPDF()" v-on="on" style="margin-top: 20px">
                <v-icon size="35" color="black">mdi-printer</v-icon>
              </v-btn>
            </template>
            <span style="font-family: Arial"> Print Record </span>
          </v-tooltip>

          <v-tooltip bottom transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                small
                @click="AddPatrolRecord()"
                v-on="on"
                style="margin-top: 20px"
              >
                <v-icon size="35" color="black">mdi-plus-circle</v-icon>
              </v-btn>
            </template>
            <span style="font-family: Arial"> Add Record </span>
          </v-tooltip>

          <!-- TODO EMAIL -->
          <v-tooltip bottom transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                small
                v-on="on"
                style="margin-top: 20px"
                @click="send_email_to_many()"
                :disabled="emailDisable"
              >
                <v-icon size="35" color="black">mdi-email-send</v-icon>
              </v-btn>
            </template>
            <span style="font-family: Arial"> Send to Email </span>
          </v-tooltip>
        </v-col>
        <!-- <v-col cols="1" align="left">
           
          </v-col> -->

        <!-- <v-spacer></v-spacer> -->
        <!-- <v-col cols="2"> -->
        <!-- <v-autocomplete
              v-model="SelectArea"
              label="Area"
              dense
              outlined
              :items="AreasTable"
              item-text="Area"
              item-value="AreaID"
            ></v-autocomplete> -->
        <!-- </v-col> -->
        <!-- {{fromDate}}
        {{toDate}} -->
        <v-spacer />
        <v-col cols="2">
          <v-menu
            v-model="vmod_fromDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="200px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fromDate"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
                label="From"
                class="ml-2"
                color="black"
                style="margin-top: 20px"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="fromDate"
              @input="
                (vmod_fromDate = false),
                  toDate != null && toDate != undefined ? getPatrolViewByDate() : ''
              "
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="2">
          <v-menu
            v-model="vmod_sumtoDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="200px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="toDate"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
                label="To"
                class="ml-1 mr-2"
                color="black"
                style="margin-top: 20px"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="toDate"
              @input="(vmod_sumtoDate = false), getPatrolViewByDate()"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-simple-table
        style="border: 1px solid black; overflow-y: auto"
        :height="$vuetify.breakpoint.height - 260"
      >
        <thead>
          <tr>
            <th style="background-color: #444444; color: white"></th>
            <th style="background-color: #444444; color: white">No.</th>
            <th style="background-color: #444444; color: white">Control No</th>
            <th style="background-color: #444444; color: white">Date of Inspection</th>
            <th style="background-color: #444444; color: white">Location</th>
            <th style="background-color: #444444; color: white">Hazard Category</th>
            <th style="background-color: #444444; color: white">Observation</th>
            <th style="background-color: #444444; color: white">Hazard Picture</th>
            <th style="background-color: #444444; color: white">After Picture</th>
            <th style="background-color: #444444; color: white">Status</th>
            <th style="background-color: #444444; color: white">Confirmed Date</th>
            <th
              style="background-color: #444444; color: white"
              v-if="userInfo.value[0].UserLevel == 1 || userInfo.value[0].UserLevel == 3"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in SearchingPatrol" :key="i">
            <td>
              <v-checkbox v-model="item.isChecked" @click="addToArray(item)"></v-checkbox>
            </td>
            <td>
              {{ i + 1 }}
            </td>
            <td>
              {{ item.ControlNo }}<br />
              {{ item.EmployeeName }}
            </td>
            <td>{{ item.InspectionDate.slice(0, 10) }}</td>
            <td>
              {{
                deptList
                  .filter((res) => {
                    return res.DepartmentCode == item.DepartmentID;
                  })
                  .map((r) => {
                    return r.DepartmentName;
                  })[0]
              }}<br />
              {{ item.Location }}<br />
              {{ item.Area }}
            </td>
            <td>{{ item.CatName }}</td>
            <td>{{ item.Observation }}</td>
            <td>
              <v-img :src="img(item.HazardPicture)" width="80px"></v-img>
            </td>
            <td>
              <v-img :src="img(item.AfterPicture)" width="80px"></v-img>
            </td>
            <td>{{ item.Status }}</td>
            <td style="text-align: center">
              {{ item.ConfirmedDate == null ? "----" : item.ConfirmedDate.slice(0, 10) }}
            </td>
            <td
              v-if="userInfo.value[0].UserLevel == 1 || userInfo.value[0].UserLevel == 3"
            >
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    small
                    color="black"
                    v-on="on"
                    @click="OpenAddRecordUpdate(item)"
                    :disabled="
                      item.ConfirmedDate != null && userInfo.value[0].UserLevel != 3
                    "
                  >
                    <v-icon size="18">mdi-chevron-double-right</v-icon>
                  </v-btn>
                </template>
                <span style="font-family: Arial"> Details </span>
              </v-tooltip>
              <v-tooltip bottom transition="scroll-y-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    small
                    color="red"
                    v-on="on"
                    @click="
                      deleteDialog = true;
                      toDelete = { ...item };
                    "
                    :disabled="item.ConfirmedDate != null"
                  >
                    <v-icon size="18">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span style="font-family: Arial"> Delete </span>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-card flat color="#232323" class="mt-3" height="50px">
        <v-row>
          <v-col cols="2">
            <p style="color: white">
              Hazard Picture :
              {{
                PatrolTable.filter((res) => {
                  return res.HazardPicture;
                }).length
              }}
            </p>
          </v-col>
          <v-col cols="2">
            <p style="color: white">
              After Picture :
              {{
                PatrolTable.filter((res) => {
                  return res.AfterPicture;
                }).length
              }}
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <!--================================================================================ ADD ===========================================================================================-->
    <v-dialog v-model="AddRecord" width="800" persistent>
      <v-toolbar color="#FFEBB4" flat dense>
        <v-toolbar-title>Hazard Patrol Summary Details</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="clearAll()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container style="background-color: white">
        <v-card flat>
          <v-row dense class="pl-2 pr-2">
            <v-col cols="3" class="mt-2">
              <!-- {{AddpatrolsObj.EmployeeCode}} -->
              <!-- @keyup="EmployeeInfo()" -->
              <!-- <v-autocomplete
                v-model="AddpatrolsObj.EmployeeCode"
                label="Employee Code"
                dense
                outlined
                :items="SafetyOfficerTable"
                item-text="EmployeeCode"
                item-value="EmployeeCode"
                
                style="height: 50px"
              ></v-autocomplete> -->
              <v-text-field
                v-model="AddpatrolsObj.EmployeeCode"
                label="Employee Code"
                dense
                outlined
                filled
                background-color="#F7F1E5"
                style="height: 50px"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="mt-2">
              <!-- <v-text-field
                v-model="employeeInfo.EmployeeName"
                label="Safety Officer Name"
                dense
                outlined
                style="height: 50px"
              ></v-text-field> -->
              <v-autocomplete
                label="Safety Officer Name"
                outlined
                dense
                :items="SafetyOfficerTable"
                item-text="EmployeeName"
                item-value="EmployeeCode"
                v-model="AddpatrolsObj.EmployeeCode"
                style="height: 50px"
              >
                <template v-slot:item="data">
                  <v-list-item-avatar>
                    <img
                      :src="`http://hrd-adminweb/photos/${data.item.EmployeeCode}.jpg`"
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.EmployeeName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.Area }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <label style="font-size: 25px">{{ 0 }}</label
              ><br />
              <label style="font-size: 18px">No. of Days Resolve</label>
            </v-col>
          </v-row>
          <v-row dense class="pl-2 pr-2">
            <v-col cols="6">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Date of Inspection"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="AddpatrolsObj.InspectionDate"
                    outlined
                    filled
                    dense
                    v-on="on"
                    style="height: 50px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="AddpatrolsObj.InspectionDate"
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
              <v-autocomplete
                v-model="AddpatrolsObj.AreaID"
                label="Area"
                dense
                outlined
                :items="AreasTable"
                item-text="Area"
                item-value="AreaID"
                style="height: 50px"
                @change="GetDept()"
              ></v-autocomplete>
              <v-autocomplete
                v-model="AddpatrolsObj.DepartmentID"
                label="Concerned Department"
                filled
                background-color="#F7F1E5"
                dense
                outlined
                :disabled="!AddpatrolsObj.AreaID"
                :items="AddpatrolsObj.AreaID == 9 ? DeptTable : deptList"
                item-text="DepartmentName"
                item-value="DepartmentCode"
                style="height: 42px"
              ></v-autocomplete>
            </v-col>
            <v-col cols="6">
              <v-textarea
                v-model="AddpatrolsObj.CorrectiveAction"
                label="Corrective Action"
                dense
                outlined
                filled
                height="140px"
                style="height: 50px"
              ></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="AddpatrolsObj.Locations"
                    label="Location"
                    dense
                    outlined
                    filled
                    style="height: 50px"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="AddpatrolsObj.Location"
                    label="Location"
                    dense
                    outlined
                    filled
                    style="height: 50px"
                  ></v-text-field
                ></v-col>
              </v-row>

              <v-autocomplete
                v-model="AddpatrolsObj.CatID"
                label="Hazard Category"
                dense
                outlined
                filled
                background-color="#F7F1E5"
                :items="CategoriesTable"
                item-text="CatName"
                item-value="CatID"
                style="height: 50px"
              ></v-autocomplete>
              <v-textarea
                v-model="AddpatrolsObj.Observation"
                outlined
                filled
                label="Observation"
                height="100px"
                style="height: 110px"
              ></v-textarea>
              <label for="file">Hazard Picture: </label>
              <input
                type="file"
                ref="file"
                id="file1"
                @change="onFileChange"
                accept="image/png, image/jpeg"
                style="
                  width: 300px;
                  max-width: 100%;
                  color: #444;
                  padding: 5px;
                  background: #fff;
                "
              />
              <v-card
                elevation="0"
                height="180"
                width="500"
                style="border: 1px solid gray"
              >
                <v-img class="style" v-if="image" :src="image" />
              </v-card>
              <v-textarea
                class="mt-2"
                v-model="AddpatrolsObj.ImmediateActionTaken"
                label="Immediate Action Taken"
                dense
                filled
                outlined
                height="100px"
              ></v-textarea>
            </v-col>
            <v-col cols="6">
              <!-- <input type="file" id="file2" @change="onFileChange2" /> -->
              <label for="file">After Picture: </label>
              <input
                type="file"
                ref="file2"
                id="file2"
                @change="onFileChange2"
                accept="image/png, image/jpeg"
                style="
                  width: 300px;
                  max-width: 100%;
                  color: #444;
                  padding: 5px;
                  background: #fff;
                "
              />
              <v-card
                elevation="0"
                height="180"
                width="500"
                style="border: 1px solid gray"
              >
                <v-img class="style" v-if="image2" :src="image2" />
              </v-card>
              <!-- <v-text-field label="Follow Up Dates" dense outlined></v-text-field> -->
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="mt-2"
                    label="Implementation Date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="AddpatrolsObj.ImplementationDate"
                    outlined
                    dense
                    filled
                    v-on="on"
                    style="height: 50px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="AddpatrolsObj.ImplementationDate"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
              <v-autocomplete
                v-model="AddpatrolsObj.StatusID"
                label="Status"
                dense
                outlined
                :items="StatusTable"
                item-text="Status"
                item-value="StatusID"
                style="height: 50px"
              ></v-autocomplete>
              <v-autocomplete
                v-if="AddpatrolsObj.StatusID == 3"
                v-model="AddpatrolsObj.ReasonID"
                :items="ReasonTable"
                item-text="Reason"
                item-value="ReasonID"
                label="Reason"
                dense
                outlined
                style="height: 50px"
              ></v-autocomplete>
              <v-menu
                v-if="AddpatrolsObj.StatusID == 3"
                v-model="menu3"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Target Date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="AddpatrolsObj.TargetDate"
                    outlined
                    dense
                    v-on="on"
                    style="height: 50px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="AddpatrolsObj.TargetDate"
                  @input="menu3 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn color="#ECCCB2" width="100" @click="SaveAddRecord()">
              <v-icon>mdi-content-save</v-icon>Save
            </v-btn>
            <v-btn
              width="100"
              style="color: white"
              :style="
                !isActive ? 'background-color: #19A7CE;' : 'background-color: #567189;'
              "
              :disabled="userInfo.value[0].UserLevel != 3"
              @click="saveConfirmed(toUpdateObj)"
            >
              {{ !isActive ? "Confirm" : "Unconfirm" }}
            </v-btn>
            <!-- <v-btn width="100" disabled> Confirm </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--=============================================================================== UPDATE ===================================================================================-->
    <v-dialog v-model="UpdateRecord" width="800" persistent>
      <v-toolbar color="#FFEBB4" dense flat>
        <v-toolbar-title>Update</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="clearAll()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container style="background-color: white">
        <!-- {{toUpdateObj}} -->
        <v-card flat>
          <v-row dense class="pl-2 pr-2">
            <v-col cols="4">
              <v-text-field
                v-model="toUpdateObj.ControlNo"
                label="Control No"
                dense
                outlined
                readonly
                style="height: 50px"
              ></v-text-field>
            </v-col>
            <v-col cols="8"></v-col>
            <v-col cols="3">
              <v-text-field
                v-model="toUpdateObj.EmployeeCode"
                label="Employee Code"
                dense
                outlined
                background-color="#F7F1E5"
                readonly
                style="height: 50px"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                label="Safety Officer Name"
                outlined
                dense
                :items="SafetyOfficerTable"
                item-text="EmployeeName"
                item-value="EmployeeCode"
                v-model="toUpdateObj.EmployeeCode"
                style="height: 50px"
              >
                <template v-slot:item="data">
                  <v-list-item-avatar>
                    <img
                      :src="`http://hrd-adminweb/photos/${data.item.EmployeeCode}.jpg`"
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ data.item.EmployeeName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ data.item.Area }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="3" style="text-align: center">
              <label style="font-size: 25px">
                {{
                  toUpdateObj.ClosedDate != null
                    ? Math.floor(
                        (new Date(toUpdateObj.ClosedDate) -
                          new Date(toUpdateObj.CreatedDate)) /
                          (1000 * 3600 * 24)
                      )
                    : 0
                }}</label
              >
              <label style="font-size: 18px">No. of Days</label>
            </v-col>
          </v-row>
          <v-row dense class="pl-2 pr-2">
            <v-col cols="6">
              <v-menu
                v-model="menu1Update"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Date of Inspection"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="toUpdateObj.InspectionDate"
                    outlined
                    filled
                    dense
                    v-on="on"
                    style="height: 50px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="toUpdateObj.InspectionDate"
                  @input="menu1Update = false"
                ></v-date-picker>
              </v-menu>
              <v-autocomplete
                v-model="toUpdateObj.AreaID"
                label="Area"
                dense
                outlined
                :items="AreasTable"
                item-text="Area"
                item-value="AreaID"
                style="height: 50px"
              ></v-autocomplete>
              <v-autocomplete
                v-model="toUpdateObj.DepartmentID"
                label="Concerned Department"
                dense
                outlined
                background-color="#F7F1E5"
                :items="deptList"
                item-text="DepartmentName"
                item-value="DepartmentCode"
                style="height: 42px"
              ></v-autocomplete>
            </v-col>
            <v-col cols="6">
              <v-textarea
                v-model="toUpdateObj.CorrectiveAction"
                label="Corrective Action"
                dense
                outlined
                filled
                height="140px"
                style="height: 50px"
              ></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="toUpdateObj.Location"
                label="Location"
                dense
                outlined
                filled
                style="height: 50px"
              ></v-text-field>
              <v-autocomplete
                v-model="toUpdateObj.CatID"
                label="Hazard Category"
                dense
                outlined
                background-color="#F7F1E5"
                :items="CategoriesTable"
                item-text="CatName"
                item-value="CatID"
                style="height: 50px"
              ></v-autocomplete>

              <v-textarea
                v-model="toUpdateObj.Observation"
                outlined
                filled
                label="Observation"
                height="100px"
                style="height: 110px"
              ></v-textarea>
              <label for="file">Hazard Picture: </label>
              <input
                type="file"
                ref="file"
                @change="onFileChange"
                accept="image/png, image/jpeg"
                style="
                  width: 300px;
                  max-width: 100%;
                  color: #444;
                  padding: 5px;
                  background: #fff;
                "
              />
              <v-img class="style" v-if="image" :src="image" />
              <v-textarea
                class="mt-2"
                v-model="toUpdateObj.ImmediateActionTaken"
                label="Immediate Action Taken"
                dense
                outlined
                filled
                height="100px"
              ></v-textarea>
            </v-col>
            <v-col cols="6">
              <label for="file">After Picture: </label>
              <input
                type="file"
                ref="file2"
                @change="onFileChange2"
                accept="image/png, image/jpeg"
                style="
                  width: 300px;
                  max-width: 100%;
                  color: #444;
                  padding: 5px;
                  background: #fff;
                "
              />
              <v-img class="style" v-if="image2" :src="image2" />
              <v-textarea
                class="mt-2"
                v-model="toUpdateObj.FollowUpDates"
                label="Follow Updates"
                readonly
                dense
                outlined
                filled
                height="100px"
              ></v-textarea>
              <v-menu
                v-model="menu2Update"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="mt-2"
                    label="Implementation Date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="toUpdateObj.ImplementationDate"
                    outlined
                    filled
                    dense
                    v-on="on"
                    style="height: 50px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="toUpdateObj.ImplementationDate"
                  @input="menu2Update = false"
                ></v-date-picker>
              </v-menu>
              <v-autocomplete
                v-model="toUpdateObj.StatusID"
                label="Status"
                dense
                outlined
                :items="StatusTable"
                item-text="Status"
                item-value="StatusID"
                style="height: 50px"
              ></v-autocomplete>
              <v-autocomplete
                v-if="toUpdateObj.StatusID == 3"
                v-model="toUpdateObj.ReasonID"
                :items="ReasonTable"
                item-text="Reason"
                item-value="ReasonID"
                label="Reason"
                dense
                outlined
                style="height: 50px"
              ></v-autocomplete>
              <v-menu
                v-if="toUpdateObj.StatusID == 3"
                v-model="menu3"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Target Date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="toUpdateObj.TargetDate"
                    outlined
                    dense
                    v-on="on"
                    style="height: 50px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="toUpdateObj.TargetDate"
                  @input="menu3 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer />
            <v-btn width="100" @click="UpdateRecordSave()" color="#ECCCB2"
              ><v-icon>mdi-content-save</v-icon> Save
            </v-btn>
            <!-- <v-btn 
            width="100"
            dark
            :style="!isActive ? 'background-color: #19A7CE;' : 'background-color: #9BA4B5;'"
            :disabled="userInfo.value[0].UserLevel != 3"
            @click="saveConfirmed(toUpdateObj)"
          >
          {{!isActive ? 'Confirm' : 'Unconfirm'}}
          </v-btn> -->
            <v-btn
              width="100"
              style="color: white"
              :style="
                !isActive ? 'background-color: #19A7CE;' : 'background-color: #567189;'
              "
              :disabled="userInfo.value[0].UserLevel != 3"
              @click="saveConfirmed(toUpdateObj)"
            >
              {{ !isActive ? "Confirm" : "Unconfirm" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
    <!--================================================================================================= DELETE =================================================================================================-->
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
              @click="Delete(toDelete)"
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
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import axios from "axios";
import moment from "moment";
import { mapState } from "vuex";

import imageToBase64 from "image-to-base64/browser";

export default {
  props: {
    propsImageBase64: {
      type: Array,
    },
  },
  data() {
    return {
      header_API: "db588403f0a1d3b897442a28724166b4",
      emailDisable: true,
      checkboxArr: [],
      isLoading: false,
      isActive: false,
      menu1: null,
      menu2: null,
      menu3: null,
      menu1Update: null,
      menu2Update: null,
      deleteDialog: false,
      loadingdelete: false,
      GetYear: "",
      GetMonth: "",
      PatrolTable: [],
      Search: "",
      toDate: "",
      fromDate: "",
      dateConfirm: "",
      newArray: [],
      vmod_fromDate: false,
      vmod_sumtoDate: false,
      vmod_date: false,
      AddRecord: false,
      UpdateRecord: false,
      toUpdateObj: {},
      file: null,
      image: null,
      file2: null,
      image2: null,
      AreasTable: [],
      ReasonTable: [],
      infoData: [],
      CategoriesTable: [],
      StatusTable: [],
      DeptTable: [],
      deptList: [],
      SafetyOfficerTable: [],
      EmployeeInfoURL: "http://hrd-adminweb/api/basicinfo",
      HeadersConfig: {
        headers: {
          "master-api": "db588403f0a1d3b897442a28724166b4",
        },
      },
      statusItems: [
        { name: "Pending", id: "Pending" },
        { name: "On-going", id: "On-going" },
        { name: "Closed", id: "Closed" },
      ],
      employeeInfo: {},
      AddpatrolsObj: {},
      toConfirmObj: {},
      SearchArea: "",
      SearchCategory: "",
      SearchDepartment: "",
      SearchStatus: "",
      newControlNo: "",
      NewCompanyID: "",
      GetYear: moment().format("YY"),
      GetMonth: moment().format("MM"),
      AddpatrolsObj2: {},
    };
  },
  async created() {
    this.fromDate = moment().format("YYYY-MM-DD");
    this.toDate = moment().format("YYYY-MM-DD");
    await Promise.all([
      this.getPatrolViewByDate(),
      this.getSafetOfficer(),
      this.AreasInfo(),
      this.CategoriesInfo(),
      this.chooseDept(),
      this.GetStatus(),
      this.GetAllDeptAndSection(),
      // this.GetDept();
    ]);
  }, //end of created
  computed: {
    ...mapState(["userInfo"]),
    SearchingPatrol() {
      return this.PatrolTable.filter((item) => {
        if (
          this.Search &&
          !Object.values(item).some((val) =>
            String(val).toLowerCase().includes(this.Search.toLowerCase())
          )
        ) {
          return false;
        }
        if (this.SearchStatus && item.StatusID !== this.SearchStatus) {
          return false;
        }
        if (this.SearchArea && item.AreaID !== this.SearchArea) {
          return false;
        }
        if (this.SearchCategory && item.CatID !== this.SearchCategory) {
          return false;
        }
        if (this.SearchDepartment && item.DepartmentID !== this.SearchDepartment) {
          return false;
        }
        if (this.dateConfirm) {
          if (item.ConfirmedDate) {
            item.ConfirmedDate = item.ConfirmedDate.slice(0, 10);
            if (item.ConfirmedDate !== this.dateConfirm) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      });
    },
  },
  methods: {
    getFromMyDBDepartment() {},
    async GetAllDeptAndSection() {
      let userCompCode = this.userInfo.value[0].CompanyCode === "002" ? "20" : "30";
      axios
        .get(
          `http://hrd-adminweb/api/company/department/section/${userCompCode}`,
          this.HeadersConfig
        )
        .then((res) => {
          let result = res.data.reduce((accumulator, current) => {
            let departmentName = current.DepartmentName;

            // Create an empty object
            let sectionInfo = {};
            // Set the value with the key as SectionCode
            sectionInfo[current.SectionCode] = current.SectionName;

            if (!accumulator[departmentName]) {
              accumulator[departmentName] = [sectionInfo];
            } else {
              accumulator[departmentName].push(sectionInfo);
            }

            return accumulator;
          }, {});

          console.log(result);
        });
    },
    async send_email_to_many() {
      this.isLoading = true;
      for (const data of this.checkboxArr) {
        try {
          const res = await axios.post(`${this.$url}/api/send_email`, {
            ControlNo: data.ControlNo,
            EmailSender: data.EmailSender,
          });

          if (res.data.error) {
            this.$toast.warning(res.data.error, "Caution", {
              position: "topRight",
              timeout: 2000,
              color: "#FF0000",
            });
          } else if (res.data.success) {
            this.$toast.success(res.data.success, "Success!", {
              position: "topRight",
              timeout: 2000,
              color: "#FFD966",
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
      await this.getPatrolViewByDate();
      this.checkboxArr = [];
      this.isLoading = false;
    },
    addToArray(item) {
      item.EmailSender = this.userInfo.value[0].UserID;
      // Find the index of "item" in "checkboxArr" array
      const index = this.checkboxArr.indexOf(item);

      // Check if "item" is found in "checkboxArr"
      if (index > -1) {
        // If "item" exists, remove it from "checkboxArr"
        this.checkboxArr.splice(index, 1);
      } else {
        // If "item" doesn't exist, add it to "checkboxArr"
        this.checkboxArr.push(item);
      }

      // Check if there is at least one element with "Status" equal to "Closed" in "checkboxArr"
      const hasClosedStatus = this.checkboxArr.some((el) => el.Status === "Closed");

      // Set "emailDisable" based on conditions
      this.emailDisable = hasClosedStatus || this.checkboxArr.length === 0;
    },
    AddObj(item) {
      this.AddpatrolsObj.EmployeeCode = item.EmployeeCode;
      this.AddpatrolsObj.Area = item.Area;
    },
    async UpdateRecordSave() {
      // FIRST PICTURE --------------------
      const handleFileUploadAndMove = async (
        fileRef,
        filenameProp,
        pictureProp,
        typeSuffix
      ) => {
        const file = this.$refs[fileRef].files[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("type", typeSuffix);

          try {
            const response = await axios.post(`${this.$url}/api/upload`, formData);
            this.toUpdateObj[filenameProp] = response.data.filename;
            this.toUpdateObj[
              pictureProp
            ] = `public\\pictures\\${this.toUpdateObj.ControlNo}\\${response.data.filename}`;

            try {
              await axios.post(`${this.$url}/api/move`, {
                oldPath: response.data.path,
                newPath: this.toUpdateObj[pictureProp],
              });
              console.log(`File moved successfully, ${fileRef}!`);
            } catch (moveError) {
              console.error(moveError);
            }
          } catch (uploadError) {
            console.error(uploadError);
          }
        }
      };

      // FIRST PICTURE (BEFORE) --------------------
      await handleFileUploadAndMove(
        "file",
        "HazardPictureFilename",
        "HazardPicture",
        "-BEFORE"
      );

      // SECOND PICTURE (AFTER) --------------------
      await handleFileUploadAndMove(
        "file2",
        "AfterPictureFilename",
        "AfterPicture",
        "-AFTER"
      );
      await axios
        .post(`${this.$url}/api/postUpdateRecord`, this.toUpdateObj)
        .then((res) => {
          this.getPatrolViewByDate();
          this.UpdateRecord = false;
        });
    },
    saveConfirmed(item) {
      // console.log('item',item)
      if (!this.isActive) {
        this.isActive = true;
        this.toConfirmObj.ControlNo = item.ControlNo;
        this.toConfirmObj.ConfirmedDate = moment(this.fromDate).format("YYYY-MM-DD");
        // this.toConfirmObj.StatusID = 4
        axios.post(`${this.$url}/api/confirmedHPM`, this.toConfirmObj).then((res) => {
          this.getPatrolViewByDate();
          this.$toast.success("Record Confirmed", "Success!", {
            position: "bottomRight",
            color: "#FFD966",
            timeout: 1800,
          });
          // console.log(
          //   "Confirmed! , Status 4",
          //   this.toConfirmObj.ControlNo,
          //   this.toConfirmObj.StatusID
          // );
        });
      } else {
        this.isActive = false;
        this.toConfirmObj.ControlNo = item.ControlNo;
        this.toConfirmObj.ConfirmedDate = null;
        // this.toConfirmObj.StatusID = 2;
        axios.post(`${this.$url}/api/confirmedHPM`, this.toConfirmObj).then((res) => {
          this.getPatrolViewByDate();
          // console.log(
          //   "Unconfirmed!, Status 2",
          //   this.toConfirmObj.ControlNo,
          //   this.toConfirmObj.StatusID
          // );
        });
      }
    },
    // saveUnconfirmed(item){
    //   this.toConfirmObj.ControlNo = item;
    //   axios.post("api/unconfirmedHPM", this.toConfirmObj).then((res) => {
    //     this.getPatrolViewByDate();
    //     console.log('Confirmed!',this.toConfirmObj.ControlNo);
    //   });
    // },
    img(img) {
      if (img != null) {
        let link = img.replace("\\hrdapps9\\HazardPatrolMonitoring\\", "");
        return `http://hrdapps9:8888/ftp/pics/${link}`;
      } else {
        return `http://hrdapps9:8888/ftp/pics/npa.jpg`;
      }
    },
    async EmployeeInfo() {
      await axios
        .get(
          `${this.EmployeeInfoURL}/${this.AddpatrolsObj.EmployeeCode}`,
          this.HeadersConfig
        )
        .then((res) => {
          if (res.data[0]) {
            //pag may laman
            this.employeeInfo = res.data[0];
          }
        });
    },
    getEmpInfo() {
      if (this.AddpatrolsObj.EmployeeCode != "") {
        axios
          .get(`${this.$url}/api/SafetyOfficerInfo/${this.AddpatrolsObj.EmployeeCode}`)
          .then((res) => {
            this.infoData = res.data;
            if (this.infoData.length == 1) {
              this.infoData.map((r) => {
                this.AddpatrolsObj.EmployeeCode = r.EmployeeCode;
                this.AddpatrolsObj.AreaID = r.AreaID;
                return this.AddpatrolsObj;
              });
            } else if (this.infoData.length == 0) {
              this.AddpatrolsObj.EmployeeCode = "";
              this.AddpatrolsObj.AreaID = "";
              return this.AddpatrolsObj;
            }
          });
      }
    },
    async getSafetOfficer() {
      axios.get(`${this.$url}/api/SafetyOfficerInfo`).then((res) => {
        this.SafetyOfficerTable = res.data.filter((rec) => {
          return rec.CompanyCode == this.userInfo.value[0].CompanyCode;
        });
      });
    },
    async GetDept() {
      if (this.AddpatrolsObj.AreaID == 9) {
        await axios.get(`${this.$url}/api/DeptInfo`).then((res) => {
          this.DeptTable = res.data.filter((rec) => {
            return rec.FSECompanyCode == this.userInfo.value[0].CompanyCode;
          });
        });
      }
    },
    async chooseDept() {
      if (!this.deptList.length) {
        this.isLoading = true;
        let myCompCode = this.userInfo.value[0].CompanyCode === "003" ? 30 : 20;
        await axios
          .get(`http://hrd-adminweb/api/company/department/${myCompCode}`, {
            headers: { "master-api": this.header_API },
          })
          .then(
            (res) => (this.deptList = res.data.filter((rec) => rec.DeletedDate == null))
          )
          .finally(() => (this.isLoading = false));
      }
    },
    async GetStatus() {
      axios.get(`${this.$url}/api/StatusInfo`).then((res) => {
        this.StatusTable = res.data.filter((rec) => {
          return rec.DeletedDate == null;
        });
      });
    },
    GetReason() {
      axios.get(`${this.$url}/api/ReasonInfo`).then((res) => {
        this.ReasonTable = res.data;
      });
    },
    async AreasInfo() {
      axios.get(`${this.$url}/api/AreasInfo`).then((res) => {
        this.AreasTable = res.data.filter((rec) => {
          return (
            rec.CompanyCode == this.userInfo.value[0].CompanyCode &&
            rec.DeletedDate == null
          );
        });
      });
    },
    async CategoriesInfo() {
      axios.get(`${this.$url}/api/CategoriesInfo`).then((res) => {
        this.CategoriesTable = res.data.filter((rec) => {
          return (
            rec.CompanyCode == this.userInfo.value[0].CompanyCode &&
            rec.DeletedDate == null
          );
        });
      });
    },
    filterSearch(val) {
      axios.get(`${this.$url}/api/Patrolview/${val}`).then((res) => {
        this.PatrolTable = res.data;
      });
    },
    async getPatrolViewByDate() {
      this.EmployeeInfo();
      if (this.fromDate && this.toDate) {
        let dateNow = {
          from: moment(this.fromDate).format("YYYY/MM/DD 00:00:00"),
          to: moment(this.toDate).format("YYYY/MM/DD 23:59:59"),
          company: this.userInfo.value[0].CompanyCode,
        };
        axios.post(`${this.$url}/api/getPatrolViewByDate`, dateNow).then(async (res) => {
          res.data = await Promise.all(
            res.data.map(async (item) => {
              const result = await axios.post(`${this.$url}/api/getEmailDate`, {
                controlNo: item.ControlNo,
              });
              return result.data[0]
                ? { ...item, ...result.data[0] }
                : {
                    ...item,
                    ...{ emaildate1: null, emaildate2: null, emaildate3: null },
                  };
            })
          );
          // console.log(res.data);
          this.PatrolTable = res.data.filter(async (rec) => {
            rec.CompanyID == this.userInfo.value[0].CompanyCode;
            let hold = "";
            if (rec.HazardPicture != null) {
              hold = rec.HazardPicture.replace(
                "\\\\hrdapps9\\HazardPatrolMonitoring\\",
                "http://hrdapps9:8888/ftp/pics/"
              );
            } else {
              hold = "http://hrdapps9:8888/ftp/pics/npa.jpg";
            }
            let hold2 = "";
            if (rec.AfterPicture != null) {
              hold2 = rec.AfterPicture.replace(
                "\\\\hrdapps9\\HazardPatrolMonitoring\\",
                "http://hrdapps9:8888/ftp/pics/"
              );
            } else {
              hold2 = "http://hrdapps9:8888/ftp/pics/npa.jpg";
            }
            await imageToBase64(`${hold}`).then((response) => {
              rec.holdData = `data:image/png;base64,${response}`;
            });
            await imageToBase64(`${hold2}`).then((response) => {
              rec.holdData2 = `data:image/png;base64,${response}`;
            });
            return rec;
          });
        });
      }

      // this.EmployeeInfo();
      this.GetStatus();
      // this.GetDept();
      this.chooseDept();
    },

    AddPatrolRecord() {
      this.AreasInfo();
      this.CategoriesInfo();
      this.chooseDept();
      this.GetReason();
      this.AddRecord = true;
    },
    // NOTE - CLEAR ALL
    clearAll() {
      // console.log(document.getElementById("file1"));
      // if (document.getElementById("file1").value) {
      //   document.getElementById("file1").value = "";
      // }
      // if (document.getElementById("file2").value) {
      //   document.getElementById("file2").value = "";
      // }
      this.$refs.file.value = "";
      this.$refs.file2.value = "";
      this.image = null;
      this.image2 = null;
      this.AddpatrolsObj = {};
      this.toUpdateObj = {};
      this.UpdateRecord = false;
      this.AddRecord = false;
    },
    async SaveAddRecord() {
      this.isLoading = true;
      // console.log("dito");
      this.AddpatrolsObj.CreatedDate = moment().format("YYYY-MM-DD");
      this.AddpatrolsObj.UpdatedDate = moment().format("YYYY-MM-DD");
      this.AddpatrolsObj.UpdatedBy = this.userInfo.value[0].UserID;
      this.AddpatrolsObj.CompanyID = this.userInfo.value[0].CompanyCode;
      this.AddpatrolsObj.FSECompanyCode = this.userInfo.value[0].CompanyCode;
      /* ----------------------------- UPLOADING PHOTO ---------------------------- */
      await axios
        .post(`${this.$url}/api/generateControlNo`, this.AddpatrolsObj)
        .then((res) => {
          this.AddpatrolsObj.controlNo = res.data;
        });
      const handleFileOperation = async (fileRef, propName1, propName2) => {
        const file = this.$refs[fileRef].files[0];
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await axios.post(`${this.$url}/api/upload`, formData);
          // Move file to another folder
          this.AddpatrolsObj[propName1] = response.data.filename;
          this.AddpatrolsObj[
            propName2
          ] = `public\\pictures\\${this.AddpatrolsObj.controlNo}\\${response.data.filename}`;
          try {
            await axios.post(`${this.$url}/api/move`, {
              oldPath: response.data.path,
              newPath: this.AddpatrolsObj[propName2],
              mode: response.data.mode,
            });
            console.log(`File moved successfully, ${fileRef}!`);
          } catch (innerError) {
            console.log(innerError);
          }
        } catch (outerError) {
          console.log(outerError);
        }
      };

      // FIRST PICTURE --------------------
      await handleFileOperation("file", "HazardPictureFilename", "HazardPicture");

      // SECOND PICTURE --------------------
      await handleFileOperation("file2", "AfterPictureFilename", "AfterPicture");
      /* --------------------------- UPLOADING PHOTO END -------------------------- */

      await axios
        .post(`${this.$url}/api/postAddRecord`, this.AddpatrolsObj)
        .then(async (res) => {
          // console.log('dataaaa',res.data);
          await this.getPatrolViewByDate();
          await axios
            .get(`${this.$url}/api/send_email`, { ControlNo: res.data })
            .then(() => {
              // console.log(rec.data);
            });
        })
        .finally(() => {
          this.AddRecord = false;
        });
      this.isLoading = false;
    },
    OpenAddRecordUpdate(item) {
      item.FollowUpDates = [item.emaildate1, item.emaildate2, item.emaildate3]
        .filter((date) => date)
        .map((date) => moment(date).format("YYYY-MM-DD"))
        .join("\n");
      this.AreasInfo();
      this.CategoriesInfo();
      this.chooseDept();
      this.GetReason();
      this.GetStatus();
      if (item.ConfirmedDate == null) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      this.toUpdateObj = { ...item };
      this.toUpdateObj.ImplementationDate = this.toUpdateObj.ImplementationDate.slice(
        0,
        10
      );
      this.toUpdateObj.InspectionDate = this.toUpdateObj.InspectionDate.slice(0, 10);
      // this.toUpdateObj.TargetDate = this.toUpdateObj.TargetDate.slice(0, 10);
      this.image = this.toUpdateObj.holdData;
      this.image2 = this.toUpdateObj.holdData2;
      this.UpdateRecord = true;
      // this.toConfirmObj.ConfirmedDate = this.toUpdateObj.ConfirmedDate
    },
    // SaveUpdateDept() {
    //   this.toUpdateObj.UpdatedDate = moment().format("YYYY-MM-DD");
    //   this.toUpdateObj.UpdatedBy = this.userInfo.value[0].UserID;
    //   axios.post("api/postUpdateRecord", this.toUpdateObj).then((res) => {
    //     this.UpdateRecord = false;
    //     this.getPatrolViewByDate();
    //   });
    // },
    onFileChange() {
      const reader = new FileReader();
      reader.readAsDataURL(this.$refs.file.files[0]);
      reader.onload = (e) => {
        this.image = e.target.result;
      };
    },
    async onFileChange2() {
      const reader = new FileReader();
      reader.readAsDataURL(this.$refs.file2.files[0]);
      reader.onload = (e) => {
        this.image2 = e.target.result;
      };
    },
    async Delete(item) {
      this.loadingdelete = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.toDeleteObj = { ...item };
      this.toDeleteObj.DeletedDate = moment().format("YYYY-MM-DD");
      axios.post(`${this.$url}/api/softDeleteHPM`, this.toDeleteObj).then((res) => {
        this.getPatrolViewByDate();
        this.loadingdelete = false;
        this.deleteDialog = false;
        // console.log("deleted");
      });
    },

    async pushItems(table1, r, ctr) {
      if (ctr % 9 == 0) {
        // header
        var headers = [
          "Control No",
          "Date of Inspection",
          "Department",
          "Observation",
          "Hazard Picture",
          "Immediate Action Taken",
          "Corrective Action",
          "After Picture",
          "Date Implemented",
        ];

        if (this.userInfo.value[0].CompanyCode == "003") {
          headers.splice(2, 0, "Area");
          headers.splice(4, 0, "Hazard Category");
          headers.push("Status", "Days Resolved");
        } else {
          headers.unshift("SAFETY OFFICER");
        }

        table1.body.push(
          headers.map((header) => {
            return {
              text: header,
              alignment: "center",
              bold: true,
              fillColor: "#68B984",
              color: "black",
              fontSize: 12,
              pageBreak: "before",
            };
          })
        );
      }
      // content
      var body = [
        { text: r.ControlNo, fontSize: 9 },
        { text: r.InspectionDate.split(" ")[0], fontSize: 9 },
        { text: r.DepartmentName + "/" + r.Location, fontSize: 9 },
        { text: r.Observation, fontSize: 9 },
        { image: r.holdData, width: 70, height: 70, alignment: "center" },
        { text: r.ImmediateActionTaken, fontSize: 9 },
        { text: r.CorrectiveAction, fontSize: 9 },
        { image: r.holdData2, width: 70, height: 70, alignment: "center" },
        { text: r.ImplementationDate.split(" ")[0], fontSize: 9 },
      ];

      if (this.userInfo.value[0].CompanyCode == "003") {
        body.splice(2, 0, { text: r.Area, fontSize: 9 });
        body.splice(4, 0, { text: r.CatName, fontSize: 9 });
        body.push({ text: r.Status, fontSize: 9 });
        body.push({ text: r.UpdatedBy, fontSize: 9 });
      } else {
        body.unshift({ text: r.EmployeeName, fontSize: 9 });
      }

      table1.body.push(body);
    },
    async printPDF() {
      let table1 = { body: [] };
      // Function to generate header
      const generateHeader = (headers) => {
        return headers.map((header) => ({
          text: header,
          alignment: "center",
          bold: true,
          fillColor: "#68B984",
          color: "black",
          fontSize: 12,
        }));
      };

      // Content
      const hrdContent = [
        "Control No",
        "Date of Inspection",
        "Area",
        "Department / Location",
        "Hazard Category",
        "Observation",
        "Hazard Picture",
        "Immediate Action Taken",
        "Corrective Action",
        "After Picture",
        "Date Implemented",
        "Status",
        "Days Resolved",
      ];
      const htiContent = [
        "SAFETY OFFICER",
        "Control No",
        "Date of Inspection",
        "Department / Location",
        "Observation",
        "Hazard Picture",
        "Immediate Action Taken",
        "Corrective Action",
        "After Picture",
        "Date Implemented",
      ];

      if (this.userInfo.value[0].CompanyCode == "003") {
        // HRD
        table1.widths = [75, 75, 75, 75, 75, 100, 75, 100, 80, 75, 75, 75, 75];
        table1.body.push(generateHeader(hrdContent));
      } else {
        // HTI
        table1.widths = [80, 90, 90, 100, 130, 120, 130, 130, 120, 70];
        table1.body.push(generateHeader(htiContent));
      }

      // [...this.PatrolTable].filter(async (r) => {
      // if (this.checkboxArr.length > 0) {
      //   [...this.checkboxArr].filter(async (r) => {
      //     ctr++;
      //     await this.pushItems(table1, r, ctr);
      //   });
      // } else {
      //   [...this.PatrolTable].filter(async (r) => {
      //     ctr++;
      //     await this.pushItems(table1, r, ctr);
      //   });
      // }
      // let arr = this.checkboxArr.length > 0 ? this.checkboxArr : this.PatrolTable;
      let arr = this.checkboxArr.length > 0 ? this.checkboxArr : this.SearchingPatrol;
      // var ctr = 0;
      await Promise.all(
        arr.map(async (r, ctr) => {
          console.log("r", r);
          this.pushItems(table1, r, ++ctr);
        })
      );
      // [...arr].filter(async (r) => {
      //   ctr++;
      //   await this.pushItems(table1, r, ctr);
      // });
      // NOTE - end filter
      var documentHeader =
        this.userInfo.value[0].CompanyCode == "003"
          ? [
              {
                text: "Document No. : HFSxx-003-00",
                italics: true,
                color: "gray",
                fontSize: 15,
              },
              {
                text: "Revision Date : 2016/08/20",
                italics: true,
                color: "gray",
                fontSize: 15,
              },
            ]
          : [
              {
                text: "Date Covered: ",
                fontSize: 15,
              },
              {
                text: moment(this.fromDate).format("MMMM DD, YYYY (dddd)"),
                fontSize: 15,
              },
            ];
      var allAreasSame = arr.every((item, i, array) => item.Area === array[0].Area);
      // if (arr.length > 1) {
      //   var allAreasSame = arr.every((item, i, array) => {
      //     return item.Area === array[0].Area;
      //   });
      // } else {
      //   var allAreasSame = true;
      // }

      var PDFHeader =
        this.userInfo.value[0].CompanyCode == "003"
          ? "SAFETY SUMMARY REPORT"
          : "HAZARD SUMMARY REPORT";
      var compHeader =
        this.userInfo.value[0].CompanyCode == "003"
          ? "H.R.D. SINGAPORE PTE LTD"
          : allAreasSame
          ? arr[0].Area
          : "";
      var dept =
        this.userInfo.value[0].CompanyCode == "003"
          ? "H.R.D Pte., Ltd."
          : "House Technology Industries Pte., Ltd.";

      var docDefinition = {
        pageSize: "A3",
        pageOrientation: "landscape",
        pageMargins: [15, 65, 15, 30],
        content: [
          {
            text: "",
          },
          {
            table: {
              widths: ["100%"],
              body: [
                [
                  {
                    table: table1,
                    body: table1.body,
                  },
                ],
              ],
            },
          },
        ],
        header: function () {
          return [
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
                            [""],
                            [
                              {
                                text: compHeader,
                                fontSize: 18,
                                bold: true,
                                alignment: "center",
                              },
                            ],
                          ],
                        },
                        layout: "headerLineOnly",
                      },
                    ],
                    [
                      {
                        text: dept,
                        fontSize: 15,
                        alignment: "center",
                        bold: true,
                      },
                      {
                        text: PDFHeader,
                        fontSize: 20,
                        alignment: "center",
                        bold: true,
                      },
                    ],
                    documentHeader,
                  ],
                ],
              },
              margin: [15, 15, 15, 0],
              alignment: "center",
            },
          ];
        },
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
      }; //LINK - end docDefinition
      await pdfMake.createPdf(docDefinition).open();
    }, // ANCHOR - end printPDF
  },
};
</script>

<style>
p {
  font-size: 15px;
  text-align: center;
  font-weight: bold;
}
.style {
  border: 1px solid black;
  height: 180px;
  width: 365px;
  display: flex;
}

/* loader */
.loader {
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin988 2s linear infinite;
}

.loader .circle {
  --color: #333;
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: var(--color);
  border-radius: 50%;
  position: absolute;
}

.loader .circle:nth-child(1) {
  top: 0;
  left: 0;
}

.loader .circle:nth-child(2) {
  top: 0;
  right: 0;
}

.loader .circle:nth-child(3) {
  bottom: 0;
  left: 0;
}

.loader .circle:nth-child(4) {
  bottom: 0;
  right: 0;
}

@keyframes spin988 {
  0% {
    transform: scale(1) rotate(0);
  }

  20%,
  25% {
    transform: scale(1.3) rotate(90deg);
  }

  45%,
  50% {
    transform: scale(1) rotate(180deg);
  }

  70%,
  75% {
    transform: scale(1.3) rotate(270deg);
  }

  95%,
  100% {
    transform: scale(1) rotate(360deg);
  }
}

/* end loader */
</style>
