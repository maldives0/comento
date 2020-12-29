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
      <div class="post-card-title">
          <span>Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Tit…</span>
      </div>
      <div class="post-card-contents">
          <span>contents contents contents contents contents contents contents contents contents contents contents con…</span>
      </div>
</div>
</template>
<script>
</script>
<style scoped>
.post-card-layout {  
    width: 865px;
    height: 179px;
    padding: 25px 30px 21px;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
  }
  .post-card-category{
       width: 805px;
       padding: 6px 0; 
       border-bottom : 1px solid #e1e4e7;
        display:flex;
        justify-content:space-between;
        align-items:center;
  }
  .category_name {
    width: 90px;
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
    width: 66px;
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
  .post-card-user{

  }
  .user_id {
  width: 43px;
  height: 13px;
  margin: 31px 12px 17px 0;
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #00c854;
}
.created_at {
  width: 148px;
  height: 13px;
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
  .post-card-title span{
    width: 748px;
    height: 18px;
    margin: 58px 57px 15px 0;
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
  .post-card-contents span{
    width: 756px;
    height: 16px;
    margin: 15px 49px 0 0;
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

</style>