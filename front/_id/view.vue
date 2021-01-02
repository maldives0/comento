<template>
  <div>
    <div class="name">
      <a @click="onBackClick">
        <router-link to="/">
          <span><</span>
        </router-link>
      </a>
      <span>[2020.02.05.] 정주영</span>    
    </div>
    
    <div class="stop-dragging">
      <div class="comment-form-layout">
        <div class="post-form-layout">
          <div class="post-form-title">
            <span>
              {{ viewPost.title }}
            </span>
          </div>
          <div class="post-form-contents">
            <span>
              {{ viewPost.content }}
            </span>
          </div>
          <div>
            <span class="user_id">{{ viewPost.user_id }}</span>
            <span class="created_at">created_at({{ viewPost.created_at }})</span>
          </div>
        </div>   
        <div class="reply-list-layout">
          <div class="reply-info-layout">
            <span class="reply-info">답변</span>
            <span class="reply-number">{{ replyList.length }}</span>
          </div>
          <ul>
            <li v-for="reply in replyList" :key="reply.id">
              <reply-form />
            </li>
          </ul>       
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReplyForm from '../components/ReplyForm';
import store from '../store';
import router from '../routes';
export default {
   store,
   router,
   components: {
     ReplyForm,   
    },
    
    data() {
      return {
    replyList:[{id:1},{id:2}],
             }
    },
    computed:{
      viewPost() {
        return this.$store.state.viewPost;
      },       
      beforeCreated({$route}){             
        return Promise.resolve($route.params.id).then(res=>{
        this.$store.dispatch('loadViewPost', { postId: res });
         });
        
      },
    },
     methods: {
        onBackClick(){
          this.$router.go(this.$router.currentRoute);
          // this.$router.push({path:'/'});
        },
      },
  }
</script>
<style>
.stop-dragging
{
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.comment-form-layout{   
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:120px;
   }
.name{
    width:100%;
    text-align:center;
    position:fixed;
    top:0;
    left:0;
    z-index: 200;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
    padding: 28px 1325px 23px 390px;
    background: #fff;
}
 .name span{
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
.name a{
  display:none;
}
.post-form-layout {
  width: 70%;
  padding: 28px 30px;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  border: solid 1px #00c854;
  margin-bottom:30px;
  background:#fff;
  }
 .post-form-title{
  width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
     }
.post-form-title span{
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
}
.post-form-contents{
   width: 100%;
   margin: 15px 0 21px 0;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
  }
.post-form-contents span{ 
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}
.created_at{
  padding-left: 10px;
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
.user_id {
  padding-right: 12px;
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #00c854;
  border-right : 1px solid #e1e4e7;
}
.reply-list-layout{
   width: 70%;
   }
.reply-info-layout{
  margin: 0 0 10px -40px;
}
.reply-info {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;  
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}
.reply-number{
    font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal; 
  letter-spacing: normal;
  text-align: left;
  color: #00c854;
}
 ul, li{
    list-style:none;
    margin-left: -40px !important;
 }


 @media (max-width: 768px){
    body{
        margin: 0px !important;
        padding: 0px !important;
        background:#fff !important;
          }
    .comment-form-layout{   
        margin: 65px 15px 0;
      }
    .name{  
      padding: 16px 155px 10px 15px;    
      }
    .name a{
      display: block;
      width: 13px;
      height: 22px; 
      text-decoration: none;
    }
    .name > a > span{
    font-family: SpoqaHanSans;
      font-size: 22px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: normal;
      text-align: left;
      color: #282c30;
    }
    .name > span{
      display: none;
    }
    .post-form-layout {
      width: 100%;
      padding: 27px 0;
      border-radius: 0px;
      border:none;
      border-top: solid 1px #00c854;
      border-bottom: solid 1px #00c854;
      margin-bottom:30px;
      }
    .reply-list-layout{
      width: 100%;
    }
    .reply-info-layout{
      margin:0;
    }
    ul, li{
          margin-left: -25px !important;
    }
 }
</style>