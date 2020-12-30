<template>
  <div>
    <div class="name">
      2020.02.05. 정주영
    </div>
    <div class="layout">
      <div>
        <form @submit="onSubmitForm">
          <button class="login-button" type="submit">
            <span>로그인</span>
          </button>
        </form>
      </div>
      <div class="content-layout">
        <div class="content-option-layout">
          <div id="sort-layout">
            <div id="sort-button" :class="ascKey" @click="onAscClick">
              <p />
              <span>오름차순</span>                
            </div>
            <div id="sort-button" :class="descKey" @click="onDescClick">
              <p />
              <span>내림차순</span>                
            </div>
          </div>
          <div>
            <button class="filter-button" @click="onFilterClick">
              <span>필터</span> 
            </button>
          </div>
        </div>
        <post-card />  
        <ad-card />          
      </div>
    </div>
  </div> 
</template>

<script>
import PostCard from './components/PostCard';
import AdCard from './components/AdCard';
  export default {
   components: {
      PostCard,
           AdCard,
    },
    data() {
      return {
      ascKey: 'on',
      descKey: 'off',
             }
    },
    computed: {

    },
     methods: {
        onAscClick() {
        this.ascKey = 'on';
        this.descKey = 'off';
        },
        onDescClick() {
        this.ascKey = 'off';
        this.descKey = 'on';
        },
        onSubmitForm() {

        },
        onFilterClick() {

        },
      }
  }
</script>

<style scoped>
.layout{
    display:flex;
    justify-content:center;
    align-items:top;
}
.name{
    width:100%;
    height:70px;
    text-align:center;
}
.content-layout{
width: 865px;
}
.content-option-layout{
    width: 865px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
#sort-layout{
    display: flex;
}
#sort-button{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:6px;
   }
#sort-button.on p{
  display:inline-block;
  width: 6px;
  height: 6px;
  background-color: #00c854;
  border-radius: 100%; 
  margin-right:5px;
}
#sort-button.on span{
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}
#sort-button.off p{
  display:inline-block;
  width: 6px;
  height: 6px;
  background-color: #e1e4e7;
  border-radius: 100%;
  margin-right:5px;
}
#sort-button.off span{
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
}
.filter-button{
  display:inline-block;
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
}
.filter-button span{
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
  }
.login-button {
 width: 235px;
  height: 60px; 
  border-radius: 5px;
  background-color: #00c854;
  margin-right:40px;
  border:none;
}
 .login-button span{
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;  
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
    }

</style>



