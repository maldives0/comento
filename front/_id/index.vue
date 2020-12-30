<template>
  <div>
    <div class="name">
      2020.02.05. 정주영
    </div>
    <div>
      <div class="comment-form-layout">
        <div class="post-form-layout">
          <div class="post-form-title">
            <span>
              Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title 
            </span>
          </div>
          <div class="post-form-contents">
            <span>
              contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents conte
              nts contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents
            </span>
          </div>
          <div class="comment-form-created_at">
            <span class="created_at">created_at(YYYY-MM-dd)</span>
          </div>
        </div>   
        <div class="reply-form-layout">
          <div style="width: 1140px;">
            <span class="reply-info">답변</span>
            <span class="reply-number">{{ replyList.length }}</span>
          </div>
          <ul>
            <li v-for="id in replyList" :key="id">
              <reply-form />
            </li>
          </ul>       
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReplyForm from './components/ReplyForm.vue';
export default {
   components: {
     ReplyForm,
    },
    data() {
      return {
    replyList:[{id:1},{id:2}],
             }
    },
    computed: {

    },
     methods: {
      
      }
  }
</script>
<style scoped>
.comment-form-layout{   
    display:flex;
    justify-content:start;
    align-items:center;
    flex-direction:column;
   }
.name{
    width:100%;
    height:70px;
    text-align:center;
}
.post-form-layout {
  width: 1140px;
  height: 211px;
  padding: 28px 0 0 30px;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  border: solid 1px #00c854;
  margin-bottom:30px;
  }
 .post-form-title{
    width: 1011px;  
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
      width: 1017px;
      margin: 15px 0 21px 0;
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
  .comment-form-created_at{
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #adb5bd;
    width:100%;
  }
  .reply-form-layout{
     display:flex;
    justify-content:start;
    align-items:center;
    flex-direction:column;
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
 ul{
     list-style:none;
 }
</style>