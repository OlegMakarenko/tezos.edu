<template>
    <div 
        @click="onClick"
    >
        <el-card 
            class="student-card"
        >
            <div class="score">{{score}}</div>
            <div class="name">{{name}}</div>
            <div class="account-number">{{id}}</div>
        </el-card>
    </div>
</template>



<script>
import Axios from "axios";

export default {
  props: ['name', 'score', 'id'],
  methods: {
    onClick(){
        this.$emit("click", this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.student-card {
    display: flex;
    justify-content: space-between;
    height: 200px;
    width: 200px;
    border-radius: 5px;
    font-weight: 400;
    color: #1f2f3d;
    flex-direction: column;

    .score{
        font-size: 38px;
        text-align: center;
        margin-top: 38px;
    }

    .name{
        font-size: 22px;
        margin-top: 10px;
        text-align: center;
    }

    .account-number{
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
        text-align: end;
        margin: 10px;
    }
}

.student-card:hover{
    background: #F2F6FC;
}
</style>
