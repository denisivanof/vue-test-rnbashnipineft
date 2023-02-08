<template>
  <ul class="lists">
    <div class="lists__title">
      <div class="lists__arrow--width"></div>
      <div class="lists__name--width">Name</div>
      <div class="lists__email--width">Email</div>
      <div class="lists__phone--width">Phone</div>
      <div class="lists__website--width">Website</div>
    </div>
    <TransitionGroup name="list">
      <li v-for="item in data" class="lists__item" :key="item.id">
        <div class="lists__wrapper" @click="setOpen(item.id)">
          <div class="lists__arrow lists__arrow--width">
            <svg :class="{active: item.open}" style="transition: 0.5s;" xmlns="http://www.w3.org/2000/svg" width="21" height="11" viewBox="0 0 21 11" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.4606 0.229403L20.3893 1.07055C20.727 1.37642 20.727 1.83522 20.3893 2.14109L11.3559 10.3231C11.1026 10.5525 10.8494 10.5525 10.5117 10.4761C10.2584 10.5525 9.92069 10.4761 9.75184 10.3231L0.718433 2.14109C0.380737 1.83522 0.380737 1.37642 0.718433 1.07055L1.6471 0.229403C1.9848 -0.0764676 2.49134 -0.0764676 2.82904 0.229403L10.5961 7.26442L18.3631 0.229403C18.7008 -0.0764676 19.2074 -0.0764676 19.5451 0.229403L19.4606 0.229403Z"
                    fill="#FFD300"/>
            </svg>
          </div>
          <div class="lists__name--width">{{item.name}}</div>
          <div class="lists__email--width">{{item.email}}</div>
          <div class="lists__phone--width">{{item.phone}}</div>
          <div class="lists__website--width">{{item.website}}</div>
        </div>
        <div v-if="item.open" class="lists__dropdown">
            <div class="lists__edit-wrapper">
              <div class="lists__edit-title">address</div>
              <div class="lists__edit-form">
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Street</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.address.street"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Suite</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.address.suite"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">City</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.address.city"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Zipcode</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.address.zipcode"
                  >
                </div>
              </div>
            </div>
            <div class="lists__edit-wrapper">
              <div class="lists__edit-title">company</div>
              <div class="lists__edit-form">
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Name</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.company.name"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">CatchPhrase</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.company.catchPhrase"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Bs</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.company.bs"
                  >
                </div>
              </div>
            </div>
            <div class="lists__edit-wrapper">
              <div class="lists__edit-title">BASIC INFO</div>
              <div class="lists__edit-form">
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Name</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.name"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Username</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.username"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Email</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.email"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Phone</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.phone"
                  >
                </div>
                <div class="lists__input-wrapper">
                  <div class="lists__input-label">Website</div>
                  <input
                      class="lists__input"
                      type="text"
                      :value="item.website"
                  >
                </div>
              </div>
            </div>
          <button class="lists__edit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M1.50781 10.4894L8.76326 18.0293C9.22838 18.5126 10.0281 18.41 10.3561 17.8249L19.227 2"
                    stroke="#5F7465" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </li>
    </TransitionGroup>
  </ul>
</template>

<script setup>

import {reactive} from "vue";

const data = reactive([
  {
    open: false,
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    open: false,
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    open: false,
    id: 3,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
])
const setOpen = (id) => {
  data.forEach(item=>{
    if(item.id === id){
      item.open = !item.open
    }else {
      item.open = false
    }
  })
}
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
