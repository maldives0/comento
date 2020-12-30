<template>
  <div class="post-card-layout">
    <div class="post-card-category">
      <span class="category_name">category_name</span>
      <span class="contents_id">contents_id</span>
    </div>
    <div class="post-card-user">
      <span class="user_id">user_id</span>
      <span class="created_at">created_at(YYYY-MM-dd)</span>
    </div>
    <div>
      <div class="post-card-title">
        <span>
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
        </span>
      </div>
      <div class="post-card-contents">
        <span>
          contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents
        </span>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.post-card-layout {  
    height: 179px;
    margin-bottom:30px;
    padding: 25px 30px 21px;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
  }
  .post-card-category{
       width: 805px;
       padding: 6px 0;
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
   width: 748px;
   height: 18px;
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
   width: 756px;
   height: 18px;
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

</style>