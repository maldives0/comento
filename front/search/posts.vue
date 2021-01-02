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
            <div v-for="checkedCategory in checkedCategories" :key="checkedCategory.id" class="checkedCategory-layout">
              <span class="checkedCategory_name">{{ checkedCategory.name }}</span>
            </div>
            <button class="filter-button" @click="onFilterClick">
              <span>필터</span> 
            </button>
            <div v-if="modalShow" class="filter-modal-overlay">
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
                  <li v-for="category in categories" :key="category.id">
                    <div>
                      <input 
                        id="checkbox" 
                        v-model="checkedCategories"
                        :value="category"
                        type="checkbox"
                      >
                      <span class="category_name">{{ category.name }}</span>
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
        </div>
        <div class="search-result">
          <span>'{{ this.$route.params.value }}'와 관련된 총{{ searchPostsLength }}개의 게시글이 검색되었습니다.</span>
        </div>
        <post-card v-for="post in mainPosts" :key="post.id" :post="post" />
      </div>    
    </div>
  </div> 
</template>

<script>
import PostCard from '../components/PostCard';
import store from '../store';
 import router from '../routes';
  export default {
   store,
   router,
   components: {
      PostCard,     
    },
 
    data() {
      return {
      ordKey: true,
      modalShow: false,
      checkedCategories : [],
      ord:'asc', 
      searchValue:'',        
                      }; 
    },
    
    computed: {
       order() {
        return this.$store.state.order;
      },
      searchPostsLength(){
        return this.$store.state.searchPostsLength;
      },
      mainPosts() {
        return this.$store.state.mainPosts;
      },
      hasMorePost() {
        return this.$store.state.hasMorePost;
      },
      categories() {
        this.checkedCategories = this.$store.state.categories;    
        return this.$store.state.categories;
      },
     
    },
    created(){
     
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
              this.$store.dispatch('searchPosts',{ reset: true });
              }
            },
        onSubmitLoginForm() {
         },
        onSubmitSearchForm() {
             this.$store.dispatch('loadAds',{ reset: true });
            this.$store.dispatch('searchPosts',{ value: this.searchValue, category: this.checkedCategories.map(v=>v.id),
            reset: true }); 
               this.$router.push({path:`/search/${this.searchValue}`});
            this.searchValue = '';
            this.$refs.search.focus();
         },
        onFilterClick() {
          this.modalShow = true;        
        },
        onModalCloseClick(){
          this.modalShow = false;
                 },
        onSaveCategoryClick(){  
           this.checkedCategories;     
           this.modalShow = false;           
                }, 
        onScroll() {                
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200) {    
            if (this.hasMorePost) { 
              this.$store.dispatch('loadAds');
              this.$store.dispatch('searchPosts',{ value: this.searchValue, category: this.checkedCategories.map(v=>v.id)});           
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
.checkedCategory-layout{
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
    display:inline-block;
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
   padding: 16px 155px 10px 15px;    
  }

  .content-layout{
    width: 100%;
  }
  .content-option-layout{
    padding: 10px 15px 10px 18px;
    background:#fff;
    }
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



