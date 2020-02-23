<template>
    <div id="tab-bar">
        <tab-bar-item path="/home">
            <img slot="item-icon" src="../../../assets/images/tabbar/home.svg">
            <img slot="item-icon-active" src="../../../assets/images/tabbar/home_active.svg">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/cate">
            <img slot="item-icon" src="../../../assets/images/tabbar/category.svg">
            <img slot="item-icon-active" src="../../../assets/images/tabbar/category_active.svg">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shopcar">
            <img slot="item-icon" src="../../../assets/images/tabbar/shopcart.svg">
            <img slot="item-icon-active" src="../../../assets/images/tabbar/shopcart_active.svg">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="item-icon" src="../../../assets/images/tabbar/profile.svg">
            <img slot="item-icon-active" src="../../../assets/images/tabbar/profile_active.svg">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";
    export default {
        name: "TabBar",
        components: {
            TabBarItem
        }
    }
</script>

<style scoped>
    #tab-bar {
        display: flex;
        height: 49px;
        text-align: center;
        background-color: #f2f2f2;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
    #tab-bar .tab-bar-item {
        flex: 1;
    }

    .tab-bar-item img {
        width: 22px;
        height: 22px;
    }
</style>