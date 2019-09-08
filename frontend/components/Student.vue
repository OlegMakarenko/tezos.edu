<template>
  <div class="table-wrapper">
    <div class="header">
      {{score}}
      <br>
      {{name}}
    </div>
    <div class="controls">
      <el-input placeholder='New Score' v-model="newScore" number />
      <el-button @click="addRecord" style="z-index:100; margin-left: 20px" type="primary">Add Score</el-button>
    </div>
    <el-table
      :data="tableData"
      class="table"
    >
    <el-table-column
      prop="date"
      label="Date"
      width="300">
    </el-table-column>
    <el-table-column
      prop="value"
      label="Score"
      width="150"
    >
    </el-table-column>
    </el-table>

  </div>
  
</template>



<script>
import Axios from 'axios';

export default {
  components:{  
  },
  mounted(){
    this.getTable();
    this.getStudentInfo()
  },
  data () {
    return { 
      name: "", 
      score: "-",
      newScore: null,
      tableData: []
    }
  },

  computed:{
    id(){
      return this.$route.params.id;
    }
  },

  methods:{
    addRecord() {
      if(this.newScore)
      Axios.post('/add_record', { id: this.id, score: this.newScore })
        .then(res => {
          this.score = res.data.score;
          this.$set(this, "tableData", res.data.table)
        })
        .catch(err => console.error(err))
      this.newScore = null;
    },

    getStudentInfo() {
      Axios.get('/get_student', { params: { id: this.id } })
        .then(res => {
          const data = res.data;
          this.$set(this, "score", data.score);
          this.$set(this, "name", data.name)
        })
        .catch(err => console.error(err))
    },

    getTable() {
      console.log("id ", this.id)
      Axios.get('/get_table', { params: { id: this.id } })
        .then(res => this.$set(this, "tableData", res.data))
        .catch(err => console.error(err))
    }
  } 
}


</script>

<style lang="scss" scoped>
.table-wrapper{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  
}

.header{
  position: fixed;
  top: 20px;
  left: 280px;
  font-size: 38px;
  margin-top: 38px;

}
.controls{
    margin-top: 250px;
    width: 400px;
    display: flex;
    box-shadow: 0 -10px 50px rgba(255,255,255,1);
    margin-left: 20px;
    background: #fff;
}
.table {

  margin: 20px;
      margin-top: 0px;
  width: 600px;

}


</style>
