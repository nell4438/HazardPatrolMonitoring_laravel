<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-card class="elevation-12" width="700" height="340">
            <v-row dense>
              <v-col cols="5" id="col1">
                <v-img
                  class="mt-10 ml-5"
                  height="250"
                  width="250"
                  src="css/image/hpm_logo.jpg"
                ></v-img>
              </v-col>
              <v-col cols="7" id="col2">
                <v-card-title class="mt-6">
                  <h2 style="color: white">Hazard Patrol Monitoring</h2>
                </v-card-title>
                <v-card-text class="pb-0 pt-7 pr-5">
                  <form id="enterLogin" ref="enterLogin" @submit.prevent="enterLogin">
                    <v-text-field
                      dark
                      v-model="UserID"
                      prepend-icon="mdi-account"
                      @keyup.enter="HPMLogIn()"
                      solo
                      outlined
                      dense
                      label="Employee ID"
                      type="text"
                      :rules="[rules.min]"
                    ></v-text-field>
                    <v-text-field
                      @keyup.enter="HPMLogIn()"
                      v-model="Password"
                      dark
                      prepend-icon="mdi-key"
                      solo
                      outlined
                      dense
                      label="Password"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                      :rules="[rules.min]"
                    ></v-text-field>
                  </form>
                </v-card-text>
                <v-card-actions class="pr-5 pt-5">
                  <v-spacer />
                  <v-btn type="submit" color="#e0ddd7" @click="HPMLogIn()">
                    <v-icon class="pr-2"> mdi-login </v-icon>LOG-IN
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      // url:require('./public/Image/haz.jpg'),
      Password: "",
      UserID: "",
      EmployeeName: "",
      show: false,
      rules: {
        required: (value) => !!value || "This field is Required.",
        min: (value) => (value && value.length >= 4) || "Minimum at least 5 characters",
      },
    };
  },
  created() {
    this.getLogin();
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapActions(["loginUser"]),

    getLogin() {
      axios.get("api/getLog").then((rec) => {
        // console.log(rec.data)
        this.users = rec.data
      });
    },

    HPMLogIn() {
      //     this.$toast.success(
      //     'This is the message',
      //     'Im the title',
      //     {position: 'topRight'}
      // );
      axios
        .post("api/UserLogin", {
          Employee: this.UserID,
          Pass: this.Password,
        })
        .then((res) => {
          if (!this.UserID) {
            this.$toast.warning("EmployeeID is Required!", "Caution", {
              position: "topRight",
              displayMode: "replace",
            });
            return false;
          }
          if (!this.Password) {
            this.$toast.warning("Password is Required!", "Caution", {
              position: "topRight",
              displayMode: "replace",
            });
            return false;
          }
          if (res.data.length == 0 && this.DeletedDate == null) {
            this.$toast.warning("Employee not Found!", "Caution", {
              position: "topRight",
              displayMode: "replace",
            });
            return false;
          } else {
            this.loginUser({ value: res.data });
            // console.log(res.data, "dataaalogin")
            // alert("welcome")
            this.$router.push("HazardPatrolMonitoring");
            this.$toast.success(
              `Welcome ${this.userInfo.value[0].EmployeeName}`,
              "Success",
              { position: "topRight", color: "#FFD966" }
            );
          }
        });
    },
  },
};
</script>

<style>
#col1 {
  background-color: #f58d05bd;
  height: 345px;
  border-radius: 10px 0px 0px 10px;
}

#col2 {
  background-color: #303030;
  border-radius: 0px 10px 10px 0px;
}
</style>
