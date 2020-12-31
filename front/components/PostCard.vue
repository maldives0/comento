<template>
  <div v-if="post.key !== 'ad'">
    <div class="post-card-layout">
      <div class="post-card-category">
        <span class="category_name"> {{ post.category.name }}</span>
        <span class="contents_id">contents_id</span>
      </div>
      <div class="post-card-user">
        <span class="user_id">user_id</span>
        <span class="created_at">created_at(YYYY-MM-dd)</span>
      </div>
      <div>
        <div class="post-card-title">
          <span>
            {{ post.title }}
          </span>
        </div>
        <div class="post-card-contents">
          <span>
            {{ post.content }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="ad-card-layout">
      <div class="ad-card-category">
        <span class="sponsored">sponsored</span>
      </div>
      <div class="ad-card-content-layout">
        <div class="ad-card-image">
          <img src="post.src" alt="post.src">
        </div>
        <div class="ad-card-text-layout">
          <div class="ad-card-title">
            <span>
              {{ post.title }}
            </span>
          </div>
          <div class="ad-card-contents">
            <span>
              {{ post.content }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
    components: {
     
    },
    props: {
      post: {
        type: Object,
        required: true,
      },
         },
    data() {
      return {
     
      };
    },
    methods: {
   
    },
  };

</script>
<style scoped>
.post-card-layout {  
    margin-bottom:30px;
    padding: 25px 30px 21px;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
    background:#fff;
  }
 .post-card-category{
       width: 100%;
       margin-bottom:20px; 
       border-bottom : 1px solid #e1e4e7;
        display:flex;
        justify-content:space-between;
        align-items:center;       
  }
 .category_name {
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #7e848a; 
}
.contents_id {
    font-family: SpoqaHanSans;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: right;
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
.created_at {
   margin: 31px 126px 17px 5px;
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

.post-card-title {
   margin: 25px 0;
   white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
  .post-card-title span{
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #282c30;
   
  }
  .post-card-contents{
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .post-card-contents span{
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #495057;  
  }
.ad-card-layout{
  padding: 25px 30px 21px;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  margin-bottom:30px;
}
.sponsored{
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
}
.ad-card-content-layout{
    display:flex;
    justify-content:center;
    align-items:center;
}
.ad-card-image {
  width: 310px;
  height: 179px;
  margin: 17.5px 29.5px 0 0;
  border: solid 1px #e1e4e7;
  background:#e1e4e7;
}
.ad-card-text-layout{
    width: 435px;
}
.ad-card-title{
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; 
  word-wrap: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
}
.ad-card-title span{
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
}
.ad-card-contents{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; 
  word-wrap: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
}
.ad-card-contents span{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}

  @media (max-width: 768px){
    .post-card-layout {  
    padding: 26px 15px 21px;
    border-radius: 0px;
    border-top: solid 1px #e1e4e7;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
     margin-bottom:10px;
    }
    .post-card-category{ 
      margin-bottom:20px; 
      padding-bottom:11px;
          }
    .user_id {
        border:none;
    }
    .created_at {
      display:none; 
    }
    .post-card-title {
      margin: 25px 0 15px;   
    }  
     .ad-card-layout{
  padding: 25px 15px 21px;
  border-radius: 0px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  }
  .ad-card-content-layout{
      display:block;
      }
  .ad-card-image {
    width: 100%;
    margin: 17.5px 0 23.5px 0; 
  }
  .ad-card-text-layout{
      width: 100%;
  }
  .ad-card-contents{
    width: 100%;
    -webkit-line-clamp: 2; 
    
  }
  }

</style>