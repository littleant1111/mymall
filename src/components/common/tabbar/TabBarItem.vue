<template>
    <div class="tab-bar-item" @click="tabar_item_click">
        <div v-if="!is_actived" class="tabbar_item-img"><slot name="item-icon"></slot></div>
        <div v-else class="tabbar_item-img"><slot name="item-icon-active"></slot></div>
        <div :class="{active: is_actived}" class="item-text"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path:{
                type: String,
                default() {
                    return ""
                }
            },
        },
        data(){
          return {
              // is_active: true
          }
        },
        computed: {
            is_actived() {
                return this.$route.path.indexOf(this.path) !== -1
            }
        },
        methods: {
            tabar_item_click(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item img {
    }
    .active {
        color: #ff8198;
    }
</style>