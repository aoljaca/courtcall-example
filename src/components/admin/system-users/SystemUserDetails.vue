<template>
  <div>
    <h2 class="font-weight-regular">
      {{ $t("admin.systemUsers.systemUser.details") }}
    </h2>
    <br />

    <template v-for="(field, index) in fields">
      <v-row :key="`field-${index}`">
        <v-col cols="3" class="font-weight-medium">
          {{ field.title }}
        </v-col>
        <v-col>
          <template v-if="isEditing && field.inputType">
            <v-text-field
              v-if="field.inputType === 'textField'"
              v-model="systemUserEdits[field.key]"
              :placeholder="field.placeholder"
              hide-details
              dense
            />
            <v-select
              v-else-if="field.inputType === 'select'"
              v-model="systemUserEdits[field.key]"
              :return-object="field.returnObject"
              :item-text="field.itemText"
              :item-value="field.itemValue"
              :items="getItems(field.items)"
              :placeholder="field.placeholder"
              :multiple="field.multiple"
              hide-details
              clearable
              dense
            />
          </template>
          <template v-else>
            <span v-if="field.returnObject">
              {{ systemUser[`${field.key}`][field.itemText] }}
            </span>
            <template v-else-if="field.multiple">
              <v-chip
                v-for="(item, index) in systemUser[field.key]"
                :key="`${key}-${index}`"
                class="mr-1"
                >{{
                  field.computedValue ? field.computedValue(item) : item
                }}</v-chip
              >
            </template>
            <span v-else>
              {{ systemUser[field.key] }}
            </span>
          </template>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SystemUser } from "@/model/admin/system-users/system-user";
import { Organization } from "@/model/admin/organization/organization";
import { SystemUserRole } from "@/model/admin/system-users/system-user-role";

@Component({})
export default class SystemUserDetails extends Vue {
  @Prop()
  systemUser!: SystemUser;
  @Prop()
  systemUserEdits!: SystemUser;
  @Prop()
  isEditing!: boolean;

  fields = [
    {
      title: this.$t("admin.systemUsers.systemUser.formFields.name.title"),
      placeholder: this.$t(
        "admin.systemUsers.systemUser.formFields.name.placeholder"
      ),
      key: "name",
      inputType: "textField",
    },
    {
      title: this.$t("admin.systemUsers.systemUser.formFields.role.title"),
      placeholder: this.$t(
        "admin.systemUsers.systemUser.formFields.role.placeholder"
      ),
      key: "role",
      inputType: "select",
      itemText: "name",
      returnObject: true,
      items: this.getAllSystemUserRoles,
    },
    {
      title: this.$t(
        "admin.systemUsers.systemUser.formFields.organization.title"
      ),
      placeholder: this.$t(
        "admin.systemUsers.systemUser.formFields.organization.placeholder"
      ),
      key: "organizationIds",
      inputType: "select",
      itemText: "name",
      itemValue: "id",
      multiple: true,
      items: this.getAllOrganizations,
      computedValue: this.getNameOfOrganization,
    },
    {
      title: this.$t("admin.systemUsers.systemUser.formFields.email.title"),
      placeholder: this.$t(
        "admin.systemUsers.systemUser.formFields.email.placeholder"
      ),
      key: "email",
      inputType: "textField",
    },
    {
      title: this.$t("admin.systemUsers.systemUser.formFields.phone.title"),
      placeholder: this.$t(
        "admin.systemUsers.systemUser.formFields.phone.placeholder"
      ),
      key: "phone",
      inputType: "textField",
    },
  ];

  getItems(items: any): any[] {
    if (typeof items === "function") {
      return items();
    } else {
      return items;
    }
  }

  getNameOfOrganization(id: string): string {
    return this.$store.getters["OrganizationsModule/getNameById"](id);
  }

  getAllOrganizations(): Organization[] {
    return this.$store.getters["OrganizationsModule/getAsList"];
  }

  getAllSystemUserRoles(): SystemUserRole[] {
    return this.$store.getters["SystemUserRolesModule/getAsList"];
  }
}
</script>

<style lang="scss" scoped></style>
