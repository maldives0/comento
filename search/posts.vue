<template>
  <div>
    <div class="header">
      <span>[2020.02.05.] 정주영</span> 
      <div class="search-button-layout">
        <form @submit.prevent="onSubmitSearchForm">
          <input 
            ref="search" v-model="searchValue" type="text"
          >
          <button type="submit">
            <span>검색하기</span>
          </button>
        </form>
      </div>
    </div>
    <div class="layout">
      <div>
        <div class="login-button-layout">
          <form @submit.prevent="onSubmitLoginForm">
            <button type="submit">
              <span>로그인</span>
            </button>
          </form>
        </div>
      </div>     
      <div class="content-layout">     
        <div class="content-option-layout">
          <div id="sort-layout">
            <div id="sort-button" :class="{on:ordKey}" @click="onToggleSort">
              <p />
              <span>오름차순</span>                
            </div>
            <div id="sort-button" :class="{on: !ordKey}" @click="onToggleSort">
              <p />
              <span>내림차순</span>                
            </div>
          </div>
          <div>
            <div v-for="category in checkedCategory" :key="category.id" class="checkedCategory-list-layout">
              <span class="checkedCategory_name">{{ category.name }}</span>
            </div>
            <button class="filter-button" @click="onFilterClick">
              <span>필터</span> 
            </button>
            <template v-if="modalShow">
              <Modal />
            </template>
          </div>
        </div>  
        <div class="search-result">
          <span>'{{ this.$route.params.value }}'와 관련된 총{{ searchPostsLength }}개의 게시글이 검색되었습니다.</span>
        </div>
        <template v-if="mainPosts !== undefined && mainPosts.length > 0 ">
          <post-card v-for="post in mainPosts" :key="post.id" :post="post" />
        </template>
      </div>    
    </div>
  </div> 
</template>

<script>
import Modal from '../components/Modal';
import PostCard from '../components/PostCard';
import store from '../store';
 import router from '../routes';
  export default {
   store,
   router,
   components: {
      PostCard,
        Modal,      
    },
 
     data() {
      return {
      ordKey: true,
      ord:'asc', 
      searchValue:'',        
               }; 
    },    
    computed: {
      order() {
        return this.$store.state.order;
      },
      modalShow() {
        return this.$store.state.modalShow;
      },
      mainPosts() {
        return this.$store.state.mainPosts;
      },
      hasMorePost() {
        return this.$store.state.hasMorePost;
      },
    checkedCategory() {         
        return this.$store.state.checkedCategory;
      },    
     
    },
    beforeCreate(){
      this.$store.dispatch('loadCategory');  
      this.$store.dispatch('loadAds',{ reset: true });
      this.$store.dispatch('loadPosts',{ reset: true});
    },
   
     mounted() {            
      window.addEventListener('scroll', this.onScroll);
         },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll);
    },
     methods: {        
        onToggleSort() {
            this.ordKey= !this.ordKey;
             if(!this.ordKey){
                this.ord = 'desc';
             }else{
                 this.ord = 'asc';
             }
              if(this.order !== this.ord)  {                        
              this.$store.commit('orderChange', this.ord);
              this.$store.dispatch('loadAds',{ reset: true });
              this.$store.dispatch('loadPosts',{ reset: true});
              }
            },
        onSubmitLoginForm() {
         },
        onSubmitSearchForm() {
           this.$store.dispatch('loadAds',{ reset: true });
            this.$store.dispatch('searchPosts',{ 
              value: this.searchValue,
              category: this.category.map(v=>v.id),
             reset: true
            });
             this.$router.push({path:`/search/${this.searchValue}`});
            this.searchValue = '';
            this.$refs.search.focus();
         },
        onFilterClick() {
        return this.$store.commit('modalShowChange', true); ;        
        },            
        onScroll() {  
          console.log('throttle',window.scrollY+document.documentElement.clientHeight,'total', document.documentElement.scrollHeight);     
          if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 400) {    
            if (this.hasMorePost) { 
              this.$store.dispatch('loadAds');
             this.$store.dispatch('loadPosts');           
           }
        }
      },    
    }
  }
</script>

<style>

.layout{
    display:flex;
    justify-content:center;
    align-items:top;
    margin-top: 120px;
}
.header{
    width:100%;
    text-align:center;
    position:fixed;
    top:0;
    left:0;
    z-index: 200;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
    padding: 23px;
    background: #fff;   
    }
.header span{
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #212529;
    }
.content-layout{
  width: 70%;
}
.search-result{
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #212529;
    padding:5px 0;
}
.content-option-layout{
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
    cursor:pointer;
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
#sort-button p{
  display:inline-block;
  width: 6px;
  height: 6px;
  background-color: #e1e4e7;
  border-radius: 100%;
  margin-right:5px;
}
#sort-button span{
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
.checkedCategory-list-layout{
  display:inline-block;
  margin-right:5px;
}
.checkedCategory_name{
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
  outline:0;
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
.login-button-layout{
  margin-bottom:30px;
}
.login-button-layout button{
  width: 235px;
  height: 60px; 
  border-radius: 5px;
  background-color: #00c854;
  margin-right:40px;
  border:0;
  outline:0;
}
.login-button-layout button span{
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;  
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
    }
.search-button-layout {
    margin-right: 50px;
    float: right;
   }   
.search-button-layout form{
    display: flex;
    }
.search-button-layout input{
    width:180px;
    height: 26px;
    outline:0;   
    }
.search-button-layout button{
    background-color: #00c854;
    border:0;
    outline:0;
    border-radius: 3px;
      }
.search-button-layout button span{
    font-family: SpoqaHanSans;
    font-size: 12px;
    font-stretch: normal;
    font-style: normal;  
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    }    
    ul, li{
        list-style:none;
        margin-left: -20px !important;
    }
    li{
      margin-bottom:19px;
    }
    input{
    width: 20px;
    height: 20px;
    margin-right:5px;
    }


@media (max-width: 768px){
  body{
    margin: 0px !important;
    padding: 0px !important;
    background: #f4f5f7 !important;
  }
  .layout{
    flex-direction: column;
    margin-top:55px;
  }
  .login-button-layout{
    display:none;
  }
  .header{  
   padding: 15px;       
  }
  .content-layout{
    width: 100%;
  }
  .content-option-layout{
    padding: 10px 15px 10px 18px;
    background:#fff;
    }
  }
  @media (max-width: 484px){
  .header > span{
    display:none;
  }
}

</style>



