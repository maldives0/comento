<template>
  <div>
    <div class="filter-modal-overlay">
      <div class="filter-modal-layout">
        <div class="filter-modal-header">
          <span>필터</span>
          <div 
            class="filter-modal-close-button"
            @click="onModalCloseClick"
          >
            <a>
              <span />
              <span />
            </a>
          </div>
        </div>
        <ul>
          <li v-for="category_list in category" :key="category_list.id">
            <div>
              <input 
                id="checkbox" 
                v-model="checkedCategory"
                :value="category_list"
                type="checkbox"
              >
              <span class="category_name">{{ category_list.name }}</span>
            </div>
          </li>
        </ul> 
        <div class="filter-modal-save-layout">
          <button 
            class="filter-modal-save-button"
            @click="onSaveCategoryClick"
          >
            저장하기
          </button>  
        </div>            
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    computed: { 
     modalShow() {       
        return this.$store.state.modalShow;
      },
      category() {
          return this.$store.state.category;
      },
      checkedCategory: {
        get () {
        return this.$store.state.checkedCategory;
        },
        set (value) {
        this.$store.commit('updateCategory', value)
        },        
      },          
    },   
     methods: {        
      onModalCloseClick(){
         return this.$store.commit('modalShowChange', false);
         },
        onSaveCategoryClick(){            
            return this.$store.commit('modalShowChange', false);     
         },    
    }
  }
</script>
<style scoped>
  .filter-modal-overlay{
  width: 100vw;
  height: 100vh;
  position:fixed;
  z-index: 5000;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,0.7);
}
.filter-modal-layout{
  width: 460px;
  height: 268px;
  padding: 36px 30px;
  background-color: #ffffff;
  position:relative;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.filter-modal-header{
   font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: left;
  color: #212529;
}
.filter-modal-close-button{
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 200;
}
.filter-modal-close-button a{
    display: block;
    width: 12px;
    height: 12px;
}
.filter-modal-close-button span{
  display: block;
  position: absolute;
  right: 15px;
  top:15px;
  background: #adb5bd;
  width: 100%;
  height: 2px;
  transform: rotate(-45deg);
}
.filter-modal-close-button span:nth-of-type(2){
   transform: rotate(45deg);
  
}
.category_name{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  }
.filter-modal-save-layout{
 margin-top: 30px;
 float:right;
  }
.filter-modal-save-button{
  width: 99px;
  height: 40px;
  border-radius: 3px;
  background-color: #00c854;
   font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #ffffff;
  border:0;
  outline:0;
}
 ul, li{
    list-style:none;
    margin-left: -20px !important;
 }
li{
  margin-bottom:19px;
}

@media (max-width: 768px){
     .filter-modal-layout{
    width: 337px;
    top:45%;
    padding: 36px 30px;
 }
  .filter-modal-save-layout{
  margin-top: 30px;
  float:right;
  width: 100%;
    }
  .filter-modal-save-button{
    width: 100%;    
  } 
}
</style>