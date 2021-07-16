<template>
  <div>
    <h2 class="font-weight-regular">
      {{ $t("admin.systemUsers.systemUser.accessDetails") }}
    </h2>
    <br />

    <template v-for="(field, index) in fields">
      <v-row :key="`field-${index}`" v-if="isConditionMet(field)">
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
            <v-btn
              v-else-if="field.inputType === 'button'"
              @click="field.onClick()"
              color="secondary"
              dark
              depressed
              tile
            >
              {{ field.label }}
            </v-btn>
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

@Component({})
export default class SystemUserAccessDetails extends Vue {
  @Prop()
  systemUser!: SystemUser;
  @Prop()
  systemUserEdits!: SystemUser;
  @Prop()
  isEditing!: boolean;

  fields = [
    {
      title: this.$t("admin.systemUsers.systemUser.buttons.password.title"),
      label: this.$t("admin.systemUsers.systemUser.buttons.password.label"),
      inputType: "button",
      onClick: this.onSendResetPasswordLink,
      condition: (): boolean => this.isEditing,
    },
    {
      title: this.$t("admin.systemUsers.systemUser.formFields.pstnPIN.title"),
      key: "pstnPIN",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  hasCondition(item: any): boolean {
    return !!item.condition;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  isConditionMet(item: any): boolean {
    let conditionMet = true;

    if (this.hasCondition(item)) {
      conditionMet = item.condition ? item.condition() : !item.condition;
    }

    return conditionMet;
  }

  onSendResetPasswordLink(): void {
    // Send email
  }
}
</script>

<style lang="scss" scoped></style>
