<template>
  <div>
    <button class="toggle-button-right" @click="toggleSidebarRight">
      <i :class="sidebarRightOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>
    <div :class="['sidebar-right', sidebarRightOpen ? 'open-right' : '']">
      <div class="sidebar-right-header">
        <h2>Menu</h2>
      </div>
      <ul class="sidebar-right-menu">
        <li>
          <button class="toggle-button-right" @click="toggleSidebarRight">
            <i :class="sidebarRightOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>

          <!-- Sidebar Right -->
          <div :class="['sidebar-right', sidebarRightOpen ? 'open-right' : '']">
            <div class="sidebar-right-header">
              <h2>Menu</h2>
            </div>
            <ul class="sidebar-right-menu">
              <!-- Search Button and Expanding Search Box -->
              <li>
                <button @click="toggleSearchBox">
                  <i class="fas fa-search"></i> Search
                </button>
                <transition name="expand">
                  <div v-if="isSearchBoxOpen" class="search-box">
                    <input
                      type="text"
                      v-model="searchQuery"
                      placeholder="Type to search..."
                    />
                  </div>
                </transition>
              </li>
              <li>
                <router-link to="/">
                  <button><i class="fas fa-home"></i> Home</button>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <button><i class="fas fa-info-circle"></i> About</button>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarRight",
  data() {
    return {
      sidebarRightOpen: false,
      isSearchBoxOpen: false,
      searchQuery: "", // Bind input text here
    };
  },
  methods: {
    toggleSidebarRight() {
      this.sidebarRightOpen = !this.sidebarRightOpen;
    },
    toggleSearchBox() {
      this.isSearchBoxOpen = !this.isSearchBoxOpen;
    },
  },
};
</script>

<style scoped>
@import "/src/components/sidebar/SidebarStyles/Right.css";
</style>
