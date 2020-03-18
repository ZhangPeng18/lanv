<template>
    <div>	<div class="setBg-box"></div>
        <div class="cy-user">
            <div class="userPu">
                <!-- 头像部分 -->
                <div class="userPu-h">
                    <div class="user-h-img"><img src="~@/images/user-img0.jpg"></div>
                    <div class="user-h-text">
                        <div class="user-name">郭小帅
                            <a href="#" class="outsider">
                                <div class="bg-iconvip"></div>
                                <span class="icon-vip0"></span>
                                成为vip
                            </a>
                        </div>
                        <div class="user-association">90后创业社-社长</div>
                    </div>
                </div>
                <div class="user-circle">
                    <a href="#">
                        <span>圈子</span>
                        <ul>
                            <li><img src="~@/images/user-img4.png"></li>
                            <li><img src="~@/images/user-img2.png"></li>
                            <li><img src="~@/images/user-img3.png"></li>
                            <li><img src="~@/images/user-img4.png"></li>
                        </ul>
                        <i class="icon-uniE926"></i>
                    </a>
                </div>
                <!-- 头像部分 end-->
                <!-- 资料板块 -->
                <div class="datum-box">
                    <ul class="datum-list">
                        <li class="dropdown">
                            <a href="#">
                                <h1 data-toggle="dropdown" class="vtitle"><i class="ba-color ba-color1 icon-uniE952"></i><b>我的钱包</b><span class="user-money">￥100</span></h1>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#">
                                <h1 data-toggle="dropdown" class="vtitle"><i class="ba-color ba-color7 icon-uniE966"></i><b>会员认证</b><span>未认证</span></h1>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#">
                                <h1 data-toggle="dropdown" class="vtitle"><i class="ba-color ba-color2 icon-uniE953"></i><b>我的详情</b><span class="icon-uniE926"></span></h1>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#">
                                <h1 data-toggle="dropdown" class="vtitle">
                                    <i class="ba-color icon-uniE93D"></i>
                                    <b>我的活动</b>
                                    <span class="icon-uniE926"></span>
                                </h1>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#">
                                <h1 data-toggle="dropdown" class="vtitle">
                                    <i class="ba-color ba-color3 icon-uniE901"></i>
                                    <b>设置</b>
                                    <span class="icon-uniE926"></span>
                                </h1>
                            </a>
                        </li>
                    </ul>
                    <!--<a href="validation.html" class="btn btn-max btn-green">交换名片</a>
                    <a href="javascript:;" class="btn btn-max btn-green">发送信息</a>-->
                    <!--<a href="javascript:;" class="btn btn-max btn-red">注销</a>-->
                </div>
                <!-- 资料板块 end-->
            </div>
        </div>

</div>
</template>

<script>
    export default {
        name: "userPu"
    }
</script>

<style scoped>
    @import "~@/css/index.css";
    @import "~@/css/bass.css";
    @import "~@/assets/fonts/iconfont.css";
</style>