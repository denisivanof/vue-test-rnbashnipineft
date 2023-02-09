<template>
  <div class="lists">
    <h3 v-if="loading" style="text-align: center; margin-bottom: 20px">Загрузка...</h3>
    <div class="lists__title">
      <div class="lists__arrow--width"></div>
      <div class="lists__name--width">Name</div>
      <div class="lists__email--width">Email</div>
      <div class="lists__phone--width">Phone</div>
      <div class="lists__website--width">Website</div>
    </div>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in list" class="lists__item" :key="item.id">
        <div class="lists__wrapper" @click="setOpen(item.id)">
          <div class="lists__arrow--width">
            <svg :class="{active: item.open}" style="transition: 0.5s;" xmlns="http://www.w3.org/2000/svg" width="21"
                 height="11" viewBox="0 0 21 11" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.4606 0.229403L20.3893 1.07055C20.727 1.37642 20.727 1.83522 20.3893 2.14109L11.3559 10.3231C11.1026 10.5525 10.8494 10.5525 10.5117 10.4761C10.2584 10.5525 9.92069 10.4761 9.75184 10.3231L0.718433 2.14109C0.380737 1.83522 0.380737 1.37642 0.718433 1.07055L1.6471 0.229403C1.9848 -0.0764676 2.49134 -0.0764676 2.82904 0.229403L10.5961 7.26442L18.3631 0.229403C18.7008 -0.0764676 19.2074 -0.0764676 19.5451 0.229403L19.4606 0.229403Z"
                    fill="#FFD300"/>
            </svg>
          </div>
          <div class="lists__name--width">{{ item.name }}</div>
          <div class="lists__email--width">{{ item.email }}</div>
          <div class="lists__phone--width">{{ item.phone }}</div>
          <div class="lists__website--width">{{ item.website }}</div>
        </div>
        <div v-if="item.open" class="lists__dropdown">
          <div class="lists__edit-wrapper">
            <div class="lists__edit-title">{{ edit.basicInfo.title }}</div>
            <div class="lists__form">
              <div class="lists__input-wrapper" v-for="field in edit.basicInfo.items" :key="field.sign">
                <div class="lists__label">{{ field.label }}</div>
                <input
                    class="lists__input"
                    type="text"
                    v-model="field.val"
                    @input="onInput('basicInfo', field, edit.id,)"
                >
              </div>
            </div>
          </div>
          <div class="lists__edit-wrapper">
            <div class="lists__edit-title">{{ edit.address.title }}</div>
            <div class="lists__form">
              <div class="lists__input-wrapper" v-for="field in edit.address.items" :key="field.sign">
                <div class="lists__label">{{ field.label }}</div>
                <input
                    class="lists__input"
                    type="text"
                    v-model="field.val"
                    @input="onInput('address', field, edit.id)"
                >
              </div>
            </div>
          </div>
          <div class="lists__edit-wrapper">
            <div class="lists__edit-title">{{ edit.company.title }}</div>
            <div class="lists__form">
              <div class="lists__input-wrapper" v-for="field in edit.company.items" :key="field.sign">
                <div class="lists__label">{{ field.label }}</div>
                <input
                    class="lists__input"
                    type="text"
                    v-model="field.val"
                    @input="onInput('company', field, edit.id)"
                >
              </div>
            </div>
          </div>
          <button class="lists__btn" @click="saveEditUsers">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M1.50781 10.4894L8.76326 18.0293C9.22838 18.5126 10.0281 18.41 10.3561 17.8249L19.227 2"
                    stroke="#5F7465" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useUsersStore} from "../store/users";
import { storeToRefs } from 'pinia'

const {list, edit, loading} = storeToRefs(useUsersStore())
const {getUsers, setOpen, onInput, saveEditUsers, } = useUsersStore()
onMounted(()=>{getUsers()})

</script>

<style scoped lang="scss">
.active{
  transform: rotate(180deg);
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

@import "../styles/usersList.scss";
</style>
