<template>
  <div>
    <div class="reply-form-layout">
      <div class="reply_user_name">
        <span>reply_user_name </span>
      </div>
      <div class="reply-form-contents">
        <span>
          contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents
        </span>
      </div>
      <div class="created_at">
        <span>created_at(YYYY-MM-dd)</span>
      </div>
    </div>   
  </div>
</template>
<script>
</script>
<style scoped>
  .reply-form-layout{
     width: 100%;
      padding: 20px 30px;
      border-radius: 5px;
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      border: solid 1px #e1e4e7;
      background-color: #ffffff;
      margin-bottom: 30px;
  }
  .reply_user_name{
    padding: 11px 0;
    border-bottom : 1px solid #e1e4e7;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #7e848a;
  }
  .reply-form-contents{
    width: 100%;
    margin: 23px 0 21px 0;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #495057;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word; 
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
  .created_at {
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


@media (max-width: 768px){
   .reply-form-layout{
      width:auto;
      margin-left: 15px;
      padding: 28px 0;
      border-radius: 0px;     
      border: none;
      border-top: solid 1px #e1e4e7;
      border-bottom: solid 1px #e1e4e7;
      background-color: #ffffff;
       }
}
</style>